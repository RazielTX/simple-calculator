const entry = [];
const entryScreen = document.getElementById("entryScreen");
const resultScreen = document.getElementById("resultScreen");

function separator(num) {
    let str = num.split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

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
    const regexNumbers = /\d+(\.\d+)*|(<.*>|[\(\)])/g;
    const numbersTogether = entryShown.join('').match(regexNumbers);

    const finalShown = numbersTogether.map((element) => {
        if((/\d+(\.\d+)*/).test(element)) {
            return separator(element);
        } else {
            return element;
        }
    })


    // The first section of the function (above) is just for style purposes.


    entryScreen.innerHTML = `${finalShown.join(' ')}`;
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
    const resultCommas = separator(result.toString());
    resultScreen.innerHTML = `${resultCommas}`;
}

function deleteBack() {
    entry.pop();
    showEntry();
}


// const numb=213231221;

// function separator(numb) {
//     var str = numb.toString().split(".");
//     console.log(str);
//     str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return str.join(".");
// }

// console.log(separator(numb))