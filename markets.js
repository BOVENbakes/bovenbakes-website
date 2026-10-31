const markets = [{
    title: "Kerstmarkt Apeldoorn",
    datum: "2026-11-20",
    locatie: "Apeldoorn",
    url: "https://www.kerstmarktapeldoorn.nl/"
  },
    {
    title: "Kerstmarkt Cannenburch",
    datum: "2027-03-27",
    locatie: "Vaassen",
    url: "https://www.kerstmarktapeldoorn.nl/"
  },
];

function formatMarketDate(marketDatum) {
  const date = new Date(`${marketDatum}T00:00:00`);

  return {
    day: new Intl.DateTimeFormat('nl-NL', { day: '2-digit' }).format(date),
    monthYear: new Intl.DateTimeFormat('nl-NL', {
      month: 'long',
      year: 'numeric'
    }).format(date)
  };
}

function showBinnenkort(marketDatum) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const marketDate = new Date(`${marketDatum}T00:00:00`);
  const thirtyDaysFromNow = new Date(today);
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  return marketDate >= today && marketDate <= thirtyDaysFromNow;
}

const marketCards = markets.map(market => {
  const { day, monthYear } = formatMarketDate(market.datum);
  const toonBinnenkort = showBinnenkort(market.datum);

  const card = document.createElement('article');
  card.classList.add('event-card');
  card.innerHTML = `
    <time datetime="${market.datum}"><span>${day}</span> ${monthYear}</time>
    <div>
      <h3><a href="${market.url}" target="_blank" rel="noopener noreferrer">${market.title}</a></h3>
      <p>Locatie: ${market.locatie}</p>
    </div>      
    ${toonBinnenkort ? `<span class="event-label">Binnenkort</span>` : ''}
  `;
  return card;
});

const eventList = document.querySelector('.events-list');
eventList.append(...marketCards);
