# DoggoCoin Presale Website

A modern cryptocurrency presale website built with React, TypeScript, and Web3 technologies. This platform allows users to participate in the DoggoCoin token presale with wallet integration.

## Features

- 🚀 Wallet connection via RainbowKit (supports MetaMask, WalletConnect, etc.)
- 📊 Interactive presale dashboard with progress tracking
- 💰 Tokenomics visualization
- 🗺 Project roadmap
- ❓ FAQ section
- 🎨 Custom crypto-themed UI with animations

## Technologies Used

- **Frontend**:

  - React 18
  - TypeScript
  - Tailwind CSS
  - Vite

- **Web3**:

  - Wagmi
  - RainbowKit
  - Viem

- **UI**:
  - React Icons
  - Custom animations

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- WalletConnect Project ID (from [cloud.walletconnect.com](https://cloud.walletconnect.com))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mikael0907/crypto-presale-website.git
   cd presale-website

   ```

2. Install dependencies

```bash
  npm install

```

3. Run the development server:

```bash
npm run dev

```

### Project Structure

doggocoin-presale/
├── src/
│ ├── components/ # React components
│ ├── config/ # Web3 configuration
│ ├── providers/ # Context providers
│ ├── App.tsx # Main application
│ └── main.tsx # Entry point
├── public/ # Static assets
├── index.css # Global styles
└── vite.config.ts # Vite configuration

### Contributing

We welcome contributions! Here's how you can help:

1. Report Bugs: Open an issue with detailed steps to reproduce

2. Suggest Features: Share your ideas for improvements

3. Submit Pull Requests:

a. Fork the repository

b. Create a new branch (git checkout -b feature/your-feature)

c. Commit your changes (git commit -m 'Add some feature')

d. Push to the branch (git push origin feature/your-feature)

e. Open a pull request

### Areas Needing Improvement

1. Wallet connection reliability

2. Mobile responsiveness

3. Transaction handling

4. Test coverage

5. Additional chain support

### Troubleshooting

If you encounter wallet connection issues:

1. Ensure your WalletConnect project ID is correct

2. Check browser console for errors

3. Try different browsers (Chrome works best)

4. Verify your wallet extension is properly installed

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

a. RainbowKit team for the excellent wallet connection tools

b. Vite team for the fast development environment

c. Tailwind CSS for the utility-first styling

### Contact

For project inquiries or collaboration opportunities:

Email: chisommichaelokoroafor@gmail.com
Website: https://chisomdeveloper.netlify.app/
Twitter: @simplyCheesom
