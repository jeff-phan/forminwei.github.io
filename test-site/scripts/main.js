let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/heart-logo.png') {
      myImage.setAttribute('src','images/minwei-1.jpeg');
    } else {
      myImage.setAttribute('src','images/heart-logo.png');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'MinWei is lengzai,' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading,textContent = 'MinWei is lengzai,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `MinWei is lengzai, ${myName}`;
    }
  }