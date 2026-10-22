# ============================================================
# Week 1 - Day 5 - Mini-Project : Tic Tac Toe
# ============================================================
# Goal: Create a Tic Tac Toe game in Python where two players can play
# against each other in the command line.
#
# Tic Tac Toe is played on a 3x3 grid. Players take turns marking empty
# squares with their symbol ("O" or "X"). The first player to get 3 of
# their symbols in a row (horizontally, vertically or diagonally) wins.
# If all squares are full and no player has 3 in a row, it's a tie.
#
# Step 1: Represent the game board with a 2D list. Each cell starts empty (' ').
# Step 2: display_board() shows the current state of the board.
# Step 3: player_input(player) asks the player for a position (row and column),
#         and checks it is in range and that the cell is empty.
# Step 4: check_win(board, player) returns True if the player has won
#         (rows, columns, diagonals), otherwise False.
# Step 5: A function checks if the game is a tie (board full and no winner).
# Step 6: play() runs the game: a while loop that displays the board, gets the
#         move, updates the board, checks for a winner or a tie, then switches
#         player. At the end, display the final result.
# ============================================================


def create_board():
    """Return a new empty 3x3 board."""
    return [[" " for _ in range(3)] for _ in range(3)]


def display_board(board):
    """Print the board in a readable way."""
    print()
    print("     1   2   3")
    for index, row in enumerate(board):
        print(f" {index + 1}   {row[0]} | {row[1]} | {row[2]}")
        if index < 2:
            print("    ---+---+---")
    print()


def ask_number(message):
    """Ask for a number between 1 and 3, until the answer is valid."""
    while True:
        answer = input(message).strip()
        if answer in ("1", "2", "3"):
            return int(answer) - 1
        print("Please enter 1, 2 or 3.")


def player_input(board, player):
    """Ask the player for an empty cell and return (row, col)."""
    while True:
        print(f"Player {player}, it's your turn.")
        row = ask_number("Row (1-3): ")
        col = ask_number("Column (1-3): ")
        if board[row][col] == " ":
            return row, col
        print("This cell is already taken, choose another one.")


def check_win(board, player):
    """Return True if the player has 3 symbols in a row."""
    for i in range(3):
        # Rows and columns
        if all(board[i][j] == player for j in range(3)):
            return True
        if all(board[j][i] == player for j in range(3)):
            return True
    # Diagonals
    if all(board[i][i] == player for i in range(3)):
        return True
    if all(board[i][2 - i] == player for i in range(3)):
        return True
    return False


def check_tie(board):
    """Return True if every cell is taken."""
    return all(cell != " " for row in board for cell in row)


def switch_player(player):
    """Return the other player's symbol."""
    return "O" if player == "X" else "X"


def play():
    """Main game loop."""
    print("Welcome to TIC TAC TOE!")
    board = create_board()
    player = "X"

    while True:
        display_board(board)
        row, col = player_input(board, player)
        board[row][col] = player

        if check_win(board, player):
            display_board(board)
            print(f"Player {player} wins! Congratulations!")
            break

        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        player = switch_player(player)


if __name__ == "__main__":
    play()
