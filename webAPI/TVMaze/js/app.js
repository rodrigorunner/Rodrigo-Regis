const form = document.querySelector('#searchForm');
const container = document.querySelector('#container');
const show = document.querySelector('#show');

form.addEventListener('submit', getTvShow);

function getTvShow(e) {
    e.preventDefault();
    const searchText = form.elements.search.value;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let output = '';
            data.map(res => {
                if(res.show.image) {
                    const img = res.show.image.medium;
                    const imdb = res.show.externals.imdb;
                    const rating = res.show.rating.average;
                    output += `
                        <div class="display text-center">
                                <img src="${img}">
                                <p>
                                   ${rating} <span><i class="fas fa-star"></i></span>   
                                </p>
                                <a class="btn btn-danger btn-info" onclick="showSelected('${imdb}')">Info</a>
                        </div>
                    `    
                }
            })
            container.innerHTML = output;
        })
        .catch(err => {
            console.log('Error: ', err);
        })

    form.elements.search.value = '';
}

function showSelected(id) {
    sessionStorage.setItem('showId', id);
    window.location = 'shows.html';
    return false;
}

function getShows() {
    const showId = sessionStorage.getItem('showId');

    fetch(`https://api.tvmaze.com/lookup/shows?imdb=${showId}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
                    const img = data.image.medium;
                    const summary = data.summary;
                    const name = data.name;
                    const genres = data.genres;
                    const language = data.language;
                    let output = `
                         <div class="info">
                             <div class="info-img">
                                 <img src="${img}">
                             </div>
                             <div class="info-shows">
                                 <h2>${name}</h2>
                                 <p><strong>Language:</strong> ${language}</p>
                                 <p><strong>Genres:</strong> ${genres}</p> 
                                 <h3>Summary</h3>
                                 <p>${summary}</p>
                             </div>
                         </div>
                    `
                    show.innerHTML = output;
        })
        .catch(err => {
            console.log('Error: ', err);
        })
}