exports.seed = function(knex, Promise) {
  return knex('blog_posts').del()
    .then(function () {
      return Promise.all([
        createPost(
          'Meet the Kerala locals – the God’s Own Country',
          'The advantage of travelling solo is that you meet more new people and learn their life stories. The face and the eyes of a person speak every language. The friendly smile connects you no matter of your nationality and it is the best advertisement for each destination. The happy people of Kerala are the heart of the state. They will make you feel at home and wish to come back. To capture life in a photo is a challenge but I keep trying to do it while I am travelling. The innocence of a child or the experience of an adult, all this you can read looking at their face. And if eyes are the door to the soul of a person, so the Kerala locals open doors for you.',
          'bettyTravels',
          'http://bettytravels.com/wp-content/uploads/2016/03/12.jpg',
          '2017-01-01'
        ),
        createPost(
          'Being A Child (Again) in Kerala',
          'Some 1900m above sea level in Munnar with 2 broken finger nails (a slightly bloody affair), I am still smiling and happy. Remember how we played, fell, picked up ourselves and went on to play when we were kids? That is what Kerala does to you. There must be something about the food, air and the people in Kerala that recharges you!',
          'Evelyn Ang Loo',
          'https://4.bp.blogspot.com/-qMSjrJ2yuMI/WNxgN260EcI/AAAAAAACfn4/J_nI-Ket9u4D8r5Lq6O0EYrkV82HfTsJgCLcB/s1600/swing.jpg',
          '2017-05-26'
        ),
        createPost(
          "Kumarakom: Life in a Kerala Village",
          "The kids were intently watching our group — mostly foreigners — wandering in one of the backyards in their village. One shyly peeked through the plants and smiled as I eyed her. This was one of the scenes when we went for a responsible tourism visit in a local community in Kumarakom. It is located at the southern part of Kerala, India and our destination during the Day 3 of our Kerala Blog ",
          'Claire Algarme',
          'https://i2.wp.com/firsttimetravels.com/wp-content/uploads/2017/04/IMG_20170322_161422.jpg?w=1024',
          '2016-01-05'
        ),
      ])
    })

  function createPost(title, body, author, image_url, created_at) {
    return knex('blog_posts')
      .insert({title, body, author, image_url, created_at})
      .then(() => {
        return knex.raw(
          "SELECT setval('blog_posts_id_seq', (SELECT MAX(id) FROM blog_posts))"
        )
      })
  }
};
