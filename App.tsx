import * as React from 'react';
import './style.css';

type BProps = {};
type BState = {
  totalScore: number;
};

type AProps = {};
type AState = {
  totalScore: number;
};

function getCurrentScore() {
  return 100;
}

function getScoreByBoardName(boardName: string) {
  if (boardName === 'A') {
    return 200;
  }
  if (boardName === 'B') {
    return 1000;
  }
  return 0;
}

class ScoreBoardB extends React.Component<BProps, BState> {
  constructor(props: BProps) {
    super(props);
    this.state = {
      totalScore: 0,
    };
  }

  componentDidMount() {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName('B'),
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>B Total Score: {this.state.totalScore} </p>
      </div>
    );
  }
}

class ScoreBoardA extends React.Component<AProps, AState> {
  constructor(props: AProps) {
    super(props);
    this.state = {
      totalScore: 0,
    };
  }

  componentDidMount() {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName('A'),
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>A Total Score: {this.state.totalScore} </p>
      </div>
    );
  }
}

function withTotalScore(WrappedComponent: React.ComponentType<any>, boardName: string){
  return 
}

export default function App() {
  return (
    <div>
      <ScoreBoardA />
      <ScoreBoardB />
    </div>
  );
}
