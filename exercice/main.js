//---ITERATION 1
const list1 = document.querySelector('ul')
list1.style.backgroundColor = 'blue'

const changeColor = document.querySelector('.touch')
const title = document.querySelector('h1')

changeColor.onclick = () => {
    title.style.color = 'green'
}

console.log(list1);

//--ITERATION 2

const list2 = document.querySelector('.allbuttoms')
list2.style.backgroundColor = 'grey'

const changeColor1 = document.querySelector('.firtTouch')
const changeUp = document.querySelector('.secondTouch')
const changeBackColor = document.querySelector('.thirtTouch')
const remove = document.querySelector('.fortyTouch')
const changeColor5 = document.querySelector('.fiveTouch')



const title1 = document.querySelector('.firt')
const title2 = document.querySelector('.second')
const title3 = document.querySelector('.thirt')
const title4 = document.querySelector('.forty')
const title5 = document.querySelector('.five')

changeColor1.onclick = () => {
    title1.style.color = 'white'
}

changeUp.onclick = () => {
    title2.style.textTransform = 'uppercase'
}

changeBackColor.onclick = () => {
    title3.style.backgroundColor = 'yellow'
}

remove.onclick = () => {
    title4.remove();
}

console.log(list2);