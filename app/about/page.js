import Image from 'next/image';
import NavBar from '../components/NavBar';

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <h1 className="flex flex-row justify-center items-center text-3xl">
        About Me
      </h1>
      <div className="flex flex-col text-center max-w-7xl xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
        Hi
      </div>
    </div>
  );
}
