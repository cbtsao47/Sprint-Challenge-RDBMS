const db = require("../dbConfig");
module.exports = {
  get: async () => {
    let query = await db("action");
    if (query.length) {
      return query;
    }
    return [];
  },
  getById: async id => {
    let query = await db("action").where({ id });
    return query;
  },
  insert: async action => {
    let query = await db("action").insert(action);
    return query;
  }
};
