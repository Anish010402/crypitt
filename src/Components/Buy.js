import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material';
function Buy() {


    const [data,setData] =useState([])
    const getNews =()=>{
        axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then((response)=>{
            console.log(response);
           setData(response.data.Data)
        })

    }
  return (
    <div className='container my-3'>
        <Button
            variant="outlined"
            style={{
              width: "100%",
              height: 40,
              paddingTop: "10px",
              color: "#fff",
              backgroundColor: "#EEBC1D",
            }}
             onClick={getNews}>Fetch News</Button>
      
    

    <div className="container">
      <div className="row">
        {
          data.map((value)=>{
              return(
                <div className="col-4">
                     <div className="card text-black" style={{width: "20rem", color: "black" }}>
                         <img src={value.imageurl} className="card-img-top" alt="..."/>
                         <div className="card-body">
                             <h5 className="card-title" style={{width: "17rem"}}>{value.title}</h5>
                             
                             <a href={value.url}  class="btn btn-primary"style={{width: "17rem"}}>{value.url}</a>
                        </div>
                    </div>

                </div>
              )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Buy


