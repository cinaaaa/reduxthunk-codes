import { combineReducers } from 'redux';
const stepReducer = (state = {'test':'test'}, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
};

export default combineReducers({
  test: stepReducer,
});
