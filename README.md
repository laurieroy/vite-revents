# Revents front-end

This is the frontend for a social project to create an event that has a location, date & time, and host. Other users can then join the event. Events are organized by category. 
The backend is in firebase, as is user management. The original project was built by Neil Cummings. 

## Tech Stack
- React + TypeScript + Vite
- Styling: Semantic-UI
- CUID2 for temporary collision-resistant ID
- Routing: React Router 6.4
- State management: Redux
- Forms: React Hook Form
   - Datepicker: react-datepicker, to standardize view across browsers

### To run locally:

Clone the app:
```
git clone git@github.com:laurieroy/vite-revents.git
```

Change to that directory:
```cd vite-revents```

Install dependencies:
```pnpm i```

To start the app:
```pnpm run dev```

App will be available at http://localhost:5173/


<!-- 

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
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
