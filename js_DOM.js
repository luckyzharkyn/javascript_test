function buttonClick1() {
    alert('hello world');
}

function buttonClick2() {
    let elem = document.getElementById("id1");
    alert(elem.value);
}

function buttonClick3() {
    let elem = document.getElementById("id2");
    elem.value = "I changed text";
}

function buttonClick4() {
    let elem = document.getElementById("id3");
    elem.src = "img/2.jpg";
}

function inputButton1(elem) {
    alert(elem.value);
}

function inputButton2(elem) {
    elem.value = "ой, я поменял текст";
}

function inputButton3(elem) {
    elem.value = "ой, я поменял текст";
}

function inputButton4(elem) {
    elem.value = "Я опять поменял текст";
}

function inputButton5(elem) {
    elem.value = "hello";
}

function inputButton6(elem) {
    elem.value = "disable";
    elem.disabled = true;
}

function inputButton7(elem) {
    elem.src = "img/2.jpg";
}

function inputButton8(elem) {
    elem.src = "img/1.jpg";
}

function buttonClick5() {
    let elem = document.getElementById("id4");
    elem.style.width = "400px";
    elem.style.color = 'red';
}

function buttonClick6() {
    let elem = document.getElementById("id5");
    elem.value = "text1";
    elem.style.display = "none";
}

function buttonClick7() {
    let elem = document.getElementById("id5");
    elem.style.display = "inline";
}

function buttonClick8() {
    let elem = document.getElementById("id6");
    elem.style.color = "red";
    elem.style.height = '50px';
    elem.style.borderRadius = "30px";
    elem.style.textAlign = "center";
}

function inputButton9(elem) {
    elem.value = "О, теперь на меня больше не нажать";
    elem.disabled = true;
    document.getElementById("id8").style.display = "block";
    
}

function inputButton10(elem) {
    document.getElementById("id7").disabled = false;
    document.getElementById("id7").value = "О, на меня снова можно нажимать";
    elem.style.display = "none";
}

function inputButton11(elem) {
    elem.value++;
}

function buttonClick12() {
    
}