import {Gameboard} from "../scripts/gameboard"
import {Ship} from "../scripts/ship"

it("creating gameboard", () => {
    let gameboard = Gameboard(10);
    expect(gameboard.getBoard().length && gameboard.getBoard()[0].length).toBe(10)
})
it("returns dimensions", () => {
    let gameboard = Gameboard(10);
    expect(gameboard.getDimensions()).toBe(10);
})
it("places ship horizontally", () => {
    let gameboard = Gameboard(10);
    let ship = Ship(2, "horizontal");
    gameboard.placeShip(0, 0, ship)
    expect(gameboard.getBoard()[0][0]).toEqual({"ship_type": ship, "ship_index": 0});
    expect(gameboard.getBoard()[0][1]).toEqual({"ship_type": ship, "ship_index": 1});
})
it("places ship vertically", () => {
    let gameboard = Gameboard(10);
    let ship = Ship(2, "vertical");
    gameboard.placeShip(0, 0, ship);
    expect(gameboard.getBoard()[0][0]).toEqual({"ship_type": ship, "ship_index": 0});
    expect(gameboard.getBoard()[1][0]).toEqual({"ship_type": ship, "ship_index": 1});
})
it("checks out of bound placemnet of ship placed horizontally", () => {
    let gameboard = Gameboard(10);
    let ship = Ship(4, "horizontal");
    expect(gameboard.placeShip(0, 8, ship)).toBe(false);
})
it("checks out of bound placemnet of ship placed vertically", () => {
    let gameboard = Gameboard(10);
    let ship = Ship(4, "vertical");
    expect(gameboard.placeShip(8, 1, ship)).toBe(false);
})

it("checks for two horizontally placed intersecting ships", () => {
    let gameboard = Gameboard(10);
    let ship_1 = Ship(4, "horizontal");
    let ship_2 = Ship(4, "horizontal");
    gameboard.placeShip(0, 0, ship_1);
    expect(gameboard.placeShip(0, 3, ship_2)).toBe(false);
    

})
it("checks for two veritcally placed intersecting ships", () => {
    let gameboard = Gameboard(10);
    let ship_1 = Ship(4, "veritcal");
    let ship_2 = Ship(4, "veritcal");
    gameboard.placeShip(0, 0, ship_1);
    expect(gameboard.placeShip(0, 0, ship_2)).toBe(false);
    

})
it("checks for perpendicular placed ships", () => {
    let gameboard = Gameboard(10);
    let ship_1 = Ship(4, "horizontal");
    let ship_2 = Ship(4, "veritcal");
    gameboard.placeShip(0, 0, ship_1);
    expect(gameboard.placeShip(0, 0, ship_2)).toBe(false);
});

it("checks if a coord has been hit", () => {
    let gameboard = Gameboard(10);
    let ship = Ship(4, "horizontal");
    gameboard.placeShip(0, 0, ship);
    gameboard.recieveAttack(0, 0);
    expect(ship.getShip()[0].hit).toBe(true);
})

it("checks if a coord has been missed", () => {
    let gameboard = Gameboard(10);
    let ship = Ship(4, "horizontal");
    gameboard.placeShip(0, 8, ship);
    gameboard.recieveAttack(0, 0);
    expect(gameboard.getMissedShots()[0]).toBe((0, 0))
})

it("checks if a coord is attacked more than once", () => {
    let gameboard = Gameboard(10);
    gameboard.recieveAttack(0, 0);
    expect(gameboard.recieveAttack(0, 0)).toBe(false);
})

it("checks if all ships are sunk", () => {
    let gameboard = Gameboard(10);
    let ship_1 = Ship(1, "horizontal");
    let ship_2 = Ship(1, "horizontal");
    gameboard.placeShip(0, 0, ship_1);
    gameboard.placeShip(0, 1, ship_2);
    gameboard.recieveAttack(0, 0);
    gameboard.recieveAttack(0, 1);
    expect(gameboard.isAllSunk()).toBe(true);
})