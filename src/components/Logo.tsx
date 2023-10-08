export default function Logo () {
    return (
        <div  className="flex gap-2 m-2 ml-5">
            <h1 style={{fontFamily: 'Permanent Marker'}} className="text-5xl text-purple-900 relative">Hungry Racoon
            <span className="text-5xl border-b border-purple-900 absolute bottom-0 left-0 right-0 h-1"></span>
            </h1>
            <img src="../images/raccoon-logo2.png" alt="logo" className="w-20 h-20"/>
        </div>
    )
}