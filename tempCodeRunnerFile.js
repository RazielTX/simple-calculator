const numb=213231221;

function separator(numb) {
    var str = numb.toString().split(".");
    console.log(str);
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

console.log(separator(numb))