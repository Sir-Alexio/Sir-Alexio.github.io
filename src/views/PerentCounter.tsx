import React from 'react';
import Styles from './styles';
import Button from '@mui/material/Button';
import CounterContainer from '../containers/CounterContainer';

interface PerentCounterState {
    counters: React.ReactNode[];
}

class PerentCounter extends React.Component<{}, PerentCounterState> {
    state: PerentCounterState = {
        counters: []
    };

    onNewCounter = () => {
        this.setState((prevState) => ({
            counters: [
                ...prevState.counters,
                <CounterContainer
                    key={prevState.counters.length}
                    state={{ currentCounter: 0 }}
                    onIncrementClick={() => {}}
                    onDecrementClick={() => {}}
                    onResetClick={() => {}}
                />
            ]
        }));
    };

    onRemoveCounter = () => {
        if (this.state.counters.length > 0) {
            this.setState((prevState) => {
                const updatedCounters = [...prevState.counters];
                updatedCounters.pop(); // Remove the last counter
                return { counters: updatedCounters };
            });
        }
    };

    render() {
        return (
            <div>
                <Button style={Styles.buttonStyle} onClick={this.onNewCounter} variant="contained" color="primary">
                    New
                </Button>
                <Button style={Styles.buttonStyle} onClick={this.onRemoveCounter} variant="contained" color="primary">
                    Delete
                </Button>
                <Button style={Styles.buttonStyle} variant="contained" color="primary">
                    Reset
                </Button>
                <div>{this.state.counters}</div>
            </div>
        );
    }
}

export default PerentCounter;
