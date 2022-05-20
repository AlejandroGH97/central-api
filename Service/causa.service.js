const causaRepository = require("../Repository/causa.repository.js");

class CausaService {
  constructor() {}

  async getCausa(id) {
    console.log(`Service::getCausas(${id})`);
    return await causaRepository.getCausa(id);
  }

  async getCausas() {
    console.log("Service::getCausas()");
    return await causaRepository.getCausas();
  }
}

module.exports = new CausaService();
