import React from 'react';
import styles from "@/app/styles/common.css";
import Image from 'next/image';

async function Contact({params}){
    const id=params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b97f85967amshd02e3e2304c5070p1aa3b3jsna4a83a521629',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    const main_data = data[0]?.details;

    return(
        <>
           <div className="container">
                <h2 className="movie_title">   Netflix \ <span> {main_data?.type} </span> </h2>
                <div className="card_section">
                    <div>
                        <Image src={main_data?.backgroundImage?.url} alt={main_data?.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data?.title}</h1>
                        <p>{main_data?.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;