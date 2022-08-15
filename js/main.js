// console.log('Hello Panda Commarce')

const h2s = document.getElementsByTagName('h2');
for(const h2 of h2s){
    h2.style.color = 'lightblue'
}

const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';
backpack.style.borderRadius = '0.5rem';

// 4th 

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px'
}

// 5th

function clickHere(){
    console.log('btn is clicked')
}

const buyNows = document.getElementsByClassName('buy_now');
for(const buyNow of buyNows){
    buyNow.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target)
    })
}