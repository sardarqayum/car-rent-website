import React from "react";

const Footer =() =>{
    return(
        <div className=" flex justify-evenly w-[1240px] h-[480px] pt-[10%] bg-[#ffff] ">
            <div>
             <h2 className="h-[44px] w-[148px] mb-2 font-inter font-[700] text-[#3563e9] 3% text-[32px] ">MORENT</h2>
             <p className="font-Poppins text-[15px]  w-[292px] h-[48px] font-normal  text-black  ">Our vision is to provide convenience and help increase your sales business.</p>
            
            </div>
            <div className="flex ml-[300px] ">
            <div>
                <h2 className="w-[152px] h-[32px] mb-2 font-Poppins text-[20px] font-[500] text-black ">About</h2>
                <p className="w-[185px] h-[48px] font-Poppins mb-1 text-[15px] font-normal text-black">How it works</p>
                <p className="w-[175px] h-[48px] font-Poppins text-[15px] font-normal text-black">Featured</p>
                <p className="w-[175px] h-[48px] font-Poppins text-[15px] font-normal text-black">Partnership</p>
                <p className="w-[175px] h-[48px] font-Poppins text-[15px] font-normal text-black">Bussiness</p>
            </div> 

            <div>
            <h2 className="w-[85px] h-[40px] mb-2 font-Poppins text-[20px] font-[500] text-black">Community</h2>
            <p className="w-[185px] h-[40px]  font-Poppins text-[15px] font-normal text-black">Events</p>
            <p className="w-[123px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Blog</p>
            <p className="w-[35px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Prodcast</p>
            <p className="w-[150px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Invite a friend</p>
            <p className="w-[150px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Shop</p>
            </div>

            <div>
               <h2 className="w-[101px] h-[40px] mb-3 font-Poppins text-[20px] font-[500] text-black">Socials</h2>
               <p className="w-[109px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Discord</p>
               <p className="w-[105px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Instagram</p>
               <p className="w-[150px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Twitter</p>
               <p className="w-[66px] h-[40px] mb-3 font-Poppins text-[15px] font-normal text-black">Facebook</p>
            </div>
            </div>
            
           
        </div>
         
         
    )
}

export default Footer;


export const Footer2 =() =>{
    return(
        
        
            <div className="flex w-full">
            
             <p className="font-Poppins text-[15px]  w-[292px] h-[48px] font-normal  text-black ml-[50px] ">©2022 MORENT. All rights reserved</p>
             <p className="pl-[350px]">Privacy & Policy</p>
             <p className="pl-[450px]">Terms & Condition</p>
            </div>
           
    )
}