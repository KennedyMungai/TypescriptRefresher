import React, { useState } from "react";
import ReactDOM from "react-dom";


interface Props {
    color?: string;
}


const App:React.FC<Props>=({color}: Props)=> {
    const [counter, setCounter] = useState<number>(0);

    const onUp = () :void => {
        setCounter(counter+1);
    }

    const onDown = ():void => {
        setCounter(counter-1);
    }
    
    return (
        <div>
            <button onClick={onUp}>Plus</button>
            {counter}
            <button onClick={onDown}>Minus</button>
        </div>
    );
}


ReactDOM.render(<App color="Olive" />, document.querySelector('#root'));