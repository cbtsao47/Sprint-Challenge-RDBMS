exports.up = function(knex, Promise) {
  return knex.schema.createTable("actionContext", table => {
    table.increments();
    table
      .integer("action_id")
      .references("id")
      .inTable("action");
    table
      .integer("context_id")
      .references("id")
      .inTable("context");
    table
      .index(["action_id", "context_id"])
      .unique(["action_id", "context_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actionContext");
};
