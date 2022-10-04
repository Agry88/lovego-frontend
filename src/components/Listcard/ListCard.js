import festival_img from "../../imgs/bbq.svg";
import Card from './../Card/card';
import shopcar from "../../imgs/main-menu.png";
import tempjson from "../../temp.json";
import { useEffect, useState } from "react";

function ListCard() {

    const [prods, setprods] = useState([])

    useEffect(() => {
        setprods(tempjson)
    }, [])

    return (
        <section className="cateprod-list">
            <div className="cateprod-container">
                <div className="cateprod-list-title-block">
                    <span className="list-title">中秋特惠</span>
                    <button>查看更多商品 〉</button>
                    <img src={festival_img} alt="cateprod-list-title-img" />
                </div>
                <div className="cateprod-list-product-block">
                    {prods && prods.slice(3, 7).map(prod => {
                        return <Card key={prod.prod_title} prod_price={prod.prod_price} prod_title={prod.prod_title} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default ListCard;
