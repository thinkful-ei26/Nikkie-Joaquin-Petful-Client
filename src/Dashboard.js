import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <section className="cat">
          <header>
          <img src={this.props.catToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription}></img>
          <h1>{this.props.catToAdopt.name}</h1>
          </header>
          <main>
            <dl>
              <dt>Sex:</dt><dd>{this.props.catToAdopt.sex}</dd>
              <dt>Age:</dt><dd>{this.props.catToAdopt.age}</dd>
              <dt>Breed:</dt><dd>{this.props.catToAdopt.breed}</dd>
              <dt>Story:</dt><dd>{this.props.catToAdopt.story}</dd>
            </dl>
            <button>Adopt Me!</button>
          </main>
        </section>
        <section className="dog">
          <header>
            <img src={this.props.dogToAdopt.imageURL} alt={this.props.dogToAdopt.imageDescription}></img>
            <h1>{this.props.dogToAdopt.name}</h1>
          </header>
          <main>
            <dl>
              <dt>Sex:</dt><dd>{this.props.dogToAdopt.sex}</dd>
              <dt>Age:</dt><dd>{this.props.dogToAdopt.age}</dd>
              <dt>Breed:</dt><dd>{this.props.dogToAdopt.breed}</dd>
              <dt>Story:</dt><dd>{this.props.dogToAdopt.story}</dd>
            </dl>
            <button>Adopt Me!</button>
          </main>
        </section>
      </div>
    );
  }
}

export default Dashboard;
