import React from 'react';

export default function ReviewsContact() {
  const currentYear = new Date().getFullYear();
  
  const reviews = [
    { name: "Arjun R.", initial: "AR", loc: "Bengaluru, India", text: "\"Instant delivery — literally 34 minutes after payment. V11.1 is a beast.\"", tags: ["TRC20", "Package A"] },
    { name: "Marcus K.", initial: "MK", loc: "Frankfurt, Germany", text: "\"I upgraded from V5.1 straight to V11.1. The new Dynamic AI Mode is exactly what was missing before — entries feel much smarter during volatile London sessions. Win rate has been holding around 93%.", tags: ["BEP20", "Package B · PRO"] },
    { name: "Daniel S.", initial: "DS", loc: "Toronto, Canada", text: "\"Bought Package C purely for the .mq5 source code. What I didn't expect was how much cleaner the V11.1 code is compared to V5.1 — the Advanced AI Adaptation System is properly modularized, the Adaptive Optimization block is documented, and the Live Dashboard uses a clean OnTimer refresh instead of hammering ticks. Rebranded it for my private trading room in a weekend. Absolutely worth $999. Admin also replied on Telegram within minutes to answer a code question. This is a genuine, in-house build — not a resold script.\"", tags: ["ERC20", "Package C · ULTIMATE", "Source Code"] },
    { name: "Sara N.", initial: "SN", loc: "Dubai, UAE", text: "\"Live dashboard on V11.1 is a game changer. I can see drawdown and margin at a glance.\"", tags: ["BTC", "Package B"] },
    { name: "Luka P.", initial: "LP", loc: "Ljubljana, Slovenia", text: "\"Prop firm friendly. Passed my FTMO MT5 challenge running V11.1 in Medium Scalping Mode. Drawdown Protection kept me well under the 5% daily limit and the AI Adaptive engine handled the news week without a single stop-out.", tags: ["TRC20", "Package B", "Prop Firm"] },
    { name: "Rohan G.", initial: "RG", loc: "Mumbai, India", text: "\"मैंने V5.1 पहले ख़रीदा था और अब V11.1 पर upgrade किया है — फ़र्क़ रात-दिन का है। Dynamic AI Mode की वजह से entries पहले जैसे mechanical नहीं लगती, market जब range में जाता है तो EA खुद अपनी grid distance adjust कर लेता है। Live dashboard पर floating P/L, margin level और drawdown — सब real-time दिखता है, इसलिए peace of mind बहुत ज़्यादा है। Admin ने Telegram पर 5 मिनट में reply दिया और installation video से setup में 1 minute से भी कम लगा।\"", tags: ["BEP20", "Package B · PRO", "Upgrade V5.1→V11.1"] },
    { name: "Jae T.", initial: "JT", loc: "Seoul, South Korea", text: "\"Runs on my $12/mo VPS with 2 GB RAM. Zero hiccups.\"", tags: ["TRC20", "Package A"] },
    { name: "Emma M.", initial: "EM", loc: "London, UK", text: "\"Bought Package B, paid in Bitcoin, and everything arrived exactly as advertised inside 45 minutes. The 7+ preset .set files cover conservative to aggressive risk — I run Low mode on my main and Fast mode on a separate demo. AI Adaptive engine actually behaves differently in trending vs ranging markets — you can see it on the dashboard.", tags: ["BTC", "Package B · PRO"] },
    { name: "Carlos V.", initial: "CV", loc: "Madrid, Spain", text: "\"I've bought a lot of gold EAs over the last 5 years and honestly most of them either martingale their way to a blown account or freeze when spread widens. Velox V11.1 does neither. The Pro Drawdown Protection layer is genuinely conservative — it will actually stop opening new positions when the risk cap is hit instead of doubling down. Smart Position Control coordinates trades centrally, so I never end up with 15 stacked orders on the same signal. Support on Telegram is fast and human. Instant delivery of EA within 1 Hour of Payment was accurate to the minute. I'll be recommending this to my trading group. Best purchase this year.\"", tags: ["ERC20", "Package C · ULTIMATE"] }
  ];

  return (
    <>
      {/* TESTIMONIALS */}
      <section id="testi" className="py-24 bg-[#0a0a0f] relative border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Testimonials
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              What Traders Are Saying
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Real feedback from real traders running Velox Gold Scalper EA V11.1 on live MT5 accounts across the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#050505] rounded-2xl p-6 border border-gray-800 hover:border-fuchsia-500/50 hover:shadow-[0_10px_30px_rgba(255,0,234,0.15)] transition-all relative group flex flex-col">
                <span className="absolute -top-4 left-6 font-serif text-6xl text-fuchsia-500/30 group-hover:text-fuchsia-500/50 transition-colors">"</span>
                <div className="text-yellow-500 mb-4 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed mb-6 flex-1 z-10 relative">
                  {r.text}
                </p>
                <div className="pt-4 border-t border-dashed border-gray-800 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-orbitron font-black shadow-[0_0_10px_rgba(0,243,255,0.5)] shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <b className="text-gray-200 block text-sm">{r.name}</b>
                    <small className="text-gray-500 font-medium">{r.loc}</small>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {r.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#0a0a0f] border border-gray-700 text-gray-400 text-[10px] font-bold uppercase tracking-widest shadow-[inset_0_0_5px_rgba(255,255,255,0.05)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-[#050505] relative border-y border-fuchsia-500/20" id="contact">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-orbitron font-black text-[15vw] text-fuchsia-500/5 select-none pointer-events-none tracking-tighter">CONTACT</div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Contact Us
            </span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-gray-100">
              Contact Us Or Query
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Have a question, a custom request, or want to pay via a different method? Reach the Velox Gold Scalper Admin team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-orbitron font-bold text-cyan-400 mb-3 drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">
                <i className="fa-solid fa-headset mr-2"></i> We Are Here to Help You
              </h3>
              <p className="text-gray-400 mb-6 text-sm">Reach out to the Velox Gold Scalper Admin team for pre-sale questions, custom pricing, alternate payment methods, licensing, installation help or general enquiries.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: 'fa-envelope', label: 'Email', val: 'Veloxgoldscalperea@gmail.com' },
                  { icon: 'fa-telegram', label: 'Telegram (Direct DM)', val: '@goldscalperrobotadmin', isBrand: true },
                  { icon: 'fa-clock', label: 'Response Time', val: 'Within 1-2 hours' },
                  { icon: 'fa-globe', label: 'Support', val: 'Worldwide · 24×7' },
                  { icon: 'fa-language', label: 'Language', val: 'English' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <i className={`${item.isBrand ? 'fa-brands' : 'fa-solid'} ${item.icon} text-yellow-500 text-lg mt-1 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] w-6 text-center`}></i>
                    <div>
                      <small className="text-gray-500 font-bold uppercase tracking-widest block text-[10px] mb-0.5">{item.label}</small>
                      <b className="text-gray-200">{item.val}</b>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="mailto:Veloxgoldscalperea@gmail.com?subject=Velox%20Gold%20Scalper%20V11.1%20Enquiry&body=Hi%20Admin%2C%0A%0AI%20am%20interested%20in%20buying%20Velox%20Gold%20Scalper%20V11.1.%20Please%20share%20details.%0A%0AThanks." className="block w-full py-3 mb-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(0,100,255,0.4)] hover:shadow-[0_0_25px_rgba(0,100,255,0.6)] transition-all">
                <i className="fa-solid fa-envelope"></i> Send Email to Admin
              </a>
              <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] transition-all">
                <i className="fa-brands fa-telegram"></i> Instant Buy — Contact Admin on Telegram
              </a>
            </div>

            <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-[22px] p-8 border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-orbitron font-bold text-fuchsia-400 mb-3 drop-shadow-[0_0_5px_rgba(255,0,234,0.3)]">
                <i className="fa-solid fa-headset mr-2"></i> One-Tap Email & Telegram
              </h3>
              <p className="text-gray-400 mb-6 text-sm">Tapping the Email button opens your device's mail app with the message ready to send. Tapping the Telegram button opens your Telegram app with a pre-typed message to the admin.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: 'fa-hand-pointer', label: 'How it Works', val: 'Fill your query & send — replies within 1-2 hours from Velox Gold Scalper Admin.' },
                  { icon: 'fa-shield-halved', label: 'Privacy', val: 'Your message is sent directly to the admin. No third party involved.' },
                  { icon: 'fa-user-tie', label: 'Support Team', val: 'In-house engineers & verified developer team.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <i className={`fa-solid ${item.icon} text-yellow-500 text-lg mt-1 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] w-6 text-center`}></i>
                    <div>
                      <small className="text-gray-500 font-bold uppercase tracking-widest block text-[10px] mb-0.5">{item.label}</small>
                      <b className="text-gray-200">{item.val}</b>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="block w-full py-3 mb-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] transition-all">
                <i className="fa-brands fa-telegram"></i> Message Admin on Telegram Now
              </a>
              <a href="#pricing" className="block w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold uppercase tracking-wider text-sm text-center shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all">
                <i className="fa-solid fa-tags"></i> View Pricing Plans
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020202] border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 font-orbitron font-black text-lg text-white mb-4">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center text-black shadow-[0_0_10px_rgba(255,215,0,0.5)]"><i className="fa-solid fa-chart-line"></i></span>
                <span>VELOX GOLD SCALPER V11.1</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional AI-based Ultra-Fast HFT Scalping Expert Advisor exclusively for Gold (XAUUSD) on MetaTrader 5. Developed by <b className="text-yellow-500">Velox Gold Scalper Admin</b> — verified in-house team. Powered by Dynamic AI Mode, AI Adaptive engine and Advanced AI Adaptation System.
              </p>
            </div>

            <div>
              <h5 className="text-yellow-500 font-orbitron font-bold tracking-widest uppercase mb-4 text-sm">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Features', 'V11.1 New', 'Why Us', 'Specifications', 'Pricing', 'How to Buy', 'Reviews', 'Contact', 'FAQs'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '').replace('specifications', 'specs')}`} className="hover:text-cyan-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-yellow-500 font-orbitron font-bold tracking-widest uppercase mb-4 text-sm">Support</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:Veloxgoldscalperea@gmail.com" className="hover:text-cyan-400">Email Support</a></li>
                <li><a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Telegram DM</a></li>
                <li><a href="#faqs" className="hover:text-cyan-400">Read FAQs</a></li>
                <li><a href="#contact" className="hover:text-cyan-400">Contact Us Or Query</a></li>
                <li>Response Time: 1-2 hrs</li>
                <li><b className="text-yellow-500">Instant Delivery within 1 Hour</b></li>
              </ul>
            </div>

            <div>
              <h5 className="text-yellow-500 font-orbitron font-bold tracking-widest uppercase mb-4 text-sm">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><i className="fa-solid fa-envelope w-5 text-cyan-400"></i> Veloxgoldscalperea@gmail.com</li>
                <li><i className="fa-brands fa-telegram w-5 text-cyan-400"></i> @goldscalperrobotadmin</li>
                <li><i className="fa-solid fa-globe w-5 text-cyan-400"></i> Worldwide Support · 24×7</li>
                <li><i className="fa-solid fa-language w-5 text-cyan-400"></i> Language: English</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
            <b className="text-yellow-500">⚠ Risk Disclaimer:</b> Trading foreign exchange and gold (XAUUSD) on margin carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results. Velox Gold Scalper EA V11.1 (developed by Velox Gold Scalper Admin) is a trading tool — final decisions and capital management remain the responsibility of the buyer. <b className="text-white">All payments are non-refundable and non-adjustable.</b>
            
            <div className="mt-4">
              © {currentYear} Velox Gold Scalper EA V11.1 · All rights reserved · Developed by Velox Gold Scalper Admin
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Telegram */}
      <a href="http://t.me/goldscalperrobotadmin" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black uppercase tracking-wider text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all hover:scale-105 animate-pulse group">
        <i className="fa-brands fa-telegram text-xl"></i>
        <span className="hidden sm:inline">Instant Buy</span>
      </a>
    </>
  );
}
