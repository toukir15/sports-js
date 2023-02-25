
// get data by api 
const searchAllData = () => {
    const searchInputValue = document.getElementById('search__input').value;
    // console.log(searchInputValue);
    const URL = ` https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchInputValue}`
    fetch(URL).then(res => res.json()).then(data => {
        displaySearchData(data.player)
    })
}

// display data 
const displaySearchData = players => {

    // clear input 
    const searchInputValue = document.getElementById('search__input')
    searchInputValue.value = '';

    // player container 
    const playerContainer = document.getElementById('player__container');
    playerContainer.innerText = '';

    // get single player and create html
    players.forEach(player => {
        // console.log(player.strPlayer);
        const { strThumb, strPlayer, strNationality, idPlayer } = player;
        const playerDiv = document.createElement('div')
        playerDiv.classList.add('col-lg-6')
        playerDiv.innerHTML = `
        <div class="card my-3" style="width: 18rem;">
  <img src="${strThumb ? strThumb : 'https://picsum.photos/200'}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="">${strPlayer}</h5>
    <p class="card-text">Nationality: ${strNationality}</p>
    <div>
    <button onclick="loadDetails(${idPlayer})" type="button" class="btn btn-primary">Details</button>
    <button type="button" class="btn btn-secondary">Delete</button>
</div>
  </div>
</div>
        `
        playerContainer.appendChild(playerDiv)
    })
}


// load player details
const loadDetails = (id) => {
    const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}
`
    fetch(URL).then(res => res.json()).then(data => displayDetails(data))
}

// display details 
const displayDetails = (singlePlayer) => {
    console.log(singlePlayer.players[0]);
    const { strDescriptionEN, strThumb } = singlePlayer.players[0];
    const detailsContainer = document.getElementById('details__container');
    detailsContainer.innerText = '';
    const detailsDiv = document.createElement('div')
    detailsDiv.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb ? strThumb : 'https://picsum.photos/200'}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${strDescriptionEN.slice(0, 100)}...</p>
      </div>
    </div>
  </div>
</div>
    `
    detailsContainer.appendChild(detailsDiv)
}