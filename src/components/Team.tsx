import React from "react";
import { IconBaseProps } from "react-icons";

interface Twitter {
  icon: React.ElementType<IconBaseProps>;
  link: string;
}

interface TeamSectionProps {
  members: {
    name: string;
    role: string;
    avatar: string;
    twitter?: Twitter;
  }[];
}

const Team: React.FC<TeamSectionProps> = ({ members }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-background-color text-4xl md:text-5xl font-bold font-fun bg-clip-text text-transparent bg-gradient-to-r from-accent-color to-secondary-color mb-4">
          MEET THE TEAM
        </h2>
        <p className="text-xl text-muted-color max-w-3xl mx-auto font-comic">
          The brilliant minds behind the project
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <div
            key={member.role}
            className="group relative bg-card-bg-color border-2 border-muted-color/20 rounded-xl p-6 hover:border-accent-color transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-accent-color/10 blur-md transition-opacity duration-300"></div>

            {/* Avatar */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-accent-color/20 group-hover:border-accent-color transition-all duration-300">
                {member.avatar && (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Name & Role */}
              <h2 className="text-2xl font-bold text-center font-comic mb-1">
                {member.name}
              </h2>
              <h3 className="text-lg text-accent-color text-center font-comic mb-4">
                {member.role}
              </h3>

              {/* Twitter Link */}
              {member.twitter && (
                <a
                  href={member.twitter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-color/10 hover:bg-accent-color/20 text-accent-color transition-all duration-300"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <member.twitter.icon size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
