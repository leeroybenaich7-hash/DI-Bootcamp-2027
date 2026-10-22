# ============================================================
# Week 1 - Day 5 - Mini-Project #2 : Hangman
# ============================================================
# Use Python to create a Hangman game.
#
# - The computer chooses a random word and marks stars for each letter of each word.
# - Then the player will guess a letter.
# - If that letter is in the word(s) then the computer fills the letter in all
#   the correct positions of the word.
# - If the letter isn't in the word(s) then add a body part to the gallows
#   (head, body, left arm, right arm, left leg, right leg).
# - The player will continue guessing letters until they can either solve the
#   word(s) (or phrase) or all six body parts are on the gallows.
# - The player can't guess the same letter twice.
#
# Starter code:
#   import random
#   wordslist = ['correction', 'childish', 'beach', 'python', 'assertive',
#                'interference', 'complete', 'share', 'credit card', 'rush', 'south']
#   word = random.choice(wordslist)
# ============================================================

import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive',
             'interference', 'complete', 'share', 'credit card', 'rush', 'south']

BODY_PARTS = ["head", "body", "left arm", "right arm", "left leg", "right leg"]

# One drawing for each number of mistakes (0 to 6)
GALLOWS = [
    """
     +---+
     |   |
         |
         |
         |
    =======""",
    """
     +---+
     |   |
     O   |
         |
         |
    =======""",
    """
     +---+
     |   |
     O   |
     |   |
         |
    =======""",
    """
     +---+
     |   |
     O   |
    /|   |
         |
    =======""",
    """
     +---+
     |   |
     O   |
    /|\\  |
         |
    =======""",
    """
     +---+
     |   |
     O   |
    /|\\  |
    /    |
    =======""",
    """
     +---+
     |   |
     O   |
    /|\\  |
    / \\  |
    =======""",
]


def hidden_word(word, guessed_letters):
    """Show the guessed letters and a star for the others (spaces stay visible)."""
    result = ""
    for letter in word:
        if letter == " " or letter in guessed_letters:
            result += letter
        else:
            result += "*"
    return result


def ask_letter(guessed_letters):
    """Ask for one new letter."""
    while True:
        letter = input("Guess a letter: ").strip().lower()
        if len(letter) != 1 or not letter.isalpha():
            print("Please enter one letter.")
        elif letter in guessed_letters:
            print("You already guessed this letter, try another one.")
        else:
            return letter


def play():
    word = random.choice(wordslist)
    guessed_letters = []
    mistakes = 0

    print("Welcome to HANGMAN!")

    while True:
        print(GALLOWS[mistakes])
        print("Word:", hidden_word(word, guessed_letters))
        if guessed_letters:
            print("Letters tried:", ", ".join(guessed_letters))

        letter = ask_letter(guessed_letters)
        guessed_letters.append(letter)

        if letter in word:
            print(f"Good job, '{letter}' is in the word!")
        else:
            print(f"Sorry, '{letter}' is not in the word. You lose your {BODY_PARTS[mistakes]}!")
            mistakes += 1

        if "*" not in hidden_word(word, guessed_letters):
            print("\nWord:", word)
            print("You won! Well done!")
            break

        if mistakes == len(BODY_PARTS):
            print(GALLOWS[mistakes])
            print(f"Game over! The word was: {word}")
            break


if __name__ == "__main__":
    play()
