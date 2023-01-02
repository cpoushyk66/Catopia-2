# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts 'User Seeding'
u1 = User.create(username: "thecharlottewitch", password: "test", image: "https://pbs.twimg.com/profile_images/1592256182835724289/femZcIot_400x400.jpg", display_name: "The Charlotte Witch")

puts 'Post Seeding'
p1 = Post.create(user_id: u1.id, header: "Test Post without Cat Picture", content: "Random cat info about non existent cat in my bedroom mirror I see twice a week unless it's a leap year and then it becomes a daily occurance.")

p2 = Post.create(user_id: u1.id, header: "Test Post with Cat Pictures", content: "Nevermind, it was just my phone. Here's the pics...")
p2_pic_1 = PostPicture.create(post_id: p2.id, picture_url: "https://i.ytimg.com/vi/NEV6wHUYwr8/maxresdefault.jpg")
p2_pic_2 = PostPicture.create(post_id: p2.id, picture_url: "https://i.ytimg.com/vi/NEV6wHUYwr8/maxresdefault.jpg")
p2_pic_3 = PostPicture.create(post_id: p2.id, picture_url: "https://i.ytimg.com/vi/NEV6wHUYwr8/maxresdefault.jpg")

