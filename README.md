# React 🚀

# Parcel

- Dev Build
- Local Server
- HMR- Hot Module Replacement (When we change any content it automatically update the DOM)
- File watching algorithm - written in c++ (HMR uses this)
- Faster build because of caching
- Image Optimization
- Mininfication
- Bundling
- Compress the file
- Consistent Hasing
- Code Spliting
- Differential Bundling - give the ablibity to support different browser and older version browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Dev and Prod build

# CDN

# crossorigin in script tag

# React.createElement -> returns js object

# root.render -> converts the object and render the tag in html

# Consistent Hasing -> ?

# Differential Bundling -> give the ablibity to support different browser and older version browser

# Tree Shaking -> remove unused code

# Browsers list (browsersList inside package.json) -> support of browser version

# Npm vs Npx -> Npm manage packages and npx runs specific package

# Diff between tilde and caret

# devdependencies vs dependencies -> Dependency is an object that contains the library, which your project requires for production environments and functioning effectively. devDependencies are those packages in the package.json file that you need only for project development purposes. Example- Babel, Webpack, etc.

# Parcel

    - Dev Build
    - Local Server
    - HMR- Hot Module Replacement (When we change any content it automatically update the DOM)
    - File watching algorithm - written in c++ (HMR uses this)
    - Faster build because of caching
    - Image Optimization
    - Mininfication
    - Bundling
    - Compress the file
    - Consistent Hasing
    - Code Spliting
    - Differential Bundling - give the ablibity to support different browser and older version browser
    - Diagnostic
    - Error Handling
    - HTTPs
    - Tree Shaking - remove unused code
    - Different Dev and Prod build

# JSX

    -JSX -> JSX is a HTML/XML like syntax and is not HTML in JS. JSX is introduce for using HTML inside js. JSX is not a part of react.
    -JSX - HTML like or XML like syntax
    -JSX (transpiled before it reaches the JS) - PARCEL - Babel(babel is a JS compiler it converts JSX into JS so that react understand)
    -JSX => React.createElement => ReactElement-JS Object => HTMLElement
    -JSX => we write attribute in camel case.
    -JSX => If their are multiple line the we use () which tell babel from where the code start and where it ends. We use () in single line also.
    -JSX => JSX takes care of injection attacks and sanitized the data, it prevent Cross-site scripting data.

# React Component

    -Class based component - Old way
    -Function based component - New Way => is just a normal JS function and write function starting with capital letter(e.g., HeadingComponet())
    -Function based component - A JS function which returns the JSX(ReactElement)

# Component Composition -> Using one component in another component is component composition.

# React Fragment

    -One parent of JSX as we cann't use as JSX can have one parent.Then we use React.Fragment and put over code inside this.
    -We can also use <> </> in place of React.Fragment

# props(passing props to a components) -> props are normal arguments to function

# When ever we loop over the data then we should use 'key' key to make element unique. Never use index as keys bad practice(It is mention on React Official Site).

# name export vs default export =>

    export const Test => Name Export
    import {Test} from path

    const Test = [{},{}] // () => {} => default export
    export default Test
    import Test from path

    -We use name export when we have to export multiple keys

# React Hooks

    -Is a normal JS function that is given to us by React.
    - Two important hooks
        - useState() =>
            - Superpowerful state variable in React
            - maintain the state
            - When ever a state variable updates/changes React will re-render the component
        - useEffect()

# React Uses

    -Reconciliation Algorithim(React Fiber)
        When ever something changes on UI is known as Reconciliation Algo.
        (https://github.com/acdlite/react-fiber-architecture)
        -Virtual DOM
            - VD is a representation of a actual DOM
            - VD is an or return Object(ReactElement)

        -Diff(difference) Algorithims
            -Tries to findout the difference between old and new virtual dom and update the actual DOM
            -Find difference between two object

# Why React is Fast

    - Becasue it has VD and uses Diff Algorithim
