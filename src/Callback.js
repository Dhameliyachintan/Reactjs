import React, { useState, useCallback } from 'react';

const Callback = () => {
    const [count, setCount] = useState(0);

    // useCallback हुक का उपयोग करें
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]); // count को dependency के रूप में पास करें

    return (
        <div>
            <p>Count: {count}</p>
            {/* useCallback का उपयोग किया है */}
            <button onClick={handleClick}>Increment Count</button>
        </div>
    );
};

export default Callback;
