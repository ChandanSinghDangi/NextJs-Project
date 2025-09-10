'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QRCode } from 'react-qrcode-logo';
import useData from '@/components/ApiContext/ApiContext';
import Image from 'next/image';

type PaymentMethod = 'card' | 'googlepay' | null;

export default function PurchasingPage() {
  const { addCart } = useData();
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);

  const totalPrice = addCart.reduce(
    (acc, item) => parseFloat((acc + item.price).toFixed(2)),
    0
  );

  const handleConfirmPayment = () => {
    setTimeout(() => {
      router.push('/payment-success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h1>

      {/* Flex container */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 relative lg:justify-center items-center">

        {/* Your Items Card */}
        <div
          className={`
            bg-white rounded-xl shadow-lg p-6 transition-all duration-500
            w-full max-w-xl mx-auto
            ${selectedPayment ? 'lg:w-[65%] lg:ml-12' : 'lg:w-[70%] lg:mx-0'}
          `}
        >
          <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
          <div className="flex flex-col gap-4">
            {addCart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4 text-gray-700">
            <p>Shipping: <span className="font-semibold">Free</span></p>
            <p>Taxes: <span className="font-semibold">$0</span></p>
            <p className="mt-2 text-lg font-bold">
              Total Amount: ${totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Payment buttons */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setSelectedPayment('card')}
                className={`flex-1 px-4 py-3 font-semibold rounded-lg transition cursor-pointer ${
                  selectedPayment === 'card'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                Pay with Card
              </button>
              <button
                onClick={() => setSelectedPayment('googlepay')}
                className={`flex-1 px-4 py-3 font-semibold rounded-lg transition cursor-pointer ${
                  selectedPayment === 'googlepay'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                Pay Online
              </button>
              <button
                onClick={() => router.back()}
                className="flex-1 px-4 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Payment Panel always in DOM */}
        <div
          className={`
            relative lg:absolute lg:top-0 lg:right-0
            bg-white rounded-xl shadow-lg
            w-2/3  lg:w-[32%]
            transition-all duration-500 ease-in-out p-10.5
            ${selectedPayment ? 'translate-x-0 opacity-100 pointer-events-auto mt-6 lg:mt-0':'lg:translate-x-full opacity-0 pointer-events-none mt-0'}
          `}
        >
          {selectedPayment && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {selectedPayment === 'card' ? 'Enter Card Details' : 'Scan to Pay'}
              </h2>

              {selectedPayment === 'card' ? (
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border p-3 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border p-3 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <button
                    onClick={handleConfirmPayment}
                    className="mt-4 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Pay Now
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <p className="text-gray-700 text-center font-semibold text-sm">
                    Scan QR to pay using{' '}
                    <span className="sr-only">Google Pay</span>
                    <span aria-hidden="true" className="font-bold inline-flex items-center">
                      <span className="text-[#EA4335]">G</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#34A853]">g</span>
                      <span className="text-[#4285F4]">l</span>
                      <span className="text-[#4285F4]">e</span>
                      <span className="ml-1 text-gray-800 font-bold">Pay,</span>
                    </span>{' '}
                    <span className="font-bold text-purple-800">PhonePe,</span>{' '}
                    <span className="font-bold text-cyan-500">Paytm</span>
                  </p>
                  <QRCode value="https://fakepayment.com/tx/12345" size={75} />
                  <button
                    onClick={handleConfirmPayment}
                    className="mt-4 px-3 py-3 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition"
                  >
                    Confirm Payment
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
