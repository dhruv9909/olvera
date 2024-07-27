import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import OnlineShopping from '../assets/onlineShopping.png'
import GINGERANDSMA from '../assets/GINGERANDSMA.png'
import ELLERY_LOGO from '../assets/ELLERY_LOGO.png'
import Pngwing from '../assets/pngwing.png'
import Pngegg from '../assets/pngegg.png'
import Ellipse from '../assets/Ellipse.png'
import Ellipse79 from '../assets/Ellipse79.png'
import Sergey from '../assets/sergey.png'
import Maskgroup from '../assets/Maskgroup.png'
import DiverseBusiness from '../assets/diverse-business.png'
import Vector from '../assets/Vector.png'
import Icon from '../assets/Icon.png'
import Icon1 from '../assets/Icon1.png'
import OlveraBGY from '../assets/Olvera-First-Logo-BGY-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative bg-gray-900">
        <Image
          src={OnlineShopping}
          alt="Picture of the author"
          objectFit="cover"
          className='w-full'
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, rgba(18, 27, 33, 0.9) 100%)" }}></div>
        <div className="md:w-[65%] p-[50px] !pt-[100px] absolute inset-0 flex flex-col items-start justify-center text-white z-10">
          <h1 className="text-4xl font-bold md:leading-[100px] md:text-[72px] sm:text-[42px] sm:leading-[50px]">Start your story with Olvera</h1>
          <button className="mt-8 px-6 py-3 text-lg font-medium text-black bg-[#F837B7] rounded-full hover:bg-pink-600">Contact Us</button>
        </div>
      </div>

      <div className="bg-[#C2278E] flex flex-col items-center justify-between md:min-h-screen p-4 !pt-[120px]">
        <div className="flex flex-col md:flex-row md:justify-between w-full px-[10px] md:px-[100px] justify-center items-center text-center sm:gap-[25px]">
          <h1 className="text-white text-3xl font-bold">About Olvera</h1>
          <p className="text-white text-lg md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full px-[80px]">
          <div className="flex flex-col gap-2">
            <Image src={Pngegg} alt="gingerySmart" width={150} height={50} />
          </div>
          <div className="flex flex-col gap-2">
            <Image src={Pngwing} alt="ellery" width={200} height={50} />
          </div>
          <div className="flex flex-col gap-2">
            <Image src={ELLERY_LOGO} alt="commonwealthbank" width={150} height={50} />
          </div>
          <div className="flex flex-col gap-2">
            <Image src={GINGERANDSMA} alt="howards" width={200} height={50} />
          </div>
        </div>
      </div>

      <div className='pt-24'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='md:w-1/4 mb-8 md:mb-0'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold text-pink-500'>150+</h2>
                <p className='text-gray-700 text-lg mt-2'>Projects</p>
              </div>
            </div>
            <div className='md:w-1/4 mb-8 md:mb-0'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold text-pink-500'>80+</h2>
                <p className='text-gray-700 text-lg mt-2'>Clients</p>
              </div>
            </div>
            <div className='md:w-1/4 mb-8 md:mb-0'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold text-pink-500'>200+</h2>
                <p className='text-gray-700 text-lg mt-2'>Professionals</p>
              </div>
            </div>
            <div className='md:w-1/4 mb-8 md:mb-0'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold text-pink-500'>97%</h2>
                <p className='text-gray-700 text-lg mt-2'>Clients</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20'>
            <div className='relative p-8'>
              <h2 className='hidden md:block text-[#C2278E] font-bold text-gray-800 mb-4'>
                SERVICES
              </h2>
              <h2 className='text-center md:text-start text-[45px] font-bold text-gray-800 mb-4'>
                Our Services That Can Help Your Business
              </h2>
              <p className='text-center md:text-start text-gray-600 mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
              <Image
                src={Ellipse79}
                alt="Demo Image"
                className='absolute -top-[40px] left-[378px] w-[250px] hidden md:block'
              />
              <Image
                src={Ellipse}
                alt="Demo Image"
                className='relative -left-[49px] w-[150px] hidden md:block'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='p-4 flex items-center justify-between'>
                <h3 className='text-gray-700 font-bold'>
                  Sustainability
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className='p-4 flex items-center justify-between'>
                <h3 className='text-gray-700 font-bold'>
                  Small Business
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className='p-4 flex items-center justify-between'>
                <h3 className='text-gray-700 font-bold'>
                  Forensic Services
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className='p-4 flex items-center justify-between'>
                <h3 className='text-gray-700 font-bold'>
                  Risk Management
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className='p-4 flex items-center justify-between'>
                <h3 className='text-gray-700 font-bold'>
                  CFO Advisory
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-gray-900 text-gray-200">
        <div className="absolute inset-0">
          <Image
            src={Sergey}
            alt="hero background"
            // layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto h-[295px] flex">
            <div className='flex flex-col justify-between '>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-[30px]">Olvera Guides</span>
              </h1>
              <p className="mt-6 text-[17px] text-gray-300 w-[70%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='flex items-center justify-center w-[300px]'>
              <span>View More</span>
              <a
                href="#"
                className="flex items-center justify-center block h-[85px] w-[85px] bg-transparent border border-white mx-auto rounded-full px-2 py-2"
              >
                {"--->"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mb-5'>
        <div className='relative p-8 !pl-[65px] flex flex-col justify-center'>
          <h2 className='text-[#C2278E] font-bold text-gray-800 mb-4'>
            CAREERS
          </h2>
          <h2 className='text-[45px] font-bold text-gray-800 mb-4'>
            Careers at Olvera
          </h2>
          <p className='text-gray-600 mb-8'>
            Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.
          </p>
          <button className="w-[173px] text-[16px] px-6 py-3 text-lg font-medium text-black bg-[#FF74D0] rounded-full hover:bg-pink-600">Search Careers</button>
          <Image
            src={Ellipse79}
            alt="Demo Image"
            className='absolute top-[155px] left-[378px] w-[250px] hidden md:block'
          />
          <Image
            src={Ellipse}
            alt="Demo Image"
            className='absolute bottom-[-100px] left-0 w-[150px] hidden md:block'
          />
        </div>
        <div className=''>
          <Image
            src={Maskgroup}
            alt="Demo Image"
          />
        </div>
      </div>

      <div className="relative bg-gray-900">
        <Image
          src={DiverseBusiness}
          alt="Picture of the author"
          objectFit="cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90.45deg, rgba(194, 39, 142, 0.51) 0.36%, rgba(15, 15, 15, 0) 99.59%)" }}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <Image
            src={Vector}
            alt="Picture of the author"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What our clients say about us</h2>
        </div>
        <div className="mt-16 mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#C2278E] rounded-lg p-8">
            <div className="flex justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h10" /></svg>
            </div>
            <p className="mt-4 text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <div className="mt-8 flex items-center">
              <Image
                src={Icon1}
                alt="Aaron Boby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-white font-medium">Aaron Boby</h3>
                <p className="text-white text-sm">2 November 2021</p>
              </div>
            </div>
          </div>
          <div className="bg-[#C2278E08] rounded-lg p-8">
            <div className="flex justify-center">
              <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h10" /></svg>
            </div>
            <p className="mt-4 text-gray-900 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <div className="mt-8 flex items-center">
              <Image
                src={Icon}
                alt="Daren Axell"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-gray-900 font-medium">Daren Axell</h3>
                <p className="text-gray-500 text-sm">29 August 2021</p>
              </div>
            </div>
          </div>
          <div className="bg-[#C2278E08] rounded-lg p-8">
            <div className="flex justify-center">
              <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h10" /></svg>
            </div>
            <p className="mt-4 text-gray-900 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <div className="mt-8 flex items-center">
              <Image
                src={Icon}
                alt="Dion Channing"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-gray-900 font-medium">Dion Channing</h3>
                <p className="text-gray-500 text-sm">22 August 2021</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto pt-[50px] pr-[100px] pb-[20px] pl-[100px]">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-[64px] font-extrabold">We are open and accepting to all. Come work with us</h2>
            <p className="max-w-xl text-[20px] text-[#E0E0E0]">Experts teach you everything from the comfort of your own home. Improve your career today by enrolling in excellent courses at affordable prices.</p>
            <button className="bg-[#C2278E] hover:bg-pink-700 text-black font-bold py-2 px-4 rounded-full">Get Started</button>
          </div>
          <div className='w-full'>
            <Image
              src={OlveraBGY}
              alt="Dion Channing"
              width={140}
              height={140}
            />
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src={OlveraBGY}
                alt="Dion Channing"
                width={120}
                height={120}
              />
              <p className="text-[#E0E0E0]">Turning Uncertainty Into Your Advantage</p>
            </div>
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:underline text-[#E0E0E0]">Home</a></li>
                <li><a href="#" className="hover:underline text-[#E0E0E0]">Articles</a></li>
                <li><a href="#" className="hover:underline text-[#E0E0E0]">Videos & Guides</a></li>
                <li><a href="#" className="hover:underline text-[#E0E0E0]">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Careers</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:underline text-[#E0E0E0]">Olvera academy</a></li>
                <li><a href="#" className="hover:underline text-[#E0E0E0]">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline text-[#E0E0E0]">Cookies</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Liability Limited by A Scheme Approved Under Professional Services Scheme</p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className='text-[#E0E0E0]'>Phone: (+61) 9971 4056</li>
                <li className='text-[#E0E0E0]'>Email: <a href="mailto:eb.queries@olveraadvisors.com" className="hover:underline text-[#E0E0E0]">eb.queries@olveraadvisors.com</a></li>
                <li className='text-[#E0E0E0]'>Website: <a href="https://olvera.com/workbuy" className="hover:underline text-[#E0E0E0]">olvera.com/workbuy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full border-t border-t-[#7C7C7C]'>
          <div className="text-[#E0E0E0] mx-auto my-0 w-[70%] h-[76px] flex items-center justify-between">
            <p>©2023 olvera advisors. All rights reserved</p>
            <div className='flex gap-7'>
              <Link href="https://www.facebook.com" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faFacebook} width={21} />
              </Link>
              <Link href="https://www.instagram.com" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} width={20} />
              </Link>
              <Link href="https://www.linkedin.com" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faTwitter} width={20} />
              </Link>
              <Link href="https://www.linkedin.com" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faLinkedin} width={19} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
