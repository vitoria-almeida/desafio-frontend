import Rectangle from './styles';
import { useEffect, useState } from 'react';

function Card() {
    const [color, setColor] = useState()

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor('purple')
            document.p='fim'
        }, 1500);
        return () => clearTimeout(timer)
    }, []);

    return (
        <Rectangle backgroundPurple={color}>
            <div></div>
            <p></p>
        </Rectangle>
    )
} 

export default Card;