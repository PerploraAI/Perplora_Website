import React from "react";
import Animations from "./Animations";

const About = () => {
  return (
    <div id="about" className="bg-white px-6 w-100% md:px-10 py-16">

            {/* Bottom Section */}
            <Animations inAnimation='slideInUp' outAnimation='slideOutDown'>
<div className='items-center flex flex-col w-full h-10% justify-center'>
<p className='text-xl  text-black/70 text-center'>Get to know more</p>
<h1 className='text-3xl md:text-5xl text-center font-bold'>About Perplora.ai</h1>
</div>
</Animations>
      {/* About Section */}
      <Animations inAnimation='slideInLeft' outAnimation='slideOutDown'>
      <section id="about" className="mb-2 flex flex-col md:flex-row gap-2 items-center justify-center">
        <img src="./images/mission.png" className="w-full md:w-[500px] h-auto md:h-[500px] justify-center items-center" alt="About Perplora" />
        <Animations inAnimation='fadeIn' outAnimation='slideOutDown'>
        <div className="max-w-6xl mx-4 flex flex-col  md:mx-24">
          <h2 className="text-6xl font-bold text-primary mb-4 text-left">What is Perplora?</h2>
          <p className="md:text-2xl text-gray-700 w-full md:w-[700px] text-lg leading-relaxed text-justify">
            Perplora.ai is a leading AI service provider, dedicated to empowering businesses with
            cutting-edge AI solutions. We offer a comprehensive suite of AI-powered tools and services
            designed to streamline operations, enhance efficiency, and drive growth.
            Our focus is on delivering innovative solutions that are tailored to meet the unique needs of
            every client, ensuring a measurable impact on their business processes and outcomes.
          </p>
        </div>
        </Animations>
      </section>
      </Animations>

      {/* Mission Section */}
      <Animations inAnimation='slideInLeft' outAnimation='slideOutDown'>
      <section id="mission" className="mb-2 flex flex-col md:flex-row-reverse gap-2 items-center justify-center">
      <img src="./images/mission2.png" className="w-full md:w-[500px] rounded-full h-auto md:h-[500px]" alt="Our Mission" />
      <Animations inAnimation='slideInRight' outAnimation='slideOutDown'>
        <div className="max-w-5xl  flex flex-col justify-center mx-4 md:mx-36 ">
          <h2 className="text-6xl font-bold text-primary mb-4 text-right">Our Mission</h2>
          <p className="text-gray-700 md:text-2xl w-full md:w-[700px] text-lg leading-relaxed text-justify">
            Our mission is to make AI accessible and impactful for businesses of all sizes. We believe that
            AI has the potential to revolutionize the way we work and live, and we are committed to helping
            our clients harness its power. By fostering innovation and leveraging the latest advancements in AI, we aim to enable our
            clients to achieve their goals, drive growth, and stay competitive in a rapidly evolving
            marketplace.
          </p>
        </div>
        </Animations>
      </section>
      </Animations>
    </div>
  );
};

export default About;