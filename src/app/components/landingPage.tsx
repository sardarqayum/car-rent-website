import Image from "next/image";
import Card from "./card";
export default function Home() {
  return (
    <div>
     
      

      {/* Hero Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            {/* <div className="bg-blue-500 text-white p-6 rounded-md">
              <h2 className="text-2xl font-bold mb-4">
                The Best Platform for Car Rental
              </h2>
              <p className="mb-4">
                Ease of doing a car rental safely and conveniently. Of course at
                a low price.
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
                Rental Car
              </button>
            </div> */}
            <Image 
            src="/Ads 1.png"
            alt="carpic"
            width={1000}
            height={1000}
            className="w-[840px] h-[340px]"
            />

            {/* Right Section */}
            
             {/* <div className="bg-blue-700 text-white p-6 rounded-md w-[284px] h-[224px] ">
            
                <h2 className="text-2xl font-bold mb-4  ">
               Easy way to rent a car at a low price
               </h2>
                 <p className="mb-4 ">
                Providing cheap car rental services and safe and comfortable facilities.
                </p>
                  <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white">
                  Rental Car
                </button>
                </div> */}
            
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
      <h2 className="w-[92px] h-[24px] ml-[150px] text-gray-500">Popular Car</h2>
    </div>

  )
}




export const CardDetails = () => {
  const data = [
    {
      id: 1,
      img: "/car1.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120 $160",
      rate: "/hero-icons/star.png",
    },
    {
      id: 2,
      img: "/car2.png",
      title: "AK-900 Wired Keyboard",
      price: "$960 $1160",
      rate: "/hero-icons/star.png",
    },
    {
      id: 3,
      img: "/car (3).png",
      title: "IPS LCD Gaming Monitor",
      price: "$370 $400",
      rate: "/hero-icons/star.png",
    },
    {
      id: 4,
      img: "/car (4).png",
      title: "S-Series Comfort Chair ",
      price: "$375 $400",
      rate: "/hero-icons/star.png",
    },
    {
      id: 4,
      img: "/car (5).png",
      title: "S-Series Comfort Chair ",
      price: "$375 $400",
      rate: "/hero-icons/star.png",
    },
    {
      id: 4,
      img: "/car (6).png",
      title: "S-Series Comfort Chair ",
      price: "$375 $400",
      rate: "/hero-icons/star.png",
    },
    {
      id: 4,
      img: "/car (7).png",
      title: "S-Series Comfort Chair ",
      price: "$375 $400",
      rate: "/hero-icons/star.png",
    },
    {
      id: 4,
      img: "/car (7).png",
      title: "S-Series Comfort Chair ",
      price: "$375 $400",
      rate: "/hero-icons/star.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[1170px] ml-6 md:ml-[150px] mt-[40px]">
      {data.map((item) => (
        <Card key={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate}></Card>
      ))}
    </div>
  );
};