const products = [{
    title: "Oatmeal choco chip",
    category: "Cookie",
    description: "Een mix van meer dan genoeg pure en melk chocolade, havermout en comfort.",
    price: "€ 2,25",
    image: "images/oatmeal-choco-chip.jpg"
  },
    {
    title: "Amaretti",
    category: "Cookie",
    description: "Een krokante rand, zachte kern en heerlijke hint citroen tussen zoete amandel.",
    price: "€ 3,00",
    image: "images/amaretti.jpg"
  },
    {
    title: "Strawberry cheesecake",
    category: "Cookie",
    description: "Een kandijkoeken basis, gevuld met zachte roomkaas en zoete aardbeienjam.",
    price: "€ 3,00",
    image: "images/strawberry-cheesecake.jpg"
  },
    {
    title: "Choco Nutella ",
    category: "Cookie",
    description: "Dubbel chocolade! Rijke chocolade koek met heerlijke Nutella vulling.",
    price: "€ 3,00",
    image: "images/choco-nutella.jpg"
  },
    {
    title: "Carrot cake",
    category: "Cake",
    description: "Licht kruidige carrot cake met fris zure plantaardige botercréme",
    price: "€ 4,00",
    image: "images/carrot-cake.jpg"
  },
    {
    title: "Cheesecake",
    category: "Cake",
    description: "Frisse, zachte plantaardige cheesecake met haverkoek bodem.",
    price: "€ 4,00",
    image: "images/cheesecake.jpg"
  },
    {
    title: "Chocolade pistache cake",
    category: "Cake",
    description: "Rijke mousse van pure chocolade met hartige pistache créme op een haverkoek bodem.",
    price: "€ 4,00",
    image: "images/choco-pistache.jpg"
  },
    {
    title: "Chocolade sinaasappel cake",
    category: "Cake",
    description: "Rijke mousse van pure chocolade met stukjes ingelegde sinaasappelschil op een haverkoek bodem.",
    price: "€ 4,00",
    image: "images/choco-sinaasappel.jpg"
  },
    {
    title: "Appeltaartje",
    category: "Cake",
    description: "Duitse afgedekte friszure appeltaart met een suiker en kaneel topping.",
    price: "€ 4,00",
    image: "images/appeltaartje.jpg"
  },
    {
    title: "BOVEN box",
    category: "Giftbox",
    description: "Een wisselende selectie om mee te nemen, cadeau te geven of zelf mee weg te dromen.",
    price: "v.a. € 17,50",
    image: "images/giftbox.jpg"
  }
];

const productCards = products.map(product => {
  const card = document.createElement('article');
  card.classList.add('product-card');
  card.style.setProperty('--product-image', `url("${product.image}")`);
  card.innerHTML = `
    <div>
      <p class="product-type">${product.category}</p>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
    </div>
  `;
  return card;
});

//     <p class="price">${product.price}</p>

const menuGrid = document.querySelector('.menu-grid');
menuGrid.append(...productCards);