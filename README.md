# Getting started with create-react-app

### `npm start`

to run the application in the web browser

<!-- ## Initialized Git  -->

### `npm install -D tailwindcss` and `npx tailwindcss init`

Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

### `@tailwind base;` `@tailwind components;` `@tailwind utilities;`

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

### `npm i -D daisyui@latest`

Install daisy UI 

### `plugins: [require("daisyui")],`

Then add daisyUI to your tailwind.config.js files:


### `npm i react-router-dom`

install react router dom and surround `<App/>` with `<BrowserRouter></BrowserRouter>`.

```sh
 <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
```


