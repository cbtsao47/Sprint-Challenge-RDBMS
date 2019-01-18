exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "Getting There",
          description: `A freelance writer and designer teamed up to do a weekly podcast about their daily lives as 20-somethings—and what you can learn from them in your own life.`,
          completed: false
        },
        {
          name: `Jim's Pancakes`,
          description: `A blog sharing pictures of the fancy pancakes founder of Shortstack, Jim Belosic, made for his daughter, along with instructions for how you can make them, too.`,
          completed: false
        },
        {
          name: "The Message is Medium Rare",
          description: `A blog about trying out different burgers and using them for design lessons and inspiration (really).`,
          completed: false
        }
      ]);
    });
};
