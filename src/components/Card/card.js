import img_prod_default from "../../imgs/product.png";
import img_car from "../../imgs/noto_shopping-cart.svg";
import { useNavigate } from "react-router-dom";

function Card(props) {

    const { prod_title , prod_price } = props;
    
    const navigate = useNavigate();

    return (
        <div className='card short-card'>
            <div className="img-block" onClick={() => navigate("/product/2")}>
                <img src={require(`../../temp_imgs/${prod_title}.png`) ?? img_prod_default} alt="chicken" />
            </div>
            <div className='describe-block'>
                <h4>{prod_title ?? "活力烏雞湯"}</h4>
                <div className="describe-container">
                    <p>${prod_price ?? '199'}</p>
                    <button id="addshopcar">
                        <img src={img_car} alt="car" className="img" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
