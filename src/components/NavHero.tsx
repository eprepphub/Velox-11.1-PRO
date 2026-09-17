import React, { useState, useEffect } from 'react';

export default function NavHero() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-cyan-500/50 shadow-[0_0_20px_rgba(0,243,255,0.3)]' : 'bg-transparent'}`} id="nav">
        <div className="flex items-center justify-between px-5 py-4 max-w-7xl mx-auto">
          <a href="#top" className="flex items-center gap-3 font-orbitron font-black text-xl text-cyan-400 tracking-wide drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-600 flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,0,234,0.6)]"><i className="fa-solid fa-chart-line"></i></span>
            <span>VELOX <span className="text-fuchsia-500 drop-shadow-[0_0_8px_rgba(255,0,234,0.6)]">V11.1</span></span>
          </a>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-500/40 text-green-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,170,0.2)] ml-auto mr-4">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            Market Open
          </div>
          <div className={`fixed lg:static top-[70px] left-0 w-full lg:w-auto bg-[#050505] lg:bg-transparent flex flex-col lg:flex-row items-center gap-2 lg:gap-4 p-5 lg:p-0 transition-transform duration-300 ${navOpen ? 'translate-y-0 border-b border-cyan-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : '-translate-y-[150%] lg:translate-y-0'} -z-10 lg:z-auto`}>
            {['Features', 'V11.1 New', 'Why Us', 'Specs', 'Pricing', 'How to Buy', 'Reviews', 'FAQs', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '')}`} onClick={() => setNavOpen(false)} className="w-full lg:w-auto text-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-900/20 rounded-lg transition-colors font-medium">
                {link}
              </a>
            ))}
            <a href="http://t.me/goldscalperrobotadmin?text=Hi%20Admin%20Sir%20%2C%20I%20am%20interested%20in%20buying%20Velox%20Gold%20Scalper%20V11.1.%20Can%20I%20know%20more%20about%20this%20MT5%20Expert%20Advisor%20(EA%20bot)%20%3F" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto mt-2 lg:mt-0 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.6)] hover:shadow-[0_0_25px_rgba(0,243,255,0.8)] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <i className="fa-brands fa-telegram"></i> Instant Buy
            </a>
          </div>
          <button className="lg:hidden text-cyan-400 text-2xl p-2 bg-cyan-900/20 rounded-lg" onClick={() => setNavOpen(!navOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-[#050505]" id="top">
        {/* Cyberpunk background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              <i className="fa-solid fa-robot mr-2"></i> #1 AI Gold Scalping EA — Latest Version V11.1
            </span>
            <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_15px_rgba(255,0,234,0.5)]">Velox Gold Scalper EA V11.1</span><br />
              <span className="text-xl text-gray-400 font-bold tracking-wide mt-2 block drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">AI-Powered · Ultra-Fast · Adaptive HFT Robot for MT5</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl leading-relaxed">
              Developed by <b className="text-cyan-400 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">Velox Gold Scalper Admin</b> — Verified In-House Team. The all-new <b className="text-white">Velox Gold Scalper V11.1</b> now features a <b className="text-fuchsia-400">Dynamic AI Mode (DYN)</b>, <b className="text-cyan-400">AI Adaptive Engine</b>, <b className="text-purple-400">Live Trading Dashboard</b>, <b className="text-red-400">Pro Drawdown Protection</b> and an <b className="text-green-400">Advanced AI Adaptation System</b> — engineered for serious traders who demand maximum performance on Gold (XAUUSD).
            </p>

            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-md border border-fuchsia-500/50 shadow-[0_0_20px_rgba(255,0,234,0.3)] mb-6 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-black text-sm uppercase shadow-[0_0_10px_rgba(255,0,100,0.6)]">50% OFF</span>
              <span className="line-through text-gray-500 font-bold text-lg">$199</span>
              <span className="text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">$99 USDT</span>
              <small className="text-gray-400 font-semibold ml-2">Starting · Package A · Few Days Only</small>
            </div>

            <div className="flex gap-4 flex-wrap mb-8">
              <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] transition-all transform hover:scale-105 flex items-center gap-2">
                <i className="fa-solid fa-bolt"></i> View Pricing
              </a>
              <a href="http://t.me/goldscalperrobotadmin?text=Hi%20Admin%20Sir%20%2C%20I%20am%20interested%20in%20buying%20Velox%20Gold%20Scalper%20V11.1.%20Can%20I%20know%20more%20about%20this%20MT5%20Expert%20Advisor%20(EA%20bot)%20%3F" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black uppercase tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.5)] hover:shadow-[0_0_25px_rgba(0,243,255,0.8)] transition-all transform hover:scale-105 flex items-center gap-2">
                <i className="fa-brands fa-telegram"></i> Instant Buy — Contact Admin
              </a>
              <a href="#faqs" className="px-6 py-3 rounded-xl bg-[#0a0a0f] border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-wider hover:bg-cyan-500/20 shadow-[inset_0_0_10px_rgba(0,243,255,0.2)] transition-all flex items-center gap-2">
                <i className="fa-solid fa-circle-question"></i> Read 100+ FAQs
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mb-8">
              {[
                { icon: 'fa-infinity', text: 'One-time Payment' },
                { icon: 'fa-crown', text: 'Lifetime License' },
                { icon: 'fa-microchip', text: 'MT5 Only (Optimized)' },
                { icon: 'fa-chart-simple', text: '90% to 95% Win Rate' },
                { icon: 'fa-clock', text: 'Instant Delivery of EA within 1 Hour of Payment' },
                { icon: 'fa-sliders', text: '7+ Preset Risk Modes' }
              ].map((badge, i) => (
                <span key={i} className="px-3 py-2 rounded-lg bg-[#0a0a0f]/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-colors text-gray-300 text-xs font-semibold flex items-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <i className={`fa-solid ${badge.icon} text-fuchsia-500 drop-shadow-[0_0_5px_rgba(255,0,234,0.8)] text-base`}></i> {badge.text}
                </span>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/50 flex items-center gap-4 flex-wrap shadow-[0_0_20px_rgba(255,0,0,0.2)]">
              <i className="fa-solid fa-truck-fast text-4xl text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse"></i>
              <div>
                <b className="text-red-400 text-lg block drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">⚡ Instant Delivery of EA within 1 Hour of Payment</b>
                <small className="text-gray-300 font-medium text-sm">All 12+ files + license keys delivered to your email — guaranteed within 60 minutes of payment confirmation.</small>
              </div>
            </div>
          </div>

          {/* Dashboard Mock */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-6 border border-cyan-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600/30 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-600/40 transition-colors duration-700"></div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/40 border border-green-500/50 text-green-400 font-bold text-[10px] uppercase mb-4 shadow-[0_0_10px_rgba(0,255,170,0.3)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span> LIVE — Trading Gold Right Now
            </span>
            <h4 className="text-lg font-orbitron font-bold text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
              <i className="fa-solid fa-gauge-high mr-2"></i> Velox PRO V11.1 · Live Dashboard
            </h4>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <div className="p-3 rounded-xl bg-[#050505]/80 border border-gray-800 shadow-[inset_0_0_10px_rgba(255,215,0,0.05)]">
                <small className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">AI Mode</small>
                <b className="font-orbitron text-yellow-500 text-lg drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">DYN Active</b>
              </div>
              <div className="p-3 rounded-xl bg-[#050505]/80 border border-gray-800 shadow-[inset_0_0_10px_rgba(0,255,170,0.05)]">
                <small className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Win Rate</small>
                <b className="font-orbitron text-green-400 text-lg drop-shadow-[0_0_5px_rgba(0,255,170,0.5)]">93.7%</b>
              </div>
              <div className="p-3 rounded-xl bg-[#050505]/80 border border-gray-800 shadow-[inset_0_0_10px_rgba(0,243,255,0.05)]">
                <small className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Margin Level</small>
                <b className="font-orbitron text-cyan-400 text-lg drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">1,842%</b>
              </div>
              <div className="p-3 rounded-xl bg-[#050505]/80 border border-gray-800 shadow-[inset_0_0_10px_rgba(0,255,170,0.05)]">
                <small className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Floating P/L</small>
                <b className="font-orbitron text-green-400 text-lg drop-shadow-[0_0_5px_rgba(0,255,170,0.5)]">+$247.85</b>
              </div>
              <div className="p-3 rounded-xl bg-[#050505]/80 border border-gray-800 shadow-[inset_0_0_10px_rgba(255,215,0,0.05)]">
                <small className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Positions</small>
                <b className="font-orbitron text-yellow-500 text-lg drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">3 / 12</b>
              </div>
              <div className="p-3 rounded-xl bg-[#050505]/80 border border-gray-800 shadow-[inset_0_0_10px_rgba(255,0,0,0.05)]">
                <small className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Drawdown</small>
                <b className="font-orbitron text-red-500 text-lg drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">2.1%</b>
              </div>
            </div>
            <div className="mt-4 h-20 rounded-xl bg-gradient-to-b from-green-900/20 to-transparent relative overflow-hidden border border-green-500/20">
              <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_5px_rgba(0,255,170,0.8)]">
                <polyline points="0,60 20,55 40,58 60,45 80,48 100,35 120,40 140,25 160,30 180,18 200,22 220,12 240,16 260,8 280,10 300,4" fill="none" stroke="#00ffaa" strokeWidth="2.5" />
                <polyline points="0,60 20,55 40,58 60,45 80,48 100,35 120,40 140,25 160,30 180,18 200,22 220,12 240,16 260,8 280,10 300,4 300,80 0,80" fill="url(#g1)" opacity=".2" />
                <defs><linearGradient id="g1" x2="0" y2="1"><stop offset="0" stopColor="#00ffaa" /><stop offset="1" stopColor="#00ffaa" stopOpacity="0" /></linearGradient></defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-gradient-to-r from-[#050505] via-[#0a0a1a] to-[#050505] border-y border-cyan-500/20 py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'fa-shield-halved', label: 'Genuine Developer', val: 'Velox Admin — In-House' },
              { icon: 'fa-brain', label: 'AI Engine', val: 'DYN + Adaptive V11.1' },
              { icon: 'fa-globe', label: 'Users Worldwide', val: 'Multi-Continent Traders' },
              { icon: 'fa-truck-fast', label: 'Delivery', val: 'Instant · Within 1 Hour' }
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <i className={`fa-solid ${t.icon} text-3xl text-fuchsia-500 drop-shadow-[0_0_8px_rgba(255,0,234,0.6)]`}></i>
                <div className="text-left">
                  <small className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest">{t.label}</small>
                  <b className="font-orbitron text-gray-200 text-sm tracking-wide">{t.val}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
