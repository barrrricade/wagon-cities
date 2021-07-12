// import React, { Component } from 'react';

// class City extends Component {

//   render() {
//     return (
//       <div className="">
//         <h2>{this.props.city.name}</h2>
//       </div>
//     );
//   }
// }

// export default City;


import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
