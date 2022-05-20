const { connect, disconnect } = require("../Config/db.config.js");
const { Causa } = require("../Model/causa.model.js");

class CausaRepository {
  constructor() {
    connect();
  }

  async getCausa(id) {
    console.log(`Repository::getCausa(${id})`);
    let causas = {};
    try {
      causas = await Causa.find({ "cause._id": parseInt(id) });
    } catch (err) {
      console.log("Error::", err);
    }

    return causas;
  }

  async getCausas() {
    console.log("Repository::getCausas()");
    let causas = {};
    try {
      causas = await Causa.aggregate([
        { $group: { _id: { id: "$cause._id", name: "$cause.name" } } }, 	
      ]);
			causas = causas.map((causa) => {
				return {...causa["_id"]};
			});
    } catch (err) {
      console.log("Error::", err);
    }
    return causas;
  }
}

module.exports = new CausaRepository();
