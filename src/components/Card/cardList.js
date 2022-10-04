import Card from './card';
import shopcar from "../../imgs/main-menu.png";
import tempjson from "../../temp.json";
import { useState, useEffect } from 'react';

function CardList() {

    const [prods, setprods] = useState([])

    useEffect(() => {
        setprods(tempjson)
    }, [])

    return (
        <section className="prodict-section gap-top">
            <div className="product-block">
                <ul className="product-list">
                    {prods && prods.map(prod => {
                        return <Card key={prod.prod_title} prod_price={prod.prod_price}  prod_title={prod.prod_title}/>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default CardList;