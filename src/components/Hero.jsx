import styles from "../styles";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ['a Software Engineer', 'a Front-End Developer', 'passionate about web-design'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <section id="home" className={`flex md:flex-row flex-col mb-10`}>
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="flex-1 font-poppins font-semibold text-center text-[1.5rem] text-black ">
            Hello, my name is <br className="sm:block hidden" />{" "}</span>
          <span className="flex-1 flex-nowrap font-poppins font-semibold text-center text-[2.5rem] text-black">Kong Yu Chen</span>{" "}
          <p className="text-[30px] font-poppins font-semibold text-center">
            <span className="text-[1.5rem]">I am &lt;<span className="text-[1.5rem]">{text}<span className="text-[1.2rem]">/</span>&gt;</span></span>
            <Cursor cursorColor="black"/>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;