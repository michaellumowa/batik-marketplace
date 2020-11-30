const CardBlog = () => {
    return (
        <>
            <div className="wrapper-card-blog relative mx-2 lg:mx-0 mb-10 lg:mb-0">
                <a href="#">
                    <div>
                        <img className="block w-full" src="/images/img-dummy1.png" />
                    </div>
                    <div className="group-blog-desc -mt-8 m-auto relative bg-white text-center shadow-md border-gray-200 space-y-3 p-4">
                        <div className="text-color-alt">Events</div>
                        <div className="text-xl font-medium text-gray-500">Batik Fashion Show</div>
                        <div className="text-sm text-gray-400 font-medium">18 Sebtember 2020</div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default CardBlog