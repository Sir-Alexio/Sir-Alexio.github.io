
import React from 'react';
import Counter from '../views/index';

class CounterContainer extends React.Component{
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
        const {currentCounter} = this.state;
        return <Counter currentCounter={currentCounter}
                        onIncrement={this.onIncrementClick} 
                        onDecrement={this.onDecrementClick} 
                        onReset={this.onResetClick} />
    }
}

export default CounterContainer;

