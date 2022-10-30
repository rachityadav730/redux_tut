import  {useEffect}  from "react";

const useTitleCount = (count) =>{


    console.log("123412341322",count)
    document.title = `Cart123(${count})`
    useEffect(() => {
        console.log("countValue12345566",count)
        document.title = `Cart1235 (${count})`
    },[count]);
   
    console.log("1234",count)
}

 export default useTitleCount;