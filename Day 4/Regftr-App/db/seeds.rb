# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

15.times do
    Gift.create(
        description: Faker::Movie.title,
        value: Faker::Number.decimal(l_digits: 2),
        event: Faker::Date.between(from: '2010-10-09', to: '2019-06-14'),
        gift_giver: Faker::Superhero.name
    )
end
