import { write } from "@popperjs/core"
import { useReducer } from "react"
import { ToastContainer, toast } from 'react-toastify';


function UseReducerCounter() {
    const reducer = (state, action) => {
        const { type } = action
        switch (type) {
            case "INCREMENT 1":
                {
                    if (state == 10) {
                        toast("you cannot increment above 10", { toastId: "limit-error" });

                        return state
                    }
                    else if (state < 10)
                        return state + 1
                }
            case "INCREMENT 2":
                {
                    if (state == 10) {
                        toast("You cannot increment above 10", { toastId: "limit-error" });
                        return state
                    }
                    else if (state < 8)
                        return state + 2
                    else if (state < 10)
                        return state + 1
                }
            case "DECREMENT 1": {
                if (state > 0) {
                    return state - 1
                }
                else if (state < 0)
                    return state
                else if (state == 0)
                    toast("you cannot decrement below 0", { toastId: "limit-error" })
                return state
            }
                return state - 1
            case "DECREMENT 2": {
                if (state > 1) {
                    return state - 2
                }
                else if (state == 1)
                    return state - 1
                else if (state == 0)
                    toast("you cannot decrement below 0", { toastId: "limit-error" })
                return state
            }
            case "RESET":
                return 0
            default:
                return state
        }
        <ToastContainer />
    }

    const initialState = 0
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="container py-5">
            <h1>UseReducer Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT 1" })}> Increment 1</button>
            <button onClick={() => dispatch({ type: "INCREMENT 2" })}> Increment 2</button>
            <button onClick={() => dispatch({ type: "DECREMENT 1" })}> Decrement 1 </button>
            <button onClick={() => dispatch({ type: "DECREMENT 2" })}> Decrement 2 </button>
            <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>
            <ToastContainer />
        </div>
    );
}
export default UseReducerCounter;