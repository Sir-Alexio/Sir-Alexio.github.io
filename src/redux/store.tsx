import { createStore } from 'redux';

import ValidationReducer from './Reducer/index';

const store = createStore(ValidationReducer);

export default store;