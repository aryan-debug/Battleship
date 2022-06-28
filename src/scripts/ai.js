export const AI = (gameboard, ships) => {
    const getGameboard = () => { return gameboard };
    const placeShips = () => {
        for(let num in ships){
            let ship = ships[num];
            let random_y = Math.floor((Math.random() * 10));
            let random_x = Math.floor((Math.random() * 10));
            while(!gameboard.placeShip(random_y, random_x, ship)){
                random_y = Math.floor((Math.random() * 10));
                random_x = Math.floor((Math.random() * 10));
            }
        }
    }
    const attack_random = (gameboard) => {
        let random_y = Math.floor((Math.random() * 10));
        let random_x = Math.floor((Math.random() * 10));
        while(gameboard.isAlreadyHit([random_y, random_x])){
            random_y = Math.floor((Math.random() * 10));
            random_x = Math.floor((Math.random() * 10));
        }
        gameboard.recieveAttack(random_y, random_x)
    }
    return { getGameboard, placeShips, attack_random }
}