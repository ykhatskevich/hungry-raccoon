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
    // Add more cuisines as needed
  ];
  
  export default function CuisineList() {
    return (
        <div className="text-center">
     <h1 style={{ fontFamily: 'Lilita One' }} className="text-2xl text-fuchsia-900 font-semibold mb-5">
        Explore Cuisines From Around The World
     </h1>

      <div className="flex gap-8">
        {cuisines.map((cuisine: Cuisine) => (
          <div key={cuisine.name} className="flex flex-col items-center m-2 gap-2">
            <img src={cuisine.imageSrc} alt={cuisine.name} className="w-16 h-16 cursor-pointer transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
            <p className="font-semibold">{cuisine.name}</p>
          </div>
        ))}
      </div>
      
      </div>
    );
  }