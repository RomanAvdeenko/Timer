import React from 'react'
import EndSound from '../sounds/end.wav'

export default function Timer({ seconds }) {
    let endSound = new Audio(EndSound)
    if (seconds === 0) {
        endSound.pause()
        endSound.currentTime = 0
        endSound.play()
    }

    if (seconds === 0 || seconds === null)
        return <div />
    return (
        <div>
            <h1 className="row">Time left: {seconds}</h1>
        </div>
    )
}