# EJ2 Svelte App

The project showcases practical examples of using EJ2 components in a Svelte environment, highlighting features such as data binding, event handling, theming, and responsive design. This setup promotes modular development, allowing teams to build complex applications with reusable UI components while benefiting from Svelte's efficient compilation and minimal runtime overhead.

## Prerequisites

To run this application, you need the following software installed:

- Node.js (version 14 or higher)
- npm

## Installation

Follow these steps to install the required dependencies:

1. Clone the repository.

  ```
  git clone https://github.com/SyncfusionExamples/ej2-svelte-app.git
  ```

2. Open a terminal and navigate to the project directory:

   ```
   cd ej2-svelte-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

   This command installs all necessary packages including Svelte, EJ2 components, and build tools.

## Building the Application

The build process compiles Svelte components and bundles the app for production.

To build the sample:

```
npm run build
```

This uses Rollup to create optimized bundles. During development, you can use:

```
npm run dev
```

for hot reloading and development server.

## Running the Application

To run the built application:

```
npm run start
```

This starts a local server (usually at http://localhost:5000) where you can view the application. Once loaded, you can interact with the EJ2 components as configured in the Svelte components.

The application demonstrates various EJ2 components integrated into Svelte, showing best practices for component initialization, data management, and styling.

## Configuration

- Rollup configuration is in `rollup.config.js`, handling Svelte compilation and EJ2 imports.
- Component configurations are in the `src/` directory.
- Styles and themes are managed through EJ2's theming system and Svelte's scoped styles.

## Additional Resources

- EJ2 Documentation: https://ej2.syncfusion.com/documentation/
- Svelte Guide: https://svelte.dev/tutorial/basics
- Syncfusion Forums: https://www.syncfusion.com/forums

