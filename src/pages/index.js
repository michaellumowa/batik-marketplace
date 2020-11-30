import Footer from '../components/Footer'
import Header from '../components/Header'
import CardProduct from '../components/CardProduct'
import CardBlog from '../components/CardBlog'
import NavMobile from '../components/NavMobile'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div className={`arrow-left ${className}`} style={{ ...style }} onClick={onClick}>
        <img src="/images/chevron-left.svg" alt="chevron prev" />
      </div>
    )
  }

  const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div className={`arrow-right ${className}`} style={{ ...style }} onClick={onClick}>
        <img src="/images/chevron-right.svg" alt="chevron next" />
      </div>
    )
  }

  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          touchMove: true,
        },
      },
    ]
  }

  return (
    <>
      <Header />
      <div className="container-batik md:mt-32">

        {/* section main banner */}
        <div className="max-w-7xl overflow-hidden mx-auto md:px-8 mb-8 md:mb-16 bg-white">
          <div className="group-main-slider">
            <Slider {...bannerSettings}>
              {[1, 2, 3].map((v, i) => {
                return <div key={i}>
                  <a href="#" className="w-full">
                    <div className="list-banner" style={{ backgroundImage: 'url(/images/img-dummy1.png)' }}>
                      {/* the image using background */}
                    </div>
                  </a>
                </div>
              })}
            </Slider>
          </div>
        </div>

        {/* section kategori */}
        <div className="max-w-7xl mx-auto px-6 xl:px-8 mb-16 font-rubik">
          <div className="font-semibold text-2xl title-sec mb-8 hidden md:block">
            Kategori
        </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-14">

            <div className="flex justify-between w-full md:w-1/3 mb-6">
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/baju-pria.png" alt="baju pria batik" />
                  <div className="name text-center mt-2 md:mt-6"> Baju Pria </div>
                </a>
              </div>
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/baju-wanita.png" alt="baju wanita batik" />
                  <div className="name text-center mt-2 md:mt-6"> Baju Wanita </div>
                </a>
              </div>
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/baju-anak.png" alt="baju Anak batik" />
                  <div className="name text-center mt-2 md:mt-6"> Baju Anak </div>
                </a>
              </div>
            </div>

            <div className="flex justify-between w-full md:w-1/3 mb-6">
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/kain-batik.png" alt="kain Batik" />
                  <div className="name text-center mt-2 md:mt-6"> Kain Batik </div>
                </a>
              </div>
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/sarung.png" alt="sarung batik" />
                  <div className="name text-center mt-2 md:mt-6"> Sarung </div>
                </a>
              </div>
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/aksesoris.png" alt="aksesoris batik" />
                  <div className="name text-center mt-2 md:mt-6"> Aksesoris </div>
                </a>
              </div>
            </div>

            <div className="flex justify-between w-full md:w-1/3 mb-6">
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/ensiklopedia.png" alt="ensiklopedia batik" />
                  <div className="name text-center mt-2 md:mt-6"> Ensiklopedia Batik</div>
                </a>
              </div>
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/lookbook.png" alt="lookbook batik" />
                  <div className="name text-center mt-2 md:mt-6"> Lookbook</div>
                </a>
              </div>
              <div className="list-kategori">
                <a href="#">
                  <img className="w-full" src="/images/about.png" alt="about batik" />
                  <div className="name text-center mt-2 md:mt-6"> About Batik</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-separator mx-6 lg:mx-auto mb-16 opacity-50 md:hidden"></div>

        {/* section product baru */}
        <div className="section-product-baru max-w-7xl mx-auto px-6 xl:px-8 mb-32">
          <div className="font-semibold text-center text-2xl title-sec mb-20">
            Product Baru
        </div>
          <div className="group-product-slider">
            <Slider {...Settings}>
              {[1, 2, 3, 4, 5, 6].map((v, i) => {
                return <CardProduct key={i}></CardProduct>
              })}
            </Slider>
          </div>
        </div>

        {/* section kategori promo */}
        <div className="section-kategori-promo mb-14">
          <div className="max-w-7xl mx-auto py-14 px-6 xl:px-8">
            <div className="font-semibold text-center text-4xl title-sec text-white mb-16">
              Kategori Promo
          </div>
            <div className="flex flex-col md:flex-row items-center lg:justify-between mb-12 space-x-1 md:space-x-2 space-y-6 md:space-y-0">
              <div className="card-kategori-promo rounded-xl overflow-hidden">
                <a href="#">
                  <div className="card-header h-2/3 flex justify-center items-end">
                    <img className="h-52 sm:h-72" src="/images/img-man.png" alt="man" />
                  </div>
                  <div className="card-footer h-1/3 bg-color-alt text-white pt-5 px-10">
                    <div className="text-4xl font-semibold mb-2">Batik Pria</div>
                    <div className="uppercase font-bold text-7xl text-promo">40% Off</div>
                  </div>
                </a>
              </div>

              <div className="group-cat">
                <a href="#">
                  <div className="card-kat-promo-mini flex flex-col mx-auto md:mx-0">
                    <div className="card-header flex-1 overflow-hidden">
                      {/* the image using background */}
                    </div>
                    <div className="card-footer capitalize font-bold text-xl text-center p-3">
                      kemeja batik
                </div>
                  </div>
                </a>

                <a href="#">
                  <div className="card-kat-promo-mini flex flex-col mx-auto md:mx-0">
                    <div className="card-header flex-1 overflow-hidden">
                      {/* the image using background */}
                    </div>
                    <div className="card-footer capitalize font-bold text-xl text-center p-3">
                      kemeja batik
                </div>
                  </div>
                </a>
              </div>

              <div className="group-cat">
                <a href="#">
                  <div className="card-kat-promo-mini flex flex-col mx-auto md:mx-0">
                    <div className="card-header flex-1 overflow-hidden">
                      {/* the image using background */}
                    </div>
                    <div className="card-footer capitalize font-bold text-xl text-center p-3">
                      kemeja batik
                  </div>
                  </div>
                </a>

                <a href="#">
                  <div className="card-kat-promo-mini flex flex-col mx-auto md:mx-0">
                    <div className="card-header flex-1 overflow-hidden">
                      {/* the image using background */}
                    </div>
                    <div className="card-footer capitalize font-bold text-xl text-center p-3">
                      kemeja batik
                  </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-separator mx-6 lg:mx-auto mb-16 opacity-50"></div>

        {/* section shop now */}
        <div className="section-shopnow mb-14">
          <div className="max-w-7xl mx-auto px-6 xl:px-8 flex justify-center lg:justify-between">
            <div className="wrapper-shopnow-left hidden lg:block">
              <h1 className="font-playfair text-6xl font-bold mb-12">Lorem Ipsum</h1>
              <div className="font-rubik leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada.
                Ac odio tempor orci dapibus ultrices
             </div>
            </div>

            <div className="flex relative font-rubik wrapper-shopnow-right px-12 py-10">
              <div>
                <div className="text-3xl sm:text-5xl text-white mb-6 sm:mb-14">
                  Look Better
                <span className="block mt-2">with <strong>Batik</strong></span>
                </div>
                <button className="btn-shopnow hover:opacity-80">Shop Now</button>
              </div>
              <img className="h-52 sm:h-72" src="/images/img-man.png" alt="man" />
            </div>
          </div>
        </div>

        <div className="border-separator mx-6 lg:mx-auto mb-16 opacity-50"></div>

        {/* section collection */}
        <div className="max-w-7xl mx-auto px-6 xl:px-8 mb-14">
          <div className="font-semibold text-center text-2xl title-sec mb-16">
            Shops by Collection
        </div>
          <div>
            <div className="flex items-center md:justify-center flex-col lg:flex-row mb-12">
              <div className="wrapper-card-collection">
                <button className="text-white hover:opacity-80">
                  Christmas
              </button>
              </div>

              <div className="wrapper-card-collection">
                <button className="text-white hover:opacity-80">
                  Eid Mubarak
              </button>
              </div>

              <div className="wrapper-card-collection">
                <button className="text-white hover:opacity-80">
                  Wedding
              </button>
              </div>
            </div>

            <div className="flex items-center md:justify-center flex-col lg:flex-row">
              <div className="wrapper-card-collection">
                <button className="text-white hover:opacity-80">
                  Meeting
              </button>
              </div>

              <div className="wrapper-card-collection">
                <button className="text-white hover:opacity-80">
                  Casual Wear
              </button>
              </div>

              <div className="wrapper-card-collection">
                <button className="text-white hover:opacity-80">
                  Orient
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-separator mx-6 lg:mx-auto mb-16 opacity-50"></div>

        {/* section blog */}
        <div className="max-w-7xl mx-auto px-6 xl:px-8 mb-24">
          <div className="font-semibold text-center text-2xl title-sec mb-16">
            Blogs
        </div>
          <div className="flex justify-center lg:justify-between flex-wrap">

            {[1, 2, 3].map((v, i) => {
              return <CardBlog key={i} />
            })}
          </div>
        </div>
      </div>

      <NavMobile />
      <Footer />
    </>
  )
}
