const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dagger', 'chain', 'sword'],
    attack: function () {
        console.log(player1.name + ' Fight..');
    }
};

const player2 = {
    name: 'Sub-Zero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['dagger', 'sword'],
    attack: function () {
        console.log(player2.name + ' Fight..');
    }
};

function createPlayer(player, playerObj) {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObj.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;

    const $img = document.createElement('img');
    $img.src = playerObj.img;

    const $root = document.querySelector('.arenas');

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $root.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);