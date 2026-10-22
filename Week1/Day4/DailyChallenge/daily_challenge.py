# ============================================================
# Week 1 - Day 4 - Daily Challenge : Coffee Shop Menu Manager
# ============================================================

# ------------------------------------------------------------
# You have been hired to help a small coffee shop manage its product menu
# using Python.
#
# Write a program that:
# 1. Stores the coffee shop menu in memory.
# 2. Allows the user to: Create a new item, Read (display) all items,
#    Update the price of an item, Delete an item, Exit.
#
# Your program must be organized into functions.
# Do not put all the logic inside one endless while loop.
#
# 1. Data structure
# The menu is a dictionary called menu.
# The key is the drink name (string), the value is the price (float).
# You MUST start with:
# menu = {"espresso": 7.0, "latte": 12.0, "cappuccino": 10.0}
#
# 2. Required functions
# a) show_menu(menu_dict)
#    Prints all items in the format: drink - price₪
#    If the menu is empty, print: "The menu is empty."
#    Example:
#      Current menu:
#      espresso - 7.0₪
#      latte - 12.0₪
#      cappuccino - 10.0₪
#    Only prints, returns nothing.
# b) add_item(menu_dict)
#    Asks the user for the drink name and the price, adds it to the dictionary.
#    If the drink already exists, print "Item already exists!" and do not
#    change the price.
#      Enter new drink name: mocha
#      Enter price: 14
#      "mocha" added!
# c) update_price(menu_dict)
#    Asks which drink to update. If it exists: ask for the new price,
#    update it, print "Price updated!". If not: print "Item not found."
# d) delete_item(menu_dict)
#    Asks which drink to remove. If it exists: delete it and print
#    "Item deleted." Otherwise: print "Item not found."
# e) show_options()
#    Prints:
#      What would you like to do?
#      1. Show menu
#      2. Add item
#      3. Update price
#      4. Delete item
#      5. Exit
# f) run_coffee_shop()
#    Main controller: keep looping, show the options, ask the user for a
#    choice (1-5) and call the right function.
#    Invalid choice -> print "Invalid choice, try again."
#    Choice 5 stops the loop and prints "Goodbye!"
#
# 5. Extra challenges (only if you finish early)
# 1. Validation: negative prices are not allowed. If the user enters a
#    negative price, print "Invalid price." and do not change anything.
# 2. Search: add search_item(menu_dict) that asks for a drink name and
#    prints the price if found, otherwise "Not in the menu." (option 6).
# 3. Discount day: add apply_discount(menu_dict, percent) that reduces
#    every price by a percentage (option 7).
# ------------------------------------------------------------

# Initial data
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}


def ask_price(message):
    """Ask for a price and return it, or None if it is not valid."""
    try:
        price = float(input(message))
    except ValueError:
        print("Invalid price.")
        return None
    if price < 0:
        print("Invalid price.")
        return None
    return price


def show_menu(menu_dict):
    """Print all drinks and prices."""
    if len(menu_dict) == 0:
        print("The menu is empty.")
        return
    print("Current menu:")
    for drink, price in menu_dict.items():
        print(f"{drink} - {price}₪")


def add_item(menu_dict):
    """Add a new drink to the menu."""
    name = input("Enter new drink name: ").strip().lower()
    if name in menu_dict:
        print("Item already exists!")
        return
    price = ask_price("Enter price: ")
    if price is None:
        return
    menu_dict[name] = price
    print(f'"{name}" added!')


def update_price(menu_dict):
    """Change the price of an existing drink."""
    name = input("Which drink do you want to update? ").strip().lower()
    if name not in menu_dict:
        print("Item not found.")
        return
    price = ask_price("Enter the new price: ")
    if price is None:
        return
    menu_dict[name] = price
    print("Price updated!")


def delete_item(menu_dict):
    """Remove a drink from the menu."""
    name = input("Which drink do you want to delete? ").strip().lower()
    if name in menu_dict:
        del menu_dict[name]
        print("Item deleted.")
    else:
        print("Item not found.")


def search_item(menu_dict):
    """Extra: print the price of one drink."""
    name = input("Which drink are you looking for? ").strip().lower()
    if name in menu_dict:
        print(f"{name} - {menu_dict[name]}₪")
    else:
        print("Not in the menu.")


def apply_discount(menu_dict, percent):
    """Extra: reduce every price by a percentage."""
    for drink in menu_dict:
        menu_dict[drink] = round(menu_dict[drink] * (100 - percent) / 100, 2)
    print(f"{percent}% discount applied!")


def show_options():
    """Print the available actions."""
    print()
    print("What would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")
    print("6. Search item")
    print("7. Happy hour discount")


def run_coffee_shop():
    """Main loop of the program."""
    while True:
        show_options()
        choice = input("> ").strip()
        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break
        elif choice == "6":
            search_item(menu)
        elif choice == "7":
            apply_discount(menu, 10)
        else:
            print("Invalid choice, try again.")


# Start the program
run_coffee_shop()
