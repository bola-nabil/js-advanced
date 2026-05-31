function outter() {
    let name = "bola";

    function inner() {
        console.log(name);
    }
    return inner;
}

const fn = outter();