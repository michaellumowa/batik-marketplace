const NavMobile = () => {
    return (
        <div className="nav-mobile fixed width-full inset-x-0 bottom-0 z-20 bg-white border-gray-200 sm:hidden">
            <div className="flex justify-between px-8 py-4">
                <a href="#" className="mx-2 rounded-md hover:bg-gray-100">
                    <img className="block w-auto" src="/images/navmobile/home.svg" alt="icon home" />
                    <div className="mt-2">Home</div>
                </a>
                <a href="#" className="mx-2 rounded-md hover:bg-gray-100">
                    <img className="block w-auto" src="/images/navmobile/signal.svg" alt="icon signal" />
                    <div className="mt-2">Feeds</div>
                </a>
                <a href="#" className="mx-2 rounded-md hover:bg-gray-100">
                    <img className="block w-auto" src="/images/navmobile/bag-fill.svg" alt="icon bag" />
                    <div className="mt-2">Cart</div>
                </a>
                <a href="/sign-in" className="mx-2 rounded-md hover:bg-gray-100">
                    <img className="block w-auto" src="/images/navmobile/user-fill.svg" alt="icon user" />
                    <div className="mt-2">Profile</div>
                </a>
            </div>
        </div>
    )
}

export default NavMobile