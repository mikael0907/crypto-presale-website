interface RoadMapProps {
  phases: {
    title: string;
    goals: string[];
  }[];
}

const RoadMap = ({ phases }: RoadMapProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-background-color text-4xl md:text-5xl font-bold font-fun bg-clip-text text-transparent bg-gradient-to-r from-accent-color to-secondary-color mb-4">
          PROJECT ROADMAP
        </h2>
        <p className="text-xl text-muted-color max-w-3xl mx-auto font-comic">
          Our strategic plan for growth and development
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 h-full w-1 bg-accent-color/30 transform -translate-x-1/2"></div>

        {phases.map((phase, index) => (
          <div
            key={index}
            className={`relative mb-12 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            {/* Phase Card */}
            <div className="w-full md:w-1/2 p-6">
              <div className="bg-card-bg-color border-2 border-accent-color/30 rounded-xl p-8 shadow-lg hover:shadow-accent-color/20 transition-all duration-300">
                {/* Phase Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-color text-white text-2xl font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold font-comic text-accent-color">
                    {phase.title}
                  </h3>
                </div>

                {/* Goals List */}
                <ul className="space-y-3">
                  {phase.goals.map((goal, goalIndex) => (
                    <li
                      key={goalIndex}
                      className="flex items-start text-muted-color"
                    >
                      <span className="text-accent-color mr-2">✓</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline Dot */}
            <div
              className={`absolute top-8 ${
                index % 2 === 0 ? "md:left-1/2" : "md:right-1/2"
              } w-8 h-8 rounded-full bg-accent-color border-4 border-card-bg-color transform ${
                index % 2 === 0 ? "md:translate-x-4" : "md:-translate-x-4"
              }`}
            ></div>

            {/*  Quarter Label */}
            <div
              className={`absolute ${
                index % 2 === 0
                  ? "md:left-1/2 md:translate-x-16"
                  : "md:right-1/2 md:-translate-x-16"
              } top-10 hidden md:block px-4 py-2 bg-accent-color/10 rounded-full text-accent-color font-bold`}
            >
              Q{index + 1} 2025
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
