"use client";

import { useState } from "react";

export default function RegistrationSystem() {
  const [activeTab, setActiveTab] = useState("calendar");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("th");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ให้ค่าเริ่มต้นเป็น "หน้าแรก" เพื่อให้มีไฮไลต์เมนูแรกตอนเข้าเว็บ
  const [activeMenu, setActiveMenu] = useState("");

  // ================= ข้อมูลภาษาไทย (TH) =================
  const sidebarMenusTH = [
    "หน้าแรก", "เข้าสู่ระบบ", "ระบบขึ้นทะเบียนนิสิตใหม่", "ปฏิทินการศึกษา",
    "หลักสูตรที่เปิดสอน", "วิชาที่เปิดสอน", "ตรวจสอบวิชาก่อนลงทะเบียน",
    "ตารางสอนอาจารย์", "ตารางการใช้ห้อง", "คู่มือตารางเรียน",
    "วิทยานิพนธ์", "ตอบคำถาม", "แนะนำการลงทะเบียน", "ข้อความโต้ตอบ",
    "พิมพ์คำร้องลงทะเบียน", "สถานะยื่นจบ", "คลิปสอนใช้ระบบ",
    "สอบทานรหัสผ่าน อาจารย์", "ตรวจสอบคำร้องออนไลน์"
  ];

  const tabLabelsTH = [
    { id: "calendar", label: "ปฏิทิน" },
    { id: "graduation", label: "การสำเร็จการศึกษา" },
    { id: "document", label: "เอกสารทางการศึกษา" },
    { id: "manual", label: "คู่มือการใช้งานระบบ" },
    { id: "other", label: "อื่นๆ" }
  ];

  const tabContentTH: Record<string, string[]> = {
    calendar: [
      "ปฏิทินการศึกษา 2569 (ฉบับย่อ)", "ปฏิทินการศึกษา 2569 (ฉบับเต็ม)",
      "Academic Calendar 2026", "Calendar 2026 (Chinese version)",
      "Academic Calendar 2025", "Calendar 2025 (Chinese version)",
      "ปฏิทินการศึกษา 2568 (ฉบับย่อ)", "ปฏิทินการศึกษา 2568 (ฉบับเต็ม)"
    ],
    graduation: [
      "ตรวจสอบรายชื่อผู้สำเร็จการศึกษา", "ขั้นตอนการขึ้นทะเบียนบัณฑิต", "กำหนดการฝึกซ้อมรับพระราชทานปริญญาบัตร"
    ],
    document: [
      "ยื่นคำร้องขอ Transcript", "แบบฟอร์มขอหนังสือรับรองสถานภาพ", "ใบคำร้องทั่วไป (สำหรับนิสิต)"
    ],
    manual: [
      "คู่มือการลงทะเบียนเรียน", "คู่มือการใช้งานระบบสำหรับอาจารย์ผู้สอน"
    ],
    other: [
      "ช่องทางการติดต่อหน่วยงาน", "ประกาศมหาวิทยาลัยมหาสารคาม"
    ]
  };

  // ================= ข้อมูลภาษาอังกฤษ (EN) =================
  const sidebarMenusEN = [
    "Home", "Login", "New Student Registration", "Academic Calendar",
    "Programs Offered", "Courses Offered", "Pre-registration Check",
    "Instructor Schedule", "Room Schedule", "Class Schedule Manual",
    "Thesis", "Q&A", "Registration Guide", "Interactive Messages",
    "Print Registration Petition", "Graduation Status", "System Tutorial Video",
    "Instructor Password Review", "Online Petition Check"
  ];

  const tabLabelsEN = [
    { id: "calendar", label: "Calendar" },
    { id: "graduation", label: "Graduation" },
    { id: "document", label: "Documents" },
    { id: "manual", label: "Manuals" },
    { id: "other", label: "Others" }
  ];

  const tabContentEN: Record<string, string[]> = {
    calendar: [
      "Academic Calendar 2026 (Short)", "Academic Calendar 2026 (Full)",
      "Academic Calendar 2026", "Calendar 2026 (Chinese version)",
      "Academic Calendar 2025", "Calendar 2025 (Chinese version)",
      "Academic Calendar 2025 (Short)", "Academic Calendar 2025 (Full)"
    ],
    graduation: [
      "Check Graduate List", "Graduation Registration Process", "Degree Conferral Rehearsal Schedule"
    ],
    document: [
      "Transcript Request", "Status Certification Form", "General Petition Form (for students)"
    ],
    manual: [
      "Registration Manual", "System Usage Manual for Instructors"
    ],
    other: [
      "Contact Channels", "University Announcements"
    ]
  };

  const currentSidebar = selectedLang === "th" ? sidebarMenusTH : sidebarMenusEN;
  const currentTabLabels = selectedLang === "th" ? tabLabelsTH : tabLabelsEN;
  const currentTabContent = selectedLang === "th" ? tabContentTH : tabContentEN;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-amber-200">
      
      {/* ================= Header แบบ Modern ================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        
        {/* Banner Section */}
        <div className="w-full h-[80px] md:h-[100px] bg-slate-100 flex items-center justify-center overflow-hidden relative">
           <img 
             src="/banner.webp" 
             alt="MSU Banner" 
             className="w-full h-full object-contain md:object-cover opacity-90 mix-blend-multiply"
           />
        </div>
        
        {/* Navbar Section */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:block">
            <h1 className="text-lg font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              REG MSU
            </h1>
          </div>

          {/* Language Switcher แบบ Pill */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-500 hidden sm:inline">ภาษา / Language</span>
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="bg-white text-slate-700 font-semibold px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow hover:border-slate-300 transition-all text-xs flex items-center min-w-[110px] justify-between"
              >
                <span>{selectedLang === "th" ? "🇹🇭 ภาษาไทย" : "🇬🇧 English"}</span>
                <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-full min-w-[120px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 p-1.5 animate-in fade-in zoom-in duration-200">
                  <button
                    onClick={() => { setSelectedLang("th"); setIsLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      selectedLang === "th" ? "bg-amber-50 text-amber-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    🇹🇭 ภาษาไทย
                  </button>
                  <button
                    onClick={() => { setSelectedLang("en"); setIsLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors mt-1 ${
                      selectedLang === "en" ? "bg-amber-50 text-amber-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= Mobile Menu Drawer ================= */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[70] transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl overflow-y-auto flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-sm">
          <span className="font-bold text-slate-800">เมนูหลัก</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col p-3 gap-1">
          {currentSidebar.map((menu, index) => (
            <button 
              key={index} 
              onClick={() => { setActiveMenu(menu); setIsMobileMenuOpen(false); }}
              className={`text-left px-4 py-3 text-sm font-semibold transition-all rounded-xl ${
                activeMenu === menu 
                  ? "bg-amber-100 text-amber-800" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {menu}
            </button>
          ))}
        </div>
      </div>

      {/* ================= Main Layout ================= */}
      <main className="flex-1 flex w-full max-w-[1400px] mx-auto">
        
        {/* ================= 1. Sidebar (Desktop) แบบ Modern ================= */}
        <aside className="w-[280px] hidden md:flex flex-col border-r border-slate-200/60 bg-white/50 backdrop-blur-sm min-h-[calc(100vh-160px)]">
          <div className="flex flex-col w-full py-8 px-4 gap-1.5 sticky top-[100px]"> 
            {currentSidebar.map((menu, index) => (
              <button 
                key={index} 
                onClick={() => setActiveMenu(menu)}
                className={`text-left px-5 py-3 text-[14px] font-semibold transition-all rounded-xl flex justify-between items-center group ${
                  activeMenu === menu 
                    ? "bg-amber-100 text-amber-800 shadow-sm"
                    : "text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-900"
                }`}
              >
                <span>{menu}</span>
                {activeMenu === menu && (
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* ================= 2. เนื้อหาหลัก ================= */}
        <section className="flex-1 w-full overflow-hidden p-4 md:p-8 lg:p-10">
          
          {/* Announcement Alert Box  */}
          <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm overflow-hidden relative">
            
            {/* ฝัง CSS สำหรับตัววิ่งโดยเฉพาะ */}
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              .animate-scroll {
                /* เปลี่ยนตัวเลข 25s ให้น้อยลงถ้าอยากให้วิ่งเร็วขึ้น (เช่น 15s) */
                animation: scroll 25s linear infinite;
              }
              /* ลูกเล่นเสริม: หยุดวิ่งเวลาเอาเมาส์ชี้ให้อ่านง่ายขึ้น */
              .scroll-container:hover .animate-scroll {
                animation-play-state: paused;
              }
            `}</style>

            <div className="bg-blue-600 text-white p-2 rounded-full hidden md:block shrink-0 z-10 relative shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {/* ส่วนข้อความที่เลื่อนได้ (ตั้งชื่อคลาสอ้างอิงตอน Hover) */}
            <div className="flex-1 overflow-hidden flex scroll-container whitespace-nowrap">
              
              {/* ชุดที่ 1 (แสดงให้เห็นทันทีตั้งแต่เปิดเว็บ) */}
              <div className="animate-scroll shrink-0 flex items-center pr-12 min-w-full">
                <span className="text-blue-900 font-bold mr-3 text-sm md:text-base">
                  MSU Wisdom
                </span>
                <span className="text-blue-800/80 text-sm md:text-base font-medium leading-relaxed">
                  เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย เก็บหน่วยกิตได้ตลอดชีวิต กับ ระบบคลังหน่วยกิตมหาวิทยาลัยมหาสารคาม
                </span>
              </div>

              {/* ชุดที่ 2 (ก๊อปปี้มาเพื่อต่อคิววิ่ง ไม่ให้เกิดช่องว่าง) */}
              <div className="animate-scroll shrink-0 flex items-center pr-12 min-w-full" aria-hidden="true">
                <span className="text-blue-900 font-bold mr-3 text-sm md:text-base">
                  MSU Wisdom
                </span>
                <span className="text-blue-800/80 text-sm md:text-base font-medium leading-relaxed">
                  เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย เก็บหน่วยกิตได้ตลอดชีวิต กับ ระบบคลังหน่วยกิตมหาวิทยาลัยมหาสารคาม
                </span>
              </div>

            </div>
          </div>

          {/* ================= กล่องเนื้อหาหลัก (Tabs & Grid Buttons) ================= */}
          <div className="mb-12">
            <div className="flex overflow-x-auto hide-scrollbar mb-8 pb-2">
              <div className="flex p-1.5 bg-slate-200/50 rounded-2xl w-max">
                {currentTabLabels.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id 
                        ? "bg-white text-amber-600 shadow-sm" 
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              {currentTabLabels.find(t => t.id === activeTab)?.label}
            </h2>
            
            {/* นำเสนอเมนูย่อยในรูปแบบ Grid Card 2 คอลัมน์แทนการเรียงแถวเดียว */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTabContent[activeTab].map((item, index) => (
                <button 
                  key={index}
                  className="group flex items-center justify-between bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300 text-left"
                >
                  <span className="font-semibold text-slate-700 group-hover:text-amber-700 transition-colors">
                    {item}
                  </span>
                  <div className="bg-slate-50 group-hover:bg-amber-50 p-2 rounded-full transition-colors">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

          </div>

          {/* ================= กล่องข่าวสารแบบ Modern ================= */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">ข่าวสารประกาศ</h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                ดูทั้งหมด 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {/* ข่าวที่ 1 */}
              <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
                <div className="p-6 md:p-8 pl-8 md:pl-10">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Badge แทนตัวหนังสือสีแดงทื่อๆ */}
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-[11px] font-bold uppercase tracking-wider rounded-full">ด่วนมาก</span>
                    <span className="text-sm font-medium text-slate-400">2 กรกฎาคม 2569</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    การยื่นเอกสารเทียบโอนรายวิชาศึกษาทั่วไป ประจำปีการศึกษา 2569
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-4">
                    นิสิตที่กรอกข้อมูลเทียบโอนที่ <a href="#" className="text-blue-600 font-semibold hover:underline">ระบบ Coursetransfer</a> แล้ว ให้นำเอกสารคำร้องที่ อ.ที่ปรึกษาและหัวหน้าภาควิชาเซ็นชื่อเรียบร้อยแล้ว พร้อมเอกสารหมายเลข 1 และใบแสดงผลการศึกษา ส่งที่สำนักศึกษาทั่วไป ห้อง RN1-101 ภายในวันจันทร์ที่ 6 กรกฎาคม 2569
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    ประกาศโดย งานพัฒนาหลักสูตร สำนักศึกษาทั่วไป
                  </div>
                </div>
              </div>

              {/* ข่าวที่ 2 */}
              <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
                <div className="p-6 md:p-8 pl-8 md:pl-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-[11px] font-bold uppercase tracking-wider rounded-full">ด่วนมาก</span>
                    <span className="text-sm font-medium text-slate-400">14 มิถุนายน 2566</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    การยื่นเรียนซ้ำ/เรียนแทนรายวิชาศึกษาทั่วไป
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-4">
                    ดาวน์โหลด <a href="#" className="text-blue-600 font-semibold hover:underline">คำร้อง</a> และกรอกข้อมูลส่งเอกสารให้สำนักศึกษาทั่วไป ให้ถ่ายภาพหรือ Scan เอกสารที่อาจารย์เซ็นเรียบร้อยแล้ว Upload ในเว็บไซต์ <a href="#" className="text-blue-600 font-semibold hover:underline">ระบบยื่นเอกสาร</a> และสามารถติดตามผลการอนุมัติได้ที่ <a href="#" className="text-blue-600 font-semibold hover:underline">ลิงก์ติดตามผล</a>
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    ประกาศโดย สำนักศึกษาทั่วไป
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>

      {/* ================= Footer ================= */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h4 className="text-white font-bold mb-4">งานเอกสารสำคัญทางการศึกษา</h4>
            <p className="text-sm mb-2">แจ้งปัญหาเกี่ยวกับการขอเอกสารสำคัญ และรหัสผ่าน</p>
            <a href="mailto:reg@msu.ac.th" className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors">reg@msu.ac.th</a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">ระบบไม่ตัดยอดหนี้</h4>
            <p className="text-sm mb-2">นายอภิชัย ชาญศิริรัตนา (เฉพาะระบบไม่ตัดยอดหนี้เท่านั้น)</p>
            <a href="mailto:apichai.c@msu.ac.th" className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors">apichai.c@msu.ac.th</a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">รายงานตัว & คำร้องออนไลน์</h4>
            <p className="text-sm mb-2">นายจิรศักดิ์ โบราณประสิทธิ์ (เฉพาะรายงานตัวนิสิตใหม่)</p>
            <a href="mailto:Jirasak.b@msu.ac.th" className="text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors block mb-4">Jirasak.b@msu.ac.th</a>
            <div className="pt-4 border-t border-slate-800">
              <a href="http://regpr.msu.ac.th" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                เว็บไซต์กองทะเบียนและประมวลผล
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}