const checked = [];

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxesArr = Array.from(document.querySelectorAll('input[type="checkbox"]'));
let multiple = false;

function uncheckAll() {
    checkboxes.forEach((e) => e.checked = false);
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'Shift') {
        multiple = true;
        console.log(multiple);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'Shift') {
        multiple = false;
        console.log(multiple);
    }
});

// if there is another check box
//  when you shift check 

checkboxes.forEach((box) => box.addEventListener(('change'), (e) => {
    if (multiple == true) {
        isPreviousChecked(e.target);
        //e.target.parentElement.previousSibling.previousSibling.firstElementChild.checked = true;
    }
}));

function isPreviousChecked(box) {
    if (box.parentElement.previousSibling.previousSibling.firstElementChild == null) {
        return;
    }   else if (box.parentElement.previousSibling.previousSibling.firstElementChild.checked == false) {
        box.parentElement.previousSibling.previousSibling.firstElementChild.checked = true;
        isPreviousChecked(box.parentElement.previousSibling.previousSibling.firstElementChild);
    }
}




