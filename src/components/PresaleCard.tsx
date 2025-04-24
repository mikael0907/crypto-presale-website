"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

interface PresaleCardProps {
  tokenPrice: string;
  softCap: string;
  hardCap: string;
  progressPercent: number;
  tokensSold: number;
  tokensAvailable: number;
  onBuyClick?: () => void;
}

const PresaleCard = ({
  tokenPrice,
  softCap,
  hardCap,
  progressPercent,
  tokensSold,
  tokensAvailable,
}: PresaleCardProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="card-background border-2 border-accent-color rounded-xl p-8 shadow-lg shadow-accent-color/20 hover:shadow-accent-color/30 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold font-fun text-accent-color mb-2">
            PRESALE IS LIVE
          </h2>
          <p className="text-xl text-muted-color font-comic">
            Join the revolution before it's too late!
          </p>
        </div>

        {/* Token Price */}
        <div className="bg-accent-color/10 border border-accent-color rounded-lg p-4 mb-8 text-center">
          <p className="text-muted-color font-comic mb-1">Token Price</p>
          <p className="text-3xl font-bold text-accent-color">{tokenPrice}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-comic text-muted-color">Progress</span>
            <span className="font-bold text-accent-color">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-accent-color h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-color font-comic">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Caps and Tokens Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-background border border-muted-color/20 rounded-lg p-4">
            <p className="text-muted-color font-comic mb-1">Soft Cap</p>
            <p className="text-xl font-bold">{softCap}</p>
          </div>
          <div className="card-background border border-muted-color/20 rounded-lg p-4">
            <p className="text-muted-color font-comic mb-1">Hard Cap</p>
            <p className="text-xl font-bold">{hardCap}</p>
          </div>
          <div className="card-background border border-muted-color/20 rounded-lg p-4">
            <p className="text-muted-color font-comic mb-1">Tokens Sold</p>
            <p className="text-xl font-bold">{tokensSold.toLocaleString()}</p>
          </div>
          <div className="card-background border border-muted-color/20 rounded-lg p-4">
            <p className="text-muted-color font-comic mb-1">Tokens Available</p>
            <p className="text-xl font-bold">
              {tokensAvailable.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Buy Button */}
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </div>
    </div>
  );
};

export default PresaleCard;
