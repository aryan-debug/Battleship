import { AI } from "../scripts/ai";
import { Gameboard } from "../scripts/gameboard";
import { Ship } from "../scripts/ship"

it("gets gameboard", () => {
    const gameboard = Gameboard(10);
    const ships = [Ship(4, "horizontal"), Ship(4, "vertical")];
    const ai = AI(gameboard, ships);
    expect(ai.getGameboard()).toBe(gameboard);
})

it("places ships", () => {
    const gameboard = Gameboard(10);
    const ships = [Ship(4, "horizontal"), Ship(4, "vertical")];
    const ai = AI(gameboard, ships);
    ai.placeShips()
    const is_empty = (board) => {
        for(let i = 0; i < board.getBoard().length; i++){
            for(let j = 0; j < board.getBoard()[i].length; j++){
                if(board.getBoard()[i][j] !== undefined){
                    return false;
                }
            }
        }
        return true;
    }
    expect(is_empty(ai.getGameboard())).toBe(false)
})