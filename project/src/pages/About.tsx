import React, {useState} from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { images } from '../assets';
import CertModal from '../components/CertModal';
export default function About() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalimg, setModalimg] = useState("");
  const [modaltitle, setModaltitle] = useState("");
  const handleOpenModal = (title:any, img:any) => {
    setModaltitle(title);
    setModalimg(img);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black sm:text-4xl">About Me</h1>
          <p className="mt-4 text-lg text-black">
            A holistic approach to cancer care shaped by personal experience, professional training, and a passion for empowering patients.
          </p>
          <div 
  className="absolute inset-0 bg-center bg-cover opacity-40 h-[330px] md:h-[280px] " 
  style={{ backgroundImage: `url(${images.sb})` }} 
/>
        </div>

        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl font-bold text-gray-900">My Journey</h2>
          <p className="mt-4 text-lg text-gray-500">
            My name is Tanya, and my journey to becoming a healthcare provider has been deeply shaped by my personal connection to cancer. 
            Coming from a family with a significant history of cancer, I have seen firsthand the impact that cancer has on individuals and their families. 
            This experience has fueled my passion to support and guide people who are navigating the challenges of cancer care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">BSc in Radiotherapy and Oncology</h3>
            <p className="mt-2 text-gray-500">
              Graduated from St. George's University of London in 2023, with placements at the Royal Marsden Hospital in Chelsea.
            </p>
            <button
              onClick={() => handleOpenModal("BSc in Radiotherapy and Oncology", images.bsc)}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View Cert
              </button>
              <CertModal isOpen={isModalOpen} onClose={handleCloseModal} img={modalimg} title={modaltitle} />

          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">MSc in Cancer and Clinical Oncology</h3>
            <p className="mt-2 text-gray-500">
              Completed at Queen Mary University of London in 2024, focusing on cancer biology and treatment modalities.
            </p>
            <button
              onClick={() => handleOpenModal("MSc in Cancer and Clinical Oncology", images.msc)}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View Cert
              </button>
              <CertModal isOpen={isModalOpen} onClose={handleCloseModal} img={modalimg} title={modaltitle} />

          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Certified Practitioner</h3>
            <p className="mt-2 text-gray-500">
              Licensed healthcare provider specializing in holistic cancer care and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}