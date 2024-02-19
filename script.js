const div = document.querySelector('div');
const clear_button = document.querySelector('.clear_button');
const erase_button = document.querySelector('.erase_button');
const color_button = document.querySelector('.color_button');

//Color
let randomColor = 0;
let random = true; //Default value (for random color)

//Creating the grid of square divs 
function grid_creation(){
    for(let i = 0;i<16; i++){
        for(let j = 0; j<16; j++){
            //Square creation
            const new_div = document.createElement('div');
            new_div.classList.add('grid_div');

            div.appendChild(new_div);

            //Change the color of a square when hovered
            new_div.addEventListener('mouseover',() =>{
                
                //Check wether the color shall be random or not
                if(random){
                    randomColor = Math.floor(Math.random()*16777215).toString(16);
                }
                else{
                    randomColor = "#FFFFFF";
                }
                
                new_div.style.cssText = `background-color : #${randomColor} `;
            })

            //Button to clear everything on the grid (general eraser)
            clear_button.addEventListener('click', () => {
                new_div.style.cssText = "background-color : white ";
            })
        }
    }
}

grid_creation();

//Make the selected div white (precise eraser)
erase_button.addEventListener('click', () =>{    
    random = false;
})

//Randomize color of selected div 
color_button.addEventListener('click', () => {
    random = true;
})

