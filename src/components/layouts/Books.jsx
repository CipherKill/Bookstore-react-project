import { useState,useEffect } from 'react';
import BookCard from './BookCard'
import '../styles/Books.css'

function Books({forPath}) {

  const [data,setData]=useState([]);
  const [loading,isLoading]=useState(true);

  const fetchData=async ()=>{
    const response=await fetch('/bookData.json');
    const data=await response.json();
    setData(data);
    isLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  if(!loading){

    if(forPath==='books'){
      return (
        <div className="contianer-fluid books-area">
          <div className="row">  
            {data.map(dat=>(
              <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
                <BookCard cover={dat.cover} name={dat.name} author={dat.author} rating={dat.rating} genre={dat.genre} key={dat.id}/>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if(forPath==='home'){
      return (
      <div className="contianer-fluid books-area">
          <div className="row">  
            {data.filter(dat=>dat.rating>3).slice(0,4).map(result=>(
              <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
                <BookCard cover={result.cover} name={result.name} author={result.author} rating={result.rating} genre={result.genre} key={result.id}/>  
              </div>
            ))}
          </div>
        </div>
      )
    }


  }

  else{
    return (
      <h1>Loading...</h1>
    )
  }

}

export default Books