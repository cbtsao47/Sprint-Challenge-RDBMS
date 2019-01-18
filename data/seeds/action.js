exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("action")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("action").insert([
        {
          description: "Set up design",
          notes: `Get the design from the designer`,
          completed: false,
          project_id: 1
        },
        {
          description: "Set up git",
          notes: `Setting up git flow`,
          completed: false,
          project_id: 1
        },
        {
          description: "Set up front end",
          notes: `Setting up the front end app`,
          completed: false,
          project_id: 1
        },
        {
          description: "Set up back end",
          notes: `Setting up the back end routes and servers`,
          completed: false,
          project_id: 1
        },
        {
          description: "Set up design",
          notes: `Get the design from the designer`,
          completed: false,
          project_id: 2
        },
        {
          description: "Set up git",
          notes: `Setting up git flow`,
          completed: false,
          project_id: 2
        },
        {
          description: "Set up front end",
          notes: `Setting up the front end app`,
          completed: false,
          project_id: 2
        },
        {
          description: "Set up back end",
          notes: `Setting up the back end routes and servers`,
          completed: false,
          project_id: 2
        },
        {
          description: "Set up design",
          notes: `Get the design from the designer`,
          completed: false,
          project_id: 3
        },
        {
          description: "Set up git",
          notes: `Setting up git flow`,
          completed: false,
          project_id: 3
        },
        {
          description: "Set up front end",
          notes: `Setting up the front end app`,
          completed: false,
          project_id: 3
        },
        {
          description: "Set up back end",
          notes: `Setting up the back end routes and servers`,
          completed: false,
          project_id: 3
        }
      ]);
    });
};
