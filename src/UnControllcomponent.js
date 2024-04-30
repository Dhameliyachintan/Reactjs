import React, { useRef } from 'react'

export const UnControllcomponent = () => {
    const inputRef = useRef(null)
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("input field value", inputRef.current.value);
        const input3 = document.getElementById('inputid').value
        console.log(input3);
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" ref={inputRef} />
                <input type="text" id='inputid' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

