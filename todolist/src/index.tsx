import React from "react";
import ReactDOM from "react-dom";


interface Props {
    color?: string;
}


const App:React.FC<Props>=({color}: Props)=> {
    state={counter:0};
    
    return (
        <div>
            <button onClick={this.onUp}>Plus</button>
            {this.state.counter}
            <button onClick={this.onDown}>Minus</button>
        </div>
    );
}


ReactDOM.render(<App color="Olive" />, document.querySelector('#root'));