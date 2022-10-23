import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../imgs/logo.png"
import mainmenu from "../../imgs/main-menu.png"
import magnifying from "../../imgs/magnifying.svg"
import shopcar from "../../imgs/shopcar.svg"
import product from "../../imgs/product.png"
import bell from "../../imgs/bell.svg"
import logout from "../../imgs/logout.svg"

function Navbar() {

    const [ismenu_expand, setismenu_expand] = useState(false)
    const [isshopcar, setisshopcar] = useState(false)

    const navigate = useNavigate();

    const handleMenuExpand = () => {
        setismenu_expand(!ismenu_expand)
    }

    const handleShopCarButtonClick = () => {
        setisshopcar(!isshopcar)
    }

    return (
        <section className="navbar">
            <header className="mainnav-wrapper">
                <div className="mainnav-logo-block">
                    <button onClick={() => navigate("/")}>
                        <img src={logo} alt="logo" />
                    </button>
                    <span>海軍樂購生活館Love Go</span>
                </div>
                <div className="mainnav-right-block">
                    <button id="btn-mainnav-menu" onClick={handleMenuExpand}>
                        <img src={mainmenu} alt="Menu" />
                    </button>
                    <div className="mainnav-right-container" aria-expanded={ismenu_expand}>
                        <div className="mainav-search-block">
                            <div className="mainav-search-container">
                                <button id="btn-search">
                                    <img src={magnifying} alt="Search" />
                                </button>
                                <input id="text-search" type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="shopcar-section">
                            <button className="btn-right-section btn-shopcar" onClick={handleShopCarButtonClick}>
                                <span>查看購物車</span>
                                <img src={shopcar} alt="Shopcar" className="mainnav-icons" />
                            </button>
                            {isshopcar && 
                                <div className="popout-shopcar" aria-expanded={isshopcar}>
                                    <div className="popout-shopcar-title">
                                        最近加入的商品
                                    </div>
                                    <ul className="popout-shopcar-list">
                                        <li className="popout-shopcar-item">
                                            <div className="popout-shopcar-img-block">
                                                <img src={product} alt="商品名稱" />
                                            </div>
                                            <div className="popout-shopcar-span-block">
                                                <span>產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱</span>
                                                <span>$10</span>
                                            </div>
                                        </li>
                                        <li className="popout-shopcar-item">
                                            <div className="popout-shopcar-img-block">
                                                <img src={product} alt="商品名稱" />
                                            </div>
                                            <div className="popout-shopcar-span-block">
                                                <span>產品名稱</span>
                                                <span>$10</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="popout-shopcar-checkcar">
                                        <button className="btn-right-section" onClick={() => {navigate("/Checkoutpage")}}>查看我的購物車</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="notice-section">
                            <button className="btn-right-section btn-notice">
                                <span>查看提醒</span>
                                <img src={bell} alt="Announce" className="mainnav-icons" />
                            </button>
                        </div>
                        <div className="user-section">
                            <button className="btn-right-section btn-user" onClick={() => navigate("/Signinpage")}>
                                <span>查看使用者</span>
                                <img src={logout} alt="Logout" className="mainnav-icons" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <header className="secnav-wrapper">
                <div className="secnav-block">
                    <button aria-selected="true">
                        <span>全部商品</span>
                    </button>
                    <button>
                        <span>食品</span>
                    </button>
                    <button>
                        <span>生活用品</span>
                    </button>
                    <button>
                        <span>保健食品</span>
                    </button>
                </div>
            </header>
        </section>
    );
}

export default Navbar;