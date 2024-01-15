
import React from 'react';
import Counter from '../views/Counter/index';

interface ICounterComponent{
    key: number;

}

class CounterContainer extends React.Component<ICounterComponent>{

    state = {
        currentCounter: 0
    }

    onIncrementClick = ()=>{
        this.setState({
            currentCounter: this.state.currentCounter+1
        });
    }

    onDecrementClick = ()=>{
        this.setState({
            currentCounter: this.state.currentCounter-1
        });
  
    }

    onResetClick = ()=>{
        this.setState({
            currentCounter: 0
        });
  
    }

    render(){
        return <Counter currentCounter={this.state.currentCounter}
                        onIncrement={this.onIncrementClick} 
                        onDecrement={this.onDecrementClick} 
                        onReset={this.onResetClick} />
    }
}

export default CounterContainer;