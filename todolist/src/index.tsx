import React from "react";
import ReactDOM from "react-dom";


interface Props {
    color: string;
}


const App:React.FC<Props>=()=> {
    return <h1>{this.props.color}</h1>
}

ReactDOM.render(<App color="green"/>, document.querySelector('#root'));