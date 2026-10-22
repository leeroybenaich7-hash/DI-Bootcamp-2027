# ============================================================
# Week 1 - Day 4 - Exercises XP : Functions
# ============================================================

import random


# ------------------------------------------------------------
# Exercise 1: What Are You Learning?
# Goal: Create a function that displays a message about what you're learning.
#
# Step 1: Define a function named display_message().
#         This function should not take any parameters.
# Step 2: Print a message, e.g. "I am learning about functions in Python."
# Step 3: Call the function.
#
# Expected Output:
# I am learning about functions in Python.
# ------------------------------------------------------------

def display_message():
    print("I am learning about functions in Python.")


display_message()


# ------------------------------------------------------------
# Exercise 2: What's Your Favorite Book?
# Goal: Create a function that displays a message about a favorite book.
#
# Step 1: Define a function named favorite_book().
#         This function should accept one parameter called title.
# Step 2: The function should print a message like
#         "One of my favorite books is <title>".
# Step 3: Call favorite_book() and provide a book title as an argument.
#         For example: favorite_book("Alice in Wonderland").
# ------------------------------------------------------------

def favorite_book(title):
    print(f"One of my favorite books is {title}.")


favorite_book("Alice in Wonderland")


# ------------------------------------------------------------
# Exercise 3: Some Geography
# Goal: Create a function that describes a city and its country.
#
# Step 1: Define a function named describe_city().
#         It should accept two parameters: city and country.
#         Give the country parameter a default value, such as "Unknown".
# Step 2: Print a sentence like "<city> is in <country>".
# Step 3: Call describe_city() with and without the country argument.
#         Example: describe_city("Reykjavik", "Iceland") and describe_city("Paris").
#
# Expected Output:
# Reykjavik is in Iceland.
# Paris is in Unknown.
# ------------------------------------------------------------

def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")


describe_city("Reykjavik", "Iceland")
describe_city("Paris")


# ------------------------------------------------------------
# Exercise 4: Random
# Goal: Create a function that generates random numbers and compares them.
#
# Step 1: Import the random module.
# Step 2: Create a function that accepts a number between 1 and 100.
# Step 3: Inside the function, use random.randint(1, 100) to generate
#         a random integer between 1 and 100.
# Step 4: If they are the same, print a success message. Otherwise, print
#         a fail message and display both numbers.
# Step 5: Call the function with a number between 1 and 100.
#
# Expected Output:
# Success! (if the numbers match)
# Fail! Your number: 50, Random number: 23 (if they don't match)
# ------------------------------------------------------------

def compare_with_random(number):
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")


compare_with_random(50)


# ------------------------------------------------------------
# Exercise 5: Let's Create Some Personalized Shirts!
# Goal: Create a function to describe a shirt's size and message,
# with default values.
#
# Step 1: Define a function called make_shirt() with two parameters:
#         size and text.
# Step 2: Display a sentence summarizing the shirt's size and message.
# Step 3: Call the function.
# Step 4: Modify make_shirt() so that size has a default value of "large"
#         and text has a default value of "I love Python".
# Step 5: Call make_shirt() to make a large shirt with the default message,
#         a medium shirt with the default message, and a shirt of any size
#         with a different message.
# Step 6 (Bonus): Call make_shirt() using keyword arguments
#         (e.g., make_shirt(size="small", text="Hello!")).
#
# Expected Output:
# The size of the shirt is large and the text is I love Python.
# The size of the shirt is medium and the text is I love Python.
# The size of the shirt is small and the text is Custom message.
# ------------------------------------------------------------

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")


make_shirt()
make_shirt("medium")
make_shirt("small", "Custom message")
# Bonus: keyword arguments
make_shirt(size="small", text="Hello!")


# ------------------------------------------------------------
# Exercise 6: Magicians...
# Goal: Modify a list of magician names and display them in different ways.
#
# Step 1: Create a list called magician_names:
#         ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Step 2: Create a function show_magicians() that takes the list as a
#         parameter and prints the name of each magician.
# Step 3: Create a function make_great() that takes the list as a parameter
#         and uses a for loop to add "the Great" to each magician's name.
# Step 4: Call make_great() to modify the list, then call show_magicians().
#
# Expected Output:
# Harry Houdini the Great
# David Blaine the Great
# Criss Angel the Great
# ------------------------------------------------------------

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(names):
    for name in names:
        print(name)


def make_great(names):
    for i in range(len(names)):
        names[i] = names[i] + " the Great"


make_great(magician_names)
show_magicians(magician_names)


# ------------------------------------------------------------
# Exercise 7: Temperature Advice
# Goal: Generate a random temperature and provide advice based on the
# temperature range.
#
# Step 1: Create a function get_random_temp() that returns a random integer
#         between -10 and 40 degrees Celsius.
# Step 2: Create a function called main(). Inside this function:
#         Call get_random_temp() to get a temperature, store it in a variable
#         and print a friendly message like
#         "The temperature right now is 32 degrees Celsius."
# Step 3: Inside main(), provide advice based on the temperature:
#         Below 0°C: "Brrr, that's freezing! Wear some extra layers today."
#         Between 0°C and 16°C: "Quite chilly! Don't forget your coat."
#         Between 16°C and 23°C: "Nice weather."
#         Between 24°C and 32°C: "A bit warm, stay hydrated."
#         Between 32°C and 40°C: "It's really hot! Stay cool."
# Step 4 (Bonus): Modify get_random_temp() to return a random floating-point
#         number using random.uniform() for more accurate temperatures.
# Step 5 (Bonus): Instead of directly generating a random temperature, ask
#         the user for a month (1-12) and determine the season using
#         if/elif conditions. Modify get_random_temp() to return temperatures
#         specific to each season.
#
# Expected Output:
# The temperature right now is 32 degrees Celsius.
# It's really hot! Stay cool.
# ------------------------------------------------------------

def get_season(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    else:
        return "autumn"


def get_random_temp(season):
    # Bonus: a float temperature that depends on the season
    if season == "winter":
        temp = random.uniform(-10, 16)
    elif season == "spring":
        temp = random.uniform(5, 25)
    elif season == "summer":
        temp = random.uniform(20, 40)
    else:
        temp = random.uniform(5, 28)
    return round(temp, 1)


def main():
    month = int(input("Enter a month (1-12): "))
    while month < 1 or month > 12:
        month = int(input("Please enter a number between 1 and 12: "))

    season = get_season(month)
    temp = get_random_temp(season)
    print(f"It is {season}.")
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp < 24:
        print("Nice weather.")
    elif temp < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")


main()
