import NavBar from '../components/NavBar';
import Image from 'next/image';

export default function SkillsPage() {
  return (
    <div>
      <NavBar />
      <h1 className="flex flex-row justify-center items-center text-3xl">
        Skills
      </h1>
      <div className="flex flex-col text-center max-w-7xl xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
        <div className="grid grid-cols-3 gap-5 m-5">
          <div className="bg-gray-200 w-full rounded-lg">
            <h3 className="my-5 text-2xl">Languages</h3>
            <div className="grid grid-cols-3 gap-4 m-5">
              <div className="flex flex-col items-center justify-center">
                <Image src="/javascript.svg" alt="js" width={50} height={50} />
                <h3 className="my-2">JavaScript</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/python.svg" alt="python" width={50} height={50} />
                <h3 className="my-2">Python</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/typescript.svg" alt="ts" width={50} height={50} />
                <h3 className="my-2">TypeScript</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/java.svg" alt="java" width={50} height={50} />
                <h3 className="my-2">Java</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/c++.svg" alt="c++" width={50} height={50} />
                <h3 className="my-2">C++</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/mysql.svg" alt="mysql" width={50} height={50} />
                <h3 className="my-2">MySQL</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/mongodb.svg"
                  alt="mongodb"
                  width={50}
                  height={50}
                />
                <h3 className="my-2">MongoDB</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/r.svg" alt="r" width={50} height={50} />
                <h3 className="my-2">R</h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full rounded-lg">
            <h3 className="my-5 text-2xl">Frameworks/UI</h3>
            <div className="grid grid-cols-3 gap-4 m-5">
              <div className="flex flex-col items-center justify-center">
                <Image src="/react.svg" alt="react" width={50} height={50} />
                <h3 className="my-2">React</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/flask.svg" alt="flask" width={50} height={50} />
                <h3 className="my-2">Flask</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/expressjs.svg"
                  alt="express"
                  width={50}
                  height={50}
                />
                <h3 className="my-2">Express.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/nextjs.svg" alt="next" width={50} height={50} />
                <h3 className="my-2">nextjs.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/mui.svg" alt="mui" width={50} height={50} />
                <h3 className="my-2">Material UI</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/tailwindcss.svg"
                  alt="tailwindcss"
                  width={50}
                  height={50}
                />
                <h3 className="my-2">Tailwind CSS</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/docker.svg" alt="docker" width={50} height={50} />
                <h3 className="my-2">Docker</h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full rounded-lg">
            <h3 className="my-5 text-2xl">Tools/Cloud</h3>
            <div className="grid grid-cols-3 gap-4 m-5">
              <div className="flex flex-col items-center justify-center">
                <Image src="/git.svg" alt="git" width={50} height={50} />
                <h3 className="my-2">GitHub</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/jira.svg" alt="jira" width={50} height={50} />
                <h3 className="my-2">Jira</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/aws.png" alt="aws" width={100} height={100} />
                <h3 className="my-2">AWS CCP</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/figma.svg" alt="figma" width={50} height={50} />
                <h3 className="my-2">Figma</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image src="/ps.png" alt="ps" width={50} height={50} />
                <h3 className="my-2">PhotoShop</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
