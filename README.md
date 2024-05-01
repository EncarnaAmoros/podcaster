# Podcast app

## Description

This project is a mini app to listen musical podcast. The app will have three views:

- Podcast list
 ![image](https://github.com/EncarnaAmoros/podcaster/assets/7465602/121102a1-5bd0-4e78-b09d-3506702660df)

- Podcast detail with list of episodes
  ![image](https://github.com/EncarnaAmoros/podcaster/assets/7465602/9c1b03d5-b3f2-4402-bcb1-2bb3a4e55b37)

- Podcast episode detail
  ![image](https://github.com/EncarnaAmoros/podcaster/assets/7465602/f7e81753-14b1-4f1f-8e54-1295a654d825)

## Tech Stack

This app uses: React + TypeScript + Vite

For some of the UI components we are using [React Bootstrap](https://react-bootstrap.netlify.app/).

For Testing: Jest Testing Library + msw for integration tests. Errors control and format: EsLint & prettier.

## Run app

- pnpm dev

## Build app (production mode)

- pnpm build

When it is time to deploy your app for production, simply run the vite build command. By default, it uses <root>/index.html as the build entry point, and produces an application bundle that is suitable to be served over a static hosting service. Check out the Deploying a Static Site for guides about popular services.

More info [here](https://vitejs.dev/guide/build/#:~:text=When%20it%20is%20time%20to,for%20guides%20about%20popular%20services.)

## Run tests

- pnpm test

## Project structure

This is the structure used in this project:

- node_modules: directory that will be created when we run the instalation command in the project

- src:

  - main.tsx: app entry

  - components: UI reusable components not related to any app domain _(e.g., search, spinner, button, modal, card...)_

  - app: common files for the app _(e.g., store, types, messages, constants, mocks)_ & domain components & pages directories

    - components: UI reusable components related to the app domain _(e.g., episode card, episode list...)_

    - mocks: mocked data for tests

    - pages: files for every page route

    - service: files to get URLs, stored data, constants

    - types: data types

    - utils: functions to format/transform/convert data

    - integrationTests: tests with API data mocked with msw

    - features, store.ts: slices for data on app using redux

  - styles: common styles for the app _(e.g., colours)_
