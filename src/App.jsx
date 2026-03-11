

// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Phone, 
//   MessageCircle, 
//   GraduationCap, 
//   Trophy, 
//   Mic, 
//   Briefcase, 
//   User, 
//   BookOpen, 
//   ClipboardCheck, 
//   Heart, 
//   Shield, 
//   CheckCircle, 
//   Menu, 
//   X 
// } from 'lucide-react';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // Array of relative images for the Hero Slider
//   const heroImages = [
//     '/hero-bg-1.jpg',
//     '/hero-bg-2.jpg',
//     '/hero-bg-3.jpg'
//   ];

//   // Auto-advance slider every 5 seconds
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, [heroImages.length]);
  
//   const formSectionRef = useRef(null);

//   const scrollToForm = () => {
//     formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      
//       {/* ================= HEADER / NAVBAR ================= */}
//       <nav className="bg-white shadow-md fixed w-full z-50">
//         <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <img 
//               src="/logo.jpeg" 
//               alt="ZORBA Genius Academy" 
//               className="h-16 md:h-20 w-auto object-contain" 
//             />
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             <button 
//               onClick={scrollToForm}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded font-semibold transition-all shadow-lg transform hover:-translate-y-0.5"
//             >
//               Enquire Now
//             </button>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-800">
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-green-100 p-4 absolute w-full shadow-lg flex flex-col gap-4">
//              <button 
//               onClick={scrollToForm}
//               className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded font-bold"
//             >
//               Enquire Now
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* ================= HERO SECTION (WITH SLIDER) ================= */}
//       <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-green-900 text-white overflow-hidden">
//         {/* Slider Backgrounds */}
//         {heroImages.map((img, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img 
//               src={img} 
//               alt={`ZORBA Hero ${index + 1}`} 
//               className="w-full h-full object-cover opacity-40 mix-blend-overlay"
//             />
//           </div>
//         ))}
//         {/* Gradient Overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-900/50 z-0"></div>

//         <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6 animate-fade-in-up">
            
//             {/* New Banner Tags */}
//             <div className="inline-block bg-orange-500 text-white font-bold tracking-wider text-xs md:text-sm uppercase py-1.5 px-3 rounded shadow-md mb-2">
//               ACADEMIC TUITIONS: All Classes | All Subjects | One Destination
//             </div>

//             <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
//               Shaping Excellence. <br />
//               <span className="text-orange-400">Building Future Leaders.</span>
//             </h1>
//             <p className="text-green-100 text-lg md:text-xl max-w-lg">
//               Academic mastery, competitive exam success, and personality development under one structured system.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button 
//                 onClick={scrollToForm}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
//               >
//                 Enquire Now
//               </button>
//               <button className="border-2 border-green-400 hover:bg-green-400/20 text-white px-6 py-3.5 rounded font-semibold transition-all flex items-center justify-center gap-2">
//                 <MessageCircle size={20} /> WhatsApp Us
//               </button>
//               <button className="border-2 border-green-400 hover:bg-green-400/20 text-white px-6 py-3.5 rounded font-semibold transition-all flex items-center justify-center gap-2">
//                 <Phone size={20} /> Call Now
//               </button>
//             </div>
            
//             {/* Slider Dots */}
//             <div className="flex gap-2 pt-8">
//               {heroImages.map((_, index) => (
//                 <button 
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-green-300/50'}`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT SECTION ================= */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-8">About ZORBA Genius Academy</h2>
//           <p className="text-lg text-gray-600 leading-relaxed mb-6">
//             ZORBA Genius Academy is a premier learning institution committed to <strong className="text-green-800">Academic Excellence</strong>, <strong className="text-green-800">Competitive Success</strong>, and <strong className="text-green-800">Holistic Personality Development</strong>. Education here goes beyond textbooks — it builds clarity of thought, confidence in expression, and strength of character through a <strong className="text-green-800">Structured Learning Framework</strong>.
//           </p>
//           <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
//         </div>
//       </section>

//       {/* ================= WHAT WE OFFER (Cards) ================= */}
//       <section className="py-20 bg-green-50">
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">What We Offer</h2>
//             <p className="text-green-700">A comprehensive ecosystem designed for complete student growth.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Card 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-green-100 group">
//               <div className="w-14 h-14 bg-green-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-orange-500 transition-colors">
//                 <GraduationCap size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Academic Excellence</h3>
//               <span className="text-orange-500 font-semibold text-sm block mb-4">Class 5–12</span>
//               <ul className="space-y-2 text-gray-600 text-sm">
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Concept clarity</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Regular assessments</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Performance tracking</li>
//               </ul>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-green-100 group">
//               <div className="w-14 h-14 bg-green-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-orange-500 transition-colors">
//                 <Trophy size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Competitive Exam Coaching</h3>
//               <span className="text-orange-500 font-semibold text-sm block mb-4">State & National Level</span>
//               <ul className="space-y-2 text-gray-600 text-sm">
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Mock tests</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Strategy sessions</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Mentorship support</li>
//               </ul>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-green-100 group">
//               <div className="w-14 h-14 bg-green-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-orange-500 transition-colors">
//                 <Mic size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Spoken English & Personality</h3>
//               <span className="text-orange-500 font-semibold text-sm block mb-4">Communication Skills</span>
//               <ul className="space-y-2 text-gray-600 text-sm">
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Fluency</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Confidence & leadership</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Interview readiness</li>
//               </ul>
//             </div>

//             {/* Card 4 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-green-100 group">
//               <div className="w-14 h-14 bg-green-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-orange-500 transition-colors">
//                 <Briefcase size={28} />
//               </div>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Career-Oriented Skills</h3>
//               <span className="text-orange-500 font-semibold text-sm block mb-4">Future Ready</span>
//               <ul className="space-y-2 text-gray-600 text-sm">
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Analytical ability</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Professional workshops</li>
//                 <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Life skills training</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= EXPERT FACULTY SECTION (UPDATED) ================= */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">Meet Our Expert Faculty</h2>
//             <p className="text-gray-600">Learn from experienced professionals dedicated to your success.</p>
//             <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             {/* Teacher 1: Mr. Rudra Tamang */}
//             <div className="bg-white rounded-2xl shadow-lg border border-green-50 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
//               <div className="w-full aspect-[3/4] overflow-hidden bg-green-100">
//                 <img 
//                   src="/teacher-1.jpeg" 
//                   alt="Mr. Rudra Tamang" 
//                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-green-900 mb-1">Mr. Rudra Tamang</h3>
//                 <span className="text-orange-500 font-semibold text-sm block mb-4">Voice & Accent Training</span>
//                 <ul className="space-y-2 text-gray-600 text-sm flex-grow">
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 10+ Years of Overall Professional Experience</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Experience Working with Multinational Companies</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Specialized in Voice & Accent Training</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 1-on-1 Spoken English Coaching (Global Clients)</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Accent Neutralization & Fluency Development</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Confidence Building & Public Speaking Support</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Customized Training Programs</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Teacher 2: Dr. Pritpal Singh */}
//             <div className="bg-white rounded-2xl shadow-lg border border-green-50 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
//               <div className="w-full aspect-[3/4] overflow-hidden bg-green-100">
//                 <img 
//                   src="/teacher-2.jpeg" 
//                   alt="Dr. Pritpal Singh" 
//                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-green-900 mb-1">Dr. Pritpal Singh</h3>
//                 <span className="text-orange-500 font-semibold text-sm block mb-4">Academic Head</span>
//                 <ul className="space-y-2 text-gray-600 text-sm flex-grow">
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> MBBS Qualified</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Has been selected for Punjab Civil Services</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 4 Times appeared for the UPSC final interview</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 4 Times appeared for the Punjab Civil Services and selected for the same</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Teacher 3: Nilupawan Bharali */}
//             <div className="bg-white rounded-2xl shadow-lg border border-green-50 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
//               <div className="w-full aspect-[3/4] overflow-hidden bg-green-100">
//                 <img 
//                   src="/teacher-3.jpeg" 
//                   alt="Nilupawan Bharali" 
//                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-green-900 mb-1">Nilupawan Bharali</h3>
//                 <span className="text-orange-500 font-semibold text-sm block mb-4">Chemistry (NEET & JEE)</span>
//                 <ul className="space-y-2 text-gray-600 text-sm flex-grow">
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 3+ Years of specialized teaching experience</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Educational Qualification: MSc, Chemistry</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Ex-Chemistry Faculty at Ajmal Super 40</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Dedicated coaching for competitive exams</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Teacher 4: Mr. Himujjwal Bhattacharya */}
//             <div className="bg-white rounded-2xl shadow-lg border border-green-50 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
//               <div className="w-full aspect-[3/4] overflow-hidden bg-green-100">
//                 <img 
//                   src="/teacher-4.jpeg" 
//                   alt="Mr. Himujjwal Bhattacharya" 
//                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-green-900 mb-1">Mr. Himujjwal Bhattacharya</h3>
//                 <span className="text-orange-500 font-semibold text-sm block mb-4">Faculty for Maths and Physics</span>
//                 <ul className="space-y-2 text-gray-600 text-sm flex-grow">
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 3+ Years experience in coaching and mentoring</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> B.Tech - Mechanical Engineering</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> MBA - IT & HR</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Cleared UGC NET Dec 2025 HR</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> Cleared NEE-1 2018</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Teacher 5: Ms. Yashikala Yaden */}
//             <div className="bg-white rounded-2xl shadow-lg border border-green-50 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
//               <div className="w-full aspect-[3/4] overflow-hidden bg-green-100">
//                 <img 
//                   src="/teacher-5.jpeg" 
//                   alt="Ms. Yashikala Yaden" 
//                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-green-900 mb-1">Ms. Yashikala Yaden</h3>
//                 <span className="text-orange-500 font-semibold text-sm block mb-4">Engineering Faculty</span>
//                 <ul className="space-y-2 text-gray-600 text-sm flex-grow">
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> BTECH Electronics & Communication</li>
//                   <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" /> 5+ years of Coaching and Mentorship experience</li>
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= PHILOSOPHY / APPROACH ================= */}
//       <section className="py-20 bg-green-950 text-white">
//         <div className="container mx-auto px-4 md:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Our Approach to Student Growth</h2>
          
//           <div className="flex flex-wrap justify-center gap-12 md:gap-20">
//             <div className="flex flex-col items-center gap-4 group cursor-pointer">
//               <div className="w-16 h-16 rounded-full border-2 border-green-700 group-hover:border-orange-500 flex items-center justify-center transition-all">
//                 <User className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
//               </div>
//               <span className="font-medium text-green-100 group-hover:text-white max-w-[120px]">Personalized Mentorship</span>
//             </div>
//             <div className="flex flex-col items-center gap-4 group cursor-pointer">
//               <div className="w-16 h-16 rounded-full border-2 border-green-700 group-hover:border-orange-500 flex items-center justify-center transition-all">
//                 <BookOpen className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
//               </div>
//               <span className="font-medium text-green-100 group-hover:text-white max-w-[120px]">Structured Study Systems</span>
//             </div>
//             <div className="flex flex-col items-center gap-4 group cursor-pointer">
//               <div className="w-16 h-16 rounded-full border-2 border-green-700 group-hover:border-orange-500 flex items-center justify-center transition-all">
//                 <ClipboardCheck className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
//               </div>
//               <span className="font-medium text-green-100 group-hover:text-white max-w-[120px]">Regular Evaluation</span>
//             </div>
//             <div className="flex flex-col items-center gap-4 group cursor-pointer">
//               <div className="w-16 h-16 rounded-full border-2 border-green-700 group-hover:border-orange-500 flex items-center justify-center transition-all">
//                 <Heart className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
//               </div>
//               <span className="font-medium text-green-100 group-hover:text-white max-w-[120px]">Motivational Guidance</span>
//             </div>
//              <div className="flex flex-col items-center gap-4 group cursor-pointer">
//               <div className="w-16 h-16 rounded-full border-2 border-green-700 group-hover:border-orange-500 flex items-center justify-center transition-all">
//                 <Shield className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
//               </div>
//               <span className="font-medium text-green-100 group-hover:text-white max-w-[120px]">Ethical & Disciplined</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= VISION & COMMITMENT ================= */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-start">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-green-900 mb-6">Our Vision</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               To become a trusted center of excellence that empowers students to compete at the highest levels while maintaining integrity, confidence, and lifelong learning values.
//             </p>
//           </div>
          
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-green-900 mb-6">Our Commitment</h2>
//             <ul className="space-y-4">
//               {[
//                 "Quality Education",
//                 "Professional Environment",
//                 "Transparent Evaluation",
//                 "Dedicated Faculty",
//                 "Student-Centric Approach"
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
//                   <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
//                     <CheckCircle size={14} className="text-orange-500" />
//                   </div>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ================= ADMISSION PROCESS ================= */}
//       <section className="py-20 bg-green-50">
//         <div className="container mx-auto px-4 md:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-16">Admission Process</h2>
          
//           <div className="relative flex flex-col md:flex-row justify-between max-w-5xl mx-auto px-4">
//             <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-green-200 border-t-2 border-dashed border-green-300 z-0"></div>

//             <div className="relative z-10 flex flex-col items-center mb-10 md:mb-0">
//               <div className="w-20 h-20 rounded-full bg-green-800 text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white">
//                 <MessageCircle size={32} />
//               </div>
//               <span className="text-orange-500 font-bold mb-1">Step 1</span>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Enquire</h3>
//               <p className="text-sm text-gray-500 max-w-[200px]">Fill the form or contact us</p>
//             </div>
//             <div className="relative z-10 flex flex-col items-center mb-10 md:mb-0">
//               <div className="w-20 h-20 rounded-full bg-green-800 text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white">
//                 <User size={32} />
//               </div>
//               <span className="text-orange-500 font-bold mb-1">Step 2</span>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Counseling & Assessment</h3>
//               <p className="text-sm text-gray-500 max-w-[200px]">Personalized guidance session</p>
//             </div>
//             <div className="relative z-10 flex flex-col items-center">
//               <div className="w-20 h-20 rounded-full bg-green-800 text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white">
//                 <BookOpen size={32} />
//               </div>
//               <span className="text-orange-500 font-bold mb-1">Step 3</span>
//               <h3 className="text-xl font-bold text-green-900 mb-2">Enrollment</h3>
//               <p className="text-sm text-gray-500 max-w-[200px]">Begin structured learning</p>
//             </div>
//           </div>

//           <button 
//             onClick={scrollToForm}
//             className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-bold shadow-md transition-all"
//           >
//             Start Your Enquiry
//           </button>
//         </div>
//       </section>

//       {/* ================= FORM SECTION ================= */}
//       <section ref={formSectionRef} className="py-20 bg-white border-t border-green-50">
//         <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">
//             Start Your Child's Success <br /> Journey Today
//           </h2>
//           <p className="text-gray-500 mb-10">Fill the form below and our team will reach out to you.</p>

//           <form className="space-y-4 text-left">
//             <input type="text" placeholder="Student Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors" />
//             <input type="text" placeholder="Parent Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors" />
            
//             <div className="relative">
//               <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none appearance-none bg-white text-gray-600">
//                 <option>Select Class</option>
//                 <option>Class 5-8</option>
//                 <option>Class 9-10</option>
//                 <option>Class 11-12 (Arts)</option>
//                 <option>Class 11-12 (Commerce)</option>
//                 <option>Class 11-12 (Science)</option>
//               </select>
//               <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//               </div>
//             </div>

//             <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors" />
            
//             <textarea placeholder="Message (optional)" rows="4" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors resize-none"></textarea>

//             <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded font-bold shadow-lg transition-all mt-4">
//               Submit Enquiry
//             </button>
            
//             <button type="button" className="w-full border-2 border-green-800 text-green-900 hover:bg-green-50 py-3.5 rounded font-bold transition-all mt-2 flex items-center justify-center gap-2">
//               <MessageCircle size={20} /> Chat on WhatsApp
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* ================= FOOTER CTA ================= */}
//       <section className="py-24 bg-green-900 text-center px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-green-950/40"></div>
//         <div className="relative z-10">
//           <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
//             Where Potential Meets Performance.
//           </h2>
//           <button 
//             onClick={scrollToForm}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-bold text-lg shadow-xl transition-all hover:scale-105"
//           >
//             Secure Admission Now
//           </button>
//         </div>
//       </section>

//       {/* ================= BOTTOM FOOTER ================= */}
//       <footer className="bg-green-950 py-8 border-t border-green-900">
//         <div className="container mx-auto px-4 text-center">
//           <h4 className="text-white font-serif font-bold text-lg mb-2">ZORBA Genius Academy</h4>
//           <p className="text-green-300 text-sm mb-6">Shaping Excellence. Building Leaders.</p>
//           <p className="text-green-600 text-xs">© 2026 ZORBA Genius Academy. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;













import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  
  // EmailJS States
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Contact Info
  const WHATSAPP_NUMBER = "917838636253";
  const WHATSAPP_TEXT = encodeURIComponent("Hello ZORBA Genius Academy! I am interested in your courses and would like to know more.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;
  const PHONE_URL = `tel:+917838636253`;

  // Array of relative images for the Hero Slider
  const heroImages = [
    '/hero-bg-1.jpg',
    '/hero-bg-2.jpg',
    '/hero-bg-3.jpg'
  ];

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);
  
  const formSectionRef = useRef(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // EmailJS Submit Handler
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_mbgyfph';
    const TEMPLATE_ID = 'template_oevh0wb';
    const PUBLIC_KEY = 'VR5cHtANAAx2Z-9Vx';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setSubmitMessage('Enquiry sent successfully! We will contact you soon.');
          formRef.current.reset();
          setIsSubmitting(false);
      }, (error) => {
          setSubmitMessage('Failed to send enquiry. Please try contacting us via WhatsApp.');
          setIsSubmitting(false);
          console.error(error.text);
      });
  };

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <nav className="bg-white shadow-md fixed w-full z-40">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpeg" 
              alt="ZORBA Genius Academy" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded font-semibold transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-800">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 p-4 absolute w-full shadow-lg flex flex-col gap-4">
             <button 
              onClick={scrollToForm}
              className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded font-bold"
            >
              Enquire Now
            </button>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION (WITH SLIDER) ================= */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-green-900 text-white overflow-hidden">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`ZORBA Hero ${index + 1}`} 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-900/50 z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            
            <div className="inline-block bg-orange-500 text-white font-bold tracking-wider text-xs md:text-sm uppercase py-1.5 px-3 rounded shadow-md mb-2">
              ACADEMIC TUITIONS: All Classes | All Subjects | One Destination
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Shaping Excellence. <br />
              <span className="text-orange-400">Building Future Leaders.</span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl max-w-lg">
              Academic mastery, competitive exam success, and personality development under one structured system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Enquire Now
              </button>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400 hover:bg-green-400/20 text-white px-6 py-3.5 rounded font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a 
                href={PHONE_URL}
                className="border-2 border-green-400 hover:bg-green-400/20 text-white px-6 py-3.5 rounded font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
            
            <div className="flex gap-2 pt-8">
              {heroImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-green-300/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      {/* ... [Your existing About, What We Offer, Faculty, Philosophy, Vision, and Admission Process sections stay exactly the same here] ... */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-8">About ZORBA Genius Academy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ZORBA Genius Academy is a premier learning institution committed to <strong className="text-green-800">Academic Excellence</strong>, <strong className="text-green-800">Competitive Success</strong>, and <strong className="text-green-800">Holistic Personality Development</strong>. Education here goes beyond textbooks — it builds clarity of thought, confidence in expression, and strength of character through a <strong className="text-green-800">Structured Learning Framework</strong>.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ================= FORM SECTION (UPDATED WITH EMAILJS) ================= */}
      <section ref={formSectionRef} className="py-20 bg-white border-t border-green-50">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4">
            Start Your Child's Success <br /> Journey Today
          </h2>
          <p className="text-gray-500 mb-10">Fill the form below and our team will reach out to you.</p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 text-left">
            {/* Added name attributes for EmailJS to map variables */}
            <input 
              type="text" 
              name="student_name"
              required
              placeholder="Student Name" 
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors" 
            />
            <input 
              type="text" 
              name="parent_name"
              required
              placeholder="Parent Name" 
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors" 
            />
            
            <div className="relative">
              <select 
                name="class_selection"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none appearance-none bg-white text-gray-600"
              >
                <option value="">Select Class</option>
                <option value="Class 5-8">Class 5-8</option>
                <option value="Class 9-10">Class 9-10</option>
                <option value="Class 11-12 (Arts)">Class 11-12 (Arts)</option>
                <option value="Class 11-12 (Commerce)">Class 11-12 (Commerce)</option>
                <option value="Class 11-12 (Science)">Class 11-12 (Science)</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            <input 
              type="tel" 
              name="phone_number"
              required
              placeholder="Phone Number" 
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors" 
            />
            
            <textarea 
              name="message"
              placeholder="Message (optional)" 
              rows="4" 
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors resize-none"
            ></textarea>

            {/* Success/Error Message display */}
            {submitMessage && (
              <p className={`text-center font-medium ${submitMessage.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
                {submitMessage}
              </p>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full text-white py-3.5 rounded font-bold shadow-lg transition-all mt-4 ${isSubmitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
            
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-green-800 text-green-900 hover:bg-green-50 py-3.5 rounded font-bold transition-all mt-2 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </form>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="py-24 bg-green-900 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-950/40"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Where Potential Meets Performance.
          </h2>
          <button 
            onClick={scrollToForm}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-bold text-lg shadow-xl transition-all hover:scale-105"
          >
            Secure Admission Now
          </button>
        </div>
      </section>

      {/* ================= BOTTOM FOOTER ================= */}
      <footer className="bg-green-950 py-8 border-t border-green-900">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-white font-serif font-bold text-lg mb-2">ZORBA Genius Academy</h4>
          <p className="text-green-300 text-sm mb-6">Shaping Excellence. Building Leaders.</p>
          <p className="text-green-600 text-xs mb-2">© 2026 ZORBA Genius Academy. All rights reserved.</p>
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="text-orange-400 hover:text-orange-300 text-xs underline transition-colors"
          >
            Privacy Policy
          </button>
        </div>
      </footer>

      {/* ================= PRIVACY POLICY MODAL ================= */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative animate-fade-in-up">
            <button 
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 bg-gray-100 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-serif font-bold text-green-900 mb-6 border-b pb-4">Privacy Policy</h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <p><strong>Effective Date:</strong> February 2026</p>
                <p>At ZORBA Genius Academy, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>
                
                <h3 className="font-bold text-gray-800 text-base mt-4">1. Information We Collect</h3>
                <p>When you submit an enquiry through our website, we may collect the following information: Student Name, Parent/Guardian Name, Phone Number, Class/Grade preference, and any messages you send us.</p>
                
                <h3 className="font-bold text-gray-800 text-base mt-4">2. How We Use Your Information</h3>
                <p>The information collected is strictly used to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Respond to your admission queries and requests.</li>
                  <li>Provide details about our courses, tuition batches, and events.</li>
                  <li>Contact you via phone or WhatsApp for counseling and enrollment purposes.</li>
                </ul>

                <h3 className="font-bold text-gray-800 text-base mt-4">3. Data Security</h3>
                <p>We implement strict security measures to ensure your data is kept confidential. We do not sell, rent, or trade your personal information to third parties.</p>

                <h3 className="font-bold text-gray-800 text-base mt-4">4. Contact Us</h3>
                <p>If you have any questions regarding this privacy policy, please contact us at:</p>
                <p><strong>Phone / WhatsApp:</strong> +91 7838636253</p>
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="bg-green-800 hover:bg-green-900 text-white px-8 py-2.5 rounded font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
