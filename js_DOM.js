function func1() {
  let elem = document.getElementById('id1');
  elem.innerHTML = "!!!";
  alert('hello')
}

function func2() {
  let elem = document.getElementById('id2');
  elem.outerHTML = "<b>" + elem.innerHTML + "</b>";
}

let func3 = () => {
  let elem = document.getElementsByTagName("p");

  for(let i = 0; i < elem.length; i++) {
    elem[i].innerHTML = i + 1;
  }
}