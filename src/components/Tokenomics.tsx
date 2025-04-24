interface TokenomicsProps {
  supply: string;
  tax: string;
  liquidity: string;
  burn: string;
  description: string;
}

const Tokenomics = ({
  supply,
  tax,
  liquidity,
  burn,
  description,
}: TokenomicsProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 card-background rounded-lg">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-background-color text-4xl md:text-5xl font-bold font-fun bg-clip-text text-transparent bg-gradient-to-r from-accent-color to-secondary-color mb-4">
          TOKENOMICS
        </h2>
        <p className="text-xl text-muted-color max-w-3xl mx-auto font-comic">
          {description}
        </p>
      </div>

      {/* Tokenomics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Total Supply */}
        <div className="bg-card-bg-color border-2 border-muted-color/20 rounded-xl p-6 hover:border-accent-color transition-all duration-300 group">
          <div className="text-4xl mb-4 text-accent-color">💰</div>
          <h3 className="text-xl font-bold font-comic mb-2">Total Supply</h3>
          <p className="text-2xl font-bold">{supply}</p>
        </div>

        {/* Tax */}
        <div className="bg-card-bg-color border-2 border-muted-color/20 rounded-xl p-6 hover:border-accent-color transition-all duration-300 group">
          <div className="text-4xl mb-4 text-accent-color">📊</div>
          <h3 className="text-xl font-bold font-comic mb-2">Tax</h3>
          <p className="text-2xl font-bold">{tax}</p>
        </div>

        {/* Liquidity */}
        <div className="bg-card-bg-color border-2 border-muted-color/20 rounded-xl p-6 hover:border-accent-color transition-all duration-300 group">
          <div className="text-4xl mb-4 text-accent-color">💧</div>
          <h3 className="text-xl font-bold font-comic mb-2">Liquidity</h3>
          <p className="text-2xl font-bold">{liquidity}</p>
        </div>

        {/* Burn */}
        <div className="bg-card-bg-color border-2 border-muted-color/20 rounded-xl p-6 hover:border-accent-color transition-all duration-300 group">
          <div className="text-4xl mb-4 text-accent-color">🔥</div>
          <h3 className="text-xl font-bold font-comic mb-2">Burn</h3>
          <p className="text-2xl font-bold">{burn}</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-card-bg-color/50 border-2 border-accent-color/30 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold font-comic text-accent-color mb-4">
          Fair Distribution
        </h3>
        <p className="text-muted-color">
          Our tokenomics are designed for long-term sustainability and community
          growth. No team allocations, no VC dumping - just fair launch
          principles.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
