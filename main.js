let myhttp = new XMLHttpRequest();

let allPerson = [];

myhttp.open(
  "GET",
  "https://api.themoviedb.org/3/trending/all/day?api_key=f1aca93e54807386df3f6972a5c33b50"
);

myhttp.send();

myhttp.addEventListener("readystatechange", () => {
  if (myhttp.readyState == 4 && myhttp.status == 200) {
    allPerson = JSON.parse(myhttp.response).results;
    displayItem()
    console.log(allPerson);
  }
});

function displayItem() {
  let cartoona = ``;
  allPerson.forEach((element) => {

    cartoona += `
    <div class="col-md-3">
          <div class="post">
          <img class="w-100" src= "//image.tmdb.org/t/p/w500${element.poster_path}" />
            <h3>${element.title}</h3>
            <p>${element.overview}</p>
          </div>
        </div>

    `

  });

  document.getElementById("postsRow").innerHTML = cartoona

}
