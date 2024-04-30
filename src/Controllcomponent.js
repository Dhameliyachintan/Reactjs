import React, { useState } from 'react'

export const Controllcomponent = () => {
    const [val, setval] = useState()
    return (
        <div>
            <input type="text" value={val} defaultValue="" onChange={(e) => setval(e.target.value)}/>
            <h1>Value : {val}</h1>
        </div>
    )
}

