import lefticon from '../../imgs/lefticon.svg'
import Card from '../Card/card';
import shopcar from "../../imgs/main-menu.png";
import tempjson from "../../temp.json";
import { useEffect, useState } from "react";

function Popular() {

    const [prods, setprods] = useState([])

    useEffect(() => {
        setprods(tempjson)
    }, [])

    return (
        <div className="popular-frame">
            <p className="popular-text">熱門商品</p>
            <div className="popular-list">
                <button className="popular-prev" >
                    <img src={lefticon} alt="lefticon" />
                </button>
                <ul className="popular-list">
                    {prods && prods.slice(0, 5).map(prod => {
                        return (<li className="popular-item">
                            <Card key={prod.prod_title} prod_price={prod.prod_price} prod_title={prod.prod_title} />
                        </li>)
                    })}
                </ul>
                <button className="popular-next">
                    <img src={lefticon} alt="lefticon" />
                </button>
            </div>
        </div>
    );
}

export default Popular;