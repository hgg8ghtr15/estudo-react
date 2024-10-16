import { useState } from "react"

export function Counter () {
    const [counter, setCounter] = useState(0)
    function incrementar(){
        setCounter(counter + 1)
        // console.log(counter)
    }
    function decrementar(){
        setCounter(counter - 1)
        // console.log(counter)
    }


    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={incrementar}>Incrementar</button>
            <button type="button" onClick={decrementar}>Decrementar</button>
        </div>
    )
}