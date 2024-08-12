## React- Badge Display App

### Overview
This project is a React application that demonstrates how to create reusable badge components with customizable styles using the classnames library. 
The badges can be displayed in either a "square" or "pill" shape, with different colors and background colors. 
Users can select a badge, and the selected badge will be displayed separately.

### Tree view
Displayed using ReacTree

![Tree](https://github.com/user-attachments/assets/79d18a3f-381c-4c92-aa8d-c0e38f503d52)

### Components and its usage
- Badge Component
    The Badge component is a reusable component that renders a badge with customizable properties:
    - Props:
      - children: The content inside the badge. It defaults to "Badge" if no content is provided.
      - color: The text color of the badge.
      - bgColor: The background color of the badge.
      - category: The shape of the badge, either "square" or "pill".
      - displayBadge: A function that is triggered when the badge is clicked.
    - Default Children:
        If the children prop is not provided, the badge will display the default text "Badge".
    - Class Names:
        The "classnames" library is used to dynamically apply classes to the badge based on its category and other styles.

- App Component
    The App component is the main component that renders multiple Badge components and handles the logic for displaying the selected badge.
    - State:
        selectedBadge: Holds the currently selected badge, which is displayed separately when a badge is clicked.
    - Functions:
        displayBadge: Updates the selectedBadge state with the clicked badge's properties.

### Live Demo
(https://scrimba-krishna-v-react-def-children.netlify.app/)
