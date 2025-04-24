interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
  heroImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  heroImage,
}: HeroSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 md:p-12 gap-8 card-background">
      {/* Left side - Text content */}
      <div className="flex flex-col justify-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-fun">
          {title}
        </h1>
        <h3 className="text-2xl md:text-4xl mb-8 text-accent-color">
          {subtitle}
        </h3>
        <button
          onClick={onCtaClick}
          className="bg-accent-color hover:bg-accent-color-dark text-background-color font-bold py-4 px-8 rounded-full text-xl md:text-2xl w-fit transition-all duration-300 transform hover:scale-105 font-fun"
        >
          {ctaText}
        </button>
      </div>

      {/* Right side - Image */}
      {heroImage && (
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
