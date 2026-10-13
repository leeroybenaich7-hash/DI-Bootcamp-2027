# ============================================================
# Week 1 - Day 2 - Exercises XP
# ============================================================


# ------------------------------------------------------------
# Exercise 1: Favorite Numbers
# Instructions
# Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your
# friend's favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set
# called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.
# ------------------------------------------------------------

my_fav_numbers = {7, 10, 23}
my_fav_numbers.add(43)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)  # remove the last number we added
print("My favorite numbers:", my_fav_numbers)

friend_fav_numbers = {3, 7, 18}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)


# ------------------------------------------------------------
# Exercise 2: Tuple
# Instructions
# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation.
# Think about why you can't add more integers to a tuple.
# ------------------------------------------------------------

my_tuple = (1, 2, 3)
try:
    my_tuple.append(4)
except AttributeError as error:
    print("Error:", error)

# A tuple cannot be changed, but we can create a NEW tuple with more integers
new_tuple = my_tuple + (4, 5)
print("New tuple:", new_tuple)


# ------------------------------------------------------------
# Exercise 3: List Manipulation
# Instructions
# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list.
# Remove "Blueberries" from the list.
# Add "Kiwi" to the end of the list.
# Add "Apples" to the beginning of the list.
# Count how many times "Apples" appear in the list.
# Empty the list.
# Print the final state of the list.
# ------------------------------------------------------------

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print("Basket:", basket)
print("Number of Apples:", basket.count("Apples"))
basket.clear()
print("Final basket:", basket)


# ------------------------------------------------------------
# Exercise 4: Floats
# Instructions
# Recap: What is a float? What's the difference between a float and an integer?
# Create a list containing the following sequence of mixed types:
# floats and integers: 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?
# ------------------------------------------------------------

# A float is a number with a decimal point (ex: 2.5).
# An integer is a whole number without a decimal point (ex: 2).

numbers = []
for i in range(3, 11):
    number = i / 2
    if number == int(number):
        number = int(number)  # keep whole numbers as integers
    numbers.append(number)
print(numbers)


# ------------------------------------------------------------
# Exercise 5: For Loop
# Instructions
# Write a for loop to print all numbers from 1 to 20, inclusive.
# Write another for loop that prints every number from 1 to 20 where the
# index is even.
# ------------------------------------------------------------

for number in range(1, 21):
    print(number)

numbers_1_to_20 = list(range(1, 21))
for index in range(len(numbers_1_to_20)):
    if index % 2 == 0:
        print(numbers_1_to_20[index])


# ------------------------------------------------------------
# Exercise 6: While Loop
# Instructions
# Use an input to ask the user to enter their name.
# Using a while True loop, check if the user gave a proper name
# (not digits and at least 3 letters long)
# hint: check for the method isdigit()
# if the input is incorrect, keep asking for the correct input until it is correct
# if the input is correct print "thank you" and break the loop
# ------------------------------------------------------------

while True:
    name = input("Enter your name: ")
    if name.isdigit() or len(name) < 3:
        print("Please enter a proper name (no digits, at least 3 letters).")
    else:
        print("thank you")
        break


# ------------------------------------------------------------
# Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruits (they can input several fruits,
# separated by spaces).
# Store these fruits in a list.
# Ask the user to input the name of any fruit.
# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"
# ------------------------------------------------------------

favorite_fruits = input("Enter your favorite fruits (separated by spaces): ").split()
fruit = input("Enter the name of any fruit: ")

if fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


# ------------------------------------------------------------
# Exercise 8: Pizza Toppings
# Instructions
# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.
# ------------------------------------------------------------

toppings = []
while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping == "quit":
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + len(toppings) * 2.5
print("Your toppings:", ", ".join(toppings))
print(f"Total cost: ${total_cost:.2f}")


# ------------------------------------------------------------
# Exercise 9: Cinemax Tickets
# Instructions
# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.
#
# Bonus:
# Imagine a group of teenagers wants to see a restricted movie
# (only for ages 16-21).
# Write a program to:
# Ask for each person's age.
# Remove anyone who isn't allowed to watch.
# Print the final list of attendees.
# ------------------------------------------------------------

family_size = int(input("How many people in the family? "))
total = 0
for person in range(family_size):
    age = int(input(f"Age of person {person + 1}: "))
    if age < 3:
        total += 0
    elif age <= 12:
        total += 10
    else:
        total += 15
print(f"Total ticket cost: ${total}")

# Bonus
group_size = int(input("How many teenagers in the group? "))
attendees = []
for person in range(group_size):
    name = input(f"Name of person {person + 1}: ")
    age = int(input(f"Age of {name}: "))
    attendees.append([name, age])

for attendee in attendees[:]:
    if attendee[1] < 16 or attendee[1] > 21:
        attendees.remove(attendee)

print("Final list of attendees:", [attendee[0] for attendee in attendees])
