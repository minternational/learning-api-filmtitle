const apiKey = "e3282ece";
const title = prompt("Type in your movie");

const getMovies = (() => {
  fetch("http://www.omdbapi.com/?t=" + title + "&apikey=37d5b826")
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let createP1 = document.createElement("p");
      createP1.setAttribute("class", "list-group-item");
      createP1.innerHTML = `<h1>Filmtitle: ${data.Title}</h1>`;
      let createP2 = document.createElement("p");
      createP2.setAttribute("class", "list-group-item");
      createP2.innerHTML = `<p>Actors: ${data.Actors}</p>`;
      let createP3 = document.createElement("p");
      createP3.setAttribute("class", "list-group-item");
      createP3.innerHTML = `<p>Country: ${data.Country}</p>`;
      let createP4 = document.createElement("p");
      createP4.setAttribute("class", "list-group-item");
      createP4.innerHTML = `<p>Director: ${data.Director}</p>`;
      let createP5 = document.createElement("p");
      createP5.setAttribute("class", "list-group-item");
      createP5.innerHTML = `<p>Released: ${data.Released}</p>`;
      let createP6 = document.createElement("p");
      createP6.setAttribute("class", "list-group-item");
      createP6.innerHTML = `<p>Year: ${data.Year}</p>`;
      let createP7 = document.createElement("p");
      createP7.setAttribute("class", "list-group-item");
      createP7.innerHTML = `<p>IMDB Rating: ${data.imdbRating}</p>`;
      let createP8 = document.createElement("p");
      createP8.setAttribute("class", "list-group-item");
      createP8.innerHTML = `<p>Genre: ${data.Genre}</p>`;
      let createP9 = document.createElement("p");
      createP9.setAttribute("class", "list-group-item");
      createP9.innerHTML = `<p>Filmtitle: ${data.Title}</p>`;

      document.body.appendChild(createP1);
      document.body.appendChild(createP2);
      document.body.appendChild(createP3);
      document.body.appendChild(createP4);
      document.body.appendChild(createP5);
      document.body.appendChild(createP6);
      document.body.appendChild(createP7);
      document.body.appendChild(createP8);
      document.body.appendChild(createP9);
    })
    .catch(err => console.log(err));
})();

// document.getElementById("get-movies-btn").addEventListener("click", getMovies);

/*

const createP = document.createElement("p");
      createP.innerHTML = data.title;
      document.body.appendChild(createP);
      
*/
