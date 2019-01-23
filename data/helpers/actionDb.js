const db = require("../dbConfig");
module.exports = {
  get: async () => {
    let query = await db("action");
    if (query) {
      return query;
    }
    return [];
  },
  getById: async id => {
    let query = await db("action")
      .join("actionContext", "action.id", "actionContext.action_id")
      .join("context", "context.id", "actionContext.context_id")
      .select("action.id", "context.location")
      .where({ "action.id": id });
    //   .join("context", "actionContext.context_id", "context.id")
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
