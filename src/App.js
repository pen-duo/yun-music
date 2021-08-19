import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import MHMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <MHMain/>
    </Provider>
  );
}

export default App;
