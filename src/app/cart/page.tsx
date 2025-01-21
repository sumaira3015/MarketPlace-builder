
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button"; // or the appropriate library
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { title } from "process";
import image from "next/image";


interface products {
  size: React.ReactNode | Iterable<React.ReactNode>;
  quantity: number;
   title: string;
    Badge: string;
    price: number;
    image: string;
    description: string;
    originalPrice: string;
    }


function CartSection () {
  const router = useRouter();
const searchParam = useSearchParams();
const [cartItems, setCartItems] = useState<products[]>([]);




useEffect(() => {
 
  const cart = localStorage.getItem("cart");
   const updatedCart =  cart ? JSON.parse(cart): [];
  const name = searchParam.get("name");
const price = searchParam.get("price");
const img = searchParam.get("img");
const quantity = searchParam.get("quantity");
const size = searchParam.get("size");
const id = searchParam.get("id");
const description = searchParam.get("description");

if(title && price&& img && quantity && size && id && description){
const isDuplicate = updatedCart.some((item:products) => item.title === title);

if(!isDuplicate){
updatedCart.push({
  title,
  price,
  image,
  quantity,
  size,
  id,
  description
})
}

localStorage.setItem("cart", JSON.stringify(updatedCart));
}

setCartItems(updatedCart);
router.replace("/cart");

},[searchParam,router]);

function handleRemoveItem(index:number){
  const removeCart = [...cartItems];
  removeCart.splice(index,1);

  localStorage.setItem("cart", JSON.stringify(removeCart));
  setCartItems(removeCart);
}
function handleQuantity(index:number,e_target_value:number){
  // const updatedCart = [...cartItems]

  // updatedCart[index].quantity = +e_target_value

  // localStorage.setItem("cart",JSON.stringify(updatedCart))
  // setCartItems(updatedCart);
  const qtyArray = [...cartItems]

  qtyArray[index].quantity = +e_target_value

  localStorage.setItem("cart",JSON.stringify(qtyArray));
  setCartItems(qtyArray);

}
// cart items,,,


  return (
  
    <section className="bg-[#ffffff] py-12">
      <div className="max-w-[1920px] mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-8 text-[#757575] pl-6">Bag</h1>

       {cartItems.map((item: products, index: number) => ( 
        <div className="flex flex-col sm:flex-row items-center justify-between" key={index}>
         <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
           <div className="order-1 sm:order-none">
             <Image 
                 src={item.image}
              alt={"Desk Chair"}
               width={180}
               height={180}
               className="object-cover rounded-md"
             />
           </div>
           <div className="w-full order-2 sm:order-none">
             <h2 className="text-lg sm:text-lg font-medium">{item.title}</h2>
             <p className="text-sm sm:text-sm text-gray-500">{item.description}</p>
             <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
         <p className="text-sm sm:text-sm text-gray-500">Size: {item.size}</p>
               <p className="text-sm sm:text-sm text-gray-500">Quantity: </p>
             <input type="number" min={1} value={item.quantity} onChange={(e) => handleQuantity(index,+e.target.value)} />
            </div>
            <div className="flex gap-4 mt-4">
               <HeartIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
             <Button onClick={() => handleRemoveItem(index)}>
                 <TrashIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
               </Button>
             </div>
           </div>
           </div>
       </div> 
         ))} 
        {/* commit 1 card */}
        {cartItems.map((item: products, index: number) =>{
         return(
           <div className="flex flex-col sm:flex-row items-center justify-between" key={index}>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="order-1 sm:order-none">
              <Image
                src={item.image}
                alt="Desk Chair"
                width={180} 
                height={180} 
                className="object-cover rounded-md"
              />
              </div>  
            
             <div className="w-full order-2 sm:order-none">
              <h2 className="text-lg sm:text-lg font-medium">{item.title}</h2>
              <p className="text-sm sm:text-sm text-gray-500">{item.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <p className="text-sm sm:text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm sm:text-sm text-gray-500">Quantity: </p>
                <input type= "number" min={1} value={item.quantity} onChange={(e) => handleQuantity(index , +e.target.value)}/>
              </div>
              <div className="flex gap-4 mt-4">
                <HeartIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
                
                <Button onClick={()=>{handleRemoveItem(index)}}>
                <TrashIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
                </Button>
                
              </div>
            </div> 
           </div>
          <div className="text-right mt-4 sm:mt-0">
            <p className="text-sm sm:text-lg font-medium mb-20">MRP: {(Number(item.price) *(item.quantity)).toFixed(2).toLocaleString()}</p>
          </div>
        </div>
    
      );}
        )}
    

            
          <div className="col-span-1 md:col-span-4 bg-white shadow rounded-lg p-6">
            <h2 className="text-sm sm:text-lg font-medium mb-4 text-[#111111]">Summary</h2>
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span>Subtotal</span>
              <span>${cartItems.reduce((total, object)=>{return total + object.price * object.quantity;}, 0)}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span>Estimated Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm sm:text-lg font-semibold mb-6">
              <span>Total</span>
              <span>${cartItems.reduce((total, object)=>{return total + object.price * object.quantity;}, 0).toFixed(2).toLocaleString()}</span>
            </div>

            <Link href={"/checkout"}>
            <button
              className="w-full h-[50px] bg-[#029FAE] text-white py-[8px] rounded-full hover:bg-[#027b89]"
            >
              Member Checkout
            </button></Link>
          </div>
        </div>
      
    </section>
  );
}

export default CartSection;

