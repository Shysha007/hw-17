function mainFunction(callback) {

    const numOne = prompt(`Введите первое число:`);
    const numTwo = prompt(`Введите второе число:`);

    if(numOne === null || numOne.trim() === `` || isNaN(+numOne))   return alert(`some error`);
    if(numTwo === null || numTwo.trim() === `` || isNaN(+numTwo))   return alert(`some error`);
    callback(numOne, numTwo);
}

function exponentiation(num1, num2) {
    const result = Math.pow(num1,num2);
    return alert(result);
}

const multiplay = (numOne, numTwo) => alert(numOne * numTwo);
const division = (numOne, numTwo ) => alert(numOne / numTwo);
const modulo = (numOne, numTwo) => alert(numOne % numTwo);

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);



