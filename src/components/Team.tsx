import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Jean-Paul Mukasa',
      role: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070',
      bio: 'A leader dedicated to creating impact and bring change to the African continent ',
      social: {
        linkedin: '#',
        github: '#',
        email: 'f.kamara@alustudent.com',
      },
    },
    {
      name: 'Ntagungira Ali Rashid',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=2070',
      bio: 'Satellite communications specialist with experience in remote installations.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'r.ntagungir@alustudent.com',
      },
    },
    {
      name: 'Niyigena Yves',
      role: 'Technical Director',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2070',
      bio: 'Pricipal engineer and director of TechOps',
      social: {
        linkedin: '#',
        github: '#',
        email: 'n.yves@alustudent.com',
      },
    },
    {
      name: 'Golbert Gauthier Kamanzi',
      role: 'Community Relations Director',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2070',
      bio: "Expert in community development with deep understanding of DRC's rural needs",
      social: {
        linkedin: '#',
        github: '#',
        email: 'gkamanzig@alustudent.com',
      },
    },
    {
      name: 'Raoul Songa Gahima',
      role: 'Engineering and Telecommunication lead',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2070',
      bio: 'Former telecommunications executive with experience in African market',
      social: {
        linkedin: '#',
        github: '#',
        email: 'r.songa@alustudent.com',
      },
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Dedicated to connecting communities and transforming lives across
            the DRC
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group relative">
              <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600">
                  {member.role}
                </p>
                <p className="mt-2 text-base text-gray-500">{member.bio}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
