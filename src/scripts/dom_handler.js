import { attack_handler, start_game } from "./game_loop";
import { Ship } from "./ship";
export function create_gameboard(gameboard, gameboard_div, add_listeners = false, listener = null){
    const dimensions = gameboard.getDimensions();
    for(let i = 0; i < dimensions * dimensions; i++){
        let cell = document.createElement("div");
        if(add_listeners){
            cell.addEventListener("click", (e) => listener(e, gameboard, gameboard_div));
        }
        cell.classList.add("cell");
        cell.setAttribute("index_value", i);
        gameboard_div.appendChild(cell);
    }
}

function create_ships(conatiner, ships){
    for(let i = 0; i < ships.length; i++){
        const current_ship = ships[i];
        const created_ship = create_ship(current_ship);
        created_ship.id = i
        conatiner.append(created_ship)
    }
}

function create_ship(ship){
    const ship_container = document.createElement("div");
    ship_container.classList.add("ship_container");
    ship_container.classList.add(ship.getType());
    ship_container.setAttribute("draggable", "true");
    for(let i = 0; i < ship.getShipLength(); i++){
        const ship = document.createElement("div");
        ship.classList.add("ship");
        ship.classList.add("cell");
        ship_container.append(ship);
    }
    return ship_container
}

function add_listeners(tags, listener, callback_func){
    for(let i = 0; i < tags.length; i++){
        tags[i].addEventListener(listener, callback_func);
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
            if(missed_shots.length > 0 && checkArray(missed_shots[0], [i, j])){
                gameboard_div.querySelector(`div[index_value='${i * 10 + j}']`).classList.add("empty");
            }
        }
    }
}

function display_play_button(){
    const button = document.createElement("button");
    button.textContent = "Play!"
    button.id = "play_button";
    const container = document.getElementById("container")
    document.getElementById("ship_container_div").remove();
    container.append(button);
    button.addEventListener("click", start_game)
}

export function checkArray(a, b){
    if(!a.length){
        return false;
    }
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
    const conatiner = document.createElement("div");
    const winner_heading = document.createElement("h1");


    first_player_div.classList.add("players_div");
    second_player_div.classList.add("players_div");
    player_heading.classList.add("heading");
    second_player_heading.classList.add("heading");
    first_player_grid.id = "first_player_grid";
    second_player_grid.id = "second_player_grid";
    conatiner.id = "container"
    winner_heading.id = "winner_heading";


    player_heading.textContent = "Player";
    second_player_heading.textContent = "AI";

    create_gameboard(gameboard_1, first_player_grid);
    create_gameboard(gameboard_2, second_player_grid, true, handle_click);

    first_player_div.append(player_heading, first_player_grid);
    second_player_div.append(second_player_heading, second_player_grid);
    conatiner.append(first_player_div, second_player_div, winner_heading)
    document.body.append(conatiner)
}

export function make_layout_gui(ships, layout_gameboard){
    const layout_gameboard_div = document.createElement("div");
    const ship_container_div = document.createElement("div");
    const conatiner = document.createElement("div");

    layout_gameboard_div.id = "layout_grid";
    ship_container_div.id = "ship_container_div"
    conatiner.id = "container";

    create_gameboard(layout_gameboard, layout_gameboard_div);
    create_ships(ship_container_div, ships);

    conatiner.append(layout_gameboard_div, ship_container_div);
    document.body.append(conatiner);
    const ship_container = document.querySelectorAll(".ship_container");
    const cells = document.querySelectorAll(".cell")
    add_rotate_ship_listener(ships, ship_container_div);
    add_listeners(ship_container, "dragstart", handle_ship_drag_start);
    add_listeners(cells, "dragenter", handle_ship_drag_enter);
    add_listeners(cells, "dragover", handle_ship_drag_over);
    cells.forEach((cell) => cell.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const coord = e.target.getAttribute("index_value")
        const y = Math.floor(coord / 10);
        const x = coord % 10;
        const ship = ships[e.dataTransfer.getData("text/plain")];
        if(layout_gameboard.placeShip(y, x, ship)){
            display_ship(layout_gameboard, layout_gameboard_div);
            ship_container_div.removeChild(document.getElementById(`${e.dataTransfer.getData("text/plain")}`));
        }
        if(!ship_container_div.children.length){
            display_play_button()
        }
    }))
}

export function removeTag(tag){
    document.body.removeChild(tag)
}

function handle_click(e, gameboard, gameboard_div){
    const index = e.target.getAttribute("index_value");
    const y = Math.floor(index / 10)
    const x = index % 10;
    if(!gameboard.isAlreadyHit([y, x])){
        attack_handler();
    }
    if(!gameboard.isAllSunk()){
        gameboard.recieveAttack(y, x);
        render_board(gameboard, gameboard_div);
    }
}

function add_rotate_ship_listener(ships){
    const ship_divs = document.querySelectorAll(".ship_container")
    for(let i = 0; i < ships.length; i++){
        const current_ship_div = ship_divs[i];
        current_ship_div.addEventListener("click", (e) => {
            const isVertical = current_ship_div.classList.contains("vertical")
            if(isVertical){
                current_ship_div.classList.remove("vertical");
                current_ship_div.classList.add("horizontal");
                ships[i].changeType("horizontal");
            }
            else{
                current_ship_div.classList.remove("horizontal");
                current_ship_div.classList.add("vertical");
                ships[i].changeType("vertical");

            }
        })
    }
}

export function declare_winner(winner){
    const winner_heading = document.getElementById("winner_heading");
    winner_heading.textContent = `${winner} won!`

}


function handle_ship_drag_start(e){ 
    e.dataTransfer.setData("text/plain", e.target.id)
}
function handle_ship_drag_enter(e){
    e.preventDefault();
}
function handle_ship_drag_over(e){
    e.preventDefault();
}
