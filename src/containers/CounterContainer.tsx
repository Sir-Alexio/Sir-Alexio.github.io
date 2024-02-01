
import React from 'react';
import Counter from '../views/index';
import {ICounterContainer, StateType} from '../Interfaces/index';

class CounterContainer extends React.Component<ICounterContainer,StateType>{
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
        return <Counter state ={this.state}
                onIncrementClick={this.onIncrementClick} 
                onDecrementClick={this.onDecrementClick} 
                onResetClick={this.onResetClick} />
    }
}

export default CounterContainer;