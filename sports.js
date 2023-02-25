
// get data by api 
const searchAllData = () => {
    const searchInputValue = document.getElementById('search__input').value;
    // console.log(searchInputValue);
    const URL = ` https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchInputValue}`
    fetch(URL).then(res => res.json()).then(data => {
        // console.log(data);
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
        console.log(player.strPlayer);
        const playerDiv = document.createElement('div')
        playerDiv.classList.add('col-lg-6')
        playerDiv.innerHTML = `
        <div class="card my-3" style="width: 18rem;">
  <img src="${player.strThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="">${player.strPlayer}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        `
        playerContainer.appendChild(playerDiv)
    })
}