import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);
    
    const increment1 = () =>{
        if (count < 10) setCount(count + 1);
        else if (count == 10) alert("you cannot increment above 10");
    };

    const increment2 = () =>{
        if (count < 8) setCount(count + 2);
        else if (count < 10) setCount(count + 1);
        else if (count == 10) alert("you cannot increment above 10");
    };

    const decrement1 = () =>{
        if (count > 0) setCount(count - 1);
        else if (count == 0) alert("you cannot decrement below 0");
    };
    const decrement2 = () =>{
        if (count > 1) setCount(count - 2);
        else if (count == 1) setCount(count - 1);
        else if (count == 0) alert("you cannot decrement below 0");
    };

    return (
        <div className="d-flex flex-row align-items-center align-content-center justify-content-center mt-10">
            <h1>Use State Counter Practice=</h1>
            <h1>{count}</h1>
            <button className="btn btn-success mx-2"onClick={increment1} > Increment1</button>
            <button className="btn btn-success mx-2"onClick={increment2} > Increment2</button>
            <button className="btn btn-danger mx-2" onClick={decrement1}  > Decrement1 </button>
            <button className="btn btn-danger m x-2" onClick={decrement2} > Decrement2 </button>
        </div>
    )
}