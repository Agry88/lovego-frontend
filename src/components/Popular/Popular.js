import { useState, useEffect, useRef } from 'react';
import lefticon from '../../imgs/lefticon.svg'
import Card from '../Card/card';

const props_length = 21
const numofdots = Math.ceil(props_length / 5)

function Popular() {
    const ul_list = useRef(null)
    const dot_container = useRef(null)
    const dot_index = useRef(0)
    const [data, setdata] = useState(null)

    const handleButton = (direction) => {
        const offset = direction === 'left' ? -1000 : 1000
        ul_list.current.scrollLeft = ul_list.current.scrollLeft + offset
    }

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

    useEffect(() => {
        //點擊按鈕時也會觸發這個event
        ul_list.current.addEventListener("scroll", e => {
            //Scroll的最長寬度 以及每個點在滑軌中該有的寬度 使用者所在的position
            const maxscrollWidth = e.target.scrollWidth - e.target.clientWidth
            const scrollwidth_perdot = maxscrollWidth / numofdots
            const scrollposition = e.target.scrollLeft

            //算出來的index要避免出現點的數量
            const new_selected_dot = Math.floor(scrollposition / scrollwidth_perdot)
            const new_selected_dot_index = new_selected_dot === numofdots ? new_selected_dot - 1 : new_selected_dot
            if (new_selected_dot_index === dot_index.current) return

            //設定新的點的樣式及記錄index
            const activedot = dot_container.current.querySelector(".selected")
            dot_container.current.children[new_selected_dot_index].classList.add("selected")
            activedot.classList.remove("selected")
            dot_index.current = new_selected_dot_index
        })
    }, [])


    return (
        <div className="popular-frame">
            <p className="popular-text">熱門商品</p>
            <div className="popular-dot-container" ref={dot_container}>
                {data ? [...Array(data.length/5)].map((element, index) => {
                    if (index === 0) {
                        return <span key={index} className="popular-dot selected" ></span>
                    }
                    return <span key={index} className="popular-dot"></span>
                }) : null}
            </div>
            <div className="popular-list">
                <button className="popular-arrow left" >
                    <img src={lefticon} alt="lefticon" onClick={() => handleButton('left')} />
                </button>
                <ul className="popular-list" ref={ul_list}>
                    {data ? data.map((element, index) => {
                        return <li key={index} className="popular-item" style={{ width: "100%" }}>
                            <Card key={element.id} img={element.image} title={element.name} price={element.price} />
                        </li>
                    }): null}
                </ul>
                <button className="popular-arrow right">
                    <img src={lefticon} alt="lefticon" onClick={() => handleButton('right')} />
                </button>
            </div>
        </div>
    );
}

export default Popular;