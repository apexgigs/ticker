import React, {Component} from 'react';

class Ticker extends Component {
constructor(){
  super();
  this.state ={
  count:0,
  }
}

componentDidMount(){
  //do something here:
  setInterval(() => {
    this.setState({
      count: this.state.count +1
    })

}, 100)
};

shouldComponentUpdate(nextProps, nextState){

  if(nextState.count % 3 === 0 ) return true;
  else return false;
}

    render(){
      return (
        <div>
        <p>This is the ticker: <span>{this.state.count}</span></p>
              <button onClick={()=> this.setState ({count:0})} type="button"> reset ticker </button>
        </div>
      );
    };
};

export default Ticker;
