import {Gameboard} from "../scripts/gameboard"
import {Ship} from "../scripts/ship"

it("creating gameboard", () => {
    let gameboard = Gameboard(10);
    expect(gameboard.getBoard().length && gameboard.getBoard()[0].length).toBe(10)
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