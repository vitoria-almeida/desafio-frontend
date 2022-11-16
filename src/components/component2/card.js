import Rectangle from './styles';
import { useEffect, useState } from 'react';

function Card() {
    const [color, setColor] = useState()

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor('crimson')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Rectangle backgroundCrimson={color}>
            <div></div>
        </Rectangle>
    )
} 

export default Card;