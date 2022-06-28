import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { AI } from "./ai.js";
import { make_gameplay_gui, display_ship, render_board, removeTag, make_layout_gui, declare_winner } from "./dom_handler.js";


const player_gameboard = Gameboard(10);
const ai_gameboard = Gameboard(10);

const ai_ships = [
    Ship(4, "horizontal"),
    Ship(4, "vertical"),
    Ship(3, "horizontal"),
    Ship(2, "vertical")
]

const player_ships = [
    Ship(4, "vertical"),
    Ship(4, "vertical"),
    Ship(3, "horizontal"),
    Ship(2, "horizontal")
]
const ai = AI(ai_gameboard, ai_ships);

make_layout_gui(player_ships, player_gameboard);

export function start_game(){
    removeTag(document.getElementById("container"))
    make_gameplay_gui(player_gameboard, ai_gameboard);
    ai.placeShips();
    display_ship(player_gameboard, document.getElementById("first_player_grid"));
}



export function attack_handler(){
    ai.attack_random(player_gameboard);
    if((player_gameboard.isAllSunk() || ai_gameboard.isAllSunk())){
        const winner = player_gameboard.isAllSunk() ? "AI" : "Player"
        declare_winner(winner)
        return
    }
    render_board(player_gameboard, document.getElementById("first_player_grid"))

}