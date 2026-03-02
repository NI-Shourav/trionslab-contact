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
  Moon,
  X,
  Languages
} from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

// ==================== MAIN COMPONENT ====================
export default function TrionsLab() {
  // ==================== STATE MANAGEMENT ====================
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("trionslab-theme");
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("trionslab-lang");
      return saved !== null ? saved : "en";
    }
    return "en";
  });

  // ==================== TRANSLATIONS ====================
  const translations = {
    en: {
      brand: "TRIONSLAB",
      typewriter: [
        "The Lab for Modern SaaS Excellence",
        "Building the Tools that Scale Your Ambition",
        "Elevating Workflows Through Intelligent SaaS",
        "Efficiency Engineered into Every Pixel",
        "Architectures for the Digital Tomorrow",
        "Pioneering the Next Generation of SaaS",
        "Turning Visionary Ideas into Products",
        "Innovation Meets Robust Infrastructure",
        "Crafting Future Cloud-Native Solutions",
        "Empowering Users with World-Class SaaS",
        "High-Performance SaaS for High-Growth",
        "Unleashing Velocity Through Custom SaaS",
      ],
      callNow: "Call Now",
      emailUs: "Email Us",
      findUs: "Find Us",
      managementTeam: "Management Team",
      officeDetails: "Office Details",
      corporateEmail: "Corporate Email",
      address: <>Uttara Sector 14,<br />Road 23, Dhaka</>,
      headquarters: "Headquarters",
      viewMap: "View Map Location",
      saveContact: "Save Contact",
      established: "Established • 2025",
      quickCall: "Quick Call",
      selectMember: "Select a team member",
      members: {
        ahsan: "Mahmudul Ahsan",
        sabil: "Azmayen Sabil",
        islam: "Nur Islam"
      }
    },
    bn: {
      brand: "ট্রায়ন্স ল্যাব",
typewriter: [
  "আধুনিক SaaS উদ্ভাবনের ল্যাব",
  "আপনার প্রবৃদ্ধির জন্য টুল তৈরি করছি",
  "স্মার্ট SaaS দিয়ে কাজের গতি বাড়ান",
  "নতুন প্রজন্মের SaaS নির্মাতা",
  "আইডিয়াকে পণ্যে রূপ দিই",
  "উদ্ভাবন ও শক্তিশালী প্রযুক্তির সমন্বয়",
  "ভবিষ্যতের ক্লাউড সমাধান তৈরি করছি",
],
      callNow: "কল",
      emailUs: "ইমেইল",
      findUs: "লোকেশন",
      managementTeam: "পরিচালনাকারী টিম",
      officeDetails: "অফিসের ঠিকানা ও তথ্য",
      corporateEmail: "কর্পোরেট ইমেইল",
      address: <>উত্তরা ১৪ নম্বর সেক্টর,<br />২৩ নম্বর রোড, ঢাকা</>,
      headquarters: "হেড অফিস",
      viewMap: "আমাদের লোকেশন",
      saveContact: "কন্টাক্ট সেভ করুন",
      established: "প্রতিষ্ঠিত • ২০২৫",
      quickCall: "কুইক কল",
      selectMember: "টিম মেম্বার নির্বাচন করুন",
      members: {
        ahsan: "মাহমুদুল আহসান",
        sabil: "আজমাইন সাবিল",
        islam: "নূর ইসলাম"
      }
    }
  };

  const t = translations[language];

  // ==================== UTILS ====================
  const toBanglaDigits = (str) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return str.replace(/[0-9]/g, (digit) => banglaDigits[parseInt(digit)]);
  };

  const formatPhone = (phone) => {
    if (language === "bn") return toBanglaDigits(phone);
    return phone;
  };

  // ==================== DATA DEFINITION ====================
  const teamMembers = [
    { name: t.members.ahsan, phone: "+8801521561664" },
    { name: t.members.sabil, phone: "+8801833352501" },
    { name: t.members.islam, phone: "+8801533513104" },
  ];

  // ==================== EFFECT HOOKS ====================
  useEffect(() => {
    setMounted(true);
    localStorage.setItem("trionslab-theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("trionslab-lang", language);
  }, [language]);

  // ==================== THEME HANDLER ====================
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === "en" ? "bn" : "en");

  // ==================== CONTACT CARD HANDLER ====================
  const handleAddToContacts = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:TRIONSLAB
ORG:TRIONSLAB
TITLE:Software Company
TEL;TYPE=CELL;LABEL="Mahmudul Ahsan":+8801521561664
TEL;TYPE=CELL;LABEL="Azmayen Sabil":+8801833352501
TEL;TYPE=CELL;LABEL="Nur Islam":+8801533513104
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
    <div className={`relative min-h-screen transition-all duration-500 overflow-x-hidden ${language === "bn" ? "font-bangla" : "font-sans"} ${isDarkMode ? "bg-black text-white" : "bg-[#f8f9fa] text-[#1a1a1a]"}`}>
      {/* ==================== THEME TOGGLE BUTTON ==================== */}
      <button
        onClick={toggleTheme}
        className={`absolute top-6 right-6 z-50 p-2 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* ==================== LANGUAGE TOGGLE BUTTON ==================== */}
      <button
        onClick={toggleLanguage}
        className={`absolute top-16 right-6 z-50 p-2 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-1.5 ${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <Languages className="w-4 h-4" />
        <span className={`text-[9px] font-black uppercase ${language === 'en' ? 'tracking-tighter' : 'tracking-normal'}`}>
          {language === "en" ? "BN" : "EN"}
        </span>
      </button>

      {/* ==================== BACKGROUND EFFECTS ==================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {mounted && (
          <>
            {/* Dynamic Aurora Blobs */}
            <div className={`absolute top-0 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.08] animate-aurora-1 ${isDarkMode ? "bg-indigo-600" : "bg-blue-300"}`} />
            <div className={`absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.08] animate-aurora-2 ${isDarkMode ? "bg-cyan-500" : "bg-purple-300"}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.04] animate-aurora-3 ${isDarkMode ? "bg-blue-600" : "bg-cyan-200"}`} />
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
          <div className="relative pt-12 pb-16">
            {/* ==================== LOGO SECTION ==================== */}
            <a 
              href="https://trionslab.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center group/logo"
            >
              <div className="flex justify-center mb-6 animate-fade-in-up">
                <div className="relative group">
                  {/* Rotating Decorative Ring */}
                  <div className={`absolute -inset-3 rounded-full border border-dashed animate-[spin_20s_linear_infinite] opacity-20 ${isDarkMode ? "border-white" : "border-black"}`} />
                  <div className={`absolute -inset-2 rounded-full border-2 border-blue-500/20 opacity-40 group-hover:opacity-100 transition duration-1000`}></div>
                  
                  <div className={`absolute -inset-1 rounded-full blur group-hover:bg-opacity-40 transition duration-500 ${isDarkMode ? "bg-white/20 group-hover:bg-white/40" : "bg-black/5 group-hover:bg-black/10"}`}></div>
                  <div className={`relative w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] transform group-hover:scale-105 transition-all duration-300 ${isDarkMode ? "bg-white" : "bg-white shadow-lg"}`}>
                    <div className="text-center">
                      <img
                        className="w-20 h-20 rounded-full object-contain"
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
                <h1 className={`text-3xl md:text-4xl font-black text-center animate-fade-in-up uppercase ${language === 'en' ? 'tracking-tighter' : 'tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                  {t.brand}
                </h1>
              </div>
            </a>

            {/* ==================== SUBTITLE SECTION ==================== */}
            <div
              className={`text-center mb-8 h-10 flex items-center justify-center max-w-xs mx-auto px-4 animate-fade-in-up uppercase font-medium ${language === 'en' ? 'text-[11px] md:text-xs tracking-[0.2em]' : 'text-[13px] md:text-sm tracking-normal'} ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Typewriter
                words={t.typewriter}
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
              <button
                onClick={() => setIsCallPopupOpen(true)}
                className="group relative animate-fade-in-up flex flex-col items-center"
                style={{ animationDelay: "0.2s" }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                  <Phone className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`} />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  {t.callNow}
                </div>
              </button>

              {/* Email button */}
              <a
                href="mailto:trionslab@gmail.com"
                className="group relative animate-fade-in-up flex flex-col items-center"
                style={{ animationDelay: "0.3s" }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                  <Mail className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`} />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  {t.emailUs}
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
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                  <MapPin className={`w-6 h-6 ${isDarkMode ? "text-black" : "text-white"}`} />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  {t.findUs}
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ==================== CONTACT INFORMATION SECTION ==================== */}
        <div className="max-w-md mx-auto px-6 -mt-10 pb-16">
          {/* ==================== TEAM CONTACTS CARD ==================== */}
          <div className={`border rounded-3xl shadow-2xl p-6 mb-6 animate-slide-in-up transition-colors duration-500 ${isDarkMode ? "bg-[#111111] border-white/5" : "bg-white border-black/5"}`}>
            <h2 className={`font-black mb-6 uppercase flex items-center gap-3 ${language === 'en' ? 'text-[10px] tracking-[0.3em]' : 'text-[12px] tracking-normal'} ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              <span className={`w-8 h-[1px] ${isDarkMode ? "bg-white/20" : "bg-black/10"}`}></span>
              {t.managementTeam}
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
                  <div className={`font-bold uppercase ${language === 'en' ? 'text-sm tracking-wider' : 'text-base tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                    {t.members.ahsan}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {formatPhone("+880 152156 1664")}
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
                  <div className={`font-bold uppercase ${language === 'en' ? 'text-sm tracking-wider' : 'text-base tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                    {t.members.sabil}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {formatPhone("+880 183335 2501")}
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
                  <div className={`font-bold uppercase ${language === 'en' ? 'text-sm tracking-wider' : 'text-base tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                    {t.members.islam}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {formatPhone("+880 153351 3104")}
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${isDarkMode ? "text-gray-700 group-hover:text-white" : "text-gray-300 group-hover:text-black"}`} />
              </a>
            </div>
          </div>

          {/* ==================== OFFICE INFO CARD ==================== */}
          <div className={`border rounded-3xl shadow-2xl p-6 mb-6 animate-slide-in-up transition-colors duration-500 ${isDarkMode ? "bg-[#111111] border-white/5" : "bg-white border-black/5"}`} style={{ animationDelay: "0.1s" }}>
            <h2 className={`font-black mb-6 uppercase flex items-center gap-3 ${language === 'en' ? 'text-[10px] tracking-[0.3em]' : 'text-[12px] tracking-normal'} ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              <span className={`w-8 h-[1px] ${isDarkMode ? "bg-white/20" : "bg-black/10"}`}></span>
              {t.officeDetails}
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
                  <div className={`font-bold ${language === 'en' ? 'text-sm tracking-wider' : 'text-base tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                    trionslab@gmail.com
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {t.corporateEmail}
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
                  <div className={`font-bold leading-tight ${language === 'en' ? 'text-sm tracking-wider' : 'text-base tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                    {t.address}
                  </div>
                  <div className={`text-xs font-mono mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {t.headquarters}
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/e4my654LBnP56eJn9"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full py-4 rounded-2xl font-black uppercase hover:scale-[1.02] active:scale-[0.98] transition-all ${language === 'en' ? 'text-xs tracking-widest' : 'text-sm tracking-normal'} ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
              >
                {t.viewMap}
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
                <a key={idx} href={href} className={`aspect-square border rounded-2xl flex items-center justify-center group transition-all duration-300 outline outline-1 outline-offset-2 ${isDarkMode ? "bg-[#111111] border-white/5 hover:bg-white outline-white/10" : "bg-white border-black/5 hover:bg-black outline-black/10"}`}>
                  <Icon className={`w-5 h-5 transition-colors ${isDarkMode ? "text-white group-hover:text-black" : "text-black group-hover:text-white"}`} />                </a>
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
              <span className={`font-black uppercase ${language === 'en' ? 'text-sm tracking-widest' : 'text-base tracking-normal'} ${isDarkMode ? "text-black" : "text-white"}`}>
                {t.saveContact}
              </span>
            </div>
          </button>

          {/* ==================== FOOTER NOTE ==================== */}
          <p className={`text-center font-black uppercase mt-12 animate-pulse ${language === 'en' ? 'text-[10px] tracking-[0.4em]' : 'text-[12px] tracking-normal'} ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
            {t.established}
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

        .font-bangla {
          font-family: 'Hind Siliguri', sans-serif;
        }

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
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-45%, -55%) scale(1.05); }
        }
        .animate-aurora-1 { animation: aurora-1 20s linear infinite; }
        .animate-aurora-2 { animation: aurora-2 25s linear infinite; }
        .animate-aurora-3 { animation: aurora-3 30s ease-in-out infinite; }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 8s ease-in-out infinite; }
      `}</style>

      {/* ==================== CALL MODAL ==================== */}
      {isCallPopupOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/40 animate-fade-in"
          onClick={() => setIsCallPopupOpen(false)}
        >
          <div 
            className={`relative w-full max-w-sm rounded-[2rem] p-8 shadow-2xl animate-slide-in-up border ${
              isDarkMode ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/5"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsCallPopupOpen(false)}
              className={`absolute top-5 right-5 p-2 rounded-full transition-all hover:rotate-90 ${
                isDarkMode ? "hover:bg-white/10 text-white/40 hover:text-white" : "hover:bg-black/5 text-black/40 hover:text-black"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8 pt-2">
              <h3 className={`text-base font-black uppercase ${language === 'en' ? 'tracking-[0.2em]' : 'tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                {t.quickCall}
              </h3>
              <p className={`text-[9px] font-bold mt-1 uppercase ${language === 'en' ? 'tracking-[0.3em]' : 'tracking-normal'} ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                {t.selectMember}
              </p>
            </div>

            <div className="space-y-3">
              {teamMembers.map((member, idx) => (
                <a
                  key={idx}
                  href={`tel:${member.phone}`}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border hover:scale-[1.02] active:scale-[0.98] ${
                    isDarkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-gray-50 hover:bg-gray-100 border-black/5"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-bold uppercase ${language === 'en' ? 'tracking-wider' : 'tracking-normal'} ${isDarkMode ? "text-white" : "text-black"}`}>
                      {member.name}
                    </div>
                    <div className={`text-[10px] font-mono mt-0.5 opacity-60 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {formatPhone(member.phone)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
