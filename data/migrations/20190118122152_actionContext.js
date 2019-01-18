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
  });
};

exports.down = function(knex, Promise) {};
