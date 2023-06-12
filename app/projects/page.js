import NavBar from '../components/NavBar';
import Image from 'next/image';
import Movie from '../../public/movie.png';
import Nail from '../../public/nail.png';

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <h1 className="flex flex-row justify-center items-center text-2xl md:text-3xl pb-5">
        Projects
      </h1>
      <div className="flex flex-col text-center max-w-8xl xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-5">
          <div className="flex flex-col items-center justify-center">
            <Image src={Movie} alt="movie" style={{ paddingBottom: '1rem' }} />
            <div className="flex gap-5">
              <Image src="/react.svg" alt="react" width={40} height={40} />
              <Image src="/mui.svg" alt="js" width={40} height={40} />
              <Image src="/flask.svg" alt="js" width={40} height={40} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={Nail} alt="nail" style={{ paddingBottom: '1rem' }} />
            <div className="flex gap-5">
              <Image src="/h5.svg" alt="h5" width={40} height={40} />
              <Image src="/css.svg" alt="css" width={40} height={40} />
              <Image src="/javascript.svg" alt="js" width={40} height={40} />
            </div>
          </div>
          <div>Hi</div>
          <div>Hi</div>
        </div>
      </div>
    </div>
  );
}
