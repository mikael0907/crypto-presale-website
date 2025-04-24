import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-card-bg-color border-b border-muted-color/20">
      <h1 className="text-2xl font-bold font-fun">DoggoCoin Presale</h1>
      <ConnectButton />
    </header>
  );
};

export default Header;
