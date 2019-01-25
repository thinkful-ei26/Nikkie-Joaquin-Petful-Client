import React from 'react';
import Pet from './Pet'
import './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    let cat= <Pet onAdoptPet={e => console.log('ADOPT CLICKED')} {...this.props.catToAdopt} ></Pet>
    let dog= <Pet onAdoptPet={e => console.log('ADOPT CLICKED')} {...this.props.dogToAdopt} ></Pet>

    return (
      <div className="dashboard">
        {cat}
        {dog}
      </div>
    );
  }
}

export default Dashboard;
