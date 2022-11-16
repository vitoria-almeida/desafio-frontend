import './style.css';
import Card1 from "../components/component1/card";
import Card2 from "../components/component2/card";
import Card3 from "../components/component3/card";

function Container() {
    return (
        <section>
            <h1>Cards and Timer</h1>
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
        </section>
    )
}

export default Container;