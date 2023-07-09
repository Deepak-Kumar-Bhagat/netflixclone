import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.css"

async function Movie(){

  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const url = process.env.Rapid_key;
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b97f85967amshd02e3e2304c5070p1aa3b3jsna4a83a521629',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
  };

  const res= await fetch(url,options);
  const data= await res.json();
  const main_data=data.titles;
  // console.log(main_data);

    return(
        <>
        <section className="movieSection">
          <div className="container">
          <h1>Series & Movie</h1>
          <div className="card_section">
          {main_data?.map((curElem)=>{
            return(
              <MovieCard key={curElem.id} curElem={curElem}/>
            )
          })}
          </div>
          </div>
        </section>
        </>
    )
}

export default Movie;