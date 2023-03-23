// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const h1 = document.querySelector('h1')
 const randomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
       return`rgb(${r}, ${g}, ${b})`; 
    } 

function newColor() {
   this.style.backgroundColor = randomColor()
   this.style.color = randomColor()
   let audio = new Audio('sounds/mixkit-cartoon-panic-squeak-1010.wav');
audio.play();
    setTimeout ( () => {
        this.style.opacity = 0.3
        this.style.backgroundColor = '#fd79a8'
      }, 1000)   
   
}
   
function ouch() { 
    this.innerText = 'Ouch!'
    
    this.style.fontFamily ='serif' 
    setTimeout ( () => {
        this.innerText = ';('
 
    this.style.fontFamily ='' 
     setTimeout ( () => {
        this.innerText = ''
      }, 2000)
      }, 1000) 
}


    

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon) 
    
pokemon.addEventListener('click', newColor) 


}


h1.addEventListener('mouseover', ouch ) 








