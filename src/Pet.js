import React from 'react';
import './Dashboard.css';

class Pet extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <section>
          <header>
          <img src={this.props.imageURL} alt={this.props.imageDescription}></img>
          <h1>{this.props.name}</h1>
          </header>
          <main>
            <dl>
              <dt>Sex:</dt><dd>{this.props.sex}</dd>
              <dt>Age:</dt><dd>{this.props.age}</dd>
              <dt>Breed:</dt><dd>{this.props.breed}</dd>
              <dt>Story:</dt><dd>{this.props.story}</dd>
            </dl>
            <button>Adopt Me!</button>
          </main>
        </section>
      </div>
    );
  }
}

export default Pet;
