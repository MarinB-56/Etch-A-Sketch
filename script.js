const div = document.querySelector('div');
const clear_button = document.querySelector('button');

//Creating the grid of square divs 
function grid_creation(){
    for(let i = 0;i<16; i++){
        for(let j = 0; j<16; j++){
            //Square creation
            const new_div = document.createElement('div');
            new_div.classList.add('grid_div');

            div.appendChild(new_div);

            //Adding the possibility to change the color of a square when hovered
            new_div.addEventListener('mouseover',() =>{
                // console.log("coucou");
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                new_div.style.cssText = `background-color : #${randomColor}`;

                console.log(randomColor);
            })
        }
    }
}

grid_creation();


