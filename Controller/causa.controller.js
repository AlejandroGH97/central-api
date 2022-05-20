const causaService = require("../Service/causa.service.js");

class CausaController {
  async getCausa(id) {
    console.log(`Controller::getCausa(${id})`);
    return causaService.getCausa(id);
  }

  async getCausas() {
    console.log("Controller::getCausas()");
    return causaService.getCausas();
  }
}

module.exports = new CausaController();
