import './index.css';
import { mvi } from './components/mvi_01';
import { mvic } from './components/mvi_02';
import { renderWithStateContainer } from './components/state_container_03';
import { renderWithReducer } from './components/app_with_Redux_04';
import { renderWithReactRedux } from './components/app_react_redux_05';

import renderApp from './components/hoc_01';
import renderAppWithHOC from './components/hoc_02';
import renderAppWithData from './components/hoc_03';
import renderAppWithHOCData from './components/hoc_04';
import renderReducedComponent from './components/hoc_05';

// mvi();
// mvic();
// renderWithStateContainer();
// renderWithReducer();
// renderWithReactRedux();

// renderApp();
// renderAppWithHOC();
// renderAppWithData();
// renderAppWithHOCData();
renderReducedComponent();
