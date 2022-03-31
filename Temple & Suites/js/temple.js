// const requestURL = 'https://juveju77.github.io/wdd-230/Temple%20&%20Suites/temple.json';
const requestURL = "temple.json"
const cards = document.querySelector('div.cards');
const listButton = document.querySelector("#list-btn");
const cardButton = document.querySelector("#card-btn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        // console.table(jsonObject);
        temples.forEach(displaytemples);
    });

function displaytemples(temple) {
  let card = document.createElement('section');

  //img
  let image = document.createElement('img');
  image.src = temple.imgfile;
  image.setAttribute('alt', temple.name);
  card.appendChild(image);
    
  //h2 name
  let h3 = document.createElement('h3');
  h3.textContent = temple.name;
  card.appendChild(h3);
    
  //p address
  let p1 = document.createElement('p');
  p1.textContent = temple.address;
  card.appendChild(p1);
    
  //p phone
  let p2 = document.createElement('p');
  p2.textContent = temple.phone;
  card.appendChild(p2);
    
  //p email
  let p3 = document.createElement('p');
  p3.textContent = temple.email;
  card.appendChild(p3);
    
  //p services
  let p4 = document.createElement('p');
  p3.textContent = temple.services;
  card.appendChild(p4);
    
  //p history
  let p5 = document.createElement('p');
  p3.textContent = temple.history;
  card.appendChild(p5);
    
  // ordinances
  let p6 = document.createElement('p');
  p3.textContent = temple.ordinances;
  card.appendChild(p6);
    
  // templeClosure
  let p7 = document.createElement('p');
  p3.textContent = temple.templeClosure;
  card.appendChild(p7);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});
