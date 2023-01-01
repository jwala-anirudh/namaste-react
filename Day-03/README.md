# Notes from class

1. `npx` is equivalent to `npm run`
2. (NOT BY DEFAULT) All console.logs are removed; code is cleaned for prod
   - npm install -D babel-plugin-transform-remove-console
   - https://babeljs.io/docs/en/babel-plugin-transform-remove-console/
3. Tree shaking: Removes unwanted code
4. Browser List: The version mentioned the code will transpile to them for sure. Doesn't mean it will not work in other browsers if you mentioned specifically `last 2 Chrome versions`. But it will for sure work on last 2 chrome versions.
5. React reconciliation: https://reactjs.org/docs/reconciliation.html
6. React has HTML Like syntax that is JSX
7. HTML v/s JSX
8. How to create multiple tags in JSX like image etc
9. Babel uses an algo AST (Abstract syntax tree) to read JSX
