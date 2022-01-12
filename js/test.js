let counteritem = localStorage.getItem('counter');

let newValue;

if(!counteritem){
    newValue = 1;
} else {
    newValue = parseInt(counteritem) + 1;
}

localStorage.setItem('counter', newValue);

console.log('counter');

// document.getElementById('userCounter').textContent = localStorage.getItem('counter');