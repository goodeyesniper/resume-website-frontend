const Footer = () => {
    return (
        <>
        <div className="container-fluid border-t border-gray-300 flex justify-start">
            <div className="w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 mx-2 gap-x-0 sm:gap-x-4">
                    <div className="pb-5 flex flex-col justify-start items-start sm:items-start md:items-center">
                        <h1 className="text-lg font-black">Phone</h1>
                        <p>0273934412</p>
                    </div>
                    <div className="pb-5 flex flex-col justify-start items-start sm:items-start md:items-center overflow-hidden">
                        <h1 className="text-lg font-black">Email</h1>
                        <p>plunisperos@gmail.com</p>
                    </div>
                    <div className="pb-5 flex flex-col justify-start items-start sm:items-start md:items-center">
                        <h1 className="text-lg font-black">Location</h1>
                        <p className="text-start sm:text-center">4 Oaks Lane, Motueka New Zealand, 7120</p>

                    </div>
                    <div className="pb-5 flex flex-col justify-start items-start sm:items-start md:items-center">
                        <h1 className="text-sm">&copy; 2025 by Philip Louis Nisperos</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer