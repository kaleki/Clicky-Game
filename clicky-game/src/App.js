import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import logos from "./logos.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    logos,
    clickedLogo: [],
    score: 0,
    highscore: 0
  };

  highScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.logo.forEach(logos => {
      logos.count = 0;
    });
    this.setState({score: 0});
    return true;
  }

  imageClick = event => {
    const firstClicked = event.target.alt;
    console.log(event.target)
    const chosenLogo =
      this.state.clickedLogo.includes(firstClicked);
    const newLogo = this.state.logos.sort(function(a, b) {
        return 0.5 - Math.random();
      })
      console.log(chosenLogo);
      if (chosenLogo) {
        this.setState({
          logos: newLogo,
          clickedLogo: [],
          score: 0
        });
      } else {
        const lastLogo = this.state.clickedLogo
        lastLogo.push(firstClicked)
        
        this.setState(
          {
            logos: newLogo,
            clickedLogo: lastLogo,
            score: this.state.score + 1
          });
        };
      };


  // Map over this.state.cards and render a logoCard component for each card object
  render() {

    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}> NBA Clicky Game</Header>
        {this.state.logos.map(logos => ( 
          <Card
            clickCount={this.clickCount}
            id={logos.id}
            key={logos.id}
            image={logos.image}
            imageClick={this.imageClick}
            name= {logos.image}
          />
        ))}
      </Wrapper>
    );

  };
}



export default App;
