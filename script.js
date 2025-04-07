const room = '@';
const count = 10;
const floors = [];

let inverted = false;

function eachFloor (floorNumber, floorCount) {
    return  " ".repeat(floorCount - floorNumber) + room.repeat(floorNumber * 2 - 1) + " ".repeat(floorCount - floorNumber);
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

console.log(pyramid);