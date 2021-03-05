import React from 'react'
import Button from './Button'
import Timer from './Timer'
import ToggleButton from './ToggleButton'

export default
    class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: null,
            secondsLeft: null,
            isPaused: false
        }
    }
    startTimer = secondsLeft => {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            if (!this.state.isPaused) {
                let secondsLeft = this.state.secondsLeft - 1
                if (secondsLeft === 0) clearInterval(timer)
                this.setState({ timer, secondsLeft })
            }
        }, 1000)
        return this.setState({ timer, secondsLeft })
    }
    handlerToggleButton = () => {
        this.setState((prevState, props) =>
            ({ isPaused: !prevState.isPaused })
        )
    }

    render() {
        return (
            <div className="container-fluid" >
                <h2 className="row">Timer</h2>
                <div className="row btn-group" role="group">
                    <Button seconds={5} handler={this.startTimer} />
                    <Button seconds={10} handler={this.startTimer} />
                    <Button seconds={15} handler={this.startTimer} />
                </div>
                <Timer seconds={this.state.secondsLeft} />
                <ToggleButton isPaused={this.state.isPaused} seconds={this.state.secondsLeft} handler={this.handlerToggleButton} />
            </div>
        )
    }
}