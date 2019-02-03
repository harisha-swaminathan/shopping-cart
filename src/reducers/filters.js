import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'high'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_LOW':
      return {
        ...state,
        sortBy: 'low'
      };
    case 'SORT_BY_HIGH':
      return {
        ...state,
        sortBy: 'high'
      };
    default:
      return state;
  }
};
