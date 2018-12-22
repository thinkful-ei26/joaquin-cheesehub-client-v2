import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';
import {cheeseListBuilder} from '../reducers/cheeseListBuilder'
import { cheeseReducer } from '../reducers/cheeseReducer';

class CheeseList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const newObj = this.props;
    let cheeses = newObj.cheesename;
    let newList = [];
    for (let i = 0; i < cheeses.length; i++) {
      newList.push(Object.keys(cheeses[i]));
    }
    newList = newList.join(' ').split(' ');
    const cheeseElements = newList.map((cheese, index) => (
      <li key={index}>{cheese}</li>
    ));

    return (
      <div>
        <h1>Hi World</h1>
        <ul>{cheeseElements}</ul>
          </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cheesename: state.cheeseReducer.cheeses
  };
};

export default connect(mapStateToProps)(CheeseList);
