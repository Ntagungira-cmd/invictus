import React from 'react';
import { Calendar, Star, Trophy, Target } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      date: "October 2024",
      title: "Elevator pitch",
      description: "Assembled the team and we got to know each other",
      videoUrl: "https://www.youtube.com/watch?v=K-iJvAY2NDs",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      date: "October 2024",
      title: "Discover Africa - The Royal Bafokeng Nation",
      description:
        "Research Africa and the Royal Bafokeng Nation in South Africa",
      videoUrl: "https://www.youtube.com/watch?v=1l6nZPE-qCo",
      icon: <Target className="h-6 w-6" />,
    },
    {
      date: "October 2024",
      title: "Help Lab",
      description:
        "We went out into the community and helped a young mom with her daily needs and school fees",
      videoUrl: "https://www.youtube.com/watch?v=G2jAQ4cG4t4",
      icon: <Star className="h-6 w-6" />,
    },
    {
      date: "November 2024",
      title: "Mission",
      description:
        "Intorduced the mission and vision of the project (LumiNet) to the team",
      videoUrl: "https://www.youtube.com/watch?v=VuyLPkuOU2E",
      icon: <Trophy className="h-6 w-6" />,
    },
  ];

  return (
    <section id="journey" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            From Assembling a team to developing a solution: Our E-LAB Journey
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="relative pb-8">
                  {index !== milestones.length - 1 && (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  )}
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-white">
                        <span className="text-white">{milestone.icon}</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 bg-white rounded-lg shadow-sm p-6">
                      <div>
                        <p className="text-sm text-gray-500">{milestone.date}</p>
                        <h3 className="text-lg font-medium text-gray-900">{milestone.title}</h3>
                        <p className="mt-2 text-gray-600">{milestone.description}</p>
                      </div>
                      <div className="mt-4">
                        <a
                          href={milestone.videoUrl}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                          target='_blank'
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;