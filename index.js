let count = 0;
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const countDOM = document.querySelector('#count');

incrementBtn.addEventListener('click', clickEvent)
decrementBtn.addEventListener('click', clickEvent)

function clickEvent(){

    this.id === 'increment' ? count++ : count--;
    countDOM.innerHTML = count;

}