import React, { useState } from 'react';

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqData = [
    {
      category: "A. About Velox Gold Scalper EA V11.1 (8 FAQs)",
      items: [
        { q: "Q1. What exactly is Velox Gold Scalper EA V11.1?", a: "Velox Gold Scalper EA V11.1 is an advanced AI HFT Scalping Expert Advisor designed specifically for MetaTrader 5 (MT5). It automatically analyzes the gold market, opens trades, and manages them." },
        { q: "Q2. Who is the developer of this EA?", a: "It is developed and maintained by the Velox Gold Scalper Admin, an experienced in-house team of algorithmic traders and software engineers." },
        { q: "Q3. Which currency pair does it trade?", a: "It is fully optimized and specialized for XAUUSD (Gold). It does not trade other currency pairs." },
        { q: "Q4. Does it work on MT4 or MT5?", a: "Velox Gold Scalper V11.1 works exclusively on MetaTrader 5 (MT5). MT5 offers faster execution and superior backtesting capabilities." },
        { q: "Q5. What is the difference between V5.1 and V11.1?", a: "V11.1 is a massive upgrade. It includes a new Live Trading Dashboard, Dynamic AI Mode (DYN), AI Adaptive engine, Pro Drawdown Protection, Smart Position Control, and an Advanced AI Adaptation System." },
        { q: "Q6. Is it fully automatic?", a: "Yes. It is a 100% plug & play system. Once installed, it trades automatically without manual intervention." },
        { q: "Q7. Do I need trading experience to use it?", a: "No. The EA comes with simple step-by-step PDF guides and a video tutorial. It is designed so that even a beginner can install it in 1 minute." },
        { q: "Q8. Is this a martingale or grid bot?", a: "The EA uses an adaptive grid with a dynamic pip distance, tightly controlled by Pro Drawdown Protection and Smart Position Control, avoiding the reckless exposure of traditional martingales." }
      ]
    },
    {
      category: "B. Purchase, Payment & Delivery (10 FAQs)",
      items: [
        { q: "Q11. What are the available payment methods?", a: "We accept cryptocurrency payments only: USDT (TRC20), USDT (BEP20), Bitcoin (BTC), and Ethereum (ERC20)." },
        { q: "Q12. How do I make the payment?", a: "Choose your package, copy the correct wallet address from the pricing section, send the exact amount, and email us the transaction screenshot along with your MT5 details." },
        { q: "Q13. How long does delivery take?", a: "We guarantee Instant Delivery of EA within 1 Hour of Payment confirmation." },
        { q: "Q14. What exactly will I receive?", a: "You will receive an email containing 12+ files: the EA file, 7+ Preset files, PDF Installation Guide, Video Guide, Input Parameter Guide, DO's and DON'Ts, and your License Keys." },
        { q: "Q15. Is there a monthly subscription fee?", a: "No. All packages (A, B, and C) are a one-time payment for a Lifetime License." },
        { q: "Q16. Can I upgrade my package later?", a: "Yes, you can upgrade from Package A to B or B to C by paying the price difference. Contact the admin on Telegram for an upgrade link." },
        { q: "Q17. Do you offer refunds?", a: "No. Due to the digital nature of the product and instant delivery of the source/compiled files, all sales are final. There are no refunds." },
        { q: "Q18. Are the prices really discounted right now?", a: "Yes, we are currently offering 50% OFF for a limited few days." },
        { q: "Q19. Where should I email my payment proof?", a: "Email your screenshot, MT5 ID, Server Name, Email, and Country to: Veloxgoldscalperea@gmail.com" },
        { q: "Q20. Can I get a discount if I pay via PayPal?", a: "We only accept crypto payments. PayPal and credit cards are not supported." }
      ]
    },
    {
      category: "C. Installation & Setup (10 FAQs)",
      items: [
        { q: "Q21. How hard is it to install the EA?", a: "It is extremely easy. The package includes a Step-by-Step Setup Video and an Easy Installation Guide. Most users complete it in under 1 minute." },
        { q: "Q22. Do I need a VPS to run the EA?", a: "A VPS (Virtual Private Server) is highly recommended so the EA can run 24/5 even when your PC is turned off, but it is not mandatory. You can run it on your personal computer." },
        { q: "Q23. What are the system requirements?", a: "Any basic Windows 10/11 PC or a standard forex VPS (1GB+ RAM, 1 CPU core) is perfectly fine." },
        { q: "Q24. Does it work on Mac?", a: "MT5 can be run on a Mac using parallels or crossover, but using a Windows VPS is the easiest and most stable solution for Mac users." },
        { q: "Q25. What timeframe should I use?", a: "The EA is optimized for the M15 timeframe. All preset files are designed to be run on the M15 chart." },
        { q: "Q26. Do I need to change any settings?", a: "No. You just need to load one of the provided .set files (Preset modes). The EA takes care of the rest." },
        { q: "Q27. What are Preset modes (.set files)?", a: "Preset files contain pre-configured settings (e.g., Low Scalping Mode, Fast Scalping Mode) that you load into the EA so you don't have to configure parameters manually." },
        { q: "Q28. I am stuck on installation, will you help?", a: "Yes! Lifetime Technical Support is included. Message the admin on Telegram and we will guide you." },
        { q: "Q29. Should I turn the EA off during news?", a: "The EA has a built-in news filter, but for high-impact events like NFP or CPI, you can choose to pause it depending on your risk appetite." },
        { q: "Q30. Can I install it on my phone?", a: "You cannot install an EA on the MT5 mobile app. You must install it on a PC or VPS. However, you can monitor the trades on your phone using the MT5 app." }
      ]
    },
    {
      category: "D. Accounts, Brokers & Prop Firms (8 FAQs)",
      items: [
        { q: "Q31. What is the minimum balance required?", a: "You can start with as little as $50 to $70." },
        { q: "Q32. Which broker is best?", a: "Velox Gold Scalper works with ANY broker that offers MT5. We recommend brokers with low spreads and fast execution (ECN, Raw Spread accounts)." },
        { q: "Q33. Does it work on Cent accounts?", a: "Yes, it works perfectly on Cent, Micro, Standard, Pro, and ECN accounts." },
        { q: "Q34. Does it work on Prop Firms (FTMO, FundedNext, etc.)?", a: "Yes! V11.1 features Pro Drawdown Protection and Max Drawdown Control, making it highly suitable for passing prop firm challenges." },
        { q: "Q35. How many accounts can I trade on?", a: "Package A: 1 Real Account & Unlimited Demos. Package B & C: Unlimited Real & Unlimited Demo Accounts." },
        { q: "Q36. Can I change my licensed MT5 account number later?", a: "Yes, you can request a license transfer by contacting the admin." },
        { q: "Q37. Is leverage important?", a: "A leverage of 1:100 to 1:500 is recommended for optimal margin usage, especially with smaller balances." },
        { q: "Q38. Do I need an Islamic (Swap-free) account?", a: "It works on both standard and swap-free (Islamic) accounts." }
      ]
    },
    {
      category: "E. Live Dashboard & Risk Management (8 FAQs)",
      items: [
        { q: "Q39. What is the V11.1 Live Trading Dashboard?", a: "It's a new visual interface on your MT5 chart that displays real-time metrics like AI Mode, Win Rate, Margin Level, Floating P/L, Positions, and Drawdown." },
        { q: "Q40. What is Pro Drawdown Protection?", a: "It's an advanced risk management feature that monitors your account equity and stops trading or manages open positions aggressively if a specific drawdown threshold is reached." },
        { q: "Q41. Can I set my own Stop Loss (SL) and Take Profit (TP)?", a: "Yes, SL and TP are fully adjustable, though the provided preset files already have optimal values configured." },
        { q: "Q42. How does the EA handle risk?", a: "It uses Smart Position Control and Risk-based exposure control to ensure your account is never over-leveraged during volatile moves." },
        { q: "Q43. Will the EA blow my account?", a: "If you use the recommended preset files and employ proper risk management, the risk of a blown account is extremely low thanks to the new Drawdown Protection." },
        { q: "Q44. What does the 'Positions' metric on the dashboard mean?", a: "It shows the current number of open trades versus the maximum allowed trades (e.g., 3 / 12), giving you live visibility into the EA's exposure." },
        { q: "Q45. Does the dashboard slow down the EA?", a: "No. The dashboard is optimized using OnTimer refresh, meaning it does not burden the CPU or delay trade execution." },
        { q: "Q46. Can I hide the dashboard?", a: "Yes, you can toggle or disable the dashboard via the EA input settings." }
      ]
    },
    {
      category: "F. AI Technology & Strategies (10 FAQs)",
      items: [
        { q: "Q49. What is Dynamic AI Mode (DYN)?", a: "DYN allows the EA to adapt its entry spacing and grid distance dynamically based on live market volatility, rather than using a fixed, rigid distance." },
        { q: "Q50. How does the AI Adaptive Engine work?", a: "It analyzes market conditions (trending, ranging, high/low volatility) and automatically switches the trading strategy to match the current environment." },
        { q: "Q51. Does it use indicators?", a: "Yes, it uses a combination of advanced algorithms, dynamic volatility filtering, and trend confirmation logic." },
        { q: "Q52. What is Intelligent Processing?", a: "A new architectural design in V11.1 that processes data faster and reduces system workload, ensuring lightning-fast trade entries." },
        { q: "Q53. Are the AI features real or just marketing?", a: "They are real algorithmic logic blocks within the EA. Package C buyers can even view the source code to see how the AI Adaptive Engine dynamically alters variables." },
        { q: "Q54. Does the EA learn over time (Machine Learning)?", a: "It does not train neural networks on your local PC. It uses predefined adaptive logic (AI-assisted algorithms) based on thousands of hours of backend optimization." },
        { q: "Q55. Why is Gold (XAUUSD) the only pair supported?", a: "Gold has unique volatility and price action. The AI Engine is specifically trained and calibrated to exploit Gold's specific market behavior." },
        { q: "Q56. What are the Scalping Modes?", a: "The EA includes Low, Medium, and Fast Scalping Modes. They dictate how aggressively the EA opens trades." },
        { q: "Q57. Is this a High-Frequency Trading (HFT) bot?", a: "Yes, it is capable of executing Ultra-Fast HFT Scalping trades when the Fast Scalping Mode is activated." },
        { q: "Q58. Can I edit the AI logic?", a: "Package A and B users cannot edit the core logic. Package C users receive the .mq5 source code and can modify the logic." }
      ]
    },
    {
      category: "G. Drawdown & Position Management (9 FAQs)",
      items: [
        { q: "Q59. What is Smart Position Control?", a: "Instead of treating each order independently, the EA coordinates all open positions centrally to manage the basket profit and exit trades efficiently." },
        { q: "Q60. How does it handle ranging markets?", a: "The AI Adaptive engine identifies the range and adjusts the entry frequency and grid spacing to safely extract profit from the consolidation." },
        { q: "Q61. How does it handle trending markets?", a: "It uses trend confirmation to enter in the direction of the trend and employs smart trailing logic to maximize profit." },
        { q: "Q62. What is the maximum drawdown I can expect?", a: "Depending on the preset used, drawdown is typically kept between 2% to 15%. You can cap this using the Max Drawdown Control setting." },
        { q: "Q63. Does the EA hedge?", a: "Yes, it can utilize hedging strategies if permitted by your broker and enabled in the settings." },
        { q: "Q64. What is the Dynamic Gap algorithm?", a: "It prevents the EA from opening trades too close to each other during sudden price spikes, protecting your margin." },
        { q: "Q65. How does it close trades?", a: "It closes trades via Take Profit, Trailing Stop, Basket Profit, or the Drawdown Protection mechanism." },
        { q: "Q66. Can I manually close trades opened by the EA?", a: "Yes, you can manually close trades, and the EA will adjust its position management accordingly." },
        { q: "Q67. Will it survive a flash crash?", a: "The built-in news filter and spread filter are designed to pause trading during extreme market events to protect your capital." }
      ]
    },
    {
      category: "H. Results, Win Rate & Expectations (8 FAQs)",
      items: [
        { q: "Q68. What is the win rate of V11.1?", a: "Extensive backtesting and live forward testing show a consistent win rate of 90% to 95%." },
        { q: "Q69. How much profit can I make daily?", a: "Profit depends on your balance, leverage, and the Scalping Mode used. Users typically see consistent daily growth." },
        { q: "Q70. Are the results guaranteed?", a: "No. Trading carries risk. While the EA is highly advanced and historically profitable, past performance is not a guarantee of future results." },
        { q: "Q71. Why do you claim 90-95% win rate?", a: "Because the EA is a scalper. It takes small, highly probable profits rapidly, resulting in a very high percentage of winning trades." },
        { q: "Q72. Can I see proof of performance?", a: "Our dashboard mockup reflects actual live metrics. You can also test it yourself on an Unlimited Demo Account included in all packages." },
        { q: "Q73. How long does it take to double my account?", a: "With aggressive settings, it can happen quickly, but we strongly advise using conservative settings for steady, long-term growth." },
        { q: "Q74. Does the EA trade every day?", a: "Yes, assuming the market is open and conditions meet the AI filters. It may pause during severe spread widening." },
        { q: "Q75. Is it safe for a $10,000 account?", a: "Yes. Many users run V11.1 on large accounts and prop firm challenges using the Low Scalping Mode for maximum safety." }
      ]
    },
    {
      category: "I. Tech Specs, Updates & Support (8 FAQs)",
      items: [
        { q: "Q76. Do I have to pay for future updates?", a: "No. Free Lifetime Updates are included for all packages." },
        { q: "Q77. How will I receive updates?", a: "When a new version is released, the updated files will be emailed to you directly." },
        { q: "Q78. What happens if I have technical issues?", a: "Contact us via Telegram or Email. Lifetime Technical Support is included." },
        { q: "Q79. Can I run the EA on multiple computers?", a: "You can install the EA on your VPS and your local PC, provided you are using your licensed MT5 account numbers." },
        { q: "Q80. What is the '.mq5 Source Code' in Package C?", a: "It is the raw, editable code file of the EA. Package C buyers can modify the AI logic, change the branding, or recompile the EA." },
        { q: "Q81. Is the source code encrypted?", a: "For Packages A and B, you receive the compiled .ex5 file (encrypted). Package C receives the open .mq5 source code." },
        { q: "Q82. Does the EA require an internet connection?", a: "Yes. MT5 must be connected to your broker's server for the EA to place trades." },
        { q: "Q83. Are there any hidden fees?", a: "None. It is a strict one-time payment." }
      ]
    },
    {
      category: "J. Security, License & Privacy (7 FAQs)",
      items: [
        { q: "Q84. Is my trading data safe?", a: "100% yes. Velox EA operates locally on your MT5 terminal. It does NOT send your account balance, history, or personal data to any external server." },
        { q: "Q85. How does the licensing system work?", a: "When you send your MT5 ID, we generate a unique license key tied to that account. You enter this key in the EA settings to activate it." },
        { q: "Q86. Can someone steal my license key?", a: "Your license key is cryptographically bound to your specific MT5 account number. It will not work for anyone else." },
        { q: "Q87. What if my MT5 account gets banned/closed?", a: "Contact us with proof of the closed account and your new MT5 ID. We will issue a replacement license." },
        { q: "Q88. Is this a cracked EA?", a: "No. We are the original developers (Velox Gold Scalper Admin). You are purchasing genuine, original software." },
        { q: "Q89. Can I resell Package C?", a: "Package C includes the source code, allowing you to modify and use it for your own private fund or clients. Public mass-reselling requires a commercial agreement." },
        { q: "Q90. Why don't you accept credit cards?", a: "Crypto provides global, frictionless, and secure transactions without the high fees and chargeback fraud associated with traditional payment gateways." }
      ]
    },
    {
      category: "K. Common Mistakes & Best Practices (6 FAQs)",
      items: [
        { q: "Q91. What is the biggest mistake new users make?", a: "Over-leveraging. Using the Fast Scalping Mode on a $50 account is dangerous. Always match the preset to your balance." },
        { q: "Q92. Should I interfere with the trades?", a: "Let the AI work. Manually closing trades in a grid sequence can disrupt the Smart Position Control math." },
        { q: "Q93. Can I run other EAs alongside Velox V11.1?", a: "Yes, but ensure they operate on different magic numbers and monitor your overall margin level carefully." },
        { q: "Q94. Why is the EA not taking trades?", a: "Check the 'Journal' and 'Experts' tab in MT5. Common issues: Auto Trading is off, wrong license key, or spread is too high." },
        { q: "Q95. Should I test on demo first?", a: "Absolutely. We provide Unlimited Demo Accounts so you can test the 7+ presets and understand how the EA behaves before using real money." },
        { q: "Q96. How often should I check the VPS?", a: "Once a day or once a week is sufficient just to ensure MT5 hasn't restarted due to Windows updates." }
      ]
    },
    {
      category: "L. Ultimate Conclusion (6 FAQs)",
      items: [
        { q: "Q97. Why is V11.1 better than competitor EAs?", a: "Most EAs are simple moving average cross bots. V11.1 uses an AI Adaptive Engine, Dynamic Gap algorithms, and a Live Trading Dashboard, making it a true institutional-grade tool." },
        { q: "Q98. Is this the final version?", a: "V11.1 is the latest, most stable release. However, we continuously research market conditions and provide free lifetime updates when improvements are made." },
        { q: "Q99. What makes the Developer team unique?", a: "We are an in-house engineering team, not marketers. We focus on code efficiency, AI integration, and robust risk management." },
        { q: "Q100. Will this work in 2024 and beyond?", a: "Yes. The AI Adaptive Engine is specifically designed to adjust to future market volatility and changing gold cycles." },
        { q: "Q101. Are you planning to add other pairs?", a: "Velox Gold Scalper will remain strictly optimized for XAUUSD to ensure maximum precision and performance." },
        { q: "Q102. I am ready to buy. What's the next step?", a: "Scroll up to the Pricing section, copy the wallet address, send the payment, and email us the proof. Welcome to Velox V11.1!" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="faqs">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-orbitron font-black text-[20vw] text-cyan-500/5 select-none pointer-events-none tracking-tighter">FAQS</div>
      
      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
            Knowledge Base
          </span>
          <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
            100+ Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to know about Velox Gold Scalper EA <b className="text-gray-200">V11.1</b>. Read these carefully before purchasing.
          </p>
        </div>

        <div className="space-y-10">
          {faqData.map((cat, i) => (
            <div key={i} className="bg-[#050505] rounded-[22px] border border-gray-800 overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 px-6 py-4 border-b border-cyan-500/30 flex items-center gap-3">
                <i className="fa-solid fa-folder-open text-cyan-400 text-xl drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]"></i>
                <h3 className="font-orbitron font-bold text-gray-100 text-lg">{cat.category}</h3>
              </div>
              <div className="divide-y divide-gray-800/50">
                {cat.items.map((faq, j) => {
                  const id = `faq-${i}-${j}`;
                  const isOpen = openFaq === id;
                  return (
                    <div key={j} className="group">
                      <button onClick={() => toggleFaq(id)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#0a0a0f] transition-colors focus:outline-none">
                        <span className={`font-bold text-sm ${isOpen ? 'text-cyan-400 drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]' : 'text-gray-300 group-hover:text-cyan-300 transition-colors'}`}>
                          {faq.q}
                        </span>
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full border shrink-0 transition-all duration-300 ${isOpen ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 rotate-45' : 'border-gray-700 text-gray-500 group-hover:border-cyan-500/50 group-hover:text-cyan-400'}`}>
                          <i className="fa-solid fa-plus text-xs"></i>
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-6 pt-1 text-gray-400 text-sm leading-relaxed border-t border-dashed border-gray-800/50 mt-2 mx-6">
                          <b className="text-yellow-500">Answer:</b> {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#how" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black uppercase tracking-wider shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all transform hover:scale-105">
            <i className="fa-solid fa-cart-shopping text-xl"></i> Ready to Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}
