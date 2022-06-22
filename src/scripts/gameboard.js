export const Gameboard = (dimensions) => {
    const board = [];
    const current_player = "player";
    const getBoard = () => {return board};
    const getCurrentPlayer = () => {return current_player}
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
    }
    const isWithinBounds = (y, x, ship) => {
        return ship.getType() === "horizontal" ? (x + ship.getShipLength()) < dimensions : (y + ship.getShipLength()) <  dimensions
    }
    const isIntersecting = (y, x, ship) => {
        for(let i = 0; i < ship.getShipLength(); i++){
            if(!(board[y + (i * (ship.getType() === "vertical"))][x + (i * (ship.getType() === "horizontal"))].ship_type)){
                return false;
            }
        }
        return true;
    }
    return {getBoard, getCurrentPlayer, placeShip}
}