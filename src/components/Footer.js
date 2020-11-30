const footer = () => {
    return (
        <footer className="bg-gray-100 mb-20 sm:mb-0">
            <div className="relative space-y-8 md:space-y-0 flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div className="f-col-1">
                    <a href="/">
                        <div className="flex items-center font-playfair font-black text-4xl text-gray-800">
                            Batik
                        </div>
                    </a>
                    <div className="mt-4 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="flex space-x-2 mt-4">
                        <a href="#" className="hover:opacity-80"><img className="mr-2" src="/images/fb.svg" alt="facebook" /></a>
                        <a href="#" className="hover:opacity-80"><img className="mr-2" src="/images/tw.svg" alt="twitter" /></a>
                        <a href="#" className="hover:opacity-80"><img className="mr-2" src="/images/wa.svg" alt="whatsapp" /></a>
                        <a href="#" className="hover:opacity-80"><img className="mr-2" src="/images/ig.svg" alt="instagram" /></a>
                    </div>
                </div>
                <div className="flex space-y-8 md:space-y-0 w-3/5 md:mx-10 flex-col md:flex-row sm:justify-between lg:justify-start">
                    <div className="f-col-2 lg:mx-10">
                        <h1 className="font-bold font-16">Tentang Batik</h1>
                        <div className="w-12 bg-color-alt my-4" style={{ height: 2 }} />
                        <div className="flex flex-col space-y-3">
                            <a href="" className="hover:text-gray-500">Layanan Kami</a>
                            <a href="" className="hover:text-gray-500">Program Afiliasi</a>
                            <a href="" className="hover:text-gray-500">Karir di Batik</a>
                        </div>
                    </div>
                    <div className="f-col-2 leading-12 lg:mx-10">
                        <h1 className="font-bold font-16">Toko</h1>
                        <div className="w-12 bg-color-alt my-4" style={{ height: 2 }} />
                        <div className="flex flex-col space-y-3">
                            <a href="" className="hover:text-gray-500">Daftar Jadi Penjual</a>
                            <a href="" className="hover:text-gray-500">Syarat & Ketentuan</a>
                            <a href="" className="hover:text-gray-500">Hak Pembeli</a>
                            <a href="" className="hover:text-gray-500">Perlindungan</a>
                        </div>
                    </div>
                    <div className="f-col-2 leading-7 lg:mx-10">
                        <h1 className="font-bold font-16">Tautan Lain</h1>
                        <div className="w-12 bg-color-alt my-4" style={{ height: 2 }} />
                        <div className="flex flex-col space-y-3">
                            <a href="" className="hover:text-gray-500">Tokopedia</a>
                            <a href="" className="hover:text-gray-500">Shopee</a>
                            <a href="" className="hover:text-gray-500">Bibli</a>
                            <a href="" className="hover:text-gray-500">Alibaba</a>
                        </div>
                    </div>
                </div>
                <div className="f-col-3">
                    <h1 className="font-bold font-16">Hubungi Kami</h1>
                    <div className="w-12 bg-color-alt my-4" style={{ height: 2 }} />
                    <div className="flex flex-col space-y-3">
                        <div className="flex">
                            <img className="mr-2" src="/images/mail.svg" alt="mail" />
                            <span>batikmarketplace@batik.com</span>
                        </div>
                        <div className="flex items-start">
                            <img className="mr-2" src="/images/location.svg" alt="location" />
                            <div>
                                Menara Kuningan lt. 21,<br />
                                Jakarta Pusat. 14430
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer