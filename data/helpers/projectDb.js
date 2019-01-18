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
      .leftJoin("action", "project.id", "action.project_id")
      .where({ "project.id": id });
    return query;
  },
  insert: async project => {
    let query = await db("project").insert(project);
    return query;
  }
};
