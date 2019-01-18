exports.up = function(knex, Promise) {
  return knex.schema.createTable("context", table => {
    table.increments();
    table.string("requirement", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("context");
};
