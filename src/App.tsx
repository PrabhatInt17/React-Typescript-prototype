import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card';
import { Loading } from './components/Loading';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';
import data from './data/data.json';

export default class App extends Component<AppProps> {
  timeOutVar: any;
  state = {
    toggleLogo: true,
    loading: true,
    cards: [],
  };
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.any,
  };

  componentWillMount() {
    this.setState({ cards: data });
  }

  componentDidMount() {
    this.timeOutVar = setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutVar);
  }

  toggleLogo = () => {
    this.setState((prevState: any) => {
      return { toggleLogo: !prevState.toggleLogo };
    });
  };

  showFront = (card) => {
    let cards = this.state.cards;
    cards[card.id].animation = 'card';
    this.setState({ cards });
  };
  showBack = (card) => {
    let cards = this.state.cards;
    cards[card.id].animation = 'card card-flip';
    this.setState({ cards });
  };

  openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'}
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav}
          />
          <h1 className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'} onClick={this.openNav}>
            Menu
          </h1>
          <Navigation closeNav={this.closeNav} />
        </header>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="Grid animated bounceInUp">
            {this.state.cards.map((card) => (
              <Card duration={150} key={card.id} card={card} showBack={this.showBack} showFront={this.showFront} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

interface AppProps {
  title?: string;
  cards?: any;
}
