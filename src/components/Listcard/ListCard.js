import { useState, useEffect } from 'react';
import festival_img from "../../imgs/bbq.svg";
import Card from './../Card/card';
function ListCard() {
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
                setdata(result.slice(6,9))
            })
            .catch(error => console.log('error', error));

    }, [])
    console.log(data)
    return (
        <section className="cateprod-list">
            <div className="cateprod-container">
                <div className="cateprod-list-title-block">
                    <span className="list-title">中秋特惠</span>
                    <button>查看更多商品 〉</button>
                    <img src={festival_img} alt="cateprod-list-title-img" />
                </div>
                <div className="cateprod-list-product-block">
                    {data?data.map(data =>{
                        return(
                        <Card img={data.image} title={data.name} price={data.price}/>
                    )}):null}
                </div>
            </div>
        </section>
    );
}

export default ListCard;
