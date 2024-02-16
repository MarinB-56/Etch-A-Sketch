const div = document.querySelector('div');

//Creating the grid of square divs 
function grid_creation(){
    for(let i = 0;i<16; i++){
        for(let j = 0; j<16; j++){
            //Square creation
            const new_div = document.createElement('div');
            new_div.classList.add('grid_div');

            div.appendChild(new_div);

        }
    }
}



grid_creation();


