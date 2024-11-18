import { useEffect, useRef } from "react";

export function usePrev(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);

    //after returning the current value of ref (and completion of the render that uses this value), the value gets set to 
    //the new value of the prop, so it doesn't hold the previous value, it only returns it and then updates to new value.

    return ref.current;
}
//Potential problem: as mentioned above, after returning the current value, the ref gets updated to new value, so previous value
//is lost. In this case, when a re-render occurs where the prop doesn't change, usePrev will return the last value it got
//updated to(the value that the prop still holds), so in this re-render the previous and current value will be same.

//Solution: 

export function usePrevUpdated(value) {
    const ref = useRef({target: value, previous: undefined});
    if(ref.current.target !== value) {
        ref.current.previous = ref.current.target;
        ref.current.target = value;
    }

    return ref.current.previous;
}