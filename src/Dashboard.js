import React from 'react';
import Pet from './Pet';
import { connect } from 'react-redux';
import { fetchPet, adoptPet } from './actions/pet';

import './Dashboard.css';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPet('cat'));
    this.props.dispatch(fetchPet('dog'));
  }

  render() {
    let petList = '';
    for (let i = 0; i < this.props.petsToAdopt.length; i++) {
      petList += (
        <Pet
          onAdoptPet={() =>
            this.props.dispatch(adoptPet(this.props.petsToAdopt[i].species))
          }
          {...this.props.petsToAdopt}
        />
      );
    }
    // console.log(this.props.petsToAdopt);
    // let cat = (
    //   <Pet
    //     onAdoptPet={() => this.props.dispatch(adoptPet('cat'))}
    //     {...this.props.petsToAdopt}
    //   />
    // );
    // let dog = (
    //   <Pet
    //     onAdoptPet={() => this.props.dispatch(adoptPet('dog'))}
    //     {...this.props.petsToAdopt}
    //   />
    // );

    return (
      <div className="dashboard">
        {petList}
        {/* <p>{this.props.fetchPetError}</p>
        {!this.props.fetchPetError && cat}
        <p>{this.props.fetchPetError}</p>
        {!this.props.fetchPetError && dog} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    petsToAdopt: state.data
    // dogToAdopt: state.dogs.data,
    // catError: state..error,
    // dogError: state.dogs.error
  };
}

export default connect(mapStateToProps)(Dashboard);
