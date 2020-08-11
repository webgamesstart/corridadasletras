const root = document.querySelector(':root');

const characters = document.getElementById('characters');
const character = document.querySelector('#characters img');
const characterPrevious = document.querySelector('#selectPlayer #previous');
const characterNext = document.querySelector('#selectPlayer #next');

const challengeImage = document.querySelector('#challenge img');

let flagCharacter = 0;

let flagLevel = '000';

const allCharacters = [
    {
        nome: 'BobSponge',
        width: '150px',
        x: '-25px',
        y: '-20px',
        scale: '0.85'
    },
    {
        nome: 'Patrick',
        width: '120px',
        x: '-185px',
        y: '-18px',
        scale: '0.90'
    }
];

const challengesLevel000 = [
    'abelha',
    'cachorro',
    'gato',
    'girafa',
    'leao',
    'pato',
    'porco'
];


root.style.setProperty('--characterWidth', allCharacters[flagCharacter].width);
character.src = '../images/cartoons/characters.png';
character.style.transform = `translateX(${allCharacters[flagCharacter].x}) translateY(${allCharacters[flagCharacter].y}) scale(${allCharacters[flagCharacter].scale},${allCharacters[flagCharacter].scale})`;

characterNext.addEventListener('click', function(){
    if(flagCharacter < allCharacters.length -1){
        flagCharacter++;
        root.style.setProperty('--characterWidth', allCharacters[flagCharacter].width);
        character.style.transform = `translateX(${allCharacters[flagCharacter].x}) translateY(${allCharacters[flagCharacter].y}) scale(${allCharacters[flagCharacter].scale},${allCharacters[flagCharacter].scale})`;
    }
});

characterPrevious.addEventListener('click', function(){
    if (flagCharacter >= 1) {
        flagCharacter--;
        root.style.setProperty('--characterWidth', allCharacters[flagCharacter].width);
        character.style.transform = `translateX(${allCharacters[flagCharacter].x}) translateY(${allCharacters[flagCharacter].y}) scale(${allCharacters[flagCharacter].scale},${allCharacters[flagCharacter].scale})`;
    }
});

function selectChallenge() {
    let level = eval(`challengesLevel${flagLevel}`);
    let random = Math.floor(Math.random() * level.length);
    let temp = `./images/challenges/level${flagLevel}/${level[random]}.png`;
    challengeImage.setAttribute('src', temp);
};

selectChallenge();
