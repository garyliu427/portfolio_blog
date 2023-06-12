import { SocialIcon } from 'react-social-icons';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <header>
      <div className="sticky top-0 p-10 flex justify-between items-center max-w-7xl mx-auto z-1 xl:items-center">
        <div className="flex flex-row items-center text-xl">
          <span>Xiaotian</span>
          <Link href="/">
            <span>
              <Image src="/bunny.svg" alt="me" width={50} height={50} />
            </span>
          </Link>
          <span>Liu</span>
        </div>

        <div className="flex flex-row items-center">
          <Link href="about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="blogs">
            <button className="heroButton">Blogs</button>
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <SocialIcon
            url="https://github.com/garyliu427"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://instagram.com/garyx.liu"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/xiaotian-liu-016137149/"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
