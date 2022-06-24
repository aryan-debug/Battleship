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
        if(isAlreadyHit(y, x)){
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
    const isAlreadyHit = (y, x) => {
        return shots_hit.includes([y, x]);
    }
    const isAllSunk = () => {
        for(let i = 0; i < board; i++){
            for(let j = 0; j < board[i]; j++){
                if(board[y][x].ship_type){
                    if(!board[y][x].ship_type.isSunk()){
                        return false;
                    }
                }
            }
        }
        return true;
    }
    const isWithinBounds = (y, x, ship) => {
        return ship.getType() === "horizontal" ? (x + ship.getShipLength()) < dimensions : (y + ship.getShipLength()) <  dimensions
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