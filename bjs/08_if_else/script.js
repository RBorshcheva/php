let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
// if the input num is NaN then the value is 0
minValue = minValue || 0;
minValue = minValue <= -1000 ? minValue = -999 : minValue = minValue;
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
// if the input num is NaN then the value is 100
maxValue = maxValue || 100;
maxValue = maxValue >= 1000 ? maxValue = 999 : maxValue = maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

//new game realisation
document.getElementById('btnRetry').addEventListener('click', function () {
   gameRun = true;
   minValue = parseInt(prompt('Введите новое минимальное значение числа','0'));
   minValue = minValue || 0;
   minValue = minValue <= -1000 ? minValue = -999 : minValue = minValue;
   maxValue = parseInt(prompt('Введите новое максимальное значение числа для игры','100'));
   maxValue = maxValue || 100;
   maxValue = maxValue >= 1000 ? maxValue = 999 : maxValue = maxValue;
   alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
   orderNumberField.innerText = 1;
   answerNumber  = Math.floor((minValue + maxValue) / 2);
   switch(answerNumber){
    case 0:
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
    break;
    case 1:
        answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
    break;
    case 2:
        answerField.innerText = `Наверное, это число ${answerNumber }?`;
    break;
    case 3:
        answerField.innerText = `Дай-ка подумать, наверное это число ${answerNumber }?`;
    break;
};
   answerField.innerText = `Вы загадали число ${answerNumber }?`;
})
    

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switch(Math.round(Math.random() * 3)){
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                break;
                case 1:
                    answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
                break;
                case 2:
                    answerField.innerText = `Наверное, это число ${answerNumber }?`;
                break;
                case 3:
                    answerField.innerText = `Дай-ка подумать, наверное это число ${answerNumber }?`;
                break;
            };
        }
    }
})

//button less realisation
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switch(Math.round(Math.random() * 3)){
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                break;
                case 1:
                    answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
                break;
                case 2:
                    answerField.innerText = `Наверное, это число ${answerNumber }?`;
                break;
                case 3:
                    answerField.innerText = `Дай-ка подумать, наверное это число ${answerNumber }?`;
                break;
            };
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        switch(Math.round(Math.random() * 3)){
            case 0:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
            break;
            case 1:
                answerField.innerText = `А я хорош\n\u{1F600}`;
            break;
            case 2:
                answerField.innerText = `Хоть я и не Ванга, но я угадал\n\u{1F607}`;
            break;
            case 3:
                answerField.innerText = `Это было просто\n\u{1F601}`;
            break;
        };
        
        gameRun = false;
    }
})


