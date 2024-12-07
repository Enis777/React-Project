export default function LatestMovies(settings){
    const url = setting.url;
    const container = setting.container
    const number_of_movies = setting.number_of_movies;
    let html = '';

    container.classList.add(`grid-cols-${number_of_movies}`)
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    axios.get(url + proxyUrl)
        .then(response =>{
            const movies = response.data.results?.slice(0, number_of_movies)
            for (let movie of movies){
                html+=`
                <div class="">
                    <img src="${'https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0'}" alt ="${movie.title}
                `
            }

            container.innerHTML = html;


        })
        .catch(error => container.innerHTML = 'Something went wrong from fetching from db')

        


}