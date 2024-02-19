const div = document.querySelector('div');
const clear_button = document.querySelector('.clear_button');
const erase_button = document.querySelector('.erase_button');

//Color
let randomColor = 0;
randomColor=Math.floor(Math.random()*16777215).toString(16);

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
                new_div.style.cssText = `background-color : #${randomColor}`;

                // console.log(randomColor);
            })

            //Button to clear everything on the grid (general eraser)
            clear_button.addEventListener('click', () => {
                new_div.style.cssText = "background-color : white ";
            })

            //Button to make the selected div white (precise eraser)
            erase_button.addEventListener('click', () =>{    
                console.log("erase");
                randomColor = "#FFFFFF";
            })
        }
    }
}

//Implementation of clear button
grid_creation();


