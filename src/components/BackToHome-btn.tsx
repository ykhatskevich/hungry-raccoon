import {useNavigate} from "react-router-dom";

export default function BackToHomeBtn () {
    const navigate = useNavigate();
    return (
        <button onClick={()=> navigate("/")} className="bg-purple-800 text-white p-2 mb-3 shadow-lg rounded-lg hover:bg-purple-900">Back to Home Page</button>
    )

}   

        