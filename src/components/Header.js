const SearchBar = () => {
    return (
        <div className="flex border-gray-300 border-2 rounded-xl items-center px-6">
            <input
                type="text"
                id="first_name"
                className="focus:outline-none block w-full text-gray-400 h-10 rounded-xl"
                placeholder="Cari"
            />
            <div className="pl-6">
                <img className="block w-auto" src="/images/search.svg" alt="bell" />
            </div>
        </div>
    )
}

const header = () => {
    return (
        <>
            <nav className="bg-white sm:fixed inset-x-0 top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-20">
                        <div className="flex items-center justify-start hidden sm:block">
                            <a href="/">
                                <div className="flex items-center font-playfair font-black text-4xl text-gray-800">
                                    Batik
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 sm:ml-8 md:ml-16 mr-2 sm:mr-6">
                            <SearchBar />
                        </div>
                        <div className="flex items-center">
                            <div>
                                <div className="flex">
                                    <a href="#" className="px-1 sm:px-2 mx-2 py-2 rounded-md hover:bg-gray-100">
                                        <img className="block w-auto" src="/images/bell.svg" alt="bell" />
                                    </a>
                                    <div className="w-0.5 bg-gray-200 my-2 mx-1 hidden sm:block" />
                                    <a href="#" className="px-1 sm:px-2 mx-2 py-2 rounded-md hover:bg-gray-100">
                                        <img className="block w-auto" src="/images/bag.svg" alt="bag" />
                                    </a>
                                    <div className="w-0.5 bg-gray-200 my-2 mx-1 hidden sm:block" />
                                    <a href="#" className="flex items-center px-1 sm:px-2 mx-2 py-2 font-medium hover:bg-gray-100">
                                        <img className="w-auto" src="/images/store.svg" alt="store" />
                                        <span className="text-gray-500 ml-2 hidden sm:block">Seller Batik</span>
                                    </a>
                                    <div className="w-0.5 bg-gray-200 my-2 mx-1 hidden sm:block" />
                                    <a href="/sign-in" className="pl-1 hidden sm:block sm:pl-2 ml-2 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                        <img className="block w-auto" src="/images/user.svg" alt="user" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default header