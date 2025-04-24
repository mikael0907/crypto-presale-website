interface Steps {
  title: string;
  description: string;
  icon?: string;
}

interface HowToBuyProps {
  steps: Steps[];
}

const HowToBuy = ({ steps }: HowToBuyProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-fun bg-clip-text text-transparent bg-gradient-to-r from-accent-color to-secondary-color text-background-color">
        HOW TO BUY
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-card-bg-color rounded-xl p-8 border-2 border-muted-color/20 hover:border-accent-color transition-all duration-300 group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-accent-color/10 blur-md transition-opacity duration-300"></div>

            {/* Number Step Icon */}
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-accent-color text-white text-2xl font-bold relative z-10 border-4 border-white/10 shadow-lg">
              {index + 1}
            </div>

            {/* Optional Icon */}
            {step.icon && (
              <div className="text-4xl mb-4 text-accent-color">{step.icon}</div>
            )}

            <h3 className="text-2xl font-bold mb-3 font-comic text-accent-color">
              {step.title}
            </h3>

            <p className="text-muted-color leading-relaxed">
              {step.description}
            </p>

            {/* Animated underline */}
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-accent-color to-secondary-color rounded-full transition-all duration-300 group-hover:w-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToBuy;
