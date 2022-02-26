
const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`

    fetch(url)
        .then(res => res.json())
        .then(data => showPlayersDetails(data.player));
}

// display players on UI
const showPlayersDetails = (players) => {
    const parent = document.getElementById('player-container');
    for (const player of players) {    
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
            <div class="pro-pic">
                <img class="img-fluid" src="${player.strThumb}" alt="">
            </div>
                <h2>${player.strPlayer}</h2>
                <h2>${player.strNationality}</h2>
                <p></p>
            <div class="all-button">
                <button class="btn btn-danger">Delete</button>
                <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
            </div>
        </div>
        `;
        parent.appendChild(div);
        console.log(player)
    }
}

const details = info =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
    console.log(info);
}
