exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table.string("description", 255).notNullable();
    table.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
