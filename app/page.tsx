"use client";

import { useState } from "react";

export default function RegistrationSystem() {
  const [activeTab, setActiveTab] = useState("calendar");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("th"); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#FFF9D4] flex flex-col font-sans relative">
      
      {/* ================= Navbar ด้านบน ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        
        {/* แบนเนอร์ */}
        <div className="w-full h-[100px] md:h-[120px] bg-gray-200 flex items-center justify-between px-4 overflow-hidden relative">
           {/* ปุ่ม Hamburger ซ้ายมือ */}
           <button 
             onClick={() => setIsMobileMenuOpen(true)}
             className="md:hidden z-10 bg-white/90 p-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50 transition"
           >
             <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           </button>

           <img 
             src="/banner.webp" 
             alt="MSU Banner" 
             className="absolute top-0 left-0 w-full h-full object-contain md:object-cover bg-[#f4f4f4] z-0"
           />
        </div>
        
        {/* แถบเลือกภาษา */}
        <div className="bg-[#303030] text-gray-300 text-sm py-2 md:py-3 px-6 md:px-20 lg:px-40 flex justify-end items-center">
          <span className="mr-3 font-medium hidden sm:inline">เลือกภาษา / Language</span>
          
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-white text-gray-700 font-medium px-4 py-1.5 rounded-full border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 text-xs flex items-center justify-between min-w-[100px] transition-all hover:bg-gray-50"
            >
              <span>{selectedLang === "th" ? "ภาษาไทย" : "English"}</span>
              <svg className={`fill-current h-4 w-4 text-gray-500 ml-2 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-full min-w-[110px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 p-1 text-xs">
                <button
                  onClick={() => { setSelectedLang("th"); setIsLangOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 transition-colors ${
                    selectedLang === "th" ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  ภาษาไทย
                </button>
                <button
                  onClick={() => { setSelectedLang("en"); setIsLangOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 transition-colors ${
                    selectedLang === "en" ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </header>


      {/* ================= ส่วนเมนูมือถือ (Slide) ================= */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#f9f9f9] z-[70] transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-white sticky top-0 z-10">
          <span className="font-bold text-gray-800 text-lg">เมนูหลัก</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col gap-[2px] p-2 bg-gray-200">
          {currentSidebar.map((menu, index) => (
            <button 
              key={index} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="bg-white text-left px-4 py-4 text-sm font-bold text-gray-700 hover:bg-[#FFD738] hover:text-black border-l-[4px] border-transparent hover:border-blue-800 rounded-sm shadow-sm transition duration-200"
            >
              {menu}
            </button>
          ))}
        </div>
      </div>


      {/* ================= Main Content Area ================= */}
      <main className="flex-1 pt-36 md:pt-48 pb-10 flex justify-center w-full px-4 md:px-0">
        <div className="w-full max-w-[1200px] bg-[#e3e3e7] flex flex-col p-4 gap-4 rounded-lg shadow-sm">
          
          <div className="flex overflow-hidden whitespace-nowrap w-full pt-4 pb-2 border-b border-gray-300">
            <div className="animate-marquee">
              <span className="text-blue-800 font-bold underline text-base md:text-lg">
                msu wisdom เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย &quot;เก็บหน่วยกิตได้ตลอดชีวิต&quot; กับ ระบบคลังหน่วยกิตมหาวิทยาลัยมหาสารคาม
              </span>
            </div>
          </div>

          <div className="flex gap-6 w-full pt-2">
            
            {/* Sidebar จอคอม */}
            <aside className="w-[280px] hidden md:flex flex-col gap-2">
              {currentSidebar.map((menu, index) => (
                <button 
                  key={index} 
                  className="bg-white text-left px-4 py-4 text-sm font-bold text-gray-700 hover:bg-[#FFD738] hover:text-black border-l-[4px] border-transparent hover:border-blue-800 rounded-md shadow-sm transition duration-200"
                >
                  {menu}
                </button>
              ))}
            </aside>

            {/* เนื้อหาด้านขวา */}
            <section className="flex-1 flex flex-col w-full overflow-hidden">
              
              {/* แถบ Tabs ตัวเลือก (เพิ่ม md:justify-end กลับเข้าไปตรงนี้ครับ) */}
              <div className="flex justify-end gap-4 md:gap-6 border-b border-gray-300 pb-2 mb-6 mt-2 pr-2 md:pr-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
                {currentTabLabels.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm font-bold pb-1 flex-shrink-0 transition-colors ${
                      activeTab === tab.id 
                        ? "text-orange-500 border-b-2 border-orange-500" 
                        : "text-blue-600 hover:text-blue-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* ส่วนปุ่มสีเหลือง */}
              <div className="flex flex-col gap-3 mb-10">
                {currentTabContent[activeTab].map((item, index) => (
                  <button 
                    key={index}
                    className="w-full bg-[#fceea7] text-gray-800 py-3 md:py-4 px-2 font-bold text-sm md:text-lg rounded-sm border border-yellow-500 shadow-sm hover:bg-yellow-400 hover:scale-[1.01] transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* กล่องประกาศ */}
              <div className="flex flex-col gap-6 mt-4">
                <div className="bg-white border border-gray-300 shadow-sm rounded-t-md overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-[#303030] text-gray-200 p-3 text-xs md:text-sm font-medium">
                    การยื่นเอกสารเทียบโอนรายวิชาศึกษาทั่วไป ประจำปีการศึกษา 2569 <span className="text-red-500 font-bold">(ด่วนมาก)</span>
                  </div>
                  <div className="p-4 md:p-6 text-xs md:text-sm text-gray-700 leading-relaxed">
                    นิสิตที่กรอกข้อมูลเทียบโอนที่ https://geccc.msu.ac.th/Coursetransfer/ แล้ว ให้นำเอกสารคำร้องที่ อ.ที่ปรึกษาและหัวหน้าภาควิชา
                    (รหัสนิสิตปัจจุบัน) เซ็นชื่อเรียบร้อยแล้ว พร้อมเอกสารหมายเลข 1 และใบแสดงผลการศึกษา (รหัสเดิมหรือสถาบันเดิม) <br/>
                    ส่งที่สำนักศึกษาทั่วไป ห้อง RN1-101 ภายในวันจันทร์ที่ 6 กรกฎาคม 2569 <br/>
                    ประกาศโดย งานพัฒนาหลักสูตร สำนักศึกษาทั่วไป วันที่ประกาศ 2 กรกฎาคม 2569
                  </div>
                </div>

                <div className="bg-white border border-gray-300 shadow-sm rounded-t-md overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-[#303030] text-gray-200 p-3 text-xs md:text-sm font-medium">
                    การยื่นเรียนซ้ำ/เรียนแทนรายวิชาศึกษาทั่วไป <span className="text-red-500 font-bold">(ด่วนมาก)</span>
                  </div>
                  <div className="p-4 md:p-6 text-xs md:text-sm text-gray-700 leading-relaxed">
                    ดาวน์โหลด <a href="#" className="text-blue-600 hover:text-blue-800 underline transition-colors">คำร้อง</a> และกรอกข้อมูลแล้วส่งเอกสารให้สำนักศึกษาทั่วไป ให้ถ่ายภาพหรือ Scan
                    เอกสารคำร้องที่อาจารย์ที่ปรึกษาเซ็นเรียนร้อยแล้ว แล้ว upload <br/>
                    เอกสารในเว็บไซต์ <a href="#" className="text-blue-600 hover:text-blue-800 underline transition-colors">ระบบยื่นเอกสารรายวิชาศึกษาทั่วไป</a> โดยนิสิตสามารถตรวจสอบรายชื่อนิสิตที่สำนักศึกษาทั่วไป
                    ได้ส่งคำร้องไปที่กองทะเบียนและประมวลผลแล้ว ได้ที่ลิงค์นี้ครับ <a href="#" className="text-blue-600 hover:text-blue-800 underline transition-colors">ติดตามผลการอนุมัติ</a><br/><br/>
                    ประกาศโดย สำนักศึกษาทั่วไป วันที่ประกาศ 14 มิถุนายน 2566
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#31343e] text-[#f1f1f1] py-10 md:py-14 mt-auto text-[12px] md:text-[14px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-6 gap-y-3 md:gap-y-5 items-start">
            <div className="md:text-right tracking-wide text-gray-400 md:text-[#f1f1f1]">ติดต่อ :</div>
            <div className="mb-4 md:mb-0">งานเอกสารสำคัญทางการศึกษา : (reg@msu.ac.th) แจ้งปัญหาเกี่ยวกับการขอเอกสารสำคัญ และรหัสผ่าน</div>
            
            <div className="md:text-right tracking-wide text-gray-400 md:text-[#f1f1f1]">แจ้งปัญหาเกี่ยวกับระบบ :</div>
            <div className="mb-4 md:mb-0">นายอภิชัย ชาญศิริรัตนา (apichai.c@msu.ac.th) เฉพาะระบบไม่ตัดยอดหนี้เท่านั้น</div>
            
            <div className="md:text-right tracking-wide text-gray-400 md:text-[#f1f1f1]">แจ้งปัญหาเกี่ยวกับระบบ :</div>
            <div className="mb-4 md:mb-0">นายจิรศักดิ์ โบราณประสิทธิ์ (Jirasak.b@msu.ac.th) เฉพาะแจ้งปัญหาเกี่ยวกับการรายงานตัวนิสิตใหม่ ระบบคำร้องออนไลน์</div>
            
            <div className="hidden md:block"></div>
            <div className="pt-2 md:pt-0 border-t border-gray-600 md:border-none">
              <a 
                href="http://regpr.msu.ac.th" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                เว็บไซต์กองทะเบียนและประมวลผล http://regpr.msu.ac.th
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}