'use client';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [hamburger, setHamburger] = useState(false);

  const handleNav = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="p-5 md:p-10 flex justify-between items-center max-w-7xl mx-auto z-1 xl:items-center">
      <nav className="flex flex-row items-center text-xl">
        <span className="hidden md:block">Xiaotian</span>
        <Link href="/">
          <span className="block cursor-pointer">
            <Image src="/bunny.svg" alt="me" width={50} height={50} />
          </span>
        </Link>
        <span className="hidden md:block">Liu</span>
      </nav>
      <div onClick={handleNav} className="sm:hidden cursor-pointer pr-24">
        <AiOutlineMenu size={25} />
      </div>
      <div
        className={
          hamburger
            ? 'fixed left-0 top-0 w-[70%] sm:hidden bg-[#ecf0f3] h-screen p-10 ease-in duration-500 z-20'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={30} />
          </div>
        </div>
        <nav className="flex flex-col gap-10 pt-5 text-xl text-bold">
          <Link href="/about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="/skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="/blogs">
            <button className="heroButton">Blogs</button>
          </Link>
        </nav>
      </div>
      <nav className="sm:flex flex-row items-center hidden">
        <Link href="/about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="/skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="/projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="/blogs">
          <button className="heroButton">Blogs</button>
        </Link>
      </nav>

      <nav className="flex flex-row items-center">
        <SocialIcon
          url="https://github.com/garyliu427"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://instagram.com/garyx.liu"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/xiaotian-liu-016137149/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="mailto:xiaotian.liu1@outlook.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </nav>
    </header>
  );
}

export default NavBar;
