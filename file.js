let nameGuest = prompt('Enter Your Name', ['My Name']);

if (nameGuest) {
    console.log('Name entered');
} else {
    nameGuest = 'Guest';
};

let initalBox = document.getElementById('PersonName');
initalBox.innerHTML = nameGuest;