const products = [{
    title: "Oatmeal choco chip",
    category: "Cookie",
    description: "Een chewy chocolate chip cookie, bestaand uit een mix van pure chocolade, melk chocolade en havermout.",
    price: "2,-",
    image: "images/oatmeal-choco-chip.jpg"
  },
    {
    title: "Amaretti",
    category: "Cookie",
    description: "Een amaretti met een krokante rand, maar lekker zachte kern en heerlijke hint citroen.",
    price: "€3",
    image: "images/amaretti.jpg"
  },
    {
    title: "Strawberry cheesecake",
    category: "Cookie",
    description: "Een kandijkoeken basis, gevuld met zachte roomkaas en zoete aardbeienjam, afgetopt met een witte chocolade drizzle.",
    price: "€3",
    image: "images/strawberry-cheesecake.jpg"
  },
    {
    title: "Choco Nutella ",
    category: "Cookie",
    description: "Dubbel chocolade! Rijke chocolade koek met heerlijke Nutella vulling en hazelnoot topping.",
    price: "€3",
    image: "images/choco-nutella.jpg"
  },
    {
    title: "Carrot cake",
    category: "Cake",
    description: "Licht kruidige carrot cake met friszure plantaardige botercrème.",
    price: "€4",
    image: "images/carrot-cake.jpg"
  },
    {
    title: "Cheesecake",
    category: "Cake",
    description: "Frisse, zachte plantaardige cheesecake met haverkoek bodem en optionele friszure bosvruchten topping.",
    price: "€4",
    image: "images/cheesecake.jpg"
  },    
    {
    title: "Appeltaartje",
    category: "Cake",
    description: "Duitse afgedekte friszure appeltaart met een suiker en kaneel topping.",
    price: "€4",
    image: "images/appeltaartje.jpg"
  },
    {
    title: "Stevige chocolade mousse",
    category: "Meer",
    description: "Rijke mousse van pure chocolade op een haverkoek bodem, keuze uit drie heerlijke opties: met hartige pistache crème, stukjes gekonfijte sinaasappelschil of puur naturel.",
    price: "€4",
    image: "images/choco-mousse.jpg"
  },
    {
    title: "BOVEN box",
    category: "Meer",
    description: "Stel je eigen box samen om cadeau te geven of zelf mee weg te dromen. Vanaf 4 stuks. Vraag naar de mogelijkheden!",
    price: "v.a. €10",
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

    //  <p class="product-price">${product.price}</p>

const assortimentGrid = document.querySelector('.assortiment-grid');
assortimentGrid.append(...productCards);