import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/card";
import lefticon from '../../imgs/lefticon.svg'
function Slick() {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, minWidth: "25px", minHeight: "100px", display: "block", transform: "rotate(-180deg) translate(0,50%)" }}
        onClick={onClick}
        src={lefticon}
        alt="righticon"
      />
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, minWidth: "25px", minHeight: "100px", display: "block" }}
        onClick={onClick}
        src={lefticon}
        alt="lefticon"
      />
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    touchMoved: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  const [data, setdata] = useState(null);
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
        setdata(result)
      })
      .catch(error => console.log('error', error));

  }, [])
  return (
    <div className="popular-frame">
      <h2 className="popular-text">強檔商品</h2>
      <Slider {...settings} style={{ width: '90%', minWidth: '400px' }}>
        {data ? data.map(data => {
          return (
            <Card key={data.id} img={data.image} title={data.name} price={data.price} />
          )
        }) : null}
      </Slider>
    </div>
  );
}

export default Slick;