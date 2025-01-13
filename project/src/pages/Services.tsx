import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, Shield } from 'lucide-react';
import Modal from '../components/Modal';
import { images } from '../assets';
const services = [
  {
    title: "Comprehensive Cancer Care",
    price: "£800",
    description: "Tailored support for individuals navigating life with cancer.",
    icon: images.s1,
    info: <>
    90 min initial appointment - fact gathering <br />
    2 x 45 min follow-up sessions <br />
    30 min final session <br />
    Customized recommendation plan
  </>,
    paylink: "https://buy.stripe.com/cN27tre07dxn3y8aEE"
  },
  {
    title: "Returning Customers Package",
    price: "Contact for pricing",
    description: "Exclusive discounted package for returning clients.",
    icon: images.s2,
    info: "This package offers the same comprehensive care at a reduced rate.",
    paylink: "https://buy.stripe.com/cN27tre07dxn3y8aEE"


  },
  {
    title: "Holistic Cancer Prevention Program",
    price: "£720 (1-on-1) / £480 (Group)",
    description: "Sustainable lifestyle changes with our 6-month coaching program.",
    icon: images.s3,
    info: <>
    Month 1: Revamping the Pantry <br />
    Month 2: Healthier Meals & Hydration <br />
    Month 3: Low-Intensity Exercise <br />
    Month 4: Supplementation & Strength <br />
    Month 5: Integration & Planning <br />
    Month 6: Household & Personal Care Detox
  </>,
    paylink: "https://buy.stripe.com/dR69Bz8FN2SJ7Oo7st"
  }
];

export default function Services() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modaltitle, setModaltitle] = useState("");
  const [modalprice, setModalprice] = useState("");
  const [modalpaylink, setModalpaylink] = useState("");

  // Open the modal with different content
  const handleOpenModal = (content:any, title:any, price:any, paylink:any) => {
    setModalContent(content);
    setModaltitle(title);
    setModalprice(price);
    setModalpaylink(paylink);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer personalized, compassionate care tailored to your needs.
          </p>
          <div className="mt-6">
            <a
              href='https://calendly.com/thelifevoyage-info'
              target='blank'
              className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-soft"
            >
              Book a free 15-minute consultation
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all">
              {/* <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                <service.icon className="h-6 w-6" />
              </div> */}
              <img src={service.icon} alt="" className='rounded'/>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-primary font-semibold">{service.price}</p>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <button
              onClick={() => handleOpenModal(service.info, service.title, service.price, service.paylink)}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Learn More
              </button>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} paylink={modalpaylink} content={modalContent} title={modaltitle} price={modalprice} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}