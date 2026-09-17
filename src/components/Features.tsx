import React from 'react';

export default function Features() {
  const features = [
    { icon: "fa-brain", title: "Ultra-Fast HFT Scalping", desc: "High-Frequency Trading engine that captures micro-movements in Gold with millisecond precision on MT5.", ai: "AI-Powered", iconAi: "fa-bolt" },
    { icon: "fa-microchip", title: "AI-Based V11.1 Strategy", desc: "Powered by the new Dynamic AI Mode + AI Adaptive engine, the EA adapts dynamically to live gold market conditions.", ai: "AI Engine", iconAi: "fa-robot" },
    { icon: "fa-coins", title: "Gold-Only Specialist", desc: "Built and back-tested exclusively for XAUUSD — no distractions, just gold mastery." },
    { icon: "fa-crown", title: "Lifetime License", desc: "One-time payment starting $99 — no expiry, no renewal. Unlimited demo accounts forever." },
    { icon: "fa-shield-halved", title: "Built-in SL & TP", desc: "Every trade is protected with built-in Stop Loss and Take Profit logic. News & spread filters included." },
    { icon: "fa-sliders", title: "7+ Preset Risk Modes", desc: "Choose from 7+ ready-to-use .set files — from conservative to aggressive — for every trading session." },
    { icon: "fa-building-columns", title: "Any Broker, Any Account", desc: "Works on ECN, STP, Standard, Cent, Pro, Raw Spread, Islamic (Swap-free) and prop firm MT5 accounts." },
    { icon: "fa-plug-circle-bolt", title: "Fully Automatic", desc: "Plug & Play. No need to monitor charts — Velox EA opens, manages and closes trades on its own." },
    { icon: "fa-chart-line", title: "Proven Performance", desc: "90% to 95% historical win rate. Live tested across multiple market cycles & volatile gold moves." },
    { icon: "fa-desktop", title: "Low System Requirement", desc: "Runs on basic Windows 10/11 PC. VPS optional. 64-bit compatible for MetaTrader 5." },
    { icon: "fa-lock", title: "Encrypted & Safe", desc: "Velox EA does NOT send your account data to any external server. 100% private and secure." },
    { icon: "fa-arrows-rotate", title: "Free Lifetime Updates", desc: "Every future improvement and set-file update is delivered free of cost via email." },
    { icon: "fa-key", title: "Secure Individual License Keys", desc: "Each client gets a secure & safe individual license key — protected and unique to you." },
  ];

  const whyUs = [
    { num: "01", icon: "fa-certificate", title: "100% Genuine Product", desc: "Original developer files from Velox Gold Scalper Admin. No cracked or pirated EA — you get the authentic Velox Gold Scalper EA V11.1 (Latest Version)." },
    { num: "02", icon: "fa-infinity", title: "Lifetime + Unlimited Demo", desc: "Pay once. Trade forever. All packages include lifetime license and unlimited demo accounts for testing." },
    { num: "03", icon: "fa-bitcoin", isBrand: true, title: "Crypto-Verified Payment", desc: "Pay safely with USDT (TRC20), BEP20, Bitcoin (BTC) or Ethereum (ERC20). Instant confirmation on-chain." },
    { num: "04", icon: "fa-truck-fast", title: "Instant Delivery within 1 Hour", desc: "All 12+ files & license keys are delivered to your email within 1 hour of payment confirmation." },
    { num: "05", icon: "fa-chart-line", title: "90% to 95% Win Rate", desc: "Backed by multi-year, multi-cycle testing across bull, bear, and range gold markets." },
    { num: "06", icon: "fa-microchip", title: "MT5-Only — Fully Optimized", desc: "Velox EA V11.1 is engineered exclusively for MetaTrader 5 — faster execution, cleaner code, better precision." }
  ];

  const specs = [
    { icon: "fa-desktop", label: "Platform", val: "MT5 Only" },
    { icon: "fa-code-branch", label: "Version", val: "V11.1 (Latest)" },
    { icon: "fa-coins", label: "Pair", val: "XAUUSD (Gold)" },
    { icon: "fa-clock", label: "Timeframe", val: "M15 (Default)" },
    { icon: "fa-brain", label: "Strategy", val: "AI HFT Scalping" },
    { icon: "fa-wallet", label: "Min Balance", val: "$50 – $70" },
    { icon: "fa-percent", label: "Win Rate", val: "90% to 95%" },
    { icon: "fa-crown", label: "License", val: "Lifetime" },
    { icon: "fa-truck-fast", label: "Delivery", val: "Instant · 1 Hour" },
    { icon: "fa-sliders", label: "Preset Modes", val: "7+ Presets" },
    { icon: "fa-building-columns", label: "Broker", val: "Any Broker (MT5)" },
    { icon: "fa-bitcoin", isBrand: true, label: "Payment", val: "USDT / BTC / ETH" },
    { icon: "fa-headset", label: "Support", val: "Lifetime" },
    { icon: "fa-gauge-high", label: "Dashboard", val: "Live V11.1" }
  ];

  return (
    <>
      {/* PRODUCT FEATURES */}
      <section className="py-24 bg-[#08080c] relative" id="features">
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Product Features
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              Why Velox Gold Scalper EA <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">V11.1</span> Is Different
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Every feature of Velox Gold Scalper EA V11.1 — developed by <b className="text-cyan-400">Velox Gold Scalper Admin</b> — is engineered for serious gold traders who demand performance, reliability, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className={`bg-[#0a0a0f]/80 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 group ${f.ai ? 'border-fuchsia-500/30 shadow-[0_5px_20px_rgba(255,0,234,0.1)] hover:border-fuchsia-500/80 hover:shadow-[0_10px_30px_rgba(255,0,234,0.3)]' : 'border-gray-800 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(0,243,255,0.2)]'}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 ${f.ai ? 'bg-gradient-to-br from-fuchsia-500 to-purple-700 text-white shadow-[0_0_15px_rgba(255,0,234,0.5)]' : 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500/20'}`}>
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-gray-100 mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{f.desc}</p>
                {f.ai && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-[10px] font-black tracking-widest uppercase shadow-[0_0_10px_rgba(255,0,100,0.5)]">
                    <i className={`fa-solid ${f.iconAi}`}></i> {f.ai}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Why Us
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              Why Choose Velox Gold Scalper EA <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">V11.1</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              <b className="text-gray-200">Velox Gold Scalper Admin</b> is a genuine, independent EA developer team — not a reseller. Every file you receive is original, verified, and built in-house for MT5.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className="bg-[#0a0a0f] rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(0,243,255,0.2)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute top-4 right-6 font-orbitron font-black text-5xl text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-transparent opacity-50 group-hover:from-cyan-900/50 group-hover:to-transparent transition-colors">
                  {w.num}
                </span>
                <i className={`${w.isBrand ? 'fa-brands' : 'fa-solid'} ${w.icon} text-4xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] mb-6`}></i>
                <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-3 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#050505] border-y border-cyan-500/20" id="specs">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Specifications
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              Quick Product Specs
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              All the key operational details of Velox Gold Scalper EA <b className="text-gray-200">V11.1</b> — by Velox Gold Scalper Admin — in one quick view.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {specs.map((s, i) => (
              <div key={i} className="bg-[#050505] rounded-xl p-5 text-center border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_5px_15px_rgba(255,215,0,0.15)] transition-all">
                <i className={`${s.isBrand ? 'fa-brands' : 'fa-solid'} ${s.icon} text-2xl text-yellow-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] mb-3 block`}></i>
                <small className="block text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">{s.label}</small>
                <b className="font-orbitron text-gray-200 text-sm">{s.val}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
