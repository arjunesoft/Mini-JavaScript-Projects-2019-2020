const API_URL = "https://dog.ceo/api/breeds/image/random/3";
const randomDogsElement = document.getElementById("Random-Dogs");
const goButton = document.getElementById("go-button");
const clickButton = document.getElementById("click-button");
const spinner = document.getElementById("loading");

spinner.style.display = "none";

async function getAllRandomDogs() {
  spinner.style.display = "";
  let response = await fetch(API_URL);
  let json = await response.json();
  console.log(json.message);

  json.message.forEach(dogImage => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card", "cardImageBackground");

    let imageElement = document.createElement("img");
    imageElement.classList.add("card-img-top");
    imageElement.src = dogImage;
    imageElement.alt = "Doggie-Image";
    cardElement.appendChild(imageElement);

    let cardBodyElement = document.createElement("div");
    cardBodyElement.classList.add("card-body");
    cardElement.appendChild(cardBodyElement);

    let h4tag = document.createElement("h4");
    h4tag.classList.add("card-title");
    h4tag.appendChild(document.createTextNode("Random Dog"));
    cardElement.appendChild(h4tag);

    randomDogsElement.appendChild(cardElement);
  });
  spinner.style.display = "none";
}

async function get3RandomDogs() {
  randomDogsElement.innerHTML = "";
  spinner.style.display = "";
  let response = await fetch(API_URL);
  let json = await response.json();
  console.log(json.message);

  json.message.forEach(dogImage => {
    randomDogsElement.innerHTML += `<div class="card cardImageBackground">
                    <img class="card-img-top" src="${dogImage}"
                        alt="Dog Image">
                    <h4 class="card-body">
                        <h4 class="card-title">Random Dog</h4>
                        <p class="card-text text-white">Images</p>
                    </h4>
                </div>`;
  });
  spinner.style.display = "none";
}

goButton.addEventListener("click", getAllRandomDogs);
clickButton.addEventListener("click", get3RandomDogs);
