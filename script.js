document.getElementById("five").addEventListener('click', function() {
    const doll = document.getElementById("dollar").value;
    const dollOne = document.getElementById("person").value;

    if (doll >= 1 && dollOne >= 1) {
        person = doll * 0.05;
        let n = person.toFixed(2);
        personGroup = doll / dollOne;
        let n1 = personGroup.toFixed(2);
        document.getElementById('icondollar1').innerHTML = `<img src="icon-dollar.svg" id="img">${n}`;
        document.getElementById('icondollar2').innerHTML = `<img src="icon-dollar.svg" id="img">${n1}`;
    } else {
        errAlert("Can't be Zero", 'error');
    }

});


function errAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const per = document.querySelector('#person');
    const left = document.querySelector('.left');
    const person = document.getElementById('id1')
    left.insertBefore(div, person);
    per.style.border = "1px solid red";

    setTimeout(function() {
        document.querySelector('.alert').remove();
        per.style.border = "";

    }, 2000);
}

document.getElementById("custom").addEventListener('input', function() {
    const custom = document.getElementById("custom").value;
    const doll = document.getElementById("dollar").value;
    const dollOne = document.getElementById("person").value;
    if (doll >= 1 && dollOne >= 1) {
        customAns = custom / 100;
        person = doll * customAns;
        let n = person.toFixed(2);
        personGroup = doll / dollOne;
        let n1 = personGroup.toFixed(2);
        document.getElementById('icondollar1').innerHTML = `<img src="icon-dollar.svg" id="img">${n}`;
        document.getElementById('icondollar2').innerHTML = `<img src="icon-dollar.svg" id="img">${n1}`;
    } else {
        errAlert("Can't be Zero", 'error');
    }

});

document.querySelector("#reset").addEventListener('click', function() {
  window.location.reload();
})

document.getElementById("ten").addEventListener('click', function() {
    const doll = document.getElementById("dollar").value;
    const dollOne = document.getElementById("person").value;
    if (doll >= 1 && dollOne >= 1) {
        person = doll * 0.10;
        let n = person.toFixed(2);
        personGroup = doll / dollOne;
        let n1 = personGroup.toFixed(2);
        document.getElementById('icondollar1').innerHTML = `<img src="icon-dollar.svg" id="img">${n}`;
        document.getElementById('icondollar2').innerHTML = `<img src="icon-dollar.svg" id="img">${n1}`;
    } else {
        errAlert("Can't be Zero", 'error');
    }

});

document.getElementById("fifteen").addEventListener('click', function() {
    const doll = document.getElementById("dollar").value;
    const dollOne = document.getElementById("person").value;
    if (doll >= 1 && dollOne >= 1) {
        person = doll * 0.15 / dollOne;
        let n = person.toFixed(2);
        personGroup = doll / person;
        let n1 = personGroup.toFixed(2);
        document.getElementById('icondollar1').innerHTML = `<img src="icon-dollar.svg" id="img">${n}`;
        document.getElementById('icondollar2').innerHTML = `<img src="icon-dollar.svg" id="img">${n1}`;

    } else {
        errAlert("Can't be Zero", 'error');
    }
});

document.getElementById("twenty_five").addEventListener('click', function() {
    const doll = document.getElementById("dollar").value;
    const dollOne = document.getElementById("person").value;
    if (doll >= 1 && dollOne >= 1) {
        person = doll * 0.25 / dollOne;
        let n = person.toFixed(2);
        personGroup = doll / dollOne;
        let n1 = personGroup.toFixed(2);
        document.getElementById('icondollar1').innerHTML = `<img src="icon-dollar.svg" id="img">${n}`;
        document.getElementById('icondollar2').innerHTML = `<img src="icon-dollar.svg" id="img">${n1}`;
    } else {
        errAlert("Can't be Zero", 'error');
    }
});

document.getElementById("fifty").addEventListener('click', function() {
    const doll = document.getElementById("dollar").value;
    const dollOne = document.getElementById("person").value;
    if (doll >= 1 && dollOne >= 1) {
        person = doll * 0.50 / dollOne;
        let n = person.toFixed(2);
        personGroup = doll / dollOne;
        let n1 = personGroup.toFixed(2);
        document.getElementById('icondollar1').innerHTML = `<img src="icon-dollar.svg" id="img">${n}`;
        document.getElementById('icondollar2').innerHTML = `<img src="icon-dollar.svg" id="img">${n1}`;
    } else {
        errAlert("Can't be Zero", 'error');
    }

});