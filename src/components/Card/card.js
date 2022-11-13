// import img_prod from "../../imgs/product.png";
import img_car from "../../imgs/noto_shopping-cart.svg";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();
    return (
        <div className='card short-card'>
            <div className="img-block" onClick={() => navigate("/product/2")}>
                <img src={props.img} alt="chicken" />
            </div>
            <div className='describe-block'>
                <h4>{props.title}</h4>
                <div className="describe-container">
                    <p>${props.price}</p>
                    <button id="addshopcar">
                        <img src={img_car} alt="car" className="img" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
