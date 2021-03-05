import React from 'react'

export default
    class Button extends React.Component {
    render() {
        const { handler, seconds } = this.props
        return (
            < button type="button" className="btn btn-primary"
                onPointerDown={() => handler(seconds)}>
                {seconds} sec.
            </button >
        )
    }
}