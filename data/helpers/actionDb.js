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
    let query = await db("action")
      .where({ id })
      .first();
    return query;
  },
  insert: async action => {
    let query = await db("action").insert(action);
    return query;
  },
  remove: async id => {
    let query = await db("project")
      .where({ id })
      .del();
    return query;
  },
  update: async (id, change) => {
    let query = await db("project")
      .where({ id })
      .update(change);
    return query;
  }
};
