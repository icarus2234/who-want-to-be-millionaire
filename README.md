# Who Wants to Be a Millionaire?

A simple quiz game inspired by the popular TV show "Who Wants to Be a Millionaire?".

[Demo]()

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/icarus2234/who-want-to-be-millionaire.git
   cd who-wants-to-be-millionaire
   ```
2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Start the development server:

   ```sh
    pnpm dev
   ```

### Project Structure

The project is structured based on modules, making it easy to manage and scale. Here is an overview of the main modules:

## Home

The home module contains the home page of the application. It displays the game title and a button to start the game. This module initializes the game and navigates to the game module when the start button is clicked.

## Quiz

The quiz module contains the game logic and components. It displays the questions, answers. It also handles the user's answer selection and displays the rewards based on the user's progress.

## End Game

The end game module displays the final result of the game. It shows the total reward won by the user and a button to restart the game. Also it clean store from game data.
