exports.up = function(knex, Promise) {
  return knex.schema.createTable("action", table => {
    table.increments();
    table.string("description", 255).notNullable();
    table.string("notes", 255);
    table.boolean("completed");
    table.integer("project_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("action");
};
