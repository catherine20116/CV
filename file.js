/* About Me Section*/

let nameGuest = prompt('Enter Your Name', ['My Name']);

if (nameGuest) {
    console.log('Name entered');
} else {
    nameGuest = 'Guest';
};

let initalBox = document.getElementById('PersonName');

initalBox.innerHTML = nameGuest;


/*Rate Me Section*/

let firstStar = document.getElementById('star1');
console.log(firstStar);

function changeImageFirstStar() {
    firstStar.src = './img/filled_star.png';
}

firstStar.addEventListener('click', changeImageFirstStar);


let secondStar = document.getElementById('star2');

function changeImageSecondStar() {
    firstStar.src = './img/filled_star.png';
    secondStar.src = './img/filled_star.png';
}

secondStar.addEventListener('click', changeImageSecondStar);


let thirdStar = document.getElementById('star3');

function changeImageThirdStar() {
    firstStar.src = './img/filled_star.png';
    secondStar.src = './img/filled_star.png';
    thirdStar.src = './img/filled_star.png';
}

thirdStar.addEventListener('click', changeImageThirdStar);


let fourthStar = document.getElementById('star4');

function changeImageFourthStar() {
    firstStar.src = './img/filled_star.png';
    secondStar.src = './img/filled_star.png';
    thirdStar.src = './img/filled_star.png';
    fourthStar.src = './img/filled_star.png';
}

fourthStar.addEventListener('click', changeImageFourthStar);


let fifthStar = document.getElementById('star5');

function changeImageFifthStar() {
    firstStar.src = './img/filled_star.png';
    secondStar.src = './img/filled_star.png';
    thirdStar.src = './img/filled_star.png';
    fourthStar.src = './img/filled_star.png';
    fifthStar.src = './img/filled_star.png';
}

fifthStar.addEventListener('click', changeImageFifthStar);