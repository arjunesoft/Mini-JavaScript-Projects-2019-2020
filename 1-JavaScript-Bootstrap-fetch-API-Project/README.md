# Intro to APIs with Javascript

In this small Tutorial project we are making an API call to a link by using Javascript and bootstrap 4. We have used `javascript fetch API` for fetching the particular link to our website.I am happy to say that you will make your hands dirty to learn something new with the help of ES5, ES6, ES7 syntax Javascript.

> Following are our objective to accomplish the tasks given in order to Complete this project successfully.

- [x] Setup the client
- [x] Make an API request with javascript
  - https://dog.ceo/api/breeds/image/random/3
- [x] Determine how to get the data from the response
- [x] Add the data from the response to the page

## Code details

---

### Code content Structure

1. Index.html
2. api.js
3. img folder
4. README.md

### How to Run this project on the Chrome browser

- First `Download or Clone` this Guide Tutorial from `Github` by using the following command

```js
git clone https://github.com/easoftlabs/How-to-write-Comments-in-Code-using-.md-extension.git
```

- `Open` this tutorial within `Visual Studio Code Editor` and find the `Index.html` file and open it.

- Now open this `Index.html` file within browser using `Live Server`

- Just right click the mouse over Index.html file and you will see the option of `Open with live server` .

- Now it will open with `localhost` onto the browser

---

## Main Logic behind the scene

We will make our main focus onto the `api.js`.

```js
const API_URL = "https://dog.ceo/api/breeds/image/random/3";
```

This is our `API link` from which we will fetch the images of different dog species. So store this `api` to a variable so that we can use this variable anywhere in the code.

```js
const randomDogsElement = document.getElementById("Random-Dogs");
const goButton = document.getElementById("go-button");
const clickButton = document.getElementById("click-button");
const spinner = document.getElementById("loading");
```

```js
spinner.style.display = "none";
```

Initially keep the loading spinner `invisible` for the user. If we make it visible at this time then it will load continuosly without any reason.

> Now we will see the details of this first function. We have make this function with aysnc await feature since we are not sure how much time will api take to load on to our website.

```js
spinner.style.display = "";
```

```js
let response = await fetch(API_URL);
let json = await response.json();
console.log(json.message);
```

The above line of code will wait untill the api get fetch and stores it in the response variable.

Then we will convert the data came from the fetch api into JSON format so javascript can understand what to do with the fetched data.

Then we can print this output to the console using `json.message`.

```js
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
```

The above line of codes adds the `Image card panel` dynamically into the web browser.

The no. of card panels will be depend upon the no. of images that `API` will sends through their server into our websites.

`For-Each` method is used to create the card panel for every each Image uploaded onto our web browser. So for each image, a new card view will be displayed.

```js
spinner.style.display = "none";
```

As soon as the images are loaded into our browser the loading spinner should be hide from the screen.

> Now we will see the second function used for the second button in our website

```js
randomDogsElement.innerHTML = "";
```

The above line of code displays only 3 dog images at a time. It erases the `innerHTML` with the `""` blank or null value every time when this is called using the `button`.

So whenever we press the button it refreshes the code and erases the previous images displayed onto the browser with the new ones.

For testing how it works we can see that we have not written the above singleline code in the first function. you can easily view the difference between both the buttons.

```js
spinner.style.display = "";
```

```js
let response = await fetch(API_URL);
let json = await response.json();
console.log(json.message);
```

```js
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
```

This is another way to add the Image card view dynamically inside the browser. Since in first function we have used CREATE ELEMENT method but now we have used only `back tick with $ symbol`.

```js
spinner.style.display = "none";
```

```js
goButton.addEventListener("click", getAllRandomDogs);
```

The above line of code uses event listener to call the `getAllRandomDogs()` function. This function will be called as soon as we click the first button.

```js
clickButton.addEventListener("click", get3RandomDogs);
```

The above line of code uses event listener to call the `get3RandomDogs()` function. This function will be called as soon as we click the second button.

---

---

> `The final output of all above code is given in the form of SCREENSHOT in img folder.`
