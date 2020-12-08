const Filter = () => {
    return (
        <div className="wrapper-filter mr-20" >
            <div className="font-bold text-2xl text-gray-700 mb-16">Filter</div>

            <div className="mb-8">
                <div className="mb-5 font-semibold">Pilih Lokasi</div>
                <div>
                    <label className="group-checkbox"> DKI Jakarta
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="group-checkbox"> Jabodetabek
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="group-checkbox"> Bandung
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="group-checkbox"> Medan
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            <div className="mb-8">
                <div className="mb-5 font-semibold">Pilih Daerah Asal Batik</div>
                <div>
                    <label className="group-checkbox"> DKI Jakarta
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="group-checkbox"> Jabodetabek
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="group-checkbox"> Bandung
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="group-checkbox"> Medan
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Filter