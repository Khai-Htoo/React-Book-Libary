import { useEffect, useState } from "react"

export default function useFetch(url,method= "GET") {
    let [data,setData] = useState([])
    let [loading,setLoading] = useState(false)
    let [postData,setPostData] = useState(null)
    useEffect(()=>{
        let action = {method}

       let fetchData = () => {
        setLoading(true)
        fetch(url,action)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setLoading(false)
        })
       }

       if(method === "POST" && postData){
        action = {
            ...action,
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(postData)
        }
        fetchData()
       }

       if(method === 'GET'){
        fetchData()
       }

    },[url,postData])

   return {setPostData, data,loading}
}

