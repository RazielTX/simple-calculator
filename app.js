const entry = [];
const entryScreen = document.getElementById("entryScreen");
const resultScreen = document.getElementById("resultScreen");

function showEntry() {


    const entryShown = entry.map((element) => {
        switch(element) {
            case "/":
                return' <i class="fa-solid fa-divide fa-xs"></i> ';
            case "*":
                return ' <i class="fa-solid fa-xmark fa-xs"></i> ';
            case "+":
                return ' <i class="fa-solid fa-plus fa-xs"></i> ';
            case "-":
                return ' <i class="fa-solid fa-minus fa-xs"></i> ';
            default:
                return element;
        }
    })


    // The first section of the function (above) is just for style purposes.


    entryScreen.innerHTML = `${entryShown.join('')}`
}

function pressKey(key) {
    entry.push(key.id);
    showEntry();
}

function reset() {
    entry.length = 0;
    entryScreen.innerHTML = ``;
    resultScreen.innerHTML = `0`;
}

function calc(str = entry.join('')) {
    // const entryCalc = new Function(str);
    const result = eval(str);
    resultScreen.innerHTML = `${result}`;
}

function deleteBack() {
    entry.pop();
    showEntry();
}