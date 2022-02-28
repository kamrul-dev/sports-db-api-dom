
const allPlayers = () => {
    document.getElementById('player-container').innerHTML = '';
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
        <div class="card text-center p-4 m-4">
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

// load player info
const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]));
    console.log(id);
}

// see player info
const setDetails = (info) =>{
    if(info.strGender == "Male"){
        document.getElementById('male').style.display = 'block';
        document.getElementById('female').style.display = 'none';
    }
    else{
        document.getElementById('male').style.display = 'none';
        document.getElementById('female').style.display = 'block';
    }
    document.getElementById('details-container').innerHTML = `
        <div class="text-center p-4 m-4">
            <img src ="${info.strThumb}">
            <h1>Name:${info.strPlayer} <h1>
        </div>
    `;
}