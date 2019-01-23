exports.up = function(knex, Promise) {
  return knex.schema.createTable("context", table => {
    table.increments();
    table.string("location", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("context");
};
