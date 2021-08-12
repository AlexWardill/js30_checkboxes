const checked = [];

const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

checkboxes.forEach((e) => {
    e.addEventListener('change', isChecked(e.target));
    console.log(checked);
});


function isChecked(item) {
    if (item.checked) {
        checked.push(item);
    } checked.splice(checked[item]);
}