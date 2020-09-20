exports.up = function (knex) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments();
    table.string('preparation').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(null);
    table.timestamp('deleted_at').defaultTo(null);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('recipes');
};
