import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  // componentWillMount() {
  //   this.props.setCities();
  // }

  renderList() {
    return this.props.cities.map((city) => {
      return (<City city={city} key={city.name} />);
    });
  }

  render() {
    return (
      <ul className="list-group cities col-sm-7">
        {this.renderList()}
      </ul>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setCities: setCities },
//     dispatch
//   );
// }

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}


// export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
export default connect(mapReduxStateToProps)(CityList);
