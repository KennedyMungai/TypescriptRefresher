import React from "react";
import ReactDOM from "react-dom";


interface Props {
    color?: string;
}


const App:React.FC<Props>=({color}: Props)=> {
    return <h1>{color}</h1>
}


ReactDOM.render(<App color="Olive" />, document.querySelector('#root'));