
function detail() {
    const datas = [
        {
            title: "商品介紹",
            content: "嚴選台灣飼養的烏骨雞\n又名膠原美顏雞，富含膠原蛋白，結合魚鱗膠原蛋白，再搭配補氣中藥，讓您吃出安心、養出美麗！"
        },
        {
            title: "規格說明",
            content: "內容量：2700\n固形量：1500g"
        },
        {
            title: "配送方式",
            content: "店面選購、冷凍宅配、校內限定公文車交換"
        }
    ]

    return (
        <>
            <div className="detail-frame">
                <div className="detail-container">
                    {datas.map(data => {
                        return (
                            <div className="detail-block">
                                <div className="detail-frametop">{data.title}</div>
                                <div className="detail-textframe">
                                    <p className="detail-text">{data.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default detail;