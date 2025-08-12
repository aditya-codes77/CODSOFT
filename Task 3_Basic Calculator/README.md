# Basic Calculator

A modern, responsive calculator built with HTML, CSS, and JavaScript.

## Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Additional Features**: Percentage (%), Clear All (AC), Delete Last (DEL)
- **Modern UI**: Glassmorphism design with gradient background
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Support**: Full keyboard input support
- **Error Handling**: Prevents division by zero and invalid operations

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: 
  - CSS Grid for button layout
  - Flexbox for centering
  - Glassmorphism design with backdrop-filter
  - Responsive design with media queries
- **JavaScript**: 
  - Event listeners for user interaction
  - If-else statements for operation logic
  - Operators for mathematical calculations
  - Loops for keyboard input handling

## How to Use

1. Open `index.html` in your web browser
2. Click the calculator buttons or use your keyboard:
   - Numbers: 0-9
   - Operators: +, -, *, /
   - Decimal: .
   - Calculate: Enter or =
   - Clear: Escape
   - Delete: Backspace

## Project Structure

```
basic calculator/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling with Grid layout
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Key Implementation Details

### CSS Grid System
The calculator uses CSS Grid with `grid-template-columns: repeat(4, 1fr)` for perfect button alignment.

### JavaScript Features
- **Event Listeners**: Handle both mouse clicks and keyboard input
- **If-else Statements**: Control flow for different operations
- **Operators**: Mathematical operations (+, -, *, /, %)
- **Loops**: For loop to check number keys (0-9)

### Error Handling
- Prevents division by zero
- Handles invalid number inputs
- Manages decimal point placement

## Browser Compatibility

Works on all modern browsers that support:
- CSS Grid
- Backdrop-filter
- ES6+ JavaScript features 