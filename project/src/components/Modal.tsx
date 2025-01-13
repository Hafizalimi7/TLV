import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Modal component that receives dynamic title, content, price, and onClose function
const Modal = ({ isOpen, onClose, title, content, price, paylink }: any) => {
  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // Prevent closing when pressing ESC key
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="text-lg text-gray-800 font-semibold mb-4">{`Price: ${price}`}</div>
        {title == "Returning Customers Package" &&
        <Link to="/contact">
        <button className="w-full py-3 bg-[#2B4C7E] text-white rounded-lg hover:bg-[#1f3960] transition duration-200"
        >Contact Us

        </button>
                   
        </Link>}

        {title == "Comprehensive Cancer Care" &&
        <button
        onClick={() => window.open(paylink, "_blank")}
          className="w-full py-2 bg-[#2B4C7E] text-white rounded-lg hover:bg-[#1f3960] transition duration-200"
        >
          Make Payment
        </button>
        }

        {title == "Holistic Cancer Prevention Program" &&
        <div className='flex gap-4'>
        <button
            onClick={() => window.open(paylink, "_blank")}
          className="w-full py-2 bg-[#2B4C7E] text-white rounded-lg hover:bg-[#1f3960] transition duration-200"
        >
          Make Payment
          <p className='text-sm text-[#ef4949]'>£720 (1-on-1)</p>

        </button>
        <button
            onClick={() => window.open("https://buy.stripe.com/4gw5ljaNVdxnfgQ002", "_blank")}
          className="w-full py-2 bg-[#2B4C7E] text-white rounded-lg hover:bg-[#1f3960] transition duration-200"
        >
          Make Payment
          <p className='text-sm text-[#ef4949]'>£480 (Group)</p>
        </button>
        </div>
        
        }
        
        
      </div>
    </div>
  );
};

export default Modal;
