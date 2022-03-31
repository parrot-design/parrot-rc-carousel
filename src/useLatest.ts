import { useEffect, useRef } from "react"

export default (params:any)=>{

    const latest=useRef();

    useEffect(()=>{
        latest.current=params;
    })

    return latest;
}