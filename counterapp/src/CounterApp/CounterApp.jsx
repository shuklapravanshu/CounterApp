const { useState } = require("react")

const Home = (props) => {
    const [count, setCount] = useState(0);

    const HandleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const HandleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
        <h1>{props.name}</h1>
        <div style={{marginBottom:"10px"}} >
            <span>Count: {count} </span>
        </div>
        <div>
            <button onClick={HandleIncrement} >Increment</button>
            <button onClick={HandleDecrement} >Decrement</button>
        </div>
        </div>
    );
}



export default Home;