import React from 'react';
import { createGlobalStyle } from "styled-components";
import Grid from "./components/grid";
import {StateProvider} from "./state";
import {mainReducer} from "./reducers";

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0;
  }
  
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => {
    const initialState = {
        theme: { primary: 'blue' }
    };

    return(
        <StateProvider initialState={initialState}
                       reducer={mainReducer} >
            <GlobalStyle/>
            <Grid/>
        </StateProvider>
    )
};

export default App;
