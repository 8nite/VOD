# VOD
:briefcase: Front End Microservice for VOD

## Get started

- Clone repo
- navigate to repo folder and `yarn install`
- `yarn start` and open http://localhost:3000 to view the website on local

## Important commands

- `npm run dev` starts the dev server, with reload on server changes, and hot reloading for your react app
- `yarn test` runs all `*.spec.js` files within the src/ directory and generates a test coverage report detailing how much code is covered

## Notes
- This project has been set up to run on Node v8.1 or above.
- we use the `dotenv-extended` library to handle local environment. If you want to override default environment variable, add a `.env` file to the base of your project. This file will be .gitignored and you can place your env specific variables like api keys here.
- This project comes default with a `/explorer` route that you can define/modify using the `api.yaml`. This `/explorer` route will be disabled in production environment.
