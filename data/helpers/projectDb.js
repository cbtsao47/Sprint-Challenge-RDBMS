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
    console.log(actionQuery);
    let result = { ...query, actions: actionQuery };
    return result;
  },
  insert: async project => {
    let query = await db("project").insert(project);
    return query;
  }
};
