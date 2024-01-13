
import React from 'react';
import Counter from '../views/index';

interface ICounterComponent{
    state:object;
    onIncrementClick: ()=> void;
    onDecrementClick: ()=> void;
    onResetClick: ()=> void;
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