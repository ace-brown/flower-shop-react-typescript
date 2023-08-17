# Flower Shop App

Welcome to the Flower Shop App, a simple web application built using React and TypeScript that lets you explore a variety of beautiful flowers, add them to your cart, and manage your flower orders.

## Features

- Browse through a selection of exquisite flowers.
- Add flowers to your cart and specify the quantity.
- View your cart to see the list of flowers you've ordered along with their quantities.
- Update the quantity or remove flowers from your cart.

![flower image](/public/flower-shop-1.png)
![flower image](/public/flower-shop-2.png)

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version X or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository to your local machine using:

   ```
   git clone https://github.com/ace-brown/flower-shop-react-typescript.git
   ```

2. Navigate to the project directory:

   ```
   cd flower-shop-react-typescript
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Usage

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your web browser and go to `http://localhost:5173` to access the Flower Shop App.

### Technologies Used

- React
- TypeScript
- CSS for styling

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
