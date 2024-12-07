export default function Movie(settings){
    const url = setting.url;
    const container = setting.container
    let html = '';

    container.classList.add(`grid-cols-${number_of_movies}`)
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    axios.get(url + proxyUrl)
        .then(response =>{
            const movie = response.data
            html += ``
           

            container.innerHTML = html;


        })
        .catch(error => container.innerHTML = 'Something went wrong from fetching from db')

        


}