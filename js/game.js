window.addEventListener('load', init);

// Levels 
const levels = {
    noob: 9,
    littleNoob: 5,
    kingOfHard: 4,
    onSteroids: 3
}

// Change level
const currentLevel = levels.onSteroids;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'affluent',
    'aggrandize',
    'alacrity',
    'ambivalent',
    'amenable',
    'amorphous',
    'anachronistic',
    'anathema',
    'antediluvian',
    'apocryphal',
    'approbation',
    'archetypal',
    'assiduous',
    'blandishment',
    'bombastic',
    'camaraderie',
    'circumlocution',
    'circumscribe',
    'constituent',
    'demagogue',
    'diaphanous',
    'disaffected',
    'ebullient',
    'embezzlement',
    'enfranchise',
    'evanescent',
    'extraneous',
    'fallacious',
    'forbearance',
    'grandiloquent',
    'heterogenous',
    'impecunious',
    'incontrovertible',
    'interlocutor',
    'intransigent',
    'legerdemain',
    'mendacious',
    'multifarious',
    'obstreperous',
    'penurious',
    'preponderance',
    'punctilious',
    'pulchritude',
    'vociferous',
    'irregardless',
    'disinterested',
    'lieutenant'

];


function init()
{
    seconds.innerHTML = currentLevel;
    
    showWord(words);

    wordInput.addEventListener('input', startMatch);
    
    setInterval(countdown, 1000);

    setInterval(checkStatuts, 50);
}

function startMatch()
{
    if(matchWords()){
        isPlaying = true;
        time =currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if (score === -1 ){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML=score;
    }
}

function matchWords()
{
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = " Correct ";
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

function showWord()
{
    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

function countdown()
{
    if(time > 0 ){
        time--;
    }else if (time === 0 ){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatuts()
{

    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over , LOOSER !! YOU ARE ABSOLUTELY NOOB =) ";
        score = 0; 
    }

}