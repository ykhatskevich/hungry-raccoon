export default function Logo() {
    return (
        <div className="flex justify-start items-center m-2 ml-5">
            <div className="flex items-center gap-2 flex-shrink-0">
                <h1 style={{ fontFamily: 'Permanent Marker' }} className="text-4xl md:text-5xl text-purple-900 relative">Hungry Racoon
                    <span className="text-4xl md:text-5xl border-b border-purple-900 absolute bottom-0 left-0 right-0 h-1"></span>
                </h1>
                <img src="../images/raccoon-logo2.png" alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
            </div>
        </div>
    )
}





