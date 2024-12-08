import React from "react";
import Image from "next/image";

interface Propstype{
    img:string;
    title:string;
    price:string;
    rate:string
}

const Card:React.FC<Propstype> =({img,title,price,rate}:Propstype) =>{
    return(
          <div> 
            
            <div className="border-2 border-gray-300 p-4">
                
                <div><Image src={img} alt="card" width={1000} height={1000} className="w-[350px] h-[100px] bg-[#F5F5F5] p-2" /> </div>
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{rate}</p>
            </div>
          </div>
    )
}

export default Card;