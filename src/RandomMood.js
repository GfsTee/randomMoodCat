import React, { useState } from 'react';
import { Cat } from 'react-kawaii';


const RandomMood = () => {
    const moodArray = ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]
    const [mood, setMood] = useState(0)
    const randomMood = () => {
        let random = Math.floor(Math.random() * moodArray.length)
        setMood(random)
    }
    return (
        <>
            <div onClick={randomMood}>
                <Cat size={200} mood={moodArray[mood]} color="#FDA7DC" />
            </div>
        </>
    );
}

export default RandomMood;