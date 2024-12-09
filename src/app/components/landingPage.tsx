import Image from "next/image";
export default function Home() {
  return (
    <div>
     
      

      {/* Hero Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <Image 
            src="/Ads 1.png"
            alt="carpic"
            width={1000}
            height={1000}
            className="w-[840px] h-[340px]"
            />

            
            
             <Image 
            src="/Ads 2.png"
            alt="carpic"
            width={1000}
            height={1000}
            className="w-[840px] h-[340px]"
            />

          </div>
        </div>
      </div>

      
      
    </div>
  );
}

export const Populor =() =>{
  return(
    <div>
      <h2 className="w-[92px] h-[24px] ml-[150px] mt-[50px] text-gray-500">Popular Car</h2>
    </div>

  )
}

// populor car details section

export const NewDesign =() =>{
    const NewDesignData =[
      
        {id: 1,name: "Koenigsegg", price:99.00,description: "Sport /2 People/90L", Image: "/car1.png"},
        {id: 2,name: "Nissan GT - R", price:80.00,description: "Sport /2 People/80L", Image: "/car2.png"},
        {id: 3,name: "Rolls - Royce", price:96.00,description: "sedan/3 People/80L", Image: "/Car (3).png"},
        {id: 4,name: "Nissan GT - R", price:80.00,description: "Sport /2 People/70L", Image: "/Car (4).png"},
        
    ];
return(
    <div className="NewDesign grid grid-cols-1 md:grid-cols-4 gap-10 px-10 my-10">
        {NewDesignData.map(Design =>(
            <div key={Design.id} className="Design-cart bg-white p-5 rounded-md shadow-md text-center">
             <img src={Design.Image} alt={Design.name} className="w-[320px] h-[70px] rounded-md transition-transform duration-300 transform hover:scale-110 pl-[50px] "/>
             <h3 className="mt-4 text-[16px] font-bold"> {Design.name}</h3>
             <p className="text-gray-500 text-[14px]">{Design.description}</p>
             <div className="price text-black-500 text-[14px] font-semibold mt-2">&{Design.price}/day</div>
             <button className="mt-4  w-[102px] h-[34px] bg-blue-500 text-white rounded-md hover:bg-red-500 ">Rent Now</button>
            </div>
        ))}
    </div>
)

// (Recomendation Car section)

}
export const Populor2 =() =>{
  return(
    <div>
      <h2 className="w-[212px] h-[44px] ml-[150px] mt-[90px] text-gray-500">Recomendation Car</h2>
    </div>

  )
}



export const NewDesign2 =() =>{
  const NewDesignData =[
    
      {id: 1,name: "All New Rush", price:99.00,description: "SUV/70L/6 People", Image: "Car (9).png"},
      {id: 2,name: "CR  - V", price:80.00,description: "SUV/6 People/80L", Image: "/Car (10).png"},
      {id: 3,name: "All New Terios", price:96.00,description: "SUV/6 People/80L", Image: "/Car (11).png"},
      {id: 4,name: "CR  - V", price:80.00,description: "SUV", Image: "/Car (12).png"},
      {id: 5,name: "MG ZX Exclusice", price:400,description: "Hatchback/6 People/80L", Image: "/Car (13).png"},
      {id: 6,name: "New MG ZS", price:500,description: "SUV/6 People/80L", Image: "/Car (14).png"},
      {id: 7,name: "MG ZX Excite", price:400,description: "Hatchback/6 People/80L", Image: "/Car (15).png"},
      {id: 8,name: "New MG ZS", price:500,description: "SUV/6 People/80L", Image: "/Car (16).png"},
  ];
return(
  <div className="NewDesign grid grid-cols-1 md:grid-cols-4 gap-10 px-10 my-10">
      {NewDesignData.map(Design =>(
          <div key={Design.id} className="Design-cart bg-white p-5 rounded-md shadow-md text-center">
           <img src={Design.Image} alt={Design.name} className="w-[320px] h-[70px] rounded-md transition-transform duration-300 transform hover:scale-110 pl-[50px] "/>
           <h3 className="mt-4 text-[16px] font-bold"> {Design.name}</h3>
           <p className="text-gray-500 text-[14px]">{Design.description}</p>
           <div className="price text-black-500 text-[14px] font-semibold mt-2">&{Design.price}/day</div>
           <button className="mt-4  w-[102px] h-[34px] bg-blue-500 text-white rounded-md  hover:bg-red-500">Rent Now</button>
          </div>
      ))}
  </div>
)

}



