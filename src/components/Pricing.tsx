import React, { useState } from 'react';

export default function Pricing() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch (e) {
      console.error('Failed to copy');
    }
  };

  const steps = [
    { num: "1", title: "Read all FAQs", desc: "Read all FAQs carefully and make sure all your doubts are fully cleared before paying." },
    { num: "2", title: "Send $99 / $149 / $999 USDT", desc: "Choose your package (A, B or C) and send the exact amount to any wallet shown below." },
    { num: "3", title: "Email Us the Proof", desc: "Email a screenshot of the transaction along with your MT5 ID, Server Name, Email & Country." },
    { num: "4", title: "We Verify", desc: "We verify the payment on-chain and generate your unique & secure license key." },
    { num: "5", title: "Instant Delivery — Within 1 Hour", desc: "Receive all 12+ files, license keys, setup PDF & installation video in your email within 1 hour." }
  ];

  return (
    <>
      {/* PRICING */}
      <section id="pricing" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Pricing
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">Lifetime Package</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              No subscriptions. No surprises. Three one-time options — all with <b className="text-gray-200">Lifetime License</b> & <b className="text-gray-200">Instant Delivery of EA within 1 Hour of Payment</b>. <span className="text-red-500 font-bold drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">50% OFF — Limited Days Only.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Package A */}
            <div className="bg-[#0a0a0f] rounded-3xl p-8 border border-gray-800 flex flex-col h-full relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,243,255,0.1)] hover:border-cyan-500/30">
              <span className="text-4xl mb-4 block drop-shadow-md">🥉</span>
              <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold">Package A</h3>
              <div className="font-orbitron text-2xl text-cyan-400 font-black mb-3">STARTER</div>
              <p className="text-gray-400 text-sm mb-6">Velox Gold Scalper EA V11.1 — Package A · MT5 Robot · 1 Real Account & Unlimited Demo Accounts</p>
              
              <div className="py-6 border-y border-dashed border-gray-800 text-center mb-6">
                <div className="line-through text-gray-500 font-bold text-sm">Regular Price: $199</div>
                <div className="font-orbitron text-5xl font-black text-gray-100 my-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  $99 <span className="text-xl text-gray-500">USDT</span>
                </div>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(0,255,170,0.4)]">
                  50% OFF · Few Days Only
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'MT5 Robot — 1 Real Account & Unlimited Demo Accounts',
                  'Lifetime License and Support',
                  'Original Robot file (Latest Version — V11.1)',
                  '7+ Preset setting files for different Risk modes & different Trading Sessions',
                  'Installation Setup Guide — PDF and Video',
                  'Detailed Instructions of Use — PDF',
                  'Free Lifetime Updates',
                  'Total 12+ files delivered to your Email',
                  'Explanation & Use of all Input Parameters — PDF',
                  'DO\'s and DON\'Ts Acts',
                  'Secure & Safe Individual License Keys'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50 last:border-0">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i> <span>{item}</span>
                  </li>
                ))}
                <li className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50">
                  <i className="fa-solid fa-truck-fast text-green-400 mt-1"></i> <span><b className="text-white">Instant Delivery of EA within 1 Hour of Payment</b></span>
                </li>
                {[
                  { icon: 'fa-brain', text: 'Advanced AI Adaptation System' },
                  { icon: 'fa-shuffle', text: 'AI Adaptive Engine (Volatility · Trend · Range)' },
                  { icon: 'fa-microchip', text: 'AI-Assisted Trade Filtering' },
                  { icon: 'fa-gauge-high', text: 'Live Trading Dashboard (V11.1)' }
                ].map((ai, i) => (
                  <li key={i} className="flex gap-3 text-sm items-start p-2 rounded-lg bg-gradient-to-r from-yellow-900/20 to-transparent">
                    <i className={`fa-solid ${ai.icon} text-red-500 mt-1 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]`}></i>
                    <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#B026FF] to-[#FF0055] font-black">{ai.text}</b>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] transition-all">
                  <i className="fa-brands fa-telegram"></i> Instant Buy — Contact Admin
                </a>
                <a href="#how" className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all">
                  Get Package A — $99
                </a>
              </div>
            </div>

            {/* Package B */}
            <div className="bg-[#0a0a0f] rounded-3xl p-8 border-2 border-yellow-500 shadow-[0_15px_40px_rgba(255,215,0,0.15)] flex flex-col h-full relative transition-all duration-300 transform lg:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,215,0,0.25)] z-10">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_10px_20px_rgba(255,0,100,0.4)] whitespace-nowrap">
                🔥 MOST POPULAR
              </span>
              <span className="text-4xl mb-4 block drop-shadow-md">🥈</span>
              <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold">Package B</h3>
              <div className="font-orbitron text-3xl text-yellow-500 font-black mb-3 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">PRO</div>
              <p className="text-gray-400 text-sm mb-6">Velox Gold Scalper EA V11.1 — Package B · MT5 Robot · Unlimited Real Accounts & Unlimited Demo Accounts</p>
              
              <div className="py-6 border-y border-dashed border-gray-800 text-center mb-6">
                <div className="line-through text-gray-500 font-bold text-sm">Regular Price: $299</div>
                <div className="font-orbitron text-5xl font-black text-gray-100 my-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  $149 <span className="text-xl text-gray-500">USDT</span>
                </div>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(0,255,170,0.4)]">
                  50% OFF · Few Days Only
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'MT5 Robot — Unlimited Real & Unlimited Demo Accounts',
                  'Lifetime License and Support',
                  'Original Robot file (Latest Version — V11.1)',
                  '7+ Preset setting files for different Risk modes & different Trading Sessions',
                  'Installation Setup Guide — PDF and Video',
                  'Detailed Instructions of Use — PDF',
                  'Free Lifetime Updates',
                  'Total 12+ files delivered to your Email',
                  'Explanation & Use of all Input Parameters — PDF',
                  'DO\'s and DON\'Ts Acts',
                  'Secure & Safe Individual License Keys'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50 last:border-0">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i> <span>{item}</span>
                  </li>
                ))}
                <li className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50">
                  <i className="fa-solid fa-truck-fast text-green-400 mt-1"></i> <span><b className="text-white">Instant Delivery of EA within 1 Hour of Payment</b></span>
                </li>
                {[
                  { icon: 'fa-brain', text: 'Advanced AI Adaptation System' },
                  { icon: 'fa-shuffle', text: 'AI Adaptive Engine (Volatility · Trend · Range)' },
                  { icon: 'fa-microchip', text: 'Dynamic AI Mode (DYN) — Adaptive Entries' },
                  { icon: 'fa-gauge-high', text: 'Live Trading Dashboard (V11.1)' },
                  { icon: 'fa-shield-heart', text: 'Pro Drawdown Protection (AI Risk Engine)' },
                  { icon: 'fa-crosshairs', text: 'Smart Position Control (AI Coordinated)' },
                  { icon: 'fa-bolt', text: 'All Scalping Modes Unlocked — Low · Medium · Fast' }
                ].map((ai, i) => (
                  <li key={i} className="flex gap-3 text-sm items-start p-2 rounded-lg bg-gradient-to-r from-yellow-900/20 to-transparent">
                    <i className={`fa-solid ${ai.icon} text-red-500 mt-1 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]`}></i>
                    <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#B026FF] to-[#FF0055] font-black">{ai.text}</b>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] transition-all">
                  <i className="fa-brands fa-telegram"></i> Instant Buy — Contact Admin
                </a>
                <a href="#how" className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all">
                  Get Package B — $149
                </a>
              </div>
            </div>

            {/* Package C */}
            <div className="bg-[#0a0a0f] rounded-3xl p-8 border border-gray-800 flex flex-col h-full relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,0,234,0.1)] hover:border-fuchsia-500/30">
              <span className="text-4xl mb-4 block drop-shadow-md">🥇</span>
              <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold">Package C</h3>
              <div className="font-orbitron text-2xl text-fuchsia-400 font-black mb-3">ULTIMATE</div>
              <p className="text-gray-400 text-sm mb-6">Velox Gold Scalper EA V11.1 — Package C · Everything in B + Full .mq5 Source Code with Secured Licensing System</p>
              
              <div className="py-6 border-y border-dashed border-gray-800 text-center mb-6">
                <div className="line-through text-gray-500 font-bold text-sm">Regular Price: $1999</div>
                <div className="font-orbitron text-5xl font-black text-gray-100 my-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  $999 <span className="text-xl text-gray-500">USDT</span>
                </div>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(0,255,170,0.4)]">
                  50% OFF · Few Days Only
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'MT5 Robot — Unlimited Real & Unlimited Demo Accounts',
                  'Lifetime License and Support',
                  'Original Robot file (Latest Version — V11.1)',
                  '7+ Preset setting files for different Risk modes & different Trading Sessions',
                  'Installation Setup Guide — PDF and Video',
                  'Detailed Instructions of Use — PDF',
                  'Free Lifetime Updates',
                  'Total 12+ files delivered to your Email',
                  'Explanation & Use of all Input Parameters — PDF',
                  'DO\'s and DON\'Ts Acts',
                  'Secure & Safe Individual License Keys'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50 last:border-0">
                    <i className="fa-solid fa-check text-green-400 mt-1"></i> <span>{item}</span>
                  </li>
                ))}
                <li className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50">
                  <i className="fa-solid fa-truck-fast text-green-400 mt-1"></i> <span><b className="text-white">Instant Delivery of EA within 1 Hour of Payment</b></span>
                </li>
                <li className="flex gap-3 text-gray-300 text-sm items-start pb-3 border-b border-dashed border-gray-800/50">
                  <i className="fa-solid fa-file-code text-fuchsia-400 mt-1 drop-shadow-[0_0_5px_rgba(255,0,234,0.5)]"></i> <span><b className="text-white">SPECIAL: .mq5 files — Full Source Code with Secured Licensing System</b></span>
                </li>
                {[
                  { icon: 'fa-brain', text: 'Advanced AI Adaptation System' },
                  { icon: 'fa-shuffle', text: 'AI Adaptive Engine (Volatility · Trend · Range)' },
                  { icon: 'fa-microchip', text: 'Dynamic AI Mode (DYN) — Adaptive Entries' },
                  { icon: 'fa-gauge-high', text: 'Live Trading Dashboard (V11.1)' },
                  { icon: 'fa-shield-heart', text: 'Pro Drawdown Protection (AI Risk Engine)' },
                  { icon: 'fa-crosshairs', text: 'Smart Position Control (AI Coordinated)' },
                  { icon: 'fa-code-branch', text: 'Full AI Algorithm Source — Editable & Rebrandable' },
                  { icon: 'fa-flask-vial', text: 'Adaptive Optimization & Intelligent Processing' }
                ].map((ai, i) => (
                  <li key={i} className="flex gap-3 text-sm items-start p-2 rounded-lg bg-gradient-to-r from-yellow-900/20 to-transparent">
                    <i className={`fa-solid ${ai.icon} text-red-500 mt-1 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]`}></i>
                    <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#B026FF] to-[#FF0055] font-black">{ai.text}</b>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] transition-all">
                  <i className="fa-brands fa-telegram"></i> Instant Buy — Contact Admin
                </a>
                <a href="#how" className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all">
                  Get Package C — $999
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW TO PURCHASE */}
      <section className="py-24 bg-[#08080c] relative" id="how">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              How to Purchase
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              Buy in <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">5 Simple Steps</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Pay via crypto (USDT / BTC / ETH) and receive Velox Gold Scalper EA V11.1 — with all files, license keys and setup guide — via <b className="text-gray-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Instant Delivery of EA within 1 Hour of Payment</b>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-[#050505] rounded-2xl p-6 border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_10px_30px_rgba(255,215,0,0.15)] transition-all text-center group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 mx-auto flex items-center justify-center text-black font-orbitron font-black text-xl mb-5 shadow-[0_5px_15px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
                  {s.num}
                </div>
                <h4 className="text-cyan-400 font-bold mb-3 drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase tracking-wider shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all transform hover:scale-105">
              <i className="fa-brands fa-telegram text-xl"></i> Instant Buy — Contact Admin on Telegram
            </a>
          </div>

          {/* Wallets */}
          <div className="mt-24">
            <div className="text-center mb-10">
              <h3 className="font-orbitron font-bold text-2xl text-gray-100 mb-3"><i className="fa-solid fa-wallet text-yellow-500 mr-2"></i> Send Payment — Choose Any Wallet</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We accept crypto only. Use any one of the wallets below. <b className="text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">Double-verify the address character-by-character before sending.</b>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* TRC20 */}
              <div className="bg-[#050505] rounded-2xl p-6 border-2 border-gray-800 hover:border-red-500/50 hover:shadow-[0_10px_30px_rgba(255,0,0,0.15)] transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-xl shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-bold">USDT — TRC20 (Tron Network)</h4>
                    <small className="text-gray-500 font-bold tracking-widest">$99 / $149 / $999 USDT</small>
                  </div>
                </div>
                <div className="bg-[#0a0a0f] border border-dashed border-gray-700 rounded-xl p-3 font-mono text-gray-300 text-sm break-all mb-4">
                  TTzjEY4JwmMxQ3rc6f26geXth47bHkJze2
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <button onClick={() => copyToClipboard('TTzjEY4JwmMxQ3rc6f26geXth47bHkJze2', 'addr1')} className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${copiedId === 'addr1' ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(0,255,0,0.5)]' : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] hover:-translate-y-0.5'}`}>
                    {copiedId === 'addr1' ? <><i className="fa-solid fa-check"></i> Copied!</> : <><i className="fa-solid fa-copy"></i> Copy Address</>}
                  </button>
                </div>
                <div className="text-xs text-red-500 font-bold flex items-start gap-2">
                  <i className="fa-solid fa-triangle-exclamation mt-0.5"></i> <span>Send only USDT on the TRC20 network. Sending on any other network will result in permanent loss.</span>
                </div>
              </div>

              {/* BEP20 */}
              <div className="bg-[#050505] rounded-2xl p-6 border-2 border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_10px_30px_rgba(255,215,0,0.15)] transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black text-xl shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                    <i className="fa-brands fa-bitcoin"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-bold">USDT — BEP20 (BNB Smart Chain)</h4>
                    <small className="text-gray-500 font-bold tracking-widest">$99 / $149 / $999 USDT</small>
                  </div>
                </div>
                <div className="bg-[#0a0a0f] border border-dashed border-gray-700 rounded-xl p-3 font-mono text-gray-300 text-sm break-all mb-4">
                  0xF7992B54D4432E4Dc7156C9e39a9aEF34d52aA85
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <button onClick={() => copyToClipboard('0xF7992B54D4432E4Dc7156C9e39a9aEF34d52aA85', 'addr2')} className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${copiedId === 'addr2' ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(0,255,0,0.5)]' : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] hover:-translate-y-0.5'}`}>
                    {copiedId === 'addr2' ? <><i className="fa-solid fa-check"></i> Copied!</> : <><i className="fa-solid fa-copy"></i> Copy Address</>}
                  </button>
                </div>
                <div className="text-xs text-red-500 font-bold flex items-start gap-2">
                  <i className="fa-solid fa-triangle-exclamation mt-0.5"></i> <span>Send only USDT on the BEP20 (BNB Smart Chain) network.</span>
                </div>
              </div>

              {/* BTC */}
              <div className="bg-[#050505] rounded-2xl p-6 border-2 border-gray-800 hover:border-orange-500/50 hover:shadow-[0_10px_30px_rgba(255,165,0,0.15)] transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                    <i className="fa-brands fa-bitcoin"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-bold">Bitcoin (BTC) — Native Network</h4>
                    <small className="text-gray-500 font-bold tracking-widest">Equivalent of $99 / $149 / $999</small>
                  </div>
                </div>
                <div className="bg-[#0a0a0f] border border-dashed border-gray-700 rounded-xl p-3 font-mono text-gray-300 text-sm break-all mb-4">
                  1KzB6p3maCWjizxuYtmSgTf8jopojV8WWr
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <button onClick={() => copyToClipboard('1KzB6p3maCWjizxuYtmSgTf8jopojV8WWr', 'addr3')} className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${copiedId === 'addr3' ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(0,255,0,0.5)]' : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] hover:-translate-y-0.5'}`}>
                    {copiedId === 'addr3' ? <><i className="fa-solid fa-check"></i> Copied!</> : <><i className="fa-solid fa-copy"></i> Copy Address</>}
                  </button>
                </div>
                <div className="text-xs text-red-500 font-bold flex items-start gap-2">
                  <i className="fa-solid fa-triangle-exclamation mt-0.5"></i> <span>Send only BTC on the Bitcoin (BTC) network. Any other network = permanent loss.</span>
                </div>
              </div>

              {/* ETH */}
              <div className="bg-[#050505] rounded-2xl p-6 border-2 border-gray-800 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(188,19,254,0.15)] transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-[0_0_15px_rgba(188,19,254,0.5)]">
                    <i className="fa-brands fa-ethereum"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-bold">Ethereum (ERC20)</h4>
                    <small className="text-gray-500 font-bold tracking-widest">Equivalent of $99 / $149 / $999</small>
                  </div>
                </div>
                <div className="bg-[#0a0a0f] border border-dashed border-gray-700 rounded-xl p-3 font-mono text-gray-300 text-sm break-all mb-4">
                  0xF7992B54D4432E4Dc7156C9e39a9aEF34d52aA85
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <button onClick={() => copyToClipboard('0xF7992B54D4432E4Dc7156C9e39a9aEF34d52aA85', 'addr4')} className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${copiedId === 'addr4' ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(0,255,0,0.5)]' : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] hover:-translate-y-0.5'}`}>
                    {copiedId === 'addr4' ? <><i className="fa-solid fa-check"></i> Copied!</> : <><i className="fa-solid fa-copy"></i> Copy Address</>}
                  </button>
                </div>
                <div className="text-xs text-red-500 font-bold flex items-start gap-2">
                  <i className="fa-solid fa-triangle-exclamation mt-0.5"></i> <span>Send only ETH/ERC20 tokens on the Ethereum (ERC20) network. The address begins with zero (0x…) — not the letter O.</span>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-gray-400">
              If you want to pay via another payment method — Please go to the <a href="#contact" className="text-cyan-400 font-bold hover:underline drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">Contact section</a> or message the admin on Telegram directly.
            </p>

            <div className="mt-12 bg-gradient-to-br from-[#0a0a0f] to-[#050505] rounded-[22px] p-8 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,243,255,0.1)]">
              <h4 className="text-cyan-400 text-xl font-bold mb-4 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
                <i className="fa-solid fa-envelope-circle-check"></i> After Successful Payment — Email Us These 5 Details
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 font-medium mb-6 ml-2">
                <li>MT5 ID (at least one Real Account number)</li>
                <li>Server Name</li>
                <li>Screenshot of the transaction</li>
                <li>Your Email</li>
                <li>Your Country</li>
              </ol>
              <div className="bg-[#050505] border border-gray-800 rounded-xl p-4 font-mono text-cyan-400 font-bold shadow-[inset_0_0_10px_rgba(0,243,255,0.05)]">
                📧 Send the above details to: <span className="text-white">Veloxgoldscalperea@gmail.com</span>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase tracking-wider shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all transform hover:scale-105">
                <i className="fa-brands fa-telegram text-xl"></i> Instant Buy — Contact Admin on Telegram
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
