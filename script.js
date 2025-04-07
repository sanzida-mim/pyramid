function GEBID (id) {
    return document.getElementById(id);
}

const inputForm = GEBID('input_form');
const pdTextArea = GEBID('pd_area');
const submitBtn = GEBID('submit_btn');
const invBtn = GEBID('inv_btn');
const inputField = GEBID('char_input');
let inverted = true;

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const char = inputField.value;
    
    if (char !== '') {
        charPyramid(char);
    } else {
        alert('You need to input a character first!');
    }
});

submitBtn.addEventListener('click', () => {
    const char = inputField.value;
    
    if (char !== '') {
        charPyramid(char);
    } else {
        alert('You need to input a character first!');
    }
});

invBtn.addEventListener('click', () => {
    inverted = !inverted;
    const char = inputField.value;
    
    charPyramid(char);
});

function charPyramid (character) {
    const count = 10;
    const floors = [];

    function eachFloor (floorNumber, floorCount) {
        return  " ".repeat(floorCount - floorNumber) + character.repeat(floorNumber * 2 - 1) + " ".repeat(floorCount - floorNumber);
    }
    
    for (let i = 1; i <= count; i++) {
        if (inverted) {
            floors.push(eachFloor(i, count));
        } else {
            floors.unshift(eachFloor(i, count));
        }
    }

    let pyramid = '';
    
    for (let floor of floors) {
        pyramid = pyramid + floor + '\n';
    }
    
    pdTextArea.innerText = pyramid;
    invBtn.style.display = 'block';
}