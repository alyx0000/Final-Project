'use strict';

const cleaveCC = new Cleave("#cardN" , {
    creditCard: true,
    delimiter: "-",
    onCreditCardTypeChanged: function (type) {
        console.log(type);
    },
});

const cleaveDate = new Cleave("#cardExpiry", {
    date: true,
    dataPattern: ["m", "y"],
});

const cleaveCVV = new Cleave("#cardCvv", {
    blocks: [3],
});



let counterItem = Cookies.get('counter');

let newValue;

if(!counterItem){
    newValue = 1;
} else {
    newValue = parseInt(counterItem) + 1;
}

Cookies.set('counter', newValue);



document.getElementById('paymentForm').addEventListener('submit', function(event){
    event.preventDefault();

    let checkbox = document.getElementById('saveInfo');
    
    if(checkbox.checked){
        let cardHolderName = document.getElementById('cardHolderName').value;
        Cookies.set('username', cardHolderName);
    } else {
        Cookies.remove('username');
    }

    event.target.submit();
})

let savedUser = Cookies.get('username');
if (savedUser){
    document.getElementById('cardHolderName').value = savedUser;
    document.getElementById('saveInfo').checked = true;
}