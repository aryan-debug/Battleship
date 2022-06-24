export function create_gameboard(gameboard, gameboard_div, add_listeners = false){
    const dimensions = gameboard.getDimensions();
    for(let i = 0; i < dimensions * dimensions; i++){
        let cell = document.createElement("div");
        if(add_listeners){
            cell.addEventListener("click", (e) => handle_click(e, gameboard, gameboard_div));
        }
        cell.classList.add("cell");
        cell.setAttribute("index_value", i);
        gameboard_div.appendChild(cell);
    }
}

export function display_ship(gameboard, grid){
    const dimensions = gameboard.getDimensions();
    const board = gameboard.getBoard();
    const grid_children = grid.children
    for(let i = 0; i < dimensions; i++){
        for(let j = 0; j < dimensions; j++){
            if(board[i][j].ship_type) {
                grid_children[i*10 + j].classList.add("ship")
            }
        }
    }
}

export function render_board(gameboard, gameboard_div){
    const dimensions = gameboard.getDimensions();
    const missed_shots = gameboard.getMissedShots();
    console.log(missed_shots[0])
    const board = gameboard.getBoard();
    for(let i = 0; i < dimensions; i++){
        for(let j = 0; j < dimensions; j++){
            const ship_object = board[i][j].ship_type;
            const ship_index = board[i][j].ship_index;
            if(ship_object){
                if(ship_object.getShip()[ship_index].hit){
                    gameboard_div.querySelector(`div[index_value='${i * 10 + j}']`).classList.add("hit");
                }
            }
            if(checkArray(missed_shots[0], [i, j])){
                gameboard_div.querySelector(`div[index_value='${i * 10 + j}']`).classList.add("empty");
            }
        }
    }
}

function checkArray(a, b){
    for(let i = 0; i < a.length; i++){
        if(a[i]!=b[i]){
            return false;
        }
    }
    return true;
}

export function make_gameplay_gui(gameboard_1, gameboard_2){
    const player_heading = document.createElement("h1");
    const second_player_heading = document.createElement("h1");
    const first_player_div = document.createElement("div");
    const second_player_div = document.createElement("div");
    const first_player_grid = document.createElement("div");
    const second_player_grid = document.createElement("div");


    first_player_div.classList.add("players_div");
    second_player_div.classList.add("players_div");
    player_heading.classList.add("heading");
    second_player_heading.classList.add("heading");
    first_player_grid.id = "first_player_grid";
    second_player_grid.id = "second_player_grid";

    player_heading.textContent = "Player";
    second_player_heading.textContent = "AI";

    create_gameboard(gameboard_1, first_player_grid);
    create_gameboard(gameboard_2, second_player_grid, true);

    first_player_div.append(player_heading, first_player_grid);
    second_player_div.append(second_player_heading, second_player_grid);

    document.body.append(first_player_div, second_player_div)
}
function handle_click(e, gameboard, gameboard_div){
    const index = e.target.getAttribute("index_value");
    const y = Math.floor(index / 10)
    const x = index % 10;
    gameboard.recieveAttack(y, x);
    render_board(gameboard, gameboard_div);
}
