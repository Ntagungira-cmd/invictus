import React from 'react';
import { Satellite, Users, Shield } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: <Satellite className="h-6 w-6" />,
      title: 'Satellite Coverage',
      description:
        'Partnership with Starlink to provide high-speed internet access across the most remote areas of DRC.',
      picture: 'https://res.cloudinary.com/justdoit/image/upload/v1731099533/My%20stuff/pdfkzhk4sls9hi2ky7r6.jpg'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community First',
      description:
        'Local outreach programs and education initiatives to help communities embrace digital connectivity.',
        picture: 'https://res.cloudinary.com/justdoit/image/upload/v1731100179/My%20stuff/aisdiemuj80n3gefzbxi.png'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Reliable Support',
      description:
        'Dedicated local tech support teams and efficient installation services across the country.',
        picture: 'https://res.cloudinary.com/justdoit/image/upload/v1731099624/My%20stuff/cj9xmm735oi9d82bkkfh.jpg'
    },
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$20/month',
      speed: '50 Mbps',
      features: [
        'Basic internet access',
        'Email & web browsing',
        '24/7 support',
      ],
    },
    {
      name: 'Standard',
      price: '$35/month',
      speed: '100 Mbps',
      features: ['HD video streaming', 'Video calls', 'Priority support'],
    },
    {
      name: 'Premium',
      price: '$50/month',
      speed: '200 Mbps',
      features: ['4K streaming', 'Business applications', 'Premium support'],
    },
  ];

  return (
    <section id="solution" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Solution
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Bridging the Digital Divide
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Through innovative satellite technology and community engagement,
            we're bringing the internet to millions of unconnected people in the
            DRC.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.title}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
                <img src={feature.picture} alt={feature.title} style={{ borderRadius: "5px", marginTop: '10px'}} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Service Plans
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-3xl font-bold text-blue-600 text-center">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-gray-500 text-center">
                    Up to {plan.speed}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white text-center max-w-2xl">
                Bringing the world closer to every community in DRC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
