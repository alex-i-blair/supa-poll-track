import './example.test.js';

import { renderPoll } from '../render-poll.js';

function renderPoll(poll) {
    const div = document.createElement('div');
    const option1Div = document.createElement('div');
    const option2Div = document.createElement('div');
    const question = document.createElement('h2');
    const option1 = document.createElement('h4');
    const option2 = document.createElement('h4');
    const count1 = document.createElement('h4');
    const count2 = document.createElement('h4');

    question.textContent = poll.question;
    option1.textContent = poll.option1;
    option2.textContent = poll.option2;
    count1.textContent = poll.count1;
    count2.textContent = poll.count2;

    option1Div.append(option1, count1);
    option2Div.append(option2, count2);

    div.append(question, option1Div, option2Div);

    return div;
}