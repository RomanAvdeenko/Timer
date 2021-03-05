import React from 'react'

export default
    class ToggleButton extends React.Component {
    render() {
        const { seconds, isPaused, handler } = this.props
        if (seconds === 0 || seconds === null)
            return <div />
        return (
            <button type="button" className="row btn btn-info" onPointerDown={handler}>
                {isPaused ? 'Resume' : 'Pause'}
            </ button>
        )
    }
}
