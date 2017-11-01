exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_posts', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.text('body').notNullable()
    table.string("author").notNullable()
    table.string("image_url").notNullable()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog_posts')
};
