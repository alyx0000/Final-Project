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