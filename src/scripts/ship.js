const Ship = (len, t) => {
    const length = len;
    const type = t;
    const ship = []
    const getShipLength = () => {return length};
    const getType = () => {return type};
    const getShip = () => {return ship}
    const createShip = () => {
        for(let i = 0; i < length; i++){
            ship.push({"hit": false});
        }
    }
    createShip()
    const hit = (index) => {
        ship[index].hit = true;
    }
    const isSunk = () => {
        for(let i = 0; i < length; i++) {
            if(!ship[i].hit){
                return false;
            }
        }
        return true;
    }

    return {getShipLength, getType,getShip, createShip, hit, isSunk}
}
export {Ship}