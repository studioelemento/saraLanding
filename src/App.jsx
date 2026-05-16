import React from 'react';
import { Plane, User, Briefcase, Globe, Phone, Mail, GraduationCap, MapPin, MessageSquare, Lock, Users } from 'lucide-react';
import './index.css';

function App() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. REPLACE THIS URL with your actual Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGGJFr9kFVDeBH-RqXpelU25h1mvMREW4hqBdBh2JNp5w9B2vbmL1L3vICILIFBs2G/exec';

    try {
      // 2. We use URLSearchParams to send data as 'parameter' that Google Apps Script reads
      const formBody = new URLSearchParams();
      formBody.append('fullName', formData.fullName);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('course', formData.course);
      formBody.append('city', formData.city);
      formBody.append('message', formData.message);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        body: formBody
      });

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        course: '',
        city: '',
        message: ''
      });
    } catch (error) {
      console.error('Error!', error.message);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen lg:h-screen lg:overflow-hidden overflow-x-hidden font-sans bg-primary-blue text-gray-800 bg-bottom-curve relative">
      <div className="flex flex-col lg:flex-row flex-1 relative z-10 lg:min-h-0">
        <div className="w-full lg:flex-1 hero-bg-responsive bg-cover bg-center lg:bg-[center_left] relative flex flex-col justify-start lg:justify-end pt-[400px] pb-8 px-6 lg:py-4 lg:px-10 text-white min-h-[700px] lg:min-h-0">
          <div className="mb-4 lg:mb-2 max-w-[500px] mt-20 lg:mt-0 relative z-10 ">
            <h1 className="font-outfit text-[2rem] sm:text-[2.4rem] lg:text-[2.2rem] xl:text-[2.6rem] font-extrabold leading-[1.2] lg:leading-[1.1] mb-1 uppercase tracking-wide drop-shadow-md">
              TAKE OFF TOWARDS YOUR
            </h1>
            <div className="font-caveat text-[3.2rem] sm:text-[3.8rem] lg:text-[3.2rem] xl:text-[3.8rem] text-accent-gold leading-[1] lg:leading-[0.9] mb-2 lg:mb-1 -ml-1 drop-shadow-md">
              Dream Career
            </div>
            <p className="text-[0.9rem] lg:text-[0.85rem] leading-snug opacity-95 max-w-[450px]">
              Join our Cabin Crew & Ground Staff Courses and step into the world of opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-5 gap-x-2 lg:flex lg:justify-between lg:gap-3 border-t border-white/20 pt-5 lg:pt-3 max-w-[600px] relative z-10">
            <div className="flex flex-col items-center text-center gap-1 flex-1 relative lg:after:content-[''] lg:after:absolute lg:after:-right-2 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-px lg:after:bg-white/20">
              <Plane className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-secondary-blue" />
              <span className="text-[0.8rem] lg:text-[0.7rem] xl:text-[0.75rem] font-medium leading-tight text-white/90">Industry Focused Training</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 flex-1 relative lg:after:content-[''] lg:after:absolute lg:after:-right-2 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-px lg:after:bg-white/20">
              <Users className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-secondary-blue" />
              <span className="text-[0.8rem] lg:text-[0.7rem] xl:text-[0.75rem] font-medium leading-tight text-white/90">Expert Faculty & Guidance</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 flex-1 relative lg:after:content-[''] lg:after:absolute lg:after:-right-2 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-px lg:after:bg-white/20">
              <Briefcase className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-secondary-blue" />
              <span className="text-[0.8rem] lg:text-[0.7rem] xl:text-[0.75rem] font-medium leading-tight text-white/90">100% Placement Assistance</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 flex-1 relative">
              <Globe className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-secondary-blue" />
              <span className="text-[0.8rem] lg:text-[0.7rem] xl:text-[0.75rem] font-medium leading-tight text-white/90">Global Career Opportunities</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[580px] xl:w-[680px] bg-primary-blue bg-right-texture flex flex-col items-center justify-center py-10 px-4 sm:px-12 lg:py-5 lg:pl-6 lg:pr-20 xl:pl-8 xl:pr-32 relative z-10 shadow-none lg:shadow-[-20px_0_40px_rgba(0,0,0,0.3)] bg-airplane-path lg:-ml-32 xl:-ml-48 transition-all duration-500">
          <div className="hidden lg:flex mb-4 lg:mb-2 text-center flex-col items-center">
            <img src="/Sara Aviation Logo White Orange.png" alt="Sara Aviation" className="max-w-[180px] lg:max-w-[140px] xl:max-w-[170px] mb-0.5" />
          </div>

          <div className="text-center text-white mb-6 lg:mb-2">
            <h2 className="text-[1.2rem] lg:text-[1.05rem] xl:text-[1.1rem] font-semibold mb-0 uppercase tracking-wide">
              YOUR JOURNEY IN AVIATION <span className="text-secondary-blue font-extrabold block text-[1.6rem] lg:text-[1.4rem] xl:text-[1.5rem]">BEGINS HERE!</span>
            </h2>
            <p className="text-[0.9rem] lg:text-[0.75rem] xl:text-[0.8rem] opacity-80 max-w-[380px] mx-auto mt-1 lg:mt-0.5">
              Enroll today and turn your passion for aviation into a rewarding career.
            </p>
          </div>

          <div className="bg-white rounded-xl py-6 px-8 lg:py-4 lg:px-7 w-full shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-4 lg:mb-2">
                  <h3 className="text-primary-blue font-outfit font-extrabold text-[1.4rem] lg:text-[1.15rem] xl:text-[1.25rem] mb-0.5">ENQUIRE NOW</h3>
                  <p className="text-gray-500 text-[0.95rem] lg:text-[0.8rem] xl:text-[0.85rem]">Kickstart your aviation career with us</p>
                  <div className="w-10 h-[2px] bg-secondary-blue mx-auto mt-1.5"></div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-2">
                    <div className="mb-3 lg:mb-2 relative flex-1">
                      <User className="absolute left-3 top-3 lg:top-2.5 text-gray-400 w-[15px] h-[15px] pointer-events-none" />
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full py-2.5 lg:py-2 pr-3 pl-9 border border-gray-200 rounded-md text-[0.95rem] lg:text-[0.85rem] outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 focus:border-secondary-blue focus:ring-2 focus:ring-secondary-blue/10" placeholder="Full Name" />
                    </div>
                    <div className="mb-3 lg:mb-2 relative flex-1">
                      <Phone className="absolute left-3 top-3 lg:top-2.5 text-gray-400 w-[15px] h-[15px] pointer-events-none" />
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full py-2.5 lg:py-2 pr-3 pl-9 border border-gray-200 rounded-md text-[0.95rem] lg:text-[0.85rem] outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 focus:border-secondary-blue focus:ring-2 focus:ring-secondary-blue/10" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div className="mb-3 lg:mb-2 relative">
                    <Mail className="absolute left-3 top-3 lg:top-2.5 text-gray-400 w-[15px] h-[15px] pointer-events-none" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full py-2.5 lg:py-2 pr-3 pl-9 border border-gray-200 rounded-md text-[0.95rem] lg:text-[0.85rem] outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 focus:border-secondary-blue focus:ring-2 focus:ring-secondary-blue/10" placeholder="Email Address" />
                  </div>

                  <div className="mb-3 lg:mb-2 relative">
                    <GraduationCap className="absolute left-3 top-3 lg:top-2.5 text-gray-400 w-[15px] h-[15px] pointer-events-none" />
                    <select name="course" value={formData.course} onChange={handleChange} required className="w-full py-2.5 lg:py-2 pr-3 pl-9 border border-gray-200 rounded-md text-[0.95rem] lg:text-[0.85rem] outline-none transition-all duration-300 text-gray-500 appearance-none focus:border-secondary-blue focus:ring-2 focus:ring-secondary-blue/10">
                      <option value="" disabled>Select Course</option>
                      <option value="Diploma Course in Aviation, Hospitality and Travel Management">Diploma Course in Aviation, Hospitality and Travel Management</option>
                      <option value="PG Diploma Course in Aviation, Hospitality and Travel Management">PG Diploma Course in Aviation, Hospitality and Travel Management</option>
                      <option value="Foundation in Travel & Tourism with Amadeus">Foundation in Travel & Tourism with Amadeus</option>
                      <option value="Airport Operations Fundamentals">Airport Operations Fundamentals</option>
                      <option value="Cargo Introductory Course">Cargo Introductory Course</option>
                      <option value="Passenger Ground Services Course">Passenger Ground Services Course</option>
                      <option value="Others">Others</option>
                    </select>
                    <div className="absolute right-4 top-3.5 lg:top-3 pointer-events-none text-gray-400 text-[10px]">
                      ▼
                    </div>
                  </div>

                  <div className="mb-3 lg:mb-2 relative">
                    <MapPin className="absolute left-3 top-3 lg:top-2.5 text-gray-400 w-[15px] h-[15px] pointer-events-none" />
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full py-2.5 lg:py-2 pr-3 pl-9 border border-gray-200 rounded-md text-[0.95rem] lg:text-[0.85rem] outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 focus:border-secondary-blue focus:ring-2 focus:ring-secondary-blue/10" placeholder="City" />
                  </div>

                  <div className="mb-4 lg:mb-3 relative">
                    <MessageSquare className="absolute left-3 top-3 lg:top-2.5 text-gray-400 w-[15px] h-[15px] pointer-events-none" />
                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full py-2 lg:py-2 pr-3 pl-9 border border-gray-200 rounded-md text-[0.95rem] lg:text-[0.85rem] outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 min-h-[60px] lg:min-h-[50px] resize-y focus:border-secondary-blue focus:ring-2 focus:ring-secondary-blue/10" placeholder="Your Message (Optional)"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-secondary-blue text-white border-none rounded-md py-2.5 lg:py-2 xl:py-2.5 text-[1.05rem] lg:text-[0.9rem] xl:text-[0.95rem] font-bold cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95 mt-1 lg:mt-0.5 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                  </button>
                </form>

                <div className="text-center mt-3 lg:mt-2 text-[0.7rem] lg:text-[0.65rem] text-gray-500 flex items-center justify-center gap-1.5">
                  <Lock size={10} /> Your information is safe with us.
                </div>
              </>
            ) : (
              <div className="py-12 lg:py-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-green-50">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-primary-blue font-outfit font-extrabold text-[1.6rem] lg:text-[1.4rem] mb-2">THANK YOU!</h3>
                <p className="text-gray-600 text-[1.05rem] lg:text-[0.9rem] leading-relaxed max-w-[250px] mx-auto mb-8">
                  Your enquiry has been submitted successfully. Our team will contact you soon!
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-secondary-blue font-bold text-[0.9rem] hover:text-primary-blue transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Submit another enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-primary-blue lg:bg-transparent text-white pt-6 pb-2 px-6 lg:py-2 lg:px-8 xl:px-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-8 items-center text-[0.85rem] lg:text-[0.75rem] border-t border-white/10 relative z-20">
        <div className="lg:hidden mb-2">
          <img src="/Sara Aviation Logo White Orange.png" alt="Sara Aviation" className="max-w-[160px]" />
        </div>
        <a href="tel:+919187250470" className="flex items-center gap-2 lg:gap-1.5 text-white no-underline hover:text-secondary-blue transition-colors">
          <Phone className="text-secondary-blue w-[16px] h-[16px] lg:w-[14px] lg:h-[14px]" />
          +91 91872 50470
        </a>
        <div className="hidden sm:block w-px h-3 bg-white/30"></div>
        <a href="https://www.saraaviation.in/" className="flex items-center gap-2 lg:gap-1.5 text-white no-underline hover:text-secondary-blue transition-colors">
          <Globe className="text-secondary-blue w-[16px] h-[16px] lg:w-[14px] lg:h-[14px]" />
          www.saraaviation.in
        </a>
        <div className="hidden sm:block w-px h-3 bg-white/30"></div>
        <div className="flex items-center gap-2 lg:gap-1.5">
          <MapPin className="text-secondary-blue w-[16px] h-[16px] lg:w-[14px] lg:h-[14px]" />
          Your Career. Our Commitment.
        </div>
        <div className="w-full sm:w-auto flex justify-center lg:justify-start lg:ml-0">
          <a 
            href="https://saraaviation.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 bg-accent-gold text-primary-blue px-5 py-2 rounded-full font-bold text-[0.8rem] lg:text-[0.7rem] hover:bg-white hover:shadow-md transition-all active:scale-95 shadow-sm uppercase tracking-wider"
          >
            Visit Our Website
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
