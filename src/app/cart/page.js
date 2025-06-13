'use client'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartslice";


export default function CartPage() {
  const cartItemData = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); 

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900">Your Cart</h1>

      {cartItemData.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItemData.map((item) => (
            <li key={item.id} className="flex items-center justify-between py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                <span className="text-lg font-medium text-gray-900">{item.title}</span>
                <span className="text-gray-700">${item.price.toFixed(2)}</span>
                <span className="text-gray-600">x {item.quantity}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                  aria-label={`Increase quantity of ${item.title}`}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  disabled={item.quantity <= 1}
                  className={`px-3 py-1 rounded-md transition ${
                    item.quantity <= 1
                      ? "bg-gray-300 cursor-not-allowed text-gray-600"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  aria-label={`Decrease quantity of ${item.title}`}
                >
                  –
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                  aria-label={`Remove ${item.title} from cart`}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItemData.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-6 w-full py-3 bg-yellowish  hover:bg-[#178b77] hover:text-white text-black font-semibold rounded-md transition"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}