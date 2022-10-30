import { useEffect } from "react";


const useCustomState = (value) =>{

    let stateValue

    if (stateValue === undefined){
        stateValue = value
    }

    console.log("newvaluie",value)
        const setInitValue =(newValue) =>{
            console.log("newvaluie12344",newValue)
            stateValue = newValue+100
            console.log("newvaluie12344345235423",stateValue)
        }

    // },[])

    return [stateValue,setInitValue] 




}

export default useCustomState