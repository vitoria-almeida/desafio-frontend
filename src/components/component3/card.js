import Rectangle from './styles';
import { useState, useEffect } from 'react';

function Card() {
    const [color, setColor] = useState()

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor('green')
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Rectangle backgroundGreen={color}>
            <div></div>
        </Rectangle>
    )
} 

export default Card;