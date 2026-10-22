# ============================================================
# Week 1 - Day 4 - Daily Challenge Gold : Solve the Matrix
# ============================================================
# Instructions:
# Given a "Matrix" string, decode the hidden message inside.
# Step 1: Transform the string into a 2D list (list of lists), one inner list per row.
# Step 2: Neo reads the matrix column by column, from top to bottom,
#         starting from the leftmost column.
# Step 3: Select only the alpha characters (letters).
# Step 4: Replace every group of symbols (non-alpha characters) between
#         two alpha characters with a space.
# Step 5: Build and print the decoded message.
# ============================================================

MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a 
#t%'''

# Step 1: Convert the string to a 2D list
rows = MATRIX_STR.strip("\n").split("\n")
width = max(len(row) for row in rows)
matrix = [list(row.ljust(width)) for row in rows]

# Step 2: Read the matrix column by column
column_text = ""
for col in range(width):
    for row in matrix:
        column_text += row[col]

# Step 3 + 4: Keep the letters, replace symbols between letters with one space
decoded_message = ""
symbols_in_between = False
for char in column_text:
    if char.isalpha():
        if symbols_in_between and decoded_message:
            decoded_message += " "
        decoded_message += char
        symbols_in_between = False
    else:
        symbols_in_between = True

# Step 5: Print the decoded message
print(decoded_message)
