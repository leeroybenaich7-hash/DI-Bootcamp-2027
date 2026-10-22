# ============================================================
# Week 1 - Day 5 - Daily Challenge : Challenges
# ============================================================

# ------------------------------------------------------------
# Challenge 1 : Sorting
# Instructions:
# Write a Python program that takes a single string of words as input,
# where the words are separated by commas (e.g., 'apple,banana,cherry').
# The program should output these words sorted in alphabetical order,
# with the sorted words also separated by commas.
# Step 1: Get input  /  Step 2: Split the string  /  Step 3: Sort the list
# Step 4: Join the sorted list  /  Step 5: Print the result
# Expected output: input "without,hello,bag,world" -> "bag,hello,without,world"
# ------------------------------------------------------------

words = input("Enter words separated by commas: ")
word_list = words.split(",")
word_list.sort()
sorted_words = ",".join(word_list)
print(sorted_words)


# ------------------------------------------------------------
# Challenge 2 : Longest Word
# Instructions:
# Write a function that takes a sentence as input and returns the longest
# word in the sentence. If there are multiple longest words, return the
# first one encountered. Characters like apostrophes, commas, periods,
# etc., should be considered part of the word.
# Expected output:
# longest_word("Margaret's toy is a pretty doll.") should return "Margaret's".
# longest_word("A thing of beauty is a joy forever.") should return "forever.".
# longest_word("Forgetfulness is by all means powerless!") should return "Forgetfulness".
# ------------------------------------------------------------

def longest_word(sentence):
    longest = ""
    for word in sentence.split():
        if len(word) > len(longest):
            longest = word
    return longest


print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))
