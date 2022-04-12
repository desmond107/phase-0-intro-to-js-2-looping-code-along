// Code your solutions in this file
function writeCards(names, message) {
    let myCard = [];
    for (let i = 0; i < names.length; i++) {
       myCard.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return myCard;
}

function countDown(n) {
    let count = n;
    while (count > 0) {
      console.log(count);
      count--;
    } 
    console.log(count);
}