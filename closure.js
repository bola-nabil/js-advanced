function outter() {
    let name = "bola";

    function inner() {
        console.log(name);
    }
    return inner;
}

const fn = outter();

// second example
const counter = () => {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}

const add = counter(); // increase counter

add();