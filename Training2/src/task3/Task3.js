import React, { useState } from 'react';
import Modal from '../task1/Modal';

function Task3() {
    const [input, setInput] = useState('');
    const [time, setTime] = useState('');
    const [timer, setTimer] = useState(null);
    const [isCounting, setIsCounting] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    function validate() {
        if (input.length === 0) {
            alert('Please input a number');
            return;
        }
        if (isNaN(input)) {
            alert('Invalid input. Must be a number');
            return;
        }
        if (input <= 0) {
            alert('Number must be greater than 0');
            return
        }
        return true;
    }

    function start() {
        if (validate()) {
            stop();
            setIsStarted(true);
            setIsCounting(true);
            setTime(input);
            setTimer(
                setInterval(() => {
                    setTime((time) => Number(time) - 1);
                }, 1000)
            )
        }
    }

    function stop() {
        setIsCounting(false);
        clearInterval(timer);
    }

    return (
        <>
            <label>
                Number:
                <input type="text" name="text" onChange={e => setInput(e.target.value)} />
            </label>
            <button onClick={start}>Start</button>
            {
                isStarted ?
                    <>
                        <button onClick={stop}>Stop</button>
                        <Modal>{time}</Modal>
                    </>
                    : null
            }
        </>
    )
}

export default Task3;