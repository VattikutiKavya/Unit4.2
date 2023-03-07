const BaseController = require("./baseController");
const PlayerModel = require("../models/playerModel");
class Player extends BaseController {
  constructor() {
    super(PlayerModel, Player);
  }
}
module.exports = new Player();
