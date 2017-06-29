const opportunities = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state, 
        opportunityFilter: action.text
      };
    default:
      return state;
  }
}

export default opportunities;
