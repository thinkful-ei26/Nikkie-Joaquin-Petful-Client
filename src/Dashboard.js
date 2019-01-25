import React from 'react';
import Pet from './Pet'
import {connect} from 'react-redux';
import {fetchCat, adoptCat} from './actions/cat'
import {fetchDog, adoptDog} from './actions/dog'

import './Dashboard.css';

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    let cat= <Pet onAdoptPet={() => this.props.dispatch(adoptCat())} {...this.props.catToAdopt} ></Pet>
    let dog= <Pet onAdoptPet={() => this.props.dispatch(adoptDog())} {...this.props.dogToAdopt} ></Pet>

    return (
      <div className="dashboard">
        <p>{this.props.catError}</p>
        {!this.props.catError && cat}
        <p>{this.props.dogError}</p>
        {!this.props.dogError && dog}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    catToAdopt: state.cats.data,
    dogToAdopt: state.dogs.data,
    catError: state.cats.error,
    dogError: state.dogs.error,
  }
}

export default connect(mapStateToProps)(Dashboard);