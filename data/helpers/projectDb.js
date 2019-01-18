const db = require("../dbConfig");
module.exports = {
  get: async () => {
    let query = await db("project");
    if (query.length) {
      return query;
    }
    return [];
  },
  getById: async id => {
    let query = await db("project")
      .where({ "project.id": id })
      .first();

    let actionQuery = await db("action").where({ project_id: id });
    let result = { ...query, actions: actionQuery };

    return result;
  },
  insert: async project => {
    let query = await db("project").insert(project);
    return query;
  },
  remove: async id => {
    let query = await db("project")
      .where({ id })
      .del();
    return query;
  },
  update: async (id, change) => {
    let actions = await db("action").where({ project_id: id });
    if (change.completed) {
      actions.map(action => {
        action.completed = 1;
      });
    } else {
      actions.map(action => {
        action.completed = 0;
      });
    }

    let query = await db("project")
      .where({ id })
      .update(change);

    return query;
  }
};
