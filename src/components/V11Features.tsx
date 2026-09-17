import React from 'react';

export default function V11Features() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-[#0a0a0f] to-[#050505] relative overflow-hidden border-b border-fuchsia-500/20" id="v11new">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-orbitron font-black text-[20vw] text-cyan-500/5 select-none pointer-events-none tracking-tighter">V11.1</div>
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-black tracking-widest text-sm mb-6 shadow-[0_0_20px_rgba(255,0,100,0.5)] animate-bounce">
            <i className="fa-solid fa-rocket mr-2"></i> NEW · LATEST VERSION V11.1
          </span>
          <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_15px_rgba(255,0,234,0.5)]">
            What's New in Velox Gold Scalper V11.1
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The V11.1 upgrade is a complete leap forward from V5.1 — powered by a brand-new <b className="text-cyan-400 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">Advanced AI Adaptation System</b>, a <b className="text-fuchsia-400 drop-shadow-[0_0_5px_rgba(255,0,234,0.5)]">Modern Live Trading Dashboard</b>, and an <b className="text-yellow-400 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">Enhanced Risk Management Engine</b>. Every feature below is <b className="text-white">new</b> or <b className="text-white">massively improved</b> in V11.1.
          </p>
        </div>
      </section>

      <section id="v11features" className="py-20 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-5 space-y-12">
          
          {/* Category 1 */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border-l-4 border-yellow-500 border-y border-r border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center text-black text-2xl shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                <i className="fa-solid fa-box-open"></i>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-gray-100">What You'll Get with Velox Gold Scalper V11.1</h3>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">V11.1 UPGRADE</span>
            </div>
            <p className="text-gray-400 mb-6">Everything you need to start trading gold on MT5 in under a minute — no complicated settings, no guesswork. Just install, follow the guide, and start trading.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: 'fa-robot', text: 'Velox Gold Scalper V11.1 EA' },
                { icon: 'fa-stopwatch-20', text: '1-Minute Installation' },
                { icon: 'fa-video', text: 'Step-by-Step Setup Video' },
                { icon: 'fa-book-open', text: 'Easy Installation Guide' },
                { icon: 'fa-play', text: 'Ready to Trade' },
                { icon: 'fa-sliders', text: 'No complicated settings' },
                { icon: 'fa-check-double', text: 'Just install, follow the guide, and start trading' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#050505] border border-gray-800 text-gray-300 font-medium">
                  <i className={`fa-solid ${item.icon} text-yellow-500`}></i> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Category 2 */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border-l-4 border-blue-500 border-y border-r border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,136,255,0.2)] transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-[0_0_15px_rgba(0,136,255,0.6)]">
                <i className="fa-solid fa-crown"></i>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-gray-100">VELOX GOLD SCALPER — PRO Lifetime Features</h3>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">PRO POWER</span>
            </div>
            <p className="text-gray-400 mb-6">Built for serious traders who demand maximum performance. The complete PRO Lifetime feature set of V11.1 includes:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: 'fa-arrow-trend-up', text: 'Unlimited Profit Potential' },
                { icon: 'fa-shield-halved', text: 'Pro Drawdown Protection' },
                { icon: 'fa-brain', text: 'Advanced AI Adaptation System' },
                { icon: 'fa-key', text: '1 Real MT5 License' },
                { icon: 'fa-infinity', text: 'Unlimited Demo Accounts' },
                { icon: 'fa-bullseye', text: 'Take Profit' },
                { icon: 'fa-hand', text: 'Stop Loss' },
                { icon: 'fa-gauge-simple-high', text: 'Max Drawdown Control' },
                { icon: 'fa-user-shield', text: 'Full Account Protection' },
                { icon: 'fa-turtle', text: 'Low Scalping Mode' },
                { icon: 'fa-gauge', text: 'Medium Scalping Mode' },
                { icon: 'fa-bolt', text: 'Fast Scalping Mode' },
                { icon: 'fa-microchip', text: 'A more advanced AI trading system' },
                { icon: 'fa-shield-heart', text: 'Stronger drawdown protection' },
                { icon: 'fa-wrench', text: 'Complete Customization — All Scalping Modes Unlocked' },
                { icon: 'fa-infinity', text: 'Lifetime access with future updates included' },
                { icon: 'fa-brain', text: 'AI-Powered Advanced Trading Engine' },
                { icon: 'fa-crosshairs', text: 'High-Precision Gold Scalping' },
                { icon: 'fa-flask', text: 'Latest Advanced Technology' },
                { icon: 'fa-shield-virus', text: 'Enhanced Risk Management System' },
                { icon: 'fa-magnifying-glass-chart', text: 'Smarter Market Analysis' },
                { icon: 'fa-forward-fast', text: 'Faster Entries' },
                { icon: 'fa-trophy', text: 'Better Performance' },
                { icon: 'fa-scale-balanced', text: 'Stable Results' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#050505] border border-gray-800 text-gray-300 font-medium">
                  <i className={`fa-solid ${item.icon} text-blue-400`}></i> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Category 3 */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border-l-4 border-green-500 border-y border-r border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(0,255,170,0.2)] transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black text-2xl shadow-[0_0_15px_rgba(0,255,170,0.6)]">
                <i className="fa-solid fa-gift"></i>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-gray-100">Every Purchase Includes</h3>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">GUARANTEED</span>
            </div>
            <p className="text-gray-400 mb-6">Every single package — A, B or C — includes all of the following, delivered to your email within 1 hour of payment confirmation.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: 'fa-file-code', text: 'MT5 Expert Advisor (EA)' },
                { icon: 'fa-key', text: 'License Activation' },
                { icon: 'fa-book', text: 'Complete Installation Guide' },
                { icon: 'fa-video', text: 'Step-by-Step Setup Video' },
                { icon: 'fa-headset', text: 'Lifetime Technical Support' },
                { icon: 'fa-arrows-rotate', text: 'Future Updates' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#050505] border border-gray-800 text-gray-300 font-medium">
                  <i className={`fa-solid ${item.icon} text-green-400`}></i> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Category 4 */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border-l-4 border-red-500 border-y border-r border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(255,0,85,0.2)] transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-white text-2xl shadow-[0_0_15px_rgba(255,0,85,0.6)]">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-gray-100">Live Trading Dashboard & Special AI Features — V11.1</h3>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">100% NEW</span>
            </div>
            <p className="text-gray-400 mb-8">The V11.1 dashboard is a completely new addition — advertising several powerful AI-related features that give traders real-time control and transparency over every aspect of live gold trading.</p>

            {/* Sub 1 */}
            <h4 className="text-lg font-bold text-red-400 mb-2"><i className="fa-solid fa-microchip"></i> New AI Technology — Dynamic AI Mode (DYN)</h4>
            <p className="text-gray-400 mb-3 text-sm">Instead of using a fixed pip distance, the EA now <b className="text-gray-200">adapts to changing market conditions</b>. Possible adjustments include:</p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: 'fa-arrows-left-right', text: 'Entry spacing' },
                { icon: 'fa-repeat', text: 'Trade frequency' },
                { icon: 'fa-th', text: 'Grid distance' },
                { icon: 'fa-clock', text: 'Position timing' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#050505] border border-gray-800 text-gray-300 text-sm"><i className={`fa-solid ${item.icon} text-red-400`}></i> {item.text}</li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs italic mb-8">Consistent with modern adaptive trading systems.</p>

            {/* Sub 2 */}
            <h4 className="text-lg font-bold text-red-400 mb-2"><i className="fa-solid fa-shuffle"></i> AI Adaptive Engine</h4>
            <p className="text-gray-400 mb-3 text-sm">The dashboard powers an <b className="text-gray-200">AI Adaptive engine</b> that automatically adjusts the strategy based on live market behavior — rather than using one fixed configuration for every session:</p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: 'fa-bolt-lightning', text: 'High volatility' },
                { icon: 'fa-water', text: 'Low volatility' },
                { icon: 'fa-arrow-trend-up', text: 'Trending markets' },
                { icon: 'fa-arrows-up-down', text: 'Ranging markets' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#050505] border border-gray-800 text-gray-300 text-sm"><i className={`fa-solid ${item.icon} text-red-400`}></i> {item.text}</li>
              ))}
            </ul>

            {/* Sub 3 */}
            <h4 className="text-lg font-bold text-red-400 mb-2"><i className="fa-solid fa-crosshairs"></i> Smart Position Control</h4>
            <p className="text-gray-400 mb-3 text-sm">The dashboard tracks positions centrally — instead of each order acting independently — for coordinated position sizing and trade management:</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {[
                { icon: 'fa-list-check', text: 'Current positions' },
                { icon: 'fa-layer-group', text: 'Maximum positions' },
                { icon: 'fa-diagram-project', text: 'Dynamic trade management' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#050505] border border-gray-800 text-gray-300 text-sm"><i className={`fa-solid ${item.icon} text-red-400`}></i> {item.text}</li>
              ))}
            </ul>

            {/* Sub 4 */}
            <h4 className="text-lg font-bold text-red-400 mb-2"><i className="fa-solid fa-code-branch"></i> Advanced Algorithms (V11.1 Improvements)</h4>
            <p className="text-gray-400 mb-3 text-sm">Modern AI-assisted scalping systems combine several technical filters before entering trades rather than relying on a single indicator. V11.1's advanced algorithms include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: 'fa-filter', text: 'Dynamic volatility filtering' },
                { icon: 'fa-arrows-to-dot', text: 'Adaptive grid spacing' },
                { icon: 'fa-check-double', text: 'Trend confirmation before entries' },
                { icon: 'fa-signal', text: 'Real-time spread filtering' },
                { icon: 'fa-brain', text: 'AI-assisted trade filtering' },
                { icon: 'fa-route', text: 'Smart trailing logic' },
                { icon: 'fa-object-group', text: 'Position clustering' },
                { icon: 'fa-shield-halved', text: 'Risk-based exposure control' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#050505] border border-gray-800 text-gray-300 text-sm"><i className={`fa-solid ${item.icon} text-red-400`}></i> {item.text}</li>
              ))}
            </ul>
          </div>

          {/* Category 5 */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border-l-4 border-yellow-500 border-y border-r border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center text-black text-2xl shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                <i className="fa-solid fa-shield-heart"></i>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-gray-100">Risk Management Improvements — V11.1</h3>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">ENHANCED</span>
            </div>
            <p className="text-gray-400 mb-6">The new V11.1 dashboard now visibly tracks every important risk metric, giving traders a much clearer picture of account health during live trading.</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { icon: 'fa-arrow-trend-down', text: 'Drawdown Percentage' },
                { icon: 'fa-gauge', text: 'Margin Level' },
                { icon: 'fa-wallet', text: 'Free Margin' },
                { icon: 'fa-coins', text: 'Floating Profit' },
                { icon: 'fa-list-ol', text: 'Position Count' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#050505] border border-gray-800 text-gray-300 font-medium text-sm">
                  <i className={`fa-solid ${item.icon} text-yellow-500`}></i> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Category 6: Compare */}
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#050505] rounded-[22px] p-10 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,243,255,0.1)] relative overflow-hidden">
            <h3 className="text-center text-2xl md:text-3xl font-orbitron font-black mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_10px_rgba(255,0,234,0.5)]">Overall Improvements — V11.1 vs V5.1</span>
            </h3>
            <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">Based on what is visible, Velox Scalper XAU V11.1 focuses on three main upgrades — <b className="text-gray-200">adaptive execution</b>, <b className="text-gray-200">improved transparency</b>, and <b className="text-gray-200">enhanced risk control</b>.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#050505] p-6 rounded-xl border-2 border-gray-800 opacity-80">
                <h4 className="text-lg font-bold text-gray-500 border-b-2 border-gray-800 pb-3 mb-4"><i className="fa-solid fa-clock-rotate-left"></i> Earlier Versions (e.g. V5.1)</h4>
                <ul className="space-y-3">
                  {[
                    'Fixed pip distance', 'Static configuration per session', 'No real-time dashboard',
                    'Limited risk visualization', 'Basic trade management', 'Single-indicator entries', 'Standard drawdown control'
                  ].map((text, i) => (
                    <li key={i} className="text-gray-500 flex items-center gap-3 text-sm"><i className="fa-solid fa-xmark"></i> {text}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#050505] p-6 rounded-xl border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(0,243,255,0.2)] relative">
                <span className="absolute -top-3 right-5 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">LATEST</span>
                <h4 className="text-lg font-bold text-cyan-400 border-b-2 border-cyan-900/50 pb-3 mb-4"><i className="fa-solid fa-rocket"></i> Velox Gold Scalper V11.1 (Latest)</h4>
                <ul className="space-y-3">
                  {[
                    'Modern real-time dashboard', 'Dynamic AI trading mode', 'AI Adaptive engine',
                    'Lifetime performance tracking', 'Live risk monitoring', 'Dynamic Gap algorithm',
                    'Smarter position management', 'Cleaner visualization'
                  ].map((text, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-3 text-sm font-medium"><i className="fa-solid fa-check text-green-400"></i> <b>{text}</b></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* New Advanced Tech */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border-l-4 border-blue-500 border-y border-r border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,136,255,0.2)] transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-[0_0_15px_rgba(0,136,255,0.6)]">
                <i className="fa-solid fa-flask-vial"></i>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-gray-100">VELOX SCALPER PRO V11.1 — New Advanced Technologies</h3>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-black tracking-widest shadow-[0_0_10px_rgba(255,0,100,0.5)]">ENGINEERING</span>
            </div>
            <p className="text-gray-400 mb-4">Built by our highly experienced software engineering team. Velox Scalper PRO V11.1 is designed to provide <b className="text-gray-200">faster, smarter, and more stable automated trading</b>. Our engineers have developed advanced technologies that improve trading performance, reduce system workload, and enhance market analysis.</p>
            <p className="text-gray-400 mb-6">Unlike ordinary Expert Advisors, Velox uses <b className="text-gray-200">intelligent processing, adaptive optimization, and AI-assisted technology</b> to deliver reliable performance on both VPS servers and personal computers. Every feature is built to maximize efficiency while maintaining high trading accuracy.</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: 'fa-microchip', text: 'Intelligent Processing' },
                { icon: 'fa-sliders', text: 'Adaptive Optimization' },
                { icon: 'fa-brain', text: 'AI-Assisted Technology' },
                { icon: 'fa-crosshairs', text: 'High Trading Accuracy' },
                { icon: 'fa-server', text: 'Reliable on VPS & Personal PC' },
                { icon: 'fa-gears', text: 'Reduced System Workload' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#050505] border border-gray-800 text-gray-300 font-medium text-sm">
                  <i className={`fa-solid ${item.icon} text-blue-400`}></i> {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center pt-6">
            <a href="http://t.me/goldscalperrobotadmin?text=Hi%20Admin%20Sir%20%2C%20I%20am%20interested%20in%20buying%20Velox%20Gold%20Scalper%20V11.1.%20Can%20I%20know%20more%20about%20this%20MT5%20Expert%20Advisor%20(EA%20bot)%20%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase tracking-wider shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all transform hover:scale-105">
              <i className="fa-brands fa-telegram text-xl"></i> Instant Buy — Contact Admin on Telegram
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
