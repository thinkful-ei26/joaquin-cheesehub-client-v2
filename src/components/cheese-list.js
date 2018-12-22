import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCheeses} from '../actions/cheese'
import {cheeseListBuilder} from '../reducers/cheeseListBuilder'
// import {cheeseReducer} from '../reducers/cheeseReducer'

// const cheeses = {cheeses: [
//     { BathBlue: 'index 1' },
//     { BarkhamBlue: 'index 2' },
//     { BuxtonBlue: 'index 3' }
//   ]}
const cheeses = [
'cheese1',
'cheese2',
'cheese3'
  ]
  console.log('CLB ',cheeseListBuilder);
  
// let cheeseList =[];
// function cheeseListBuilder(array) {
//   const firstArr = array.cheeses  
//   for(let i =0 ; i < firstArr.length; i ++){
//       cheeseList.push(Object.keys(firstArr[i]))
//   }
//   return cheeseList.join(' ').split(' ');
// }


class CheeseList extends Component {
componentDidMount(){
    // console.log('Hanga Banga');
    this.props.dispatch(fetchCheeses())
}

    render(){
// console.log('Looking for me?', this.props.cheesename);
//   const cheeses = this.props.cheesename;  

  const cheeseElements = cheeses.map((cheese, index) => (
    <li key={index}>{cheese}</li>
  ));

  return (

     
    <div>
     <h1>Hi World</h1>
      <ul>{cheeseElements}</ul>
      {/* <ul>{this.props.cheesename}</ul> */}
    </div>
  );
}
}
const mapStateToProps = state =>{
    // console.log('Looking for me?',state.cheeseReducer)
    return{
        cheesename:state.cheeseReducer.cheeses
    }
}

export default connect(mapStateToProps)(CheeseList)