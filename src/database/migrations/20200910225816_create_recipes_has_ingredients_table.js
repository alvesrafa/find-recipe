
exports.up = function(knex) {
  return knex.schema.createTable("recipes_has_ingredients", function (table) {
    table.increments();
    table.integer("id_recipe").unsigned().references("id").inTable("recipes");
    table
      .integer("id_ingredient")
      .unsigned()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("recipes_has_ingredients");
};
