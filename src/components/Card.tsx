import React, { Component } from 'react';
import './Card.css';
import LazyLoad from 'react-lazyload';

export default class Card extends Component<any> {
  render() {
    return (
      // <LazyLoad height={800} offset={-100}>
      <div className={this.props.card.animation}>
        <div className="front" onClick={() => this.props.showBack(this.props.card)}>
          <img src="juice.jpg" alt="Vitamin-juice" className="card-image"></img>
          <div className="container">
            <h3>
              Vitamin Juice<span className="price">$24.99</span>
            </h3>
            <p>Need energy? Try on our Vitamin Juice</p>
          </div>
        </div>
        <div className="container-back back" onClick={() => this.props.showFront(this.props.card)}>
          <h3>
            Vitamin Juice<span className="price">$24.99</span>
          </h3>
          <p>{this.props.card.description}</p>
        </div>
      </div>
      //  </LazyLoad>
    );
  }
}
