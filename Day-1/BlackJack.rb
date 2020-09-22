#Players
class Player
    attr_accessor :name, :hand, :bankroll, :total

    def initialize name, hand, bankroll, total
        @name = name
        @hand = []
        @bankroll = bankroll
        @total = total
    end
    def get_score 
        score = 0
        @hand.each { |card| 
            score = score + card.value
        }
        return score
    end
    def winner (player, computer)
        if score == 21
            puts "Player has won!"
            player.total + 10
        else
            put "Computer has won!"
            player.total - 10
        end
    end
end

#Players
human = Player.new "Human", [], 100, 0
computer = Player.new "Computer", [], 10000, 0

#Cards
class Card
    attr_accessor :face, :suit, :value
    def initialize face, suit, value
        @face = face
        @suit = suit
        @value = value
    end
end

class Deck
    def initialize 
        @faces = [*(2...10), 'Jack', 'Queen', 'King', 'Ace']
        @suits = ['clubs', 'spades', 'hearts', 'diamonds']
        @cards = []
        @faces.each do |face|
            if face.class == Integer
                value = face
            elsif face == 'Ace'
                value = 11
            else
                value = 10
            end
            @suits.each do |suit|
                @cards << Card.new(face, suit, value)
            end
        end
        @cards.shuffle!
    end
    
    def deal (num, player)
        player.hand += @cards.shift(2)
    end

end




puts "Bam! Take your cards!"

deck = Deck.new
deck.deal(2, human)
puts "The #{human.hand[0].face} of #{human.hand[0].suit}"
puts "The #{human.hand[1].face} of #{human.hand[1].suit}"
puts "The player has a total of #{human.get_score()} with a bank of #{human.bankroll}"

deck.deal(2, computer)
puts "The dealer has one card showing:"
puts "The #{computer.hand[0].face} of #{computer.hand[0].suit}"

def gameplay (deck, player)
    while true do
        answer = gets.chomp
        if answer == "d"
            deck.deal(1, player)
            puts "The #{player.hand[0].face} of #{player.hand[0].suit}"
            puts "The player has a total of #{player.get_score()} with a bank of #{player.bankroll}"
        else 
            return
        end

    end
end
gameplay(deck, human)