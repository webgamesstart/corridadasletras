// ---- SESSÕES -----------------------------------

//----- Basic Protection -----
//----- Messages -----
// ---- Home screen -----------------------
// ---- Screen Load ------------------------
// ---- Start Game -------------------------
// ---- Select Player ------------------
// ---- Battle Zone ------------------------------------
// ---- Challenges -----------------------------------------
// ---- Word ------------------------------------------------
// ---- Board ----------------------------------------------
// ---- Key Word -----------------------------------------
// ---- speedWay -------------------------------------------
// ---- Loader files ------------------------

const $root = document.querySelector(":root");

let flagBreakPoint = Number(
  getComputedStyle($root).getPropertyValue("--breakPoint")
);

//----- Basic Protection -----

const $basicProtection = document.getElementById("basicProtection");

//----- Messages -----

const $messageContainer = document.getElementById("message");
const $message = document.querySelector("#message p");

let flagMessageTime = null;
let standardMessage = "";
let standardMessageTime = 1000;
let standardShowMessageFunctions = [];
let standardHideMessageFunctions = [];

// ---- Home screen -----------------------

$homeScreen = document.getElementById("homeScreen");
$homeScreenTitulo = document.querySelector("#homeScreen h1");
$homeScreenObservacao = document.querySelector("#homeScreen h3");

// ---- Screen Load ------------------------

const $load = document.getElementById("load");
const $loading = document.querySelector("#load :nth-child(1)");
const $loadLevel = document.getElementById("loadLevel");
const $loadLevelOne = document.querySelector("#loadLevel :nth-child(1)");
const $loadLevelTwo = document.querySelector("#loadLevel :nth-child(2)");

let speedLoad = [500, 1000, 3000, 300, 2000];
let flagLoad = 0;
let controlLoader = null;

// ---- Start Game -------------------------

// ---- Select Player ------------------

const $panelSelectPlayer = document.getElementById("panelSelectPlayer");
const $panelSelectPlayerTitle = document.getElementById(
  "panelSelectPlayerTitle"
);
const $SelectPlayerTitle = document.querySelector("#panelSelectPlayerTitle h1");
const $selectPlayer = document.getElementById("selectPlayer");
const $selectPlayerPrevious = document.getElementById("selectPlayerPrevious");
const $selectPlayerNext = document.getElementById("selectPlayerNext");
const $characters = document.getElementById("characters");
const $charactersImg = document.querySelector("#characters img");
const $panelSelectPlayerOK = document.getElementById("OK");

let flagCharacter = 0;

const characters = ["spongeBob", "starPatrick", "spiderMan"];
let charactersReturn = [];
let characterThankingReturn = [];

// ---- Battle Zone ------------------------------------

$battleZone = document.getElementById("battleZone");

let filesLoadedToTheBattleZone = [];

// ---- Challenges -----------------------------------------

$containerChallenge = document.getElementById("containerChallenge");
$challengeImage = document.querySelector("#containerChallenge img");

let flagLevel = "000";

const challengesLevel000 = [
  "abelha",
  "cachorro",
  "gato",
  "girafa",
  "leão",
  "pato",
  "porco",
];

let selectedChallenge = "";
let selectedChallengeReturn = [];

// ---- Word ------------------------------------

const $wordContainer = document.getElementById("word");
const $word = document.querySelector("#word h2");
let challengeWord = "";
let totalLetters = 0;
let indexLetterCurrent = 0;
let letterCurrent = "";

$word.textContent = "";

// ---- Board ----------------------------------------------

$board = document.getElementById("board");
$containerLetters = document.getElementById("containerLetters");

// ---- Key Word -----------------------------------------

const $keyWord = document.getElementsByClassName("keyWord");

  let currentObject = null;
  let previousObject = null;

let myText = {
  letter: "",
  symbol: "",
  controlObject: (obj) => {
    if (currentObject == null) {
      previousObject = obj;
      currentObject = obj;
    } else {
      previousObject = currentObject;
      currentObject = obj;
    }
    // console.log(currentObject.id, "---", previousObject.id, '2');
  },
};

// ---- speedWay -------------------------------------------

$speedWay = document.getElementById("speedWay");
let speedWaySize = 0;
let stepTrack = 0;
let stepTrackTemp = 0;
let stepTrackRacerOne = 0;
let stepTrackRacerTwo = 0;
let direction = 'top';

$racerOne = document.getElementById("racerOne");
$racerTwo = document.getElementById("racerTwo");
$racerOneImg = document.querySelector("#racerOne img");
$racerTwoImg = document.querySelector("#racerTwo img");

let racers = [];
let racersReturn = [];

// ---- Loader files ------------------------

let flagLoadFiles = 0;

///////////////////// - Lógica - /////////////////////

//----- Basic Protection -----

function showBasicProtection() {
  $basicProtection.style.display = "block";
}

function hideBasicProtection() {
  $basicProtection.style.display = "none";
}

// ---- Fim Basic Protection --------

//----- Messages -----

$messageContainer.addEventListener("click", hideMessage);

function showMessage(msg, time) {
  showBasicProtection();
  $messageContainer.style.display = "flex";
  $message.textContent = msg || standardMessage;
  $message.style.display = "block";
  document.querySelector("#message :nth-child(2)").style.display = "block";
  flagMessageTime = setTimeout(hideMessage, time || standardMessageTime);
  if (standardShowMessageFunctions.length != 0) {
    for (const temp of standardShowMessageFunctions) {
      temp();
    }
    standardShowMessageFunctions = [];
  }
}
function hideMessage(msg) {
  $messageContainer.style.display = "none";
  $message.textContent = "";
  $message.style.display = "none";
  document.querySelector("#message :nth-child(2)").style.display = "none";
  if (standardHideMessageFunctions.length != 0) {
    for (const temp of standardHideMessageFunctions) {
      temp();
    }
    standardHideMessageFunctions = [];
  }
  flagMessageTime = null;
  standardMessage = "";
  standardMessageTime = 1000;
  hideBasicProtection();
}

// ---- Fim Messages -------------------

// ---- Home screen -----------------------

function showHomeScreen() {
  $homeScreen.style.display = "flex";
  $homeScreenTitulo.style.display = "block";
  $homeScreenObservacao.style.display = "block";
}
function hideHomeScreen() {
  $homeScreen.style.display = "none";
  $homeScreenTitulo.style.display = "none";
  $homeScreenObservacao.style.display = "none";
}

// ---- The end Home screen ---------------

// ---- Screen Load ------------------------

function showLoad() {
  showBasicProtection();
  $load.style.display = "flex";
  $loading.style.display = "block";
  $loadLevel.style.display = "block";
  $loadLevelOne.style.display = "block";
  $loadLevelTwo.style.display = "block";
  showLoader();
}

function showLoader() {
  flagLoad = Math.floor(Math.random() * speedLoad.length);
  $root.style.setProperty("--loadSpeed", `${speedLoad[flagLoad]}ms`);
  controlLoader = setTimeout(showLoader, `${speedLoad[flagLoad]}`);
}

function hideLoad() {
  hideBasicProtection();
  $load.style.display = "none";
  $loading.style.display = "none";
  $loadLevel.style.display = "none";
  $loadLevelOne.style.display = "none";
  $loadLevelTwo.style.display = "none";
  clearInterval(controlLoader);
}

// ---- End Screen Load ------------------------

// ---- Start Game -------------------------

document.addEventListener("click", startGame);
window.addEventListener("resize", upadateInformation);

function startGame() {
  standardMessage = "Erro ao carregar personagens";
  standardMessageTime = 10000;
  standardShowMessageFunctions[0] = hideLoad;
  hideHomeScreen();
  showLoad();
  let charactersTemp = [];
  for (let i = 0; i < characters.length; i++) {
    charactersTemp[
      i
    ] = `../corridadasletras/images/cartoons/${characters[i]}/${characters[i]}Expectation.png`;
  }
  loadMultipleFiles(
    charactersTemp,
    [showSelectPlayer, showMessage],
    charactersReturn
  );
  document.removeEventListener("click", startGame);
}

function upadateInformation() {
  let temp = Number(getComputedStyle($root).getPropertyValue("--breakPoint"));
  if (flagBreakPoint != temp) {
    flagBreakPoint = Number(
      getComputedStyle($root).getPropertyValue("--breakPoint")
    );
    if (flagBreakPoint === 1) {
      speedWaySize = $speedWay.getBoundingClientRect().width;
      stepTrack = speedWaySize / totalLetters;
      stepTrackRacerOne = stepTrack;
      stepTrackRacerTwo = stepTrack;
      direction = "right";
    } else {
      speedWaySize = $speedWay.getBoundingClientRect().height;
      stepTrack = speedWaySize / totalLetters;
      stepTrackTemp = stepTrack;
      stepTrackRacerOne = stepTrack;
      stepTrackRacerTwo = stepTrack;
      direction = "top";
    }
    // console.log(speedWaySize);
  }
}

function initialInformation() {
  flagBreakPoint = Number(
    getComputedStyle($root).getPropertyValue("--breakPoint")
  );
  if (flagBreakPoint === 1) {
    speedWaySize = $speedWay.getBoundingClientRect().width;
    stepTrack = speedWaySize / totalLetters;
    stepTrackRacerOne = stepTrack;
    stepTrackRacerTwo = stepTrack;
    direction = "right";
  } else {
    speedWaySize = $speedWay.getBoundingClientRect().height;
    stepTrack = speedWaySize / totalLetters;
    stepTrackRacerOne = stepTrack;
    stepTrackRacerTwo = stepTrack;
    direction = 'top';
  }
  // console.log(speedWaySize);
}

// initialInformation();

// ---- End Start Game -------------------------

// ---- Select Player ------------------

function showSelectPlayer() {
  $panelSelectPlayer.style.display = "flex";
  $panelSelectPlayerTitle.style.display = "flex";
  $SelectPlayerTitle.style.display = "block";
  $selectPlayer.style.display = "flex";
  $selectPlayerPrevious.style.display = "block";
  $selectPlayerNext.style.display = "block";
  $characters.style.display = "flex";
  $charactersImg.style.display = "block";
  $panelSelectPlayerOK.style.display = "block";
  hideLoad();
  showCharacters();
}

function hideSelectPlayer() {
  $panelSelectPlayer.style.display = "none";
  $panelSelectPlayerTitle.style.display = "none";
  $SelectPlayerTitle.style.display = "none";
  $selectPlayer.style.display = "none";
  $selectPlayerPrevious.style.display = "none";
  $selectPlayerNext.style.display = "none";
  $characters.style.display = "none";
  $charactersImg.style.display = "none";
  $panelSelectPlayerOK.style.display = "none";
}

function showCharacters() {
  $charactersImg.src = window.URL.createObjectURL(
    charactersReturn[flagCharacter]
  );
}

function loadCharacterThanking() {
  let characterThanking = `../corridadasletras/images/cartoons/${characters[flagCharacter]}/${characters[flagCharacter]}Thanking.png
  `;
  standardMessage = "O personagem não pode agradecer. Perdão";
  standardMessageTime = 10000;
  standardShowMessageFunctions[0] = hideLoad;
  showLoad();
  loadSingleFile(
    characterThanking,
    [showCharacterThanking, showMessage],
    characterThankingReturn
  );
}

function showCharacterThanking() {
  $charactersImg.src = window.URL.createObjectURL(characterThankingReturn[0]);
  hideLoad();
  setTimeout(showBattleZone, 2000);
}

$selectPlayerNext.addEventListener("click", function () {
  if (flagCharacter < characters.length - 1) {
    flagCharacter++;
    showCharacters();
  }
});

$selectPlayerPrevious.addEventListener("click", function () {
  if (flagCharacter >= 1) {
    flagCharacter--;
    showCharacters();
  }
});

$panelSelectPlayerOK.addEventListener("click", function () {
  selectPlayerRacer();
  loadCharacterThanking();
});

// ---- End Select player ----------

// ---- Battle Zone ------------------------------------

function showBattleZone() {
  hideSelectPlayer();
  $battleZone.style.display = "grid";
  showChallenge();
  showSpeedWay();
  showBoard();
  showWord();
  loadElementsBattleZone();
  initialInformation();
  
}

function loadElementsBattleZone() {
  showLoad();
  selectChallenge();
  selectOpponentRacer();
  standardMessage = "Arquivos battle Zone Carregados";
  standardMessageTime = 10000;
  let temp = [];
  temp[0] = selectedChallenge;
  temp[1] = racers[0];
  temp[2] = racers[1];
  // console.log(temp);
  loadMultipleFiles(
    temp,
    [showElementsBattleZone, null],
    filesLoadedToTheBattleZone
  );
}

function showElementsBattleZone() {
  loadChallenge([filesLoadedToTheBattleZone[0]]);
  showChallengeSelected();
  loadRacers([filesLoadedToTheBattleZone[1], filesLoadedToTheBattleZone[2]]);
  showRacers();
}

// ---- End Battle Zone ------------------------------------

// ---- Challenges -----------------------------------------

function showChallenge() {
  $containerChallenge.style.display = "flex";
  $challengeImage.style.display = "block";
}

function hideChallenge() {
  $containerChallenge.style.display = "none";
  $challengeImage.style.display = "none";
}

function selectChallenge() {
  let level = eval(`challengesLevel${flagLevel}`);
  let random = Math.floor(Math.random() * level.length);
  let temp = `./images/challenges/level${flagLevel}/${level[random]}.png`;
  selectedChallenge = temp;
  defineChallengeWord();
}

function showChallengeSelected() {
  hideLoad();
  $challengeImage.src = window.URL.createObjectURL(selectedChallengeReturn[0]);
}

function loadChallenge(fileReturn) {
  if (fileReturn != undefined) {
    selectedChallengeReturn = fileReturn;
  } else {
    showLoad();
    selectChallenge();
    loadSingleFile(
      selectedChallenge,
      [showChallengeSelected, null],
      selectedChallengeReturn
    );
  }
}

// ---- End Challenges -------------------------------------

// ---- Word ------------------------------------------------

function showWord() {
  $wordContainer.style.display = "flex";
  $word.style.display = "block";
}

function hideWord() {
  $wordContainer.style.display = "none";
  $word.style.display = "none";
}

function defineChallengeWord() {
  let inicio = selectedChallenge.lastIndexOf("/") + 1;
  let fim = selectedChallenge.lastIndexOf(".");
  challengeWord = selectedChallenge.substring(inicio, fim).toUpperCase();
  totalLetters = challengeWord.length;
  letterCurrent = challengeWord.substring(
    indexLetterCurrent,
    indexLetterCurrent + 1
  );
}

// ---- End Word -------------------------------------------

// ---- Board ----------------------------------------------

function showBoard() {
  $board.style.display = "flex";
  $containerLetters.style.display = "grid";
}

// ---- End Board -----------------------------------------

// ---- Key Word -----------------------------------------

for(let i = 0; i < ($keyWord.length - 3); i++){
  $keyWord[i].addEventListener("click", write);
}

for(let i = 0; i < $keyWord.length; i++){
  $keyWord[i].addEventListener("mouseover", hover);
}

for(let i = 0; i < $keyWord.length; i++){
  $keyWord[i].addEventListener("mouseout", out);
}

$keyWord[$keyWord.length - 1].addEventListener("click", writeAccents);
$keyWord[$keyWord.length - 2].addEventListener("click", writeAccents);
$keyWord[$keyWord.length - 3].addEventListener("click", writeAccents);

function hover() {
  event.currentTarget.style.backgroundColor = "#20fc18";
  event.currentTarget.style.color = "#fff";
}

function out() {
  event.currentTarget.style.backgroundColor = "#fff";
  event.currentTarget.style.color = "#000";
}

function changeCurrentLetter(){
  indexLetterCurrent++;
  letterCurrent = challengeWord.substring(
    indexLetterCurrent,
    indexLetterCurrent + 1
  );
};

function write() {
  if ($word.textContent.length > 15) {
    return;
  }
  definingLetter(event)
  if(myText.symbol!= ''){
    myText.letter = joiningLetterAndAccent();
    clearSymbolAndBorders();
  }
  if(letterCurrent === myText.letter){
     $word.textContent += myText.letter;
     changeCurrentLetter();
     RunRacerOne();
  }else{
     RunRacerTwo();
  }
  

};


function definingLetter(ev){
switch (ev.currentTarget.id) {
  case 'hyphen':
    myText.letter = '-';
  break;
  case 'space':
    myText.letter = ' ';
  break;
  default:
    myText.letter = ev.currentTarget.id;
  break;
}
}

function definingSymbolAndBorders(str) {
  if (myText.symbol == "") {
    myText.symbol = str;
    currentObject.style.border = "2px solid #000";
    // console.log("Acento colocado");
  } else {
    if (currentObject.id == previousObject.id) {
      // console.log(currentObject.id, previousObject.id);
      myText.symbol = "";
      currentObject.style.border = "none";
      // console.log("Acento retirado");
    } else {
      myText.symbol = str;
      currentObject.style.border = "2px solid #000";
      previousObject.style.border = "none";
      // console.log("Acento atualizado");
    }
  }
}

function clearSymbolAndBorders() {
  myText.symbol = "";
  currentObject.style.border = "none";
  previousObject.style.border = "none";
  currentObject = null;
  previousObject = null;
}
  


function writeAccents(){
  // console.log(event.currentTarget.id, '1');
  myText.controlObject(event.currentTarget);
    switch (event.currentTarget.id) {
      case "circ":
        definingSymbolAndBorders("^");
        // console.log(event.currentTarget.id, '3');
        break;
      case "tilde":
        definingSymbolAndBorders("~");
        // console.log(event.currentTarget.id,'3');
        break;
      case "acute":
        definingSymbolAndBorders("´");
        // console.log(event.currentTarget.id,'3');
        break;
      default:
        break;
    }
}

function joiningLetterAndAccent() {
  let vowelAccented = "Á Â Ã É Ê Ẽ Í Ĩ Î Ó Õ Ô Ú Û Ũ".split(" ");
  let vowel = "A A A E E E I I I O O O U U U".split(" ");
  let accents = "´ ^ ~ ´ ^ ~ ´ ^ ~ ´ ^ ~ ´ ^ ~".split(' ');
  for(let i = 0; i < vowelAccented.length; i++){
    if(vowel[i] === myText.letter && accents[i] === myText.symbol){
      return vowelAccented[i];
    }
  }
  return myText.letter;
}




// ---- End Key Word -----------------------------------------

// ---- speedWay -------------------------------------------

function selectPlayerRacer() {
  racers[0] = `./corridadasletras/images/cartoons/${characters[flagCharacter]}/${characters[flagCharacter]}Running.png`;
}

function selectOpponentRacer() {
  let charactersTemp = characters;
  charactersTemp.splice(flagCharacter, 1);
  let random = Math.floor(Math.random() * charactersTemp.length);
  racers[1] = `./corridadasletras/images/cartoons/${charactersTemp[random]}/${charactersTemp[random]}Running.png`;
  // console.log(racers[0], racers[1]);
}

function loadRacers(fileReturn) {
  if (fileReturn != undefined) {
    racersReturn = fileReturn;
  } else {
    showLoad();
    selectOpponentRacer();
    loadMultipleFiles(racers, [showRacers, null], racersReturn);
  }
}

function showSpeedWay() {
  $speedWay.style.display = "flex";
}

function hideSpeedWay() {
  $speedWay.style.display = "none";
}

function showRacers() {
  hideLoad();
  $racerOne.style.display = "block";
  $racerTwo.style.display = "block";
  $racerOneImg.style.display = "block";
  $racerTwoImg.style.display = "block";
  // console.log(racersReturn);
  $racerOneImg.src = window.URL.createObjectURL(racersReturn[0]);
  $racerTwoImg.src = window.URL.createObjectURL(racersReturn[1]);
}

function hideRacers() {
  $racerOne.style.display = "none";
  $racerTwo.style.display = "none";
}

function repositionRacersHorizontally() {
  
}


function repositionRacersVertically() {

}

function RunRacerOne(){
  $racerOne.style[direction] = "-" + stepTrackRacerOne + "px";
  stepTrackRacerOne += stepTrack;
}

function RunRacerTwo(){
  $racerTwo.style[direction] = "-" + stepTrackRacerTwo + "px";
  stepTrackRacerTwo += stepTrack;
}



// ---- End speedWay ---------------------------------------

// ---- Loader files ------------------------

function loadFiles(file, callbackTrueFalse, result) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", file);
    xhr.responseType = "blob";
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result[flagLoadFiles] = xhr.response;
          flagLoadFiles++;
          if (flagLoadFiles >= 3) {
            callbackTrueFalse[0]();
            flagLoadFiles = 0;
          }
          resolve();
        } else {
          callbackTrueFalse[1]();
          reject();
        }
      }
    };
  });
}

function loadFile(file, callbackTrueFalse, result) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", file);
    xhr.responseType = "blob";
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result[0] = xhr.response;
          callbackTrueFalse[0]();
          resolve();
        } else {
          callbackTrueFalse[1]();
          reject();
        }
      }
    };
  });
}

async function loadMultipleFiles(files, callbackTrueFalse, result) {
  for (const temp of files) {
    await loadFiles(temp, callbackTrueFalse, result);
  }
}

async function loadSingleFile(file, callbackTrueFalse, result) {
  await loadFile(file, callbackTrueFalse, result);
}

// ---- The end Loader files
