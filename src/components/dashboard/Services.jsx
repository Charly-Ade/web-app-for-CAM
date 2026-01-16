import React from 'react';
import { FaWallet, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaWallet />, title: 'Wallet', description: 'Manage your crypto wallet' },
    { icon: <FaExchangeAlt />, title: 'Exchange', description: 'Trade cryptocurrencies' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'View market analytics' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl text-blue-500 mb-4 flex justify-center">
            {service.icon}
          </div>
          <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;