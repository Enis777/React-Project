import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useLocalStorage } from "@uidotdev/usehooks"; 
import { exists } from '../helpers/cart';

function ViewMovie() {
  const [movie, setMovie] = useState()
  const [qty, setQty] = useState(1)
  const [cart, saveCart] = useLocalStorage("cart", []); 
  const [favourites, saveFavourites] = useLocalStorage("favourites", []); 
  const {id} = useParams()
  const src = (movie && movie.backdrop_path !== null) ? `http://image.tmdb.org/t/p/w500${movie.backdrop_path}` : "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
  
  useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    axios.get(proxyUrl + `https://api.themoviedb.org/3/movie/${id}?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`)
    .then(resp => {
      if(resp.status === 200) setMovie(resp.data) 
    })
    .catch(error => console.log(error))
  }, [])


  const handleAddToCart = e => {
    e.preventDefault()
    
    if(exists(movie, cart)) {
      saveCart([...cart.map(item => {
        return (item.id == movie.id) ? {...item, qty: item.qty + parseInt(qty)} : movie
      })])
    } else {
      saveCart([...cart, {...movie, qty: parseInt(qty)}])
    }

    alert("Movie was added to cart.")
    setQty(1)
    e.target.reset()
  }

  const handleAddToFavourites = e => {
    saveFavourites([...favourites.filter(f => f.id !== movie.id), movie])
    alert('Moview was added to your favourite list.')
  }

  return (
    <section className='py-5'>
      <Container>
      {
        movie && <div className="row">
          <div className="col-6">
            <img src={src} alt={movie.original_title} className='img-fluid' />
          </div>
          <div className="col-6">
            <h2>{movie.original_title}</h2>
            <p className='my-4'>{movie.overview}</p>
            <table className='table table-bordered mb-4'>
              <tbody>
                <tr>
                  <td>Revenue</td>
                  <td>{movie.revenue}</td>
                </tr>
                <tr>
                  <td>Release date</td>
                  <td>{movie.release_date}</td>
                </tr>
                <tr>
                  <td>Vote avg.</td>
                  <td>{movie.vote_average}</td>
                </tr>
              </tbody>
            </table>
            <form className='d-inline me-2' onSubmit={handleAddToCart}>
              <input type="number" name="qty" min={1} max={100} onChange={(e) => setQty(e.target.value)} value={qty} className='form-control d-inline me-2' style={{width: '100px'}} /> 
              <Button variant='outline-primary' type='submit'>
                <i className="fa-solid fa-cart-plus"></i>
              </Button>
            </form>
            {
              (favourites.filter(f => f.id == movie.id).length == 0) && <Button variant='outline-danger' type='submit' onClick={handleAddToFavourites}>
                <i className="fa-solid fa-bookmark"></i>
              </Button>
            }
          </div>
        </div>
      }
    </Container>
    </section>
  )
}

export default ViewMovie