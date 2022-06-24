import { Gameboard } from "../scripts/gameboard"
import { Player } from "../scripts/player"


it("gets player name", () => {
    const gameboard = Gameboard(10)
    const player = Player("player_1", gameboard);
    expect(player.getName()).toBe("player_1")
})

it("gets gameboard", () => {
    const gameboard = Gameboard(10);
    const player = Player("player_1", gameboard);
    expect(player.getGameboard()).toBe(gameboard);

})