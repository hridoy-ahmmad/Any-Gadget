import React from 'react';

const CartItem = ({ item, setCart ,cart}) => {
    const handleRemove = () => {
        const filtered = cart.filter(i => i.id !== item.id)
          setCart(filtered)
    }

    return (
        <div className=" items-center p-2 justify-between bg-white rounded shadow-sm mb-3 hover:shadow-md transition duration-300 relative">
            {/* Product Info */}
            <div className="flex items-center  gap-3">
                <div className="flex items-center justify-between ">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-12  object-contain rounded-lg bg-gray-100 p-1"
                    />
                    <div className="flex flex-col text-[12px] font-semibold text-gray-800">
                        <h2 className=" line-clamp-1">{item.name}</h2>
                        <div className='flex gap-1'>
                            <p className="text-[12px] text-gray-500">Price: ৳ {item.price}</p>
                            <p>x 1 </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Remove Button */}
            <button
                onClick={handleRemove}
                className="absolute top-1 right-3 hover:text-bold hover:text-red-500  font-semibold  cursor-pointer">
                ✕
            </button>
        </div>
    );
};

export default CartItem;