const tableName = "users";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id");
    table.string("firstname");
    table.string("lastname");
    table.text("bio");
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
