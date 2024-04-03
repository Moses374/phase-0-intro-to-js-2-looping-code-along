// Code your solutions in this file
function writeCards(names, eventName){
    let thankYouMessages= ["Thank you, Guadalupe, for the wonderful surprise gift!","Thank you, Ollie, for the wonderful surprise gift!","Thank you, Aki, for the wonderful surprise gift!"]

    for (let i=0; i< names.length; i++){
        let message =`Thank you, ${names[i]}, for the wonderful ${eventName} gift`;
    }
    return thankYouMessages
}
function countDown(startingNumber){
    let  count=startingNumber
    while(count>=0){
        console.log(count);
        count--;
    }
}

