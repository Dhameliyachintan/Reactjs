import React, { useMemo, useState } from 'react'

export default function Usememo() {
    const [add, setadd] = useState(0);
    const multiplation = useMemo(function multiply() {
        console.log("memo");
        return add * 10
    }, [add])
    return (
        <div>
            {add}
            {multiplation}
            <button onClick={() => setadd(add + 1)}> click</button>
        </div>
    )
}
