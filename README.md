# React Investment Calculator

This project is a simple React application that allows users to calculate investment growth over time. Users can input their initial investment, annual contributions, expected return rate, and duration to visualize how their investment evolves year by year.

## Getting Started

After cloning the project, navigate to the application directory and install all dependencies using npm:

```bash
cd react-essentials-practice/
npm install
```

To start the development server, run:

```bash
npm run dev
```

## Technologies Used

* _React_: UI library for building interactive user interfaces.
* _Vite_: Fast build tool and development server.
* _eslint-plugin-react_: Linting for React code.
* _eslint-plugin-react-hooks_: Linting and guidance for React hooks.
* _CSS_: Styling for the application.
* _Intl API_: For currency formatting.
* _Node.js_: Runtime environment.

## Directory Structure

The project follows this structure:

```
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Results.jsx
│   │   └── UserInput.jsx
│   ├── output/
│   │   └── image.png
│   └── util/
│       └── investment.js
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

- The `public` directory contains static assets such as the logo.
- The `src/components` directory contains all React components: `Header`, `UserInput`, and `Results`.
- The `src/util` directory contains utility functions for investment calculations and currency formatting.
- The `src/output` directory can be used for generated images or results.
- The root contains configuration files and documentation.

## Features

- Input fields for initial investment, annual investment, expected return, and duration.
- Dynamic calculation and display of investment growth per year.
- Currency formatting using the browser's Intl API.
- Responsive and modern UI with custom CSS styling.

## Project Status

This project is fully functional and ready for further extension, such as adding authentication, more advanced investment options, or exporting results.
