import React, { useState, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  GraduationCap, 
  Trophy, 
  Mic, 
  Briefcase, 
  User, 
  BookOpen, 
  ClipboardCheck, 
  Heart, 
  Shield, 
  CheckCircle, 
  Menu, 
  X 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 1. Create a Reference for the Form Section
  const formSectionRef = useRef(null);

  // 2. Function to handle smooth scrolling
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <div className="font-sans text-slate-800 antialiased overflow-x-hidden">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpeg" 
              alt="ZORBA Genius Academy" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded font-semibold transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg flex flex-col gap-4">
             <button 
              onClick={scrollToForm}
              className="bg-amber-500 text-white w-full py-3 rounded font-bold"
            >
              Enquire Now
            </button>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Students Learning" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase">ZORBA Genius Academy</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Shaping Excellence. <br />
              <span className="text-white">Building Future Leaders.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-lg">
              Academic mastery, competitive exam success, and personality development under one structured system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Enquire Now
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded font-semibold transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp Us
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded font-semibold transition-all flex items-center justify-center gap-2">
                <Phone size={20} /> Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">About ZORBA Genius Academy</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            ZORBA Genius Academy is a premier learning institution committed to <strong className="text-slate-900">Academic Excellence</strong>, <strong className="text-slate-900">Competitive Success</strong>, and <strong className="text-slate-900">Holistic Personality Development</strong>. Education here goes beyond textbooks — it builds clarity of thought, confidence in expression, and strength of character through a <strong className="text-slate-900">Structured Learning Framework</strong>.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER (Cards) ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-slate-500">A comprehensive ecosystem designed for complete student growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-amber-500 transition-colors">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
              <span className="text-amber-500 font-semibold text-sm block mb-4">Class 5–12</span>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Concept clarity</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Regular assessments</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Performance tracking</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-amber-500 transition-colors">
                <Trophy size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Exam Coaching</h3>
              <span className="text-amber-500 font-semibold text-sm block mb-4">State & National Level</span>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Mock tests</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Strategy sessions</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Mentorship support</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-amber-500 transition-colors">
                <Mic size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Spoken English & Personality</h3>
              <span className="text-amber-500 font-semibold text-sm block mb-4">Communication Skills</span>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Fluency</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Confidence & leadership</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Interview readiness</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-amber-500 transition-colors">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Career-Oriented Skills</h3>
              <span className="text-amber-500 font-semibold text-sm block mb-4">Future Ready</span>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Analytical ability</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Professional workshops</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Life skills training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY / APPROACH ================= */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Our Approach to Student Growth</h2>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {/* Icons... (Same as before) */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-amber-500 flex items-center justify-center transition-all">
                <User className="text-amber-500 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white max-w-[120px]">Personalized Mentorship</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-amber-500 flex items-center justify-center transition-all">
                <BookOpen className="text-amber-500 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white max-w-[120px]">Structured Study Systems</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-amber-500 flex items-center justify-center transition-all">
                <ClipboardCheck className="text-amber-500 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white max-w-[120px]">Regular Evaluation</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-amber-500 flex items-center justify-center transition-all">
                <Heart className="text-amber-500 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white max-w-[120px]">Motivational Guidance</span>
            </div>
             <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-amber-500 flex items-center justify-center transition-all">
                <Shield className="text-amber-500 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white max-w-[120px]">Ethical & Disciplined</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & COMMITMENT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To become a trusted center of excellence that empowers students to compete at the highest levels while maintaining integrity, confidence, and lifelong learning values.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Commitment</h2>
            <ul className="space-y-4">
              {[
                "Quality Education",
                "Professional Environment",
                "Transparent Evaluation",
                "Dedicated Faculty",
                "Student-Centric Approach"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <CheckCircle size={14} className="text-amber-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= ADMISSION PROCESS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-16">Admission Process</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between max-w-5xl mx-auto px-4">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-slate-200 border-t-2 border-dashed border-slate-300 z-0"></div>

            {/* Steps (Same as before) */}
            <div className="relative z-10 flex flex-col items-center mb-10 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <MessageCircle size={32} />
              </div>
              <span className="text-amber-500 font-bold mb-1">Step 1</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enquire</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Fill the form or contact us</p>
            </div>
            <div className="relative z-10 flex flex-col items-center mb-10 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <User size={32} />
              </div>
              <span className="text-amber-500 font-bold mb-1">Step 2</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Counseling & Assessment</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Personalized guidance session</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <BookOpen size={32} />
              </div>
              <span className="text-amber-500 font-bold mb-1">Step 3</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enrollment</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Begin structured learning</p>
            </div>
          </div>

          <button 
            onClick={scrollToForm}
            className="mt-12 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded font-bold shadow-md transition-all"
          >
            Start Your Enquiry
          </button>
        </div>
      </section>

      {/* ================= FORM SECTION (Target for buttons) ================= */}
      <section ref={formSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Start Your Child's Success <br /> Journey Today
          </h2>
          <p className="text-slate-500 mb-10">Fill the form below and our team will reach out to you.</p>

          <form className="space-y-4 text-left">
            <input type="text" placeholder="Student Name" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors" />
            <input type="text" placeholder="Parent Name" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors" />
            
            <div className="relative">
              <select className="w-full px-4 py-3 rounded border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none appearance-none bg-white text-slate-600">
                <option>Select Class</option>
                <option>Class 5-8</option>
                <option>Class 9-10</option>
                <option>Class 11-12 (Arts)</option>
                <option>Class 11-12 (Commerce)</option>
                <option>Class 11-12 (Science)</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors" />
            
            <textarea placeholder="Message (optional)" rows="4" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors resize-none"></textarea>

            <button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded font-bold shadow-lg transition-all mt-4">
              Submit Enquiry
            </button>
            
            <button type="button" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 py-3.5 rounded font-bold transition-all mt-2 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Chat on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="py-24 bg-[#0f172a] text-center px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
          Where Potential Meets Performance.
        </h2>
        <button 
          onClick={scrollToForm}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded font-bold text-lg shadow-xl transition-all hover:scale-105"
        >
          Secure Admission Now
        </button>
      </section>

      {/* ================= BOTTOM FOOTER ================= */}
      <footer className="bg-[#0b1120] py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-white font-serif font-bold text-lg mb-2">ZORBA Genius Academy</h4>
          <p className="text-slate-400 text-sm mb-6">Shaping Excellence. Building Leaders.</p>
          <p className="text-slate-600 text-xs">© 2026 ZORBA Genius Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;