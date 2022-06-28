import { checkArray } from "./dom_handler";
export const Gameboard = (dimensions) => {
    const board = [];
    const shots_hit = [];
    const missed_shots = []
    const getBoard = () => {return board};
    const getDimensions = () => { return dimensions };
    const getMissedShots = () => {return missed_shots};
    const createBoard = () => {
        for(let i = 0; i < dimensions; i++){
            board.push([])
            for(let j = 0; j < dimensions; j++){
                board[i].push({"ship_type": undefined, "ship_index": undefined});
            }
        }
    }
    createBoard();
    const placeShip = (y, x, ship) => {
        if(!isWithinBounds(y, x, ship)){
            return false;
        }
        if(isIntersecting(y, x, ship)){
            return false;
        }
        for(let i = 0; i < ship.getShipLength(); i++){
            board[y + (i * (ship.getType() === "vertical"))][x + (i * (ship.getType() === "horizontal"))].ship_type = ship;
            board[y + (i * (ship.getType() === "vertical"))][x + (i * (ship.getType() === "horizontal"))].ship_index = i;
        }
        return true;
    }
    const recieveAttack = (y, x) => {
        const coord = board[y][x].ship_type;
        if(isAlreadyHit([y, x])){
            return false;
        }
        shots_hit.push([y, x]);
        if(coord){
            coord.hit(board[y][x].ship_index)
            return true
        }
        else{
            missed_shots.unshift([y, x])
            return true;
        }

    } 
    const isAlreadyHit = (coords) => {
        if(!shots_hit.length){
            return false;
        }
        for(let i = 0; i < shots_hit.length; i++){
            if((shots_hit[i][0] === coords[0]) && (shots_hit[i][1] === coords[1])){
                return true;
            }
        }
        return false;
    }
    const isAllSunk = () => {
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j].ship_type){
                    if(!board[i][j].ship_type.isSunk()){
                        return false;
                    }
                }
            }
        }
        return true;
    }
    const isWithinBounds = (y, x, ship) => {
        return ship.getType() === "horizontal" ? (x + ship.getShipLength()) < dimensions + 1: (y + ship.getShipLength()) <  dimensions + 1
    }
    //TODO: Figure out how this works and write tests for it
    const isIntersecting = (y, x, ship) => {
        for(let i = 0; i < ship.getShipLength(); i++){
            if((board[y + (i * (ship.getType() === "vertical"))][x + (i * (ship.getType() === "horizontal"))].ship_type)){
                return true;
            }
        }
        return false;
    }
    return {getBoard, getMissedShots, getDimensions, placeShip, recieveAttack, isAllSunk, isAlreadyHit}
}