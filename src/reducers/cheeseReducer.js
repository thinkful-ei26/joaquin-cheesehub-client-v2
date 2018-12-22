
const initialState = {
  cheeses: [
    { BathBlue: 'index 1' },
    { BarkhamBlue: 'index 2' },
    { BuxtonBlue: 'index 3' },
    {NachoCheese:'index 4'}
  ]
};

const cheeseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHEESES_SUCCESS':
      return Object.assign({}, state, {
          message:action.cheeses.msg
      });

    default:
      return state;
  }
};

export default cheeseReducer;
