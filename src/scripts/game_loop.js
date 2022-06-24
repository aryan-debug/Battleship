import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { AI } from "./ai.js";
import { make_gameplay_gui, display_ship } from "./dom_handler.js"

const player_gameboard = Gameboard(10);
const ai_gameboard = Gameboard(10);

const player_ships = [
    Ship(4, "horizontal"),
    Ship(4, "vertical"),
    Ship(3, "horizontal"),
    Ship(2, "vertical")
]

const ai_ships = [
    Ship(4, "horizontal"),
    Ship(4, "vertical"),
    Ship(3, "horizontal"),
    Ship(2, "vertical")
]



const player = Player(player_gameboard);
const ai = AI(ai_gameboard, ai_ships);
let current_turn = player;

make_gameplay_gui(player_gameboard, ai_gameboard)
player_gameboard.placeShip(0, 0, player_ships[0]);
ai.placeShips();
display_ship(player_gameboard, document.getElementById("first_player_grid"));