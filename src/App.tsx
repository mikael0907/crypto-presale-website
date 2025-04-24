import HeroSection from "./components/HeroSection";
import PresaleCard from "./components/PresaleCard";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import RoadMap from "./components/RoadMap";
import Team from "./components/Team";
import { FaDiscord, FaTwitter } from "react-icons/fa6";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { LiaLinkedin } from "react-icons/lia";

function App() {
  const handleCtaClick = () => {
    alert("CTA Clicked");
  };

  //How To Buy Card

  const steps = [
    {
      icon: "🔗",
      title: "Connect Wallet",
      description: "Use MetaMask or TonConnect to connect your wallet.",
    },
    {
      icon: "💸",
      title: "Select Amount",
      description: "Choose how many DoggoCoins you want to buy.",
    },
    {
      icon: "🛒",
      title: "Confirm Purchase",
      description: "Approve the transaction in your wallet.",
    },
    {
      icon: "📥",
      title: "Get Tokens",
      description: "Your DoggoCoins will be delivered instantly.",
    },
  ];

  //Roadmap
  const phases = [
    {
      title: "Phase 1: Launch 🚀",
      goals: [
        "Website and branding setup",
        "Smart contract deployment",
        "DoggoCoin presale launch",
      ],
    },
    {
      title: "Phase 2: Community 🌐",
      goals: [
        "Telegram and Twitter campaigns",
        "Community contests and giveaways",
        "Influencer partnerships",
      ],
    },
    {
      title: "Phase 3: Listing 📈",
      goals: [
        "Token launch on DEX",
        "CoinMarketCap and CoinGecko listings",
        "Burn event and rewards",
      ],
    },
  ];

  //Team
  const members = [
    {
      name: "Aturu Ocha",
      role: "Senior Dev",
      avatar: "",
      twitter: {
        icon: FaTwitter,
        link: "https://twitter.com",
      },
    },
    {
      name: "Jane Doe",
      role: "Marketing Manager",
      avatar: "",
      twitter: {
        icon: FaTwitter,
        link: "htps://twitter.com",
      },
    },
  ];

  //FAQ
  const faqs = [
    {
      question: "What is Dougie Coin?",
      answer:
        "Dougie Coin is a fun and friendly meme token built for the community.",
    },
    {
      question: "How can I buy Dougie Coin?",
      answer:
        "You can buy Dougie Coin during the presale using MetaMask or TonConnect.",
    },
    {
      question: "What is the total supply?",
      answer: "The total supply is 1,000,000 DGC tokens.",
    },
    {
      question: "Is there a token burn?",
      answer: "Yes, 20,000 tokens will be burned to reduce supply.",
    },
    {
      question: "Are there any taxes on transactions?",
      answer: "Nope! There are zero taxes on all transactions.",
    },
    {
      question: "Where can I track the project?",
      answer: "You can follow us on Twitter and join our Telegram for updates.",
    },
  ];

  //Social Links
  const socials = [
    {
      icon: FaTwitter,
      link: "https://twitter.com",
    },
    {
      icon: FaDiscord,
      link: "https://discord.com",
    },
    {
      icon: LiaLinkedin,
      link: "https://linkedin.com",
    },
  ];

  return (
    <>
      <section>
        <HeroSection
          title="Dougie Coin Presale"
          subtitle="The Fun and friendly meme token"
          heroImage="../src/assets/undraw_page-eaten_b2rt-removebg-preview.png"
          ctaText="Buy Now"
          onCtaClick={handleCtaClick}
        />
      </section>
      <section>
        <PresaleCard
          tokenPrice="0.05BNB"
          progressPercent={30}
          softCap="250,000 BNB"
          hardCap="500,000 BNB"
          tokensSold={5000}
          tokensAvailable={10000}
        />
      </section>
      <section>
        <HowToBuy steps={steps} />
      </section>
      <section>
        <Tokenomics
          supply="1,000,000,000"
          tax="5% Buy/Sell"
          liquidity="60% Locked"
          burn="20% Initial"
          description="Our carefully designed tokenomics ensure sustainable growth and fair distribution for all holders."
        />
      </section>
      <section>
        <RoadMap phases={phases} />
      </section>
      <section>
        <Team members={members} />
      </section>
      <section>
        {faqs.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
      <section>
        <Footer
          companyName="Dougie Coin."
          copyrightText="All Rights Reserved"
          socialLinks={socials}
        />
      </section>
    </>
  );
}

export default App;
