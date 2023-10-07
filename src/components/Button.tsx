import {useNavigate} from "react-router-dom";


interface ButtonProps {
    label: string;
    onClick: () => void;
}

export default function BackToHomeBtn ({label, onClick}: ButtonProps) {
    const navigate = useNavigate();
    return (
        <button className="pulse bg-purple-800 text-white text-xl px-6 py-2 ml-3 shadow-lg rounded-full hover:bg-purple-900"
        onClick={onClick}>
            {label}
        </button>

    )

}   

        