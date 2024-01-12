
import React from 'react';
import Counter from '../views/index';
import PropTypes from 'prop-types'

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
        return <Counter currentCounter={this.state.currentCounter}
                        onIncrement={this.onIncrementClick} 
                        onDecrement={this.onDecrementClick} 
                        onReset={this.onResetClick} />
    }
}

CounterContainer.propTypes = {
    currentCounter: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onReset: PropTypes.func
  };

export default CounterContainer;

