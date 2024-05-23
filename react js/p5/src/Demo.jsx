import React, {useState} from "react";

function Demo()
{
    const [index , setIndex ] = useState(0);


    function change()
    {
        setIndex(index + 1);
    };
    return  (
        <>
            <h1>{index}</h1>
            <button onClick={change}>click me</button>
        </>
    );
};
export default Demo;
