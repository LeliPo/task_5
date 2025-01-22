let minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
minValue = (minValue<=-999) ? minValue= -999 : minValue>=999 ? minValue = 999 : minValue;
if (isNaN(minValue) || minValue =='') {
    minValue =-999;
}
let maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
maxValue = (maxValue>=999) ? maxValue= 999 : maxValue<=-999 ? maxValue = -999 : maxValue;
if (isNaN(maxValue) || maxValue =='') {
    maxValue =999;
}
if (minValue > maxValue) {
    [maxValue, minValue] = [minValue, maxValue];
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 0;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


orderNumberField.innerText = orderNumber;
const phraseRandom = Math.round( Math.random() * 3);
    if (phraseRandom == 0) {
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    } else if (phraseRandom ==1){
    answerField.innerText = `Ваше число ${answerNumber }?`;
    } else if (phraseRandom ==2){
    answerField.innerText = `Мне кажется вы загадали число ${answerNumber }?`;
    }

document.getElementById('btnRetry').addEventListener('click', function () { //кнопка заново
    gameRun = true;
    minValue = -999;
    maxValue = 999;
    orderNumber = 0;
    
    
    minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
    minValue = (minValue<=-999) ? minValue= -999 : minValue>=999 ? minValue = 999 : minValue;
    if (isNaN(minValue) || minValue =='') {
        minValue =-999;
    }
    maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
    maxValue = (maxValue>=999) ? maxValue= 999 : maxValue<=-999 ? maxValue = -999 : maxValue;
    if (isNaN(maxValue) || maxValue =='') {
        maxValue =999;
    }
    if (minValue > maxValue) {
        [maxValue, minValue] = [minValue, maxValue];
    }
    answerNumber  = Math.floor((minValue + maxValue) / 2);

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () { //кнопка больше
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom == 0) {
            answerField.innerText = `Вы загадали неправильное число`;
        } else if (phraseRandom ==1){
            answerField.innerText = `Загаданное число не соответствует условию`;
        } else if (phraseRandom ==2){
            answerField.innerText = `Я сдаюсь \n\u{1F620}`;
        }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom == 0) {
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
            } else if (phraseRandom ==1){
                answerField.innerText = `Может это ${answerNumber }?`;
            } else if (phraseRandom ==2){
                answerField.innerText = `А что если ${answerNumber }?`;
            }
}
}
})

document.getElementById('btnLess').addEventListener('click', function () { //кнопка меньше
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom == 0) {
            answerField.innerText = `Вы загадали неправильное число`;
        } else if (phraseRandom ==1){
            answerField.innerText = `Загаданное число не соответствует условию`;
        } else if (phraseRandom ==2){
            answerField.innerText = `Я сдаюсь \n\u{1F620}`;
        }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom == 0) {
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        } else if (phraseRandom ==1){
            answerField.innerText = `Может это ${answerNumber }?`;
        } else if (phraseRandom ==2){
            answerField.innerText = `А что если ${answerNumber }?`;
        }
}
}
})


document.getElementById('btnEqual').addEventListener('click', function () { //кнопка верно
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        if (phraseRandom == 0) {
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        } else if (phraseRandom ==1){
        answerField.innerText = `Да это легко! Ты загадал...`;
        } else if (phraseRandom ==2){
        answerField.innerText = `Наверное, это число...`;
        }
        gameRun = false;
    }
})

