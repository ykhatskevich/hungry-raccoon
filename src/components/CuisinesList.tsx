import { Link } from 'react-router-dom';

interface Cuisine {
    name: string;
    imageSrc: string;
  }
  
  const cuisines: Cuisine[] = [
    
    {
        name: 'Italian',
        imageSrc: '../images/pizza2.png',
    },
    {
        name:'American',
        imageSrc: '../images/burger2.png',
    },
    {
        name:'Japanese',
        imageSrc: '../images/sushi.png',
    },
    {
        name:'Indian',
        imageSrc: '../images/indian.png',
    },
    {
        name:'Vietnamese',
        imageSrc: '../images/vietnamese.png',
    }
  ];
  
  export default function CuisineList() {
    return (
        <div className="text-center">
     <h1 style={{ fontFamily: 'Dosis, sans-serif' }} className="text-2xl text-stone-900 font-semibold mb-5">
        Explore Cuisines From Around The World
     </h1>

      <div className="flex gap-8">
        {cuisines.map((cuisine: Cuisine) => (
          <div key={cuisine.name} className="flex flex-col items-center m-2 gap-2">
            <Link to={`/cuisine/${cuisine.name}`}>
            <img src={cuisine.imageSrc} alt={cuisine.name} className="w-16 h-16 cursor-pointer transform hover:scale-125 transition-transform duration-300 ease-in-out
            hover:blur-0"
            />
            </Link>
            <p className="font-semibold">{cuisine.name}</p>
          </div>
        ))}
      </div>
      
      </div>
    );
  }