import {printOutput, printDatesDiff} from './output.js'
import getDateDiff from './getDateDiff'

const form = document.getElementById("calcDate")

form.onsubmit = (event) => {
    event.preventDefault();

    const {firstDate,secondDate}  = form.elements;

    if (!firstDate.value || !secondDate.value) {
        printOutput("Заполните все поля")

        return;
    }
    const dateDiff = getDateDiff({from: firstDate.value, to: secondDate.value});

    printDatesDiff(dateDiff)
}