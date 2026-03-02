import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  UserPlus,
  Youtube,
  Globe,
  MessageSquare,
  Sun,
  Moon
} from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

// ==================== MAIN COMPONENT ====================
export default function TrionsLab() {
  // ==================== STATE MANAGEMENT ====================
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("trionslab-theme");
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  // ==================== EFFECT HOOKS ====================
  useEffect(() => {
    setMounted(true);
    localStorage.setItem("trionslab-theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // ==================== THEME HANDLER ====================
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // ==================== CONTACT CARD HANDLER ====================
  const handleAddToContacts = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:TRIONSLAB
ORG:TRIONSLAB
TITLE:Software Company
TEL;TYPE=CELL:+8801521561664
EMAIL:trionslab@gmail.com
ADR;TYPE=WORK:;;Road 23;Uttara Sector 14;Dhaka;;Bangladesh
URL:https://trionslab.com
NOTE:Mahmudul Ahsan: +8801521561664\\nAzmayen Sabil: +8801833352501\\nNur Islam: +8801533513104\\nInnovating Software Solutions for Your Success
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "TRIONSLAB_Contact.vcf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden font-sans ${isDarkMode ? "bg-black text-white" : "bg-[#f8f9fa] text-[#1a1a1a]"}`}>
      {/* ==================== THEME TOGGLE BUTTON ==================== */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* ==================== BACKGROUND EFFECTS ==================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {mounted && (
          <>
            {/* Subtle white/gray orbs for depth */}
            <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-5 blur-[120px] animate-pulse-slow ${isDarkMode ? "bg-white" : "bg-blue-400"}`} />
            <div className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-5 blur-[120px] animate-pulse-slower ${isDarkMode ? "bg-gray-500" : "bg-purple-400"}`} />
          </>
        )}
      </div>

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <div className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <div className={`relative overflow-hidden border-b transition-colors duration-500 ${isDarkMode ? "border-white/10" : "border-black/5"}`}>
          {/* Hero background */}
          <div className={`absolute inset-0 ${isDarkMode ? "bg-black" : "bg-white"}`}>
             <div className={`absolute inset-0 opacity-10 ${isDarkMode ? "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent)]"}`}></div>
          </div>

          {/* Hero content container */}
          <div className="relative pt-16 pb-20">
            {/* ==================== LOGO SECTION ==================== */}
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="relative group">
                {/* Rotating Decorative Ring */}
                <div className={`absolute -inset-4 rounded-full border border-dashed animate-[spin_20s_linear_infinite] opacity-20 ${isDarkMode ? "border-white" : "border-black"}`} />
                <div className={`absolute -inset-2 rounded-full border-2 border-gradient-to-r from-blue-500/30 to-purple-600/30 opacity-40 group-hover:opacity-100 transition duration-1000`}></div>
                
                <div className={`absolute -inset-1 rounded-full blur group-hover:bg-opacity-40 transition duration-500 ${isDarkMode ? "bg-white/20 group-hover:bg-white/40" : "bg-black/5 group-hover:bg-black/10"}`}></div>
                <div className={`relative w-32 h-32 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] transform group-hover:scale-105 transition-all duration-300 ${isDarkMode ? "bg-white" : "bg-white shadow-lg"}`}>
                  <div className="text-center">
                    <img
                      className="w-28 h-28 rounded-full object-contain"
                      src="https://i.imgur.com/fjtFjd4.png"
                      alt="TRIONSLAB Official Logo"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== MAIN HEADLINE SECTION ==================== */}
            <div className="space-y-2 mb-4">
              <h1 className={`text-4xl md:text-5xl font-black text-center tracking-tighter animate-fade-in-up uppercase ${isDarkMode ? "text-white" : "text-black"}`}>
                TRIONSLAB
              </h1>
            </div>

            {/* ==================== SUBTITLE SECTION ==================== */}
            <div
              className={`text-center text-sm md:text-base mb-10 h-12 flex items-center justify-center max-w-xs mx-auto px-4 animate-fade-in-up uppercase tracking-[0.2em] font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Typewriter
                words={[
                  "Building the Tools that Scale Your Ambition",
                  "Elevating Workflows Through Intelligent SaaS",
                  "Engineering Growth with Precision SaaS",
                  "Simplifying Complexity. Scaling Success.",
                  "Efficiency Engineered into Every Pixel",
                  "Architectures for the Digital Tomorrow",
                  "Pioneering the Next Generation of SaaS",
                  "Turning Visionary Ideas into Products",
                  "Innovation Meets Robust Infrastructure",
                  "Crafting Future Cloud-Native Solutions",
                  "SaaS Built for Humans Behind the Screen",
                  "Seamless Experiences. Superior Software.",
                  "Empowering Users with World-Class SaaS",
                  "Design-First Engineering for Business",
                  "Software that Feels Like the Future",
                  "High-Performance SaaS for High-Growth",
                  "Precision Software. Unlimited Potential.",
                  "The Lab for Modern SaaS Excellence",
                  "Unleashing Velocity Through Custom SaaS",
                  "Code with Purpose. Products with Impact."
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </div>

            {/* ==================== QUICK ACTION BUTTONS ==================== */}
            <div className="flex justify-center gap-6 px-4">
              {/* Phone call button */}
              <a
                href="tel:+8801521561664"
                className="group relative animate-fade-in-up flex flex-col items-center"
                style={{ animationDelay: "0.2s" }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 group-hover:rotate-3 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                  <Phone className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`} />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  Call Now
                </div>
              </a>

              {/* Email button */}
              <a
                href="mailto:trionslab@gmail.com"
                className="group relative animate-fade-in-up flex flex-col items-center"
                style={{ animationDelay: "0.3s" }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 group-hover:-rotate-3 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                  <Mail className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`} />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  Email Us
                </div>
              </a>

              {/* Map location button */}
              <a
                href="https://maps.app.goo.gl/e4my654LBnP56eJn9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative animate-fade-in-up flex flex-col items-center"
                style={{ animationDelay: "0.4s" }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 group-hover:rotate-3 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                  <MapPin className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`} />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  Find Us
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ==================== CONTACT INFORMATION SECTION ==================== */}
        <div className="max-w-md mx-auto px-6 -mt-10 pb-16">
          {/* ==================== TEAM CONTACTS CARD ==================== */}
          <div className={`border rounded-3xl shadow-2xl p-6 mb-6 animate-slide-in-up transition-colors duration-500 ${isDarkMode ? "bg-[#111111] border-white/5" : "bg-white border-black/5"}`}>
            <h2 className={`text-xs font-black mb-6 uppercase tracking-[0.3em] flex items-center gap-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              <span className={`w-8 h-[1px] ${isDarkMode ? "bg-white/20" : "bg-black/10"}`}></span>
              Management Team
            </h2>

            <div className="space-y-4">
              {/* Mahmudul Ahsan */}
              <a
                href="tel:+8801521561664"
                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-gray-50 hover:bg-gray-100 border-black/5"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? "text-white" : "text-black"}`}>
                    Mahmudul Ahsan
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    +880 152156 1664
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${isDarkMode ? "text-gray-700 group-hover:text-white" : "text-gray-300 group-hover:text-black"}`} />
              </a>

              {/* Azmayen Sabil */}
              <a
                href="tel:+8801833352501"
                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-gray-50 hover:bg-gray-100 border-black/5"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? "text-white" : "text-black"}`}>
                    Azmayen Sabil
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    +880 183335 2501
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${isDarkMode ? "text-gray-700 group-hover:text-white" : "text-gray-300 group-hover:text-black"}`} />
              </a>

              {/* Nur Islam */}
              <a
                href="tel:+8801533513104"
                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-gray-50 hover:bg-gray-100 border-black/5"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? "text-white" : "text-black"}`}>
                    Nur Islam
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    +880 153351 3104
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${isDarkMode ? "text-gray-700 group-hover:text-white" : "text-gray-300 group-hover:text-black"}`} />
              </a>
            </div>
          </div>

          {/* ==================== OFFICE INFO CARD ==================== */}
          <div className={`border rounded-3xl shadow-2xl p-6 mb-6 animate-slide-in-up transition-colors duration-500 ${isDarkMode ? "bg-[#111111] border-white/5" : "bg-white border-black/5"}`} style={{ animationDelay: "0.1s" }}>
            <h2 className={`text-xs font-black mb-6 uppercase tracking-[0.3em] flex items-center gap-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              <span className={`w-8 h-[1px] ${isDarkMode ? "bg-white/20" : "bg-black/10"}`}></span>
              Office Details
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:trionslab@gmail.com"
                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-gray-50 hover:bg-gray-100 border-black/5"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-bold tracking-wider ${isDarkMode ? "text-white" : "text-black"}`}>
                    trionslab@gmail.com
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    Corporate Email
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${isDarkMode ? "text-gray-700 group-hover:text-white" : "text-gray-300 group-hover:text-black"}`} />
              </a>

              {/* Location */}
              <div className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isDarkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-gray-50 hover:bg-gray-100 border-black/5"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-bold tracking-wider leading-tight ${isDarkMode ? "text-white" : "text-black"}`}>
                    Uttara Sector 14,<br />Road 23, Dhaka
                  </div>
                  <div className={`text-xs font-mono mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    Headquarters
                  </div>
                </div>
              </div>

               {/* Map Button */}
               <a
                href="https://maps.app.goo.gl/e4my654LBnP56eJn9"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
              >
                View Map Location
              </a>
            </div>
          </div>

          {/* ==================== SOCIAL MEDIA SECTION ==================== */}
          <div className="grid grid-cols-4 gap-4 mb-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Globe, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} className={`aspect-square border rounded-2xl flex items-center justify-center group transition-all duration-300 ${isDarkMode ? "bg-[#111111] border-white/5 hover:bg-white" : "bg-white border-black/5 hover:bg-black"}`}>
                  <Icon className={`w-5 h-5 transition-colors ${isDarkMode ? "text-gray-500 group-hover:text-black" : "text-gray-400 group-hover:text-white"}`} />
                </a>
              ))}
          </div>

          {/* ==================== ADD TO CONTACTS BUTTON ==================== */}
          <button
            onClick={handleAddToContacts}
            className={`group relative w-full overflow-hidden rounded-2xl py-5 px-8 transition-all hover:scale-[1.02] active:scale-[0.98] animate-slide-in-up shadow-xl ${isDarkMode ? "bg-white shadow-[0_20px_40px_rgba(255,255,255,0.05)]" : "bg-black shadow-[0_20px_40px_rgba(0,0,0,0.1)]"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative flex items-center justify-center gap-3">
              <UserPlus className={`w-5 h-5 ${isDarkMode ? "text-black" : "text-white"}`} />
              <span className={`font-black text-sm uppercase tracking-widest ${isDarkMode ? "text-black" : "text-white"}`}>
                Save Contact
              </span>
            </div>
          </button>

          {/* ==================== FOOTER NOTE ==================== */}
          <p className={`text-center text-[10px] font-black uppercase tracking-[0.4em] mt-12 animate-pulse ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
            Established &bull; 2025
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.07; transform: scale(1.03); }
        }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
