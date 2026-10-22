# ============================================================
# Week 1 - Day 5 - Daily Challenge : Advanced Algorithm
# ============================================================
# Instructions:
# Here is a Python code that generates a list of 20000 random numbers,
# called list_of_numbers, and a target number.
#
#   import random
#   list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
#   target_number = 3728
#
# Copy this code, and create a program that finds within list_of_numbers
# all the pairs of numbers that sum to the target number.
# For example:
#   1000 and 2728 sums to the target_number 3728
#   1864 and 1864 sums to the target_number 3728
# ============================================================

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

# Checking every pair with two loops would mean 200 million comparisons.
# Instead, we go through the list once and remember the numbers already seen:
# for each number, the "partner" we need is target_number - number.
seen = set()
pairs = set()

for number in list_of_numbers:
    partner = target_number - number
    if partner in seen:
        pairs.add((min(number, partner), max(number, partner)))
    seen.add(number)

for first, second in sorted(pairs):
    print(f"{first} and {second} sums to the target_number {target_number}")

print(f"\nTotal: {len(pairs)} different pairs found.")
