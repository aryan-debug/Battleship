const Ship = (len, t) => {
    const length = len;
    let type = t;
    const ship = []
    const getShipLength = () => {return length};
    const getType = () => {return type};
    const getShip = () => {return ship}
    const changeType = (new_type) => {type = new_type};
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

    return {getShipLength, getType,getShip, createShip, changeType, hit, isSunk}
}
export {Ship}