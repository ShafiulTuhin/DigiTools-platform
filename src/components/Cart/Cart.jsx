import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCart }) => {
  console.log(carts);
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);

  const handleDeleteCart = (cartId) => {
    const filterCart = carts.filter((cart) => cart.id !== cartId.id);
    setCart(filterCart);
    toast.success(`${cartId.name} deleted successfully`, {
      position: "bottom-center",
      autoClose: 2000,
    });
  };
  const handleClearCart = () => {
    setCart([]);
    toast.success("Checkout successfully", {
      position: "bottom-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-[650px] mx-auto px-4  md:px-0">
      <h2 className="text-center text-2xl font-bold mb-6">Your Carts</h2>
      {carts.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <ShoppingCart size={80} />
          <p className="text-center text-2xl text-[#797979] font-bold pt-4 pb-10">
            The Cart is empty
          </p>
        </div>
      ) : (
        <>
          {carts.map((cart) => (
            <div
              key={cart.id}
              className=" flex justify-between items-center border-2 border-slate-400 bg-slate-200 p-3 mb-3 rounded-lg"
            >
              <div className="flex gap-2 items-center">
                <img src={`/${cart.icon}`} alt="icon" className="w-8 h-8" />
                <div>
                  <p className="text-[#101727] font-semibold">{cart.name}</p>
                  <p>${cart.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleDeleteCart(cart)}
                className="font-bold text-red-400 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center  font-medium p-3 mb-4 rounded-lg">
            <h2>Total</h2>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <button
            onClick={handleClearCart}
            className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-full"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
