let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    inputWindow.value = '';
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})
// all buttons of calc
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('btn_1').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if(inputWindow.value == 0){
        inputWindow.value ='';
    } ;
    inputWindow.value += '9';
})

//sum operation
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation ='sum';
    inputWindow.value = '';
})

//def operation
document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation ='def';
    inputWindow.value = '';
})

//comp operation
document.getElementById('btn_comp').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation ='comp';
    inputWindow.value = '';
})

//div operation
document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation ='div';
    inputWindow.value = '';
})

//sqrе operation
document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation ='sqrt';
    inputWindow.value = '';
})



document.getElementById('btn_res').addEventListener('click', function () {
    if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'def'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'comp'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'div'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'sqrt'){
        const result = Math.sqrt(lastOperand);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})

