'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let str = 'Оставшиеся студенты';
    let i = 1;
    const Group = [];
    while (i <= 3) {
        Group.push(arr.sort().splice(0,3));
        i++
    }
    console.log(arr); 
    if (arr.length === 0) {
        str += '-'
    }

    if (arr.length === 1) {
        str = `Оставшиеся студенты: ${arr[0]}`
    } else {
        arr.array.forEach((element, i) => {
            if (i === arr.length - 1) {
                str += element
            } else {
                str += element + ', '
            }
        });
    }

    Group.push(str);

    return Group;
}

console.log(sortStudentsByGroups(students));