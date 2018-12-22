// import React, {Component} from 'react'
// import {connect} from 'react-redux';

const initialState = {
  cheeses: [
    { BathBlue: 'index 1' },
    { BarkhamBlue: 'index 2' },
    { BuxtonBlue: 'index 3' }
  ]

  //  [
  //   'Bath Blue':'index 1',
  //   'Barkham Blue':,
  //   'Buxton Blue'
  // ]
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
