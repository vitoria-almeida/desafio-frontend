import styled from 'styled-components';

export const Rectangle = styled.div `
    width: 80%;
    height: 10%;
    border: 3px solid purple;
    border-radius: 10px;
    margin: 10px;
    background-color: ${props => props.backgroundPurple};

    display: flex;
    align-items: center;
    justify-content: center;

    div { 
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: purple;
        animation-name: circle;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        @keyframes circle {
            0% {width: 25px; height: 25px;}
            25% {width: 20px; height: 20px;}
            50% {width: 12px; height: 12px;}
            75% {width: 20px; height: 20px;}
            100% {width: 25px; height: 25px;}
        }
    }
`
export default Rectangle;