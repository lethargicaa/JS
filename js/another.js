const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Tetetetest");
    }
};

options.makeTest();


const {border, bg} = options.colors;

console.log(border);
console.log(bg);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);  
        }
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`);  
    }
}

console.log(Object.keys(options).length);



let arr = [1, 5, 6, 7, 12];

arr.forEach(function(element, i, arrr) {
    console.log(`${i} : ${element} inside array ${arrr}`);
});


const str = prompt("", "");
const products = str.split(",");
console.log(products);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 11,
        y: 22
    }
};
for (let kak in numbers) {
    console.log(kak);
}


const newNumbers = copy(numbers);
console.log(newNumbers);