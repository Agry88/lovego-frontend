import Card from './card';
import React, { useState, useEffect } from 'react';
function CardList() {
    const [data,setdata] = useState(null);
    useEffect(() => {
        var myHeaders = new Headers();
        

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://lovego-backend.azurewebsites.net/api/products/", requestOptions)
            .then(response => response.json())
            .then(result => {
                setdata(result.slice(0,9))
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <section className="prodict-section gap-top">
            <div className="product-block">
                <ul className="product-list">
                {data?data.map(data =>{
                        return(
                        <Card img={data.image} title={data.name} price={data.price}/>
                    )}):"data"}
                </ul>
            </div>
        </section>
    );
}

export default CardList;