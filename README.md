# Podcast app

## Description

This project is a mini app to listen musical podcast. The app will have three views:

- Podcast list
- Podcast detail with list of episodes
- Podcast episode detail

## Tech Stack

This app uses: React + TypeScript + Vite

For some of the UI components we are using [React Bootstrap](https://react-bootstrap.netlify.app/).

For Testing: Jest Testing Library + msw for integration tests. Errors control and format: EsLint & prettier.

## Run app

- pnpm dev

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

  - styles: common styles for the app _(e.g., colours)_
