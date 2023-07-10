import NavBar from '../components/NavBar';

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <p className="text-left text-sm md:text-base xl:text-lg mx-10 xl:max-w-4xl xl:px-10 xl:mx-auto xl:space-y-0 mt-2 md:mt-10">
        Welcome aboard! I am Xiaotian Liu, and I have completed my studies in
        Information Technology at both the University of New South Wales and
        Macquarie University, where I earned a bachelor&apos;s degree in
        Information Technology. I am genuinely passionate about continuous
        learning and eagerly embrace new challenges, always striving for
        excellence in everything I undertake. While I acknowledge that my
        pursuit of perfection can present its own challenges, I firmly believe
        that the process of hard work is both beautiful and rewarding.
        <br />
        <br />
        When it comes to technical abilities, my{' '}
        <a
          className="font-bold underline decoration-blue-400 hover:decoration-sky-600"
          href="/skills"
        >
          SKILLS
        </a>{' '}
        page provides a glimpse into my technology stack. I invite you to
        explore my portfolio, which showcases my projects and achievements. If
        you have any inquiries or potential collaborations, please feel free to
        reach out to me. I am always enthusiastic about contributing my skills
        and knowledge to meaningful endeavors. During my spare time, I enjoy
        summarizing and sharing programming knowledge through my blog. Although
        it is not a tutorial, it is a record of my learning journey.
        <br />
        <br />I look forward to leveraging my expertise and contributing to the
        success of our team. Together, we can tackle new challenges and achieve
        remarkable results.
      </p>
    </div>
  );
}
