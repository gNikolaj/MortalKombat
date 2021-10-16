const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dagger', 'chain', 'sword'],
    attack: function () {
        console.log(player1.name + ' Fight..');
    }
};

const player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['dagger', 'sword'],
    attack: function () {
        console.log(player2.name + ' Fight..');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);

    const $progressbar = createElement('div', 'progressbar');

    const $character = createElement('div', 'character');

    const $life = createElement('div', 'life');
    $life.style.width = playerObj.hp + '%';

    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;

    const $img = createElement('img');
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function randomDamage() {
    return Math.ceil(Math.random() * 20);
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomDamage();
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        $randomButton.remove();
        player.hp = 0;
        $playerLife.style.width = player.hp + '%'

        if (player.player === 1) {
            $arenas.appendChild(playerWin(player2.name));
        } else {
            $arenas.appendChild(playerWin(player1.name));
        }
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' win';

    return $winTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
