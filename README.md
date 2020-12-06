# Bet Slip Demo

This project was built using CRA.

## Project Description
#### Design Stack:
- Airbnb JS style guide, it helps maintaining a standard of how to write code between teams and it helps with good clean code principles.
- Feature orientation instead of type orientation for project structure, it helps to work the project as separated modules.
- BEM methodology for styles, it helps building and identifying styles faster.
- Function based instead of class based for building react components.
- Redux(Flux) architecture to shared data between components, I decided to use sagas for this project since it helps keep one sigle source of truth for state maganament. This project could also be implemented with only react hooks using reducers and context without any problems.
- User behavior oriented instead of functional behavior for unit testing, test only what users can do via manual interaction.
- Git Flow, as a standard it helps other team members identify commits and changes faster. It also helps other communities (Devops) to run jobs or pipelines based on this standard.
- Material design, google standard for webapps and also mobile apps.

#### Tech Stack:
- For UI: it was build using Material-UI
- For state-management: redux-saga 
- For unit testing: jest with react-testing-library
- For Css: css modules with sass
- For JS: Typescript
- For linters: eslint, stylelint and prettier
- For pre-commits: husky with lint-staged

## Available Scripts
In the project directory, you can run:

#### Start app
```bash
yarn start
```
#### Build app
```bash
yarn build
```
#### Test app
```bash
yarn test
```
#### Test with coverage
Right now code-coverage is set to minimun of 90%.
```bash
yarn test:coverage
```
#### Run Js linter
```bash
yarn eslint
```
#### Run Css linter
```bash
yarn stylelint
```

