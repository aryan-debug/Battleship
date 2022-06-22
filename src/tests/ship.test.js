import { Ship } from "../scripts/ship";


it("gets length", ()=>{
    let ship = Ship(4, "vertical");
    expect(ship.getShipLength()).toBe(4)
})

it("gets type", () => {
    let ship = Ship(4, "vertical");
    expect(ship.getType()).toBe("vertical")
})

it("creates ship", () => {
    let ship = Ship(2, "vertical");
    let desiredShip = [{"hit": false}, {"hit": false}]
    expect(ship.getShip()).toEqual(desiredShip)
})

it("hits a ship", () => {
    let ship = Ship(4, "vertical");
    ship.hit(2)
    let desiredShip = [{"hit": false}, {"hit": false}, {"hit": true}, {"hit": false}]
    expect(ship.getShip()).toEqual(desiredShip)
})

it("sinks a ship", () => {
    let ship = Ship(1, "vertical");
    ship.hit(0);
    expect(ship.isSunk()).toBe(true);
})