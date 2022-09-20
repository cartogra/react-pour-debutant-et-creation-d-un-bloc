import { useEffect, useState } from "react";

const useFetch = (url) => {

const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)


    useEffect( () => {
        setTimeout(() => {
         fetch(url)
         .then  ((response) => {
             if(!response.ok){
                 throw Error ('desole une erreur est survenu...')
             }
     
            return response.json();
        })
        .then ((data) => { 
           setData(data['blogs'])
           setIsLoading(false)
           setError(null)
       })
         .catch(err => {
             console.log(err.message)
             setError(true)
             setIsLoading(false)
         })
        }, 2000);
      }, [url]);
      return{ data, isLoading,error}
}
 
export default useFetch;