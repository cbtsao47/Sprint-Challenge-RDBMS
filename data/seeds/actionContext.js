exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actionContext")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actionContext").insert([
        { action_id: 1, context_id: 1 },
        { action_id: 2, context_id: 2 },
        { action_id: 2, context_id: 3 },
        { action_id: 3, context_id: 1 },
        { action_id: 4, context_id: 3 },
        { action_id: 5, context_id: 2 },
        { action_id: 6, context_id: 3 }
      ]);
    });
};
