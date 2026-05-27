let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetch("http://localhost:3000/toys")
    .then((res) => res.json())
    .then((toys) => {
      const toyCollection = document.querySelector("#toy-collection");
      toys.forEach((toy) => {
        console.log("toy:", toy);
        console.log("toys:", toys);
        const card = document.createElement("div");
        card.className = "card";

        const h2 = document.createElement("h2");

        const img = document.createElement("img");
        img.src = toy.image;
        console.log("image:", toy.image);
        img.className = "toy-avatar";

        const p = document.createElement("p");

        const btn = document.createElement("button");
        btn.className = "like-btn";
        btn.id = toy.id;
        btn.textContent = "Like ❤️";

        card.appendChild(btn);
        card.appendChild(p);
        card.appendChild(img);
        card.appendChild(h2);

        toyCollection.appendChild(card);
      });
    });
});

//Set up event listeners to respond to user events

//Use fetch() to make a "GET" request, then render the returned toys to the DOM

//Use fetch() to make a "POST" request to create a new toy, then add it to the DOM

//Use fetch() to make a "PATCH" request that updates an existing toy, then render the updated information to the DOM

//Access the list of toys from an API (mocked using JSON Server) and render each of them in a "card" on the page

//Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, the new toy is persisted to the database and a new card showing the toy is added to the DOM

//Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated in the database and the updated information should be rendered to the DOM
