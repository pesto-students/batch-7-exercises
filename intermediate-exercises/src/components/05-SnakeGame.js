/*
  Create a snake game using React.
  - You should be able to control the snake using the arrow keys.
  - A piece of `food` should appear on random location withing the
  boundary once the snake eats the existing item.
  - You earn 100 points for each bite eaten.
  - The snake's body grows by 10% on every bite eaten.

  There is a gif in the root of this directory called `snake_game.gif` for reference
  on how the game works. Good luck!
*/

import React, { Component } from "react";
import "./../App.css";
class Snake extends Component {
  constructor(props) {
    super(props);
    this.initialize();
  }
  snake = [];
  rows = 0;
  columns = 0;
  headX = 10;
  headY = 10;
  tailX = 10;
  tailY = 10;
  incX = 0;
  incY = 0;
  foodX = 0;
  foodY = 0;
  snakeQueue = [];
  gameStatus = {
    score: 0,
    level: 1
  };
  overlayOpacity = {
    opacity: 1
  };
  direction = "R";
  maxScore = 0;
  buttonText = "Start Game";

  initialize = () => {
    this.speed = 500;
    this.snake = [];
    this.rows = 17;
    this.columns = 23;
    this.headX = 10;
    this.headY = 10;
    this.tailX = 10;
    this.tailY = 10;
    this.incX = 0;
    this.incY = 1;
    this.foodX = 0;
    this.foodY = 0;
    this.isGameOver = false;
    this.snake = Array(this.rows)
      .fill()
      .map(() => Array(this.columns).fill(0));
    this.snakeQueue = [];
    this.gameStatus = {
      score: 0,
      level: 1
    };
  };

  direction = "R";
  handleKeyDown = e => {
    switch (e.keyCode) {
      case 38:
        if (this.direction !== "D") {
          this.upArrowKey();
          this.direction = "U";
        }
        break;
      case 40:
        if (this.direction !== "U") {
          this.downArrowKey();
          this.direction = "D";
        }
        break;
      case 37:
        if (this.direction !== "R") {
          this.leftArrowKey();
          this.direction = "L";
        }
        break;
      case 39:
        if (this.direction !== "L") {
          this.rightArrowKey();
          this.direction = "R";
        }
        break;
      default:
        console.log("Do Nothing");
    }
  };
  upArrowKey = () => {
    this.incX = -1;
    this.incY = 0;
  };
  downArrowKey = () => {
    this.incX = 1;
    this.incY = 0;
  };
  leftArrowKey = () => {
    this.incX = 0;
    this.incY = -1;
  };
  rightArrowKey = () => {
    this.incX = 0;
    this.incY = 1;
  };

  startGame = () => {
    this.initialize();
    this.generateFood();
    this.overlayOpacity = {
      opacity: 0
    };
    this.snakeRun(500);
    this.buttonText = "Restart";
    this.setState({
      overlayOpacity: this.overlayOpacity,
      buttonText: this.buttonText
    });
  };
  snakeRun = () => {
    this.gameInterval = setInterval(() => {
      this.headX = this.headX + this.incX;
      this.headY = this.headY + this.incY;
      if (
        this.headX >= this.rows ||
        this.headY > this.columns ||
        this.headX < 0 ||
        this.headY < 0 ||
        this.snake[this.headX][this.headY] === 1
      ) {
        this.gameOver();
      } else if (this.snake[this.headX][this.headY] === 2) {
        this.snake[this.headX][this.headY] = 1;
        this.snakeQueue.push([this.headX, this.headY]);
        this.generateFood();
        this.increaseScore();
        this.setState({ snake: this.snake });
      } else {
        if (this.snakeQueue.length > 0) {
          this.tailX = this.snakeQueue[0][0];
          this.tailY = this.snakeQueue[0][1];
          this.snake[this.tailX][this.tailY] = 0;
          this.snakeQueue.shift();
        }
        this.snake[this.headX][this.headY] = 1;
        this.snakeQueue.push([this.headX, this.headY]);

        this.setState({ snake: this.snake });
      }
    }, this.speed);
  };
  gameOver = () => {
    clearInterval(this.gameInterval);
    if (this.gameStatus.score > this.maxScore) {
      this.maxScore = this.gameStatus.score;
      this.setState({ maxScore: this.maxScore });
    }
    this.isGameOver = true;
    this.overlayOpacity = {
      opacity: 1
    };
    this.setState({
      overlayOpacity: this.overlayOpacity,
      isGameOver: this.isGameOver
    });
  };

  generateFood = () => {
    this.foodX = Math.floor(Math.random() * this.rows);
    this.foodY = Math.floor(Math.random() * this.columns);
    if (this.snakeQueue.find(e => e[0] === this.foodX && e[1] === this.foodY)) {
      this.generateFood();
    } else {
      this.snake[this.foodX][this.foodY] = 2;
    }
    //this.setState({snake:this.snake});
  };

  increaseScore = () => {
    this.gameStatus.score++;
    if (this.gameStatus.score % 10 === 0 && this.gameStatus.level < 3) {
      this.speed = this.speed - 100;
      this.gameStatus.level++;
      clearInterval(this.gameInterval);
      this.snakeRun();
    }
    this.setState({
      score: this.gameStatus.score,
      level: this.gameStatus.level
    });
  };

  render() {
    return (
      <div onKeyDown={this.handleKeyDown} tabIndex="0">
        <div className="container">
          <div className="row mt-2">
            <div className="col-12-md">
              Score:
              <span className="badge badge-primary m-2">
                {" "}
                {this.gameStatus.score}
              </span>
              Level:{" "}
              <span className="badge badge-primary m-2">
                {this.gameStatus.level}
              </span>
              High Score:{" "}
              <span className="badge badge-primary m-2">{this.maxScore}</span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-8-md">
              <div className="gameboard">
                {[...Array(17)].map((e, i) =>
                  [...Array(23)].map((e, j) => (
                    <div
                      className={
                        this.snake[i][j] === 1
                          ? "cell snakebody"
                          : this.snake[i][j] === 2
                          ? "cell food"
                          : "cell"
                      }
                      key={i + "" + j}
                    />
                  ))
                )}
                <div style={this.overlayOpacity} className="overlay ">
                  <p
                    className="game-over"
                    style={{ display: this.isGameOver ? "block" : "none" }}
                  >
                    GAME OVER
                  </p>
                  <button
                    className="btn btn-lg btn-primary text"
                    onClick={this.startGame}
                  >
                    {this.buttonText}
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-4 col-4-md" />
          </div>
        </div>
      </div>
    );
  }
}

export default Snake;
