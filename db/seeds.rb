# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts 'User Seeding'

u1 = User.create(username: "thecharlottewitch", password: "test", image: "https://pbs.twimg.com/profile_images/1592256182835724289/femZcIot_400x400.jpg", display_name: "The Charlotte Witch")
u2 = User.create(username: "thecatoholic", password: "test", image: "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-70.jpg", display_name: "The Cat-O-Holic")
u3 = User.create(username: "chakramdealer", password: "test", image: "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-30.jpg", display_name: "Chakra Queen")
u4 = User.create(username: "calico_jack", password: "test", image: "https://i.redd.it/5ggvohgsxmu41.jpg", display_name: "Calico Jack <3")
u5 = User.create(username: "punkin_king", password: "test", image: "https://i.pinimg.com/originals/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg", display_name: "The Real Punkin King")
u6 = User.create(username: "oreomaster", password: "test", image: "http://cdn.shopify.com/s/files/1/0344/6469/articles/i22o21k3vc821.jpg?v=1637635743", display_name: "Oreo Master")
u7 = User.create(username: "tortty", password: "test", image: "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-67.jpg", display_name: "Tortty Lover")
u8 = User.create(username: "husky_mom_2022", password: "test", image: "https://ih1.redbubble.net/image.1167522717.1832/pp,840x830-pad,1000x1000,f8f8f8.jpg", display_name: "Husky Momma")
u9 = User.create(username: "kitty_mew_mew", password: "test", image: "https://preview.redd.it/srxk58utd0o61.jpg?width=284&format=pjpg&auto=webp&s=868355a9284433976d666533f1be10aa5901008e", display_name: "Kitty Mew Mew")
u10 = User.create(username: "nyan_cat", password: "test", image: "https://i.pinimg.com/474x/6c/58/6e/6c586e53ae6ae349fd1a0eda40e2081e--nyan-cat-fandoms-unite.jpg", display_name: "Nya Nya Nyan Cat")
u11 = User.create(username: "paw_thrower", password: "test", image: "https://static8.depositphotos.com/1034382/1070/i/450/depositphotos_10708457-stock-photo-angry-cat-hissing-aggressive.jpg", display_name: "Throw These Paws")
u12 = User.create(username: "zoomy_hour", password: "test", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XCPtY8YFoU2RiexHhYiyh18y8genGEEUhMcSHXoGjKyf1Up6dGreFftkh_e8M1k9Ucw&usqp=CAU", display_name: "Zoooommmmmyy Hour")
u13 = User.create(username: "kibble_muncher", password: "test", image: "https://i.pinimg.com/280x280_RS/91/db/ef/91dbef82b8061fe299bb887e12f6247b.jpg", display_name: "Kibble Muncher")
u14 = User.create(username: "feline_fine", password: "test", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLPufM0ODujqACYwbEBGNPtTVh-BKM2mYS2vfNWMnGzCWxHPdtqNO8CSY61JBt1ZPosI&usqp=CAU", display_name: "Feline Fine")
u15 = User.create(username: "tacocat", password: "test", image: "https://pbs.twimg.com/profile_images/1403461884922245120/q4yZF8f2_400x400.jpg", display_name: "Taco caT XD")

puts "Seeded #{User.count} Users"

puts "Seeding Follower Links"

# The Charlotte Witch -> The Cat-O-Holic
fl1 = FollowerLink.create(followed_id: u2.id, follower_id: u1.id)
# Chakram Queen -> The Cat-O-Holic
fl2 = FollowerLink.create(followed_id: u2.id, follower_id: u3.id)
# Calico Jack <3 -> The Cat-O-Holic
fl3 = FollowerLink.create(followed_id: u2.id, follower_id: u4.id)
# The Real Punkin King -> The Cat-O-Holic
fl4 = FollowerLink.create(followed_id: u2.id, follower_id: u5.id)
# The Cat-O-Holic -> The Charlotte Witch
fl5 = FollowerLink.create(followed_id: u1.id, follower_id: u2.id)
# Chakram Queen -> The Charlotte Witch
fl6 = FollowerLink.create(followed_id: u1.id, follower_id: u3.id)
# The Charlotte Witch -> Calico Jack
fl7 = FollowerLink.create(followed_id: u4.id, follower_id: u1.id)


puts "Seeded #{FollowerLink.count} FollowerLinks"

puts 'Post Seeding'
p1 = Post.create(user_id: u1.id, header: "Test Post without Cat Picture", content: "Random cat info about non existent cat in my bedroom mirror I see twice a week unless it's a leap year and then it becomes a daily occurance.", likes: 20)

p2 = Post.create(user_id: u1.id, header: "Test Post with Cat Pictures", content: "Nevermind, it was just my phone. Here's the pics...", likes: 27)
p2_pic_1 = PostPicture.create(post_id: p2.id, picture_url: "https://i.ytimg.com/vi/NEV6wHUYwr8/maxresdefault.jpg")
p2_pic_2 = PostPicture.create(post_id: p2.id, picture_url: "https://i.ytimg.com/vi/NEV6wHUYwr8/maxresdefault.jpg")
p2_pic_3 = PostPicture.create(post_id: p2.id, picture_url: "https://i.ytimg.com/vi/NEV6wHUYwr8/maxresdefault.jpg")

p3 = Post.create(user_id: u1.id, header: "Test Post without Cat Picture", content: "Random cat info about non existent cat in my bedroom mirror I see twice a week unless it's a leap year and then it becomes a daily occurance.", likes: 20)
p4 = Post.create(user_id: u1.id, header: "Test Post without Cat Picture", content: "Random cat info about non existent cat in my bedroom mirror I see twice a week unless it's a leap year and then it becomes a daily occurance.", likes: 20)
p5 = Post.create(user_id: u1.id, header: "Test Post without Cat Picture", content: "Random cat info about non existent cat in my bedroom mirror I see twice a week unless it's a leap year and then it becomes a daily occurance.", likes: 20)
p6 = Post.create(user_id: u1.id, header: "Test Post without Cat Picture", content: "Random cat info about non existent cat in my bedroom mirror I see twice a week unless it's a leap year and then it becomes a daily occurance.", likes: 20)