import { FaSearch, FaCompass, FaCode } from 'react-icons/fa';
import Animations from './Animations';
export default function Technical() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16 bg-white">
      {/* Timeline container */}
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {/* Top Row */}
        {/* Timeline Line */}
        <div className=" md:visible invisible flex  relative items-center w-full">
          <div className="absolute w-full h-1 bg-black"></div>

          {/* Timeline Steps */}
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative flex flex-col items-center w-1/3">
              <div className="bg-black text-white w-10 h-10 flex items-center justify-center text-lg font-bold rounded transform rotate-30">
                {num}
              </div>
              <div className="h-6 w-1 bg-black"></div>
            </div>
          ))}
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-8 w-full mb-8">
        <Animations inAnimation='slideInUp' outAnimation='slideOutDown' delay={0.5}>
          <div className="flex mt-8 flex-col items-center">
            <FaSearch className="text-purple-700 text-5xl mb-2" />
            <h3 className="text-2xl font-bold text-purple-700">Industry Insights</h3>
            <p className="text-gray-700 text-xl max-w-xs">
              Stay informed about the latest AI trends and best practices to stay ahead of the competition.
            </p>
          </div></Animations>
          <Animations inAnimation='slideInUp' outAnimation='slideOutDown' delay={0.75}>
          <div className="flex mt-8 flex-col items-center">
            <FaCompass className="text-purple-700 text-5xl mb-2" />
            <h3 className="text-2xl font-bold text-purple-700">Expert Guidance</h3>
            <p className="text-gray-700 text-xl max-w-xs">
              Get personalized support from our team of AI experts to guide you through your AI journey.
            </p>
          </div>
          </Animations>
          <Animations inAnimation='slideInUp' outAnimation='slideOutDown' delay={1}>
          <div className="mt-8 flex flex-col items-center">
          <FaCode className="text-purple-700 text-5xl mb-2" />
          <h3 className="text-2xl font-bold text-purple-700">Technical Training</h3>
          <p className="text-gray-700 text-xl max-w-xs">
            Develop your AI skills with comprehensive training programs designed for professionals and educators.
          </p>
        </div>
        </Animations>
        </div>
        {/* Bottom Row */}
        
      </div>
    </section>
  );
}
