import {
    logout,
    checkAuth,
    getPolls,
    createPoll,
} from '../fetch-utils.js';

import { renderPoll } from '../render-poll.js';

const pastPollsEl = document.getElementById('past-polls');
const questionEl = document.getElementById('question');

const option1El = document.getElementById('option-1');
const count1El = document.getElementById('count-1');

const option2El = document.getElementById('option-2');
const count2El = document.getElementById('count-2');

const vote1Button = document.getElementById('vote-1');
const vote2Button = document.getElementById('vote-2');
const logoutButton = document.getElementById('logout');

const pollForm = document.getElementById('poll-form');
const finishPollButton = document.getElementById('finish-poll');

checkAuth();

let question = '';
let option1 = '';
let option2 = '';
let count1 = 0;
let count2 = 0;

window.addEventListener('load', async()=> {
    displayPolls();
});

pollForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(pollForm);

    question = data.get('question');
    option1 = data.get('option-1');
    option2 = data.get('option-2');
    pollForm.reset();
    
    displayCurrentPollEl();
});

vote1Button.addEventListener('click', async()=> {
    count1++;
    displayCurrentPollEl();
});

vote2Button.addEventListener('click', async()=> {
    count2++;
    displayCurrentPollEl();
});

finishPollButton.addEventListener('click', async()=> {
    const poll = {
        question: question,
        option1: option1,
        option2: option2,
        votes1: count1,
        votes2: count2,
    };
    await createPoll(poll);

    displayPolls();

    question = 'Poll Question';
    option1 = 'Option 1';
    option2 = 'Option 2';
    count1 = 'Votes';
    count2 = 'Votes';

    displayCurrentPollEl();
});

logoutButton.addEventListener('click', ()=> {
    logout();
});

async function displayPolls() {
    pastPollsEl.textContent = '';
    const polls = await getPolls();
    for (let poll of polls) {
        const pollEl = renderPoll(poll);
        pastPollsEl.append(pollEl);
    }
}

function displayCurrentPollEl() {

    // currentPollContainerEl.textContent = '';
    questionEl.textContent = question;
    option1El.textContent = option1;
    option2El.textContent = option2;
    count1El.textContent = count1;
    count2El.textContent = count2;
}

