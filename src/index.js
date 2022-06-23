const filmsApi = "http://localhost:3000/films";

fetch(filmsApi)
    .then(response => response.json())
    .then(data => {renderSingleFilm(data)})

function renderSingleFilm(films) {
    films.forEach(renderFilms);
}
//console.log(films.title)

function renderFilms(films) {
    // const filmListElement = 
    //     const filmListItem = document.getElementById("film item");
    // filmListItem.textContent = film.title;
    // // // filmListElement.addEventListener("click", () => {
    // // //     // filmListItem
    // // //     // filmTitle.innerHTML =
    // // //     // <img src="${film.poster}" alt="${film.title}"/>
    // // })
    const listContainer = document.getElementById("list-container");
    listContainer.innerText = films.title
    listContainer.append
}
// Your code here
