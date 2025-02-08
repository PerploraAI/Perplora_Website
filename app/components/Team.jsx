import React from "react";
import Animations from './Animations';
const Team = () => {
  return (
    <div className="bg-white p-10 mt-24 mb-36">
                <h2 className="md:text-6xl text-3xl font-bold text-black mb-4 text-left">Visionaries behind <span className="text-primary">Perplora!</span></h2>
      <div className="flex flex-col items-center gap-22">
        {/* Member 1 */}
        <Animations inAnimation='slideInRight' outAnimation='slideOutDown' delay={0.25}>
        <div className="flex flex-col  md:flex-row md:mr-56 items-center gap-8 max-w-7xl">
          <img src="./images/panneeer.png" className="md:w-[250px] md:h-[250px] w-56 h-56  bg-blue-200 border-4 border-primary rounded-full flex-shrink-0"></img>
          <div className="text-left md:text-left">
            <h2 className="md:text-7xl text-2xl font-bold">Mr. Panneer Selvam D</h2>
            <h3 className="text-2xl text-purple-600/70 font-semibold mt-2">Founder, Perplora </h3>
            <p className="mt-4 md:w-[800px] text-gray-700 font-bold leading-relaxed">
            <span className="text-xl text-primary">"</span> In today’s fast-paced digital world, innovation is the key to success. At Perplora, our mission is to harness the power of technology to create smart, scalable, and future-ready solutions that empower businesses to thrive. <span className="text-xl text-primary">"</span>
            </p>
          </div>
        </div>
        </Animations>

        <Animations inAnimation='slideInLeft' outAnimation='slideOutDown' delay={0.5}>
        {/* Member 2 */}
      <div className="flex flex-col mt-4 md:flex-row-reverse items-center md:ml-56 gap-8 max-w-7xl">
          <img src="./images/praveen.jpg" className="md:w-[250px] md:h-[250px] w-56 h-56 rounded-full border-4 border-primary flex-shrink-0"></img>
          <div className="text-right md:text-right">
            <h2 className="md:text-7xl text-3xl font-bold"> Mr. J Praveen</h2>
            <h3 className="text-2xl text-purple-600/70 font-semibold mt-2">Co Founder, Perplora </h3>
            <p className="mt-4 md:w-[800px] text-gray-700 font-bold leading-relaxed">
            <span className="text-xl text-primary">"</span> We deliver next-gen AI solutions to enhance your business, drive automation, and redefine intelligent decision-making. Leveraging cutting-edge machine learning and natural language processing, streamline operations across industries.  <span className="text-xl text-primary">"</span>
            </p>
          </div>
        </div>
        </Animations>
      </div>
    </div>
  );
};

export default Team;