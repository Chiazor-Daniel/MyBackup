import React from 'react';
import { RiShieldLine, RiUserLine, RiExchangeDollarLine, RiLineChartLine } from 'react-icons/ri';

const FeatureCard = ({ icon, title }) => (
  <div className="hover:bg-gray-700/40 duration-200 cursor-pointer border border-gray-700 rounded p-4 flex flex-col items-center justify-center text-center">
    {icon}
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
  </div>
);

const CryptoFeatures = () => {
  const features = [
    { icon: <RiShieldLine className="text-5xl text-[#A068FD]" />, title: "Secure Asset" },
    { icon: <RiUserLine className="text-5xl text-[#A068FD]" />, title: "Expert Investment" },
    { icon: <RiExchangeDollarLine className="text-5xl text-[#A068FD]" />, title: "Streamlined Trading" },
    { icon: <RiLineChartLine className="text-5xl text-[#A068FD]" />, title: "Real-Time nAnalysis" },
  ];

  return (
    <div className="px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default CryptoFeatures;