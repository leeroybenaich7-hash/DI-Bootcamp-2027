# ============================================================
# Week 1 - Day 2 - Daily Challenge : Lists & Strings
# ============================================================


# ------------------------------------------------------------
# Challenge 1: Multiples of a Number
# Instructions
# 1. Ask the user for two inputs:
#    A number (integer).
#    A length (integer).
# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.
#
# Example 1:
# Input: number: 7, length: 5
# Output: [7, 14, 21, 28, 35]
#
# Example 2:
# Input: number: 12, length: 10
# Output: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
#
# Example 3:
# Input: number: 17, length: 6
# Output: [17, 34, 51, 68, 85, 102]
# ------------------------------------------------------------

number = int(input("number: "))
length = int(input("length: "))

multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)
print(multiples)


# ------------------------------------------------------------
# Challenge 2: Remove Consecutive Duplicate Letters
# Instructions
# 1. Ask the user for a string.
# 2. Write a program that processes the string to remove consecutive
#    duplicate letters.
#    The new string should only contain unique consecutive letters.
#    For example, "ppoeemm" should become "poem" (removes consecutive
#    duplicates like 'pp', 'ee', and 'mm').
# 3. The program should print the modified string.
#
# Example 1: "ppoeemm" -> "poem"
# Example 2: "wiiiinnnnd" -> "wind"
# Example 3: "ttiiitllleeee" -> "title"
# Example 4: "cccccaaarrrbbonnnnn" -> "carbon"
#
# Notes:
# The final string will not include any consecutive duplicates, but
# non-consecutive duplicates are allowed.
# Example: In "recursive", the two 'r's and two 'e's are allowed because
# they are not consecutive.
# ------------------------------------------------------------

word = input("user's word: ")

new_word = ""
for letter in word:
    if new_word == "" or letter != new_word[-1]:
        new_word += letter
print(new_word)
