const CardProduct = ({ className }) => {
    return (
        <>
            <div className={`wrapper-product font-rubik mx-auto ${className}`}>
                <a href="#">
                    <div className="group-img">
                        <div className="love-product">
                            <img src="/images/heart.svg" />
                        </div>
                    </div>
                    <div className="group-desc mt-3">
                        <div className="font-extrabold">
                            Abiroy
                    </div>
                        <div className="group-rate flex">
                            <div className="group-star mr-2 space-x-1">
                                <span className="start filled"></span>
                                <span className="start filled"></span>
                                <span className="start filled"></span>
                                <span className="start filled"></span>
                                <span className="start"></span>
                            </div>
                            <div className="count">
                                (1283)
                            </div>
                        </div>
                        <div className="store">Lorem Ipsum Store</div>
                        <div className="price text-lg font-bold mt-1">
                            Rp. 200.000
                    </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default CardProduct