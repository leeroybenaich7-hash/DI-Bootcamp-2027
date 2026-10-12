# ============================================================
# Week 1 - Day 1 - Daily Challenge: Build up a string
# ============================================================
# Instructions:
# 1. Ask for User Input:
#    The string must be exactly 10 characters long.
# 2. Check the Length of the String:
#    If the string is less than 10 characters, print: "String not long enough."
#    If the string is more than 10 characters, print: "String too long."
#    If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps.
# 3. Print the First and Last Characters:
#    Once the string is validated, print the first and last characters.
# 4. Build the String Character by Character:
#    Using a for loop, construct and print the string character by character.
#    Start with the first character, then the first two characters, and so on,
#    until the entire string is printed.
# 5. Bonus: Jumble the String (Optional)
#    As a bonus, try shuffling the characters in the string and print the newly jumbled string.
#    Hint: You can use the random.shuffle function to shuffle a list of characters.
# ============================================================

import random

# 1. Ask for user input
text = input("Enter a string of exactly 10 characters: ")

# 2. Check the length of the string
if len(text) < 10:
    print("String not long enough.")
elif len(text) > 10:
    print("String too long.")
else:
    print("Perfect string")

    # 3. Print the first and last characters
    print(text[0])
    print(text[-1])

    # 4. Build the string character by character
    built = ""
    for char in text:
        built += char
        print(built)

    # 5. Bonus: jumble the string
    letters = list(text)
    random.shuffle(letters)
    print("".join(letters))
