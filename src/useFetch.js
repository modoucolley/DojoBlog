import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);
    const [name, setName] = useState('mario');    
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

    const abortCont = new AbortController();
        
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Could Not Fetch The Data')
                }
        return res.json();
             })
    .then(data=>{
        console.log(data);
        setData(data);
        setisLoading(false);
        setError(null);
            })
    .catch(err=>{
        if( err.name === 'AbortError')
        {
            console.log('FETCH ABORTED')
        }
        else{
            console.log(err.message);
            setError(err.message);
            setisLoading(false);
        }
        
           })

           return () => abortCont.abort();
    }
    
    );

    return {data, isLoading, error}
}


export default useFetch;