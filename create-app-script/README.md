## Exercise

Create an npm script that creates a boilerplate for React/Redux project similar to the one used for our React/Redux exercises.

  1) `pesto-react-boilerplate` command in the command line should initiate a script that creates a project boilerplate.
    
    2) Before [create-react-app](https://github.com/facebook/create-react-app/) is initiated, there should be a few prompts for the user:
        - Do you want to set up testing with enzyme?

          - If user selects `yes`, install [enzyme](https://github.com/airbnb/enzyme).
          - Create a `setupTests.js` in `src` directory. Write the code for react enzyme adapter to it.
          - Create a `__tests__` directory in the root of the project.

        - Do you want to add Redux?

          - If user selects `yes`, install [redux](https://github.com/reduxjs/redux) and [react-redux](https://github.com/reduxjs/react-redux).

          - Do you want to add redux devtools?
          
              - If `yes`, install [redux devtools](https://github.com/zalmoxisus/redux-devtools-extension)

        - Do you want to add [React Router](https://github.com/ReactTraining/react-router)?

          - If `yes`, install react router.

        - Install
          - `eslint`
          - `babel-eslint`
          - `eslint-config-airbnb`
          - `eslint-plugin-import`
          - `eslint-plugin-jsx-a11y`
          - `eslint-plugin-react`

        - Create an `.eslintrc` file and write a basic config into it.


The best way to do this would be to prompt the user with all the questions at once in the beginning and then installing everything required in one go. All the best :)
