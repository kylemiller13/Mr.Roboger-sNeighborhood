# Robogers Neighborhood

#### By Kyle Miller

#### This is a website that takes a number from the user and returns a range of numbers from 0 to the user inputted number

## _[GitHub Pages]_

## Technologies Used

- HTML
- CSS
- JavaScript
- JQuery

## Description:

_A website that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the Numbers that contain a 1: all digits are replaced (all digits) with "Beep!, numbers that contain a 2: all digits are replaced (all digits) with "Boop!, Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?_

## Setup/Installation Requirements

- _Download Git Bash_
- _On GitHub.com, navigate to the main page of the repository._
- _Access your computer's terminal shell(Git Bash for Windows or Mac for terminal)_
- _In terminal:_
- `Go to the current directory where you want the cloned directory to be added.`
- `Clone the repository by using the command $ git clone `
- `Lastly, open index.html`

## Known Bugs

- _N/A_

## License

- N/A Copyright (c) 1/14/2022, Kyle Miller
- _[MIT](https://opensource.org/licenses/MIT)_

## Tests:

### Describe: rogers()
 - Test: "It will return an array of numbers from 0 to the user's inputted number."
 - Code: 
 rogers(3);
 - Expected Output: [0, 1, 2, 3]
 ---
 - Test: "It will recognize any number that contains a number 3 and change the digit into a a string 'Won't you be my neighbor?.'"
 - Code: rogers(3)
 rogers(3);
 - Expected Output: [0, 1, 2, "Won't you be my neighbor?"]
 ---
 - Test: "It will recognize any number that contains a number 2 and change the digit into a a string 'Bloop!'unless it contains a 3."
 - Code: rogers(3)
 rogers(3);
 - Expected Output: [0, 1, "Bloop!", "Won't you be my neighbor?"]
---
- Test: "It will recognize any number that contains a number 2 and change the digit into a a string 'Bloop!'unless it contains a 3."
 - Code: rogers(3)
 rogers(3);
 - Expected Output: [0, 1, "Bloop!", "Won't you be my neighbor?"]
---
- Test: "It will recognize any number that contains a number 1 and change the digit into a string 'Beep!'unless it contains a 3 or 2."
 - Code: rogers(3)
 rogers(3);
 - Expected Output: [0, Beep!, "Bloop!", "Won't you be my neighbor?"]
---
- Test: "It will return the newArray with the digits not assigned to anything and add the strings in place of the digits."
 - Code: rogers(3)
 rogers(3);
 - Expected Output: [0, Beep!, "Bloop!", "Won't you be my neighbor?"]
---
