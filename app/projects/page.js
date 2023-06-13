import NavBar from '../components/NavBar';
import Image from 'next/image';
import Movie from '../../public/movie.png';
import Nail from '../../public/nail.png';
import BudgetWise from '../../public/budgetwise.png';
import { SocialIcon } from 'react-social-icons';

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col max-w-8xl xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-5">
          <div className="flex flex-col items-center justify-center rounvded shadow-xl">
            <Image src={Movie} alt="movie" />
            <h1 className="text-xl my-2">MoviePalooza - Movie Review System</h1>
            <p className="text-sm mb-4 max-w-xs sm:max-w-lg lg:max-w-sm">
              Inspired by <span className="font-bold">Letterboxd</span>. Users
              can sign up and log in to access the platform, where they can
              favorite, rate, comment and share movies. It follows a
              frontend-backend separation architecture, with RESTful APIs on the
              backend and AJAX for asynchronous data retrieval and display on
              the frontend. Additionally, the project&apos;s database is built
              using SQLite.
            </p>
            <div className="flex gap-5">
              <Image src="/react.svg" alt="react" width={30} height={30} />
              <Image src="/redux.svg" alt="redux" width={30} height={30} />
              <Image src="/mui.svg" alt="mui" width={30} height={30} />
              <Image src="/flask.svg" alt="flask" width={30} height={30} />
              <Image src="/sqlite.svg" alt="sqlite" width={50} height={30} />
            </div>
            <div className="flex gap-5 justify-center items-center my-2">
              <SocialIcon
                url="https://github.com/garyliu427/movie-finder-website"
                fgColor="currentColor"
                bgColor="transparent"
                target="_blank"
                style={{ height: 60, width: 60 }}
                className="text-gray-500 hover:text-[#000000]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded overflow-hidden shadow-xl">
            <Image src={Nail} alt="nail" />
            <h1 className="text-xl my-2">Nail Salon</h1>
            <p className="text-sm mb-4 max-w-xs sm:max-w-lg lg:max-w-sm">
              A commercial nail salon website to provide price information.
              Through the implementation of responsive design, it seamlessly
              adapts to different devices. AOS beautifies the mouse scroll
              behaviour. It also integrates Square Appointment. The source code
              cannot be provided due to its commerce.
            </p>
            <div className="flex gap-5">
              <Image src="/h5.svg" alt="h5" width={30} height={30} />
              <Image src="/css.svg" alt="css" width={30} height={30} />
              <Image src="/javascript.svg" alt="js" width={30} height={30} />
            </div>
            <div className="flex gap-5 justify-center items-center my-2">
              <SocialIcon
                url="https://theseahouse.com.au/"
                fgColor="currentColor"
                bgColor="transparent"
                target="_blank"
                style={{ height: 60, width: 60 }}
                className="text-gray-500 hover:text-[#3eceb8]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounvded shadow-xl">
            <Image src={BudgetWise} alt="budget" />
            <h1 className="text-xl my-2">
              BudgetWise - Financial Management Tool
            </h1>
            <p className="text-sm mb-4 max-w-xs sm:max-w-lg lg:max-w-sm"></p>
            <div className="flex gap-5">
              <Image src="/react.svg" alt="react" width={30} height={30} />
              <Image src="/redux.svg" alt="redux" width={30} height={30} />
              <Image src="/mui.svg" alt="mui" width={30} height={30} />
              <Image src="/flask.svg" alt="flask" width={30} height={30} />
              <Image
                src="/mysql-official.svg"
                alt="mysql"
                width={30}
                height={30}
              />
            </div>
            <div className="flex gap-5 justify-center items-center my-2">
              <SocialIcon
                url="https://github.com/garyliu427/movie-finder-website"
                fgColor="currentColor"
                bgColor="transparent"
                target="_blank"
                style={{ height: 60, width: 60 }}
                className="text-gray-500 hover:text-[#000000]"
              />
              <SocialIcon
                url="https://financial-management-tool.vercel.app/"
                fgColor="currentColor"
                bgColor="transparent"
                target="_blank"
                style={{ height: 60, width: 60 }}
                className="text-gray-500 hover:text-[#3eceb8]"
              />
            </div>
          </div>
          <div>Hi</div>
        </div>
      </div>
    </div>
  );
}
