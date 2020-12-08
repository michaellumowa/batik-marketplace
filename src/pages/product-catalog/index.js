import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CardProduct from '../../components/CardProduct'
import Filter from '../../components/Filter'

const productCatalog = () => {
    return (
        <>
            <Header />
            <div className="md:mt-32 font-rubik">
                <div className="max-w-7xl mx-auto px-8 mb-12 bg-white">
                    <div className="group-banner-katalog overflow-hidden rounded-3xl">
                        <div className="list-banner" style={{ backgroundImage: 'url(/images/img-dummy1.png)' }}>
                            {/* the image using background */}
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-8 md:mb-16 bg-white flex justify-between">
                    <a href="#" className="katalog-kategori badge-katalog flex px-7 items-center">
                        <img className="mr-5" src="images/img-dummy1.png" alt="katalog kategori" />
                        <div className="font-bold text-xl">Lengan Panjang</div>
                    </a>

                    <a href="#" className="katalog-kategori badge-katalog flex px-7 items-center">
                        <img className="mr-5" src="images/img-dummy1.png" alt="katalog kategori" />
                        <div className="font-bold text-xl">Lengan Pendek</div>
                    </a>

                    <a href="#" className="katalog-kategori badge-katalog flex px-7 items-center">
                        <img className="mr-5" src="images/img-dummy1.png" alt="katalog kategori" />
                        <div className="font-bold text-xl">Baju Polo</div>
                    </a>

                    <a href="#" className="katalog-kategori badge-katalog flex px-7 items-center">
                        <img className="mr-5" src="images/img-dummy1.png" alt="katalog kategori" />
                        <div className="font-bold text-xl">Baju Kaos</div>
                    </a>
                </div>

                <div className="max-w-7xl mx-auto px-8 mb-12 bg-white flex">
                    <Filter />
                    <div className="flex flex-wrap">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v, i) => {
                            return <CardProduct className="mr-2 mb-6" key={i}/ >
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default productCatalog