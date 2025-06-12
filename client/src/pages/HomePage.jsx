import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useEffect} from 'react';

const HomePage = () => {
  const [selectedField, setSelectedField] = useState('');
  const [hoveredStep, setHoveredStep] = useState(null);
  const stepRefs = useRef([]);
  
  const fields = [
    'Software Engineering',
    'Data Science',
    'Product Management',
    'UX Design',
    'DevOps',
    'Machine Learning'
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah J.',
      role: 'Software Engineer at Google',
      content: 'Aced my FAANG interview! The AI interviewer asked me the exact same system design question I practiced here.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Michael T.',
      role: 'Data Scientist at Amazon',
      content: 'The mock interviews helped me identify my weak points and improve my communication skills significantly.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 3,
      name: 'Priya K.',
      role: 'Product Manager at Meta',
      content: 'The behavioral questions were spot on. I felt so prepared walking into my actual interview.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: 4,
      name: 'David L.',
      role: 'Frontend Engineer at Netflix',
      content: 'The coding challenges and real-time feedback helped me improve my problem-solving approach.',
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
  ];

  const timelineSteps = [
    {
      title: 'CV Submission',
      desc: 'Upload your resume and fill out your application.',
      more: 'Tip: Tailor your CV to the job description and highlight relevant skills and achievements. Double-check for typos and ensure your contact information is up to date.'
    },
    {
      title: 'Application Review',
      desc: 'Recruiters screen your application for fit.',
      more: 'Recruiters look for keywords, relevant experience, and alignment with company values. Automated systems may be used for initial screening.'
    },
    {
      title: 'Online Assessment',
      desc: 'Complete coding or aptitude tests online.',
      more: 'These assessments may include coding challenges, logical reasoning, or personality tests. Practice beforehand to improve your speed and accuracy.'
    },
    {
      title: 'Recruiter Screening',
      desc: 'Initial call to discuss your background and interests.',
      more: 'Be ready to talk about your experience, motivation, and what you know about the company. This is also a chance to ask questions about the role.'
    },
    {
      title: 'Technical Interview(s)',
      desc: 'Solve coding problems and discuss solutions with engineers.',
      more: 'Expect whiteboard or online coding, algorithm questions, and technical discussions. Communicate your thought process clearly.'
    },
    {
      title: 'System Design',
      desc: 'Demonstrate your ability to design scalable systems.',
      more: 'You may be asked to design a system or architecture. Focus on scalability, reliability, and trade-offs. Use diagrams if possible.'
    },
    {
      title: 'Behavioral Interview',
      desc: 'Showcase your soft skills and cultural fit.',
      more: 'Use the STAR method (Situation, Task, Action, Result) to answer behavioral questions. Highlight teamwork, leadership, and problem-solving.'
    },
    {
      title: 'Final Interview / Offer',
      desc: 'Meet with leadership and receive your offer!',
      more: 'This may include final discussions with senior leaders or HR. Review your offer carefully and ask about next steps.'
    },
  ];

  // Handler to get the position of the hovered step
  const handleMouseEnter = (idx) => {
    setHoveredStep(idx);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-primary-700 to-secondary-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ace Your Tech Interview with <span className="text-secondary-300">AI-Powered</span> Practice
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Prepare for your dream job with personalized mock interviews tailored for top tech companies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="gradient-btn text-white font-medium py-3 px-8 rounded-xl shadow-elegant hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
                Start Practicing Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium py-3 px-8 rounded-xl hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Floating Elements Animation */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-400/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-10 -right-10 w-40 h-40 bg-secondary-400/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </section>

      <style>
        {`
          @keyframes spin360 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .spin-360-infinite {
            display: inline-block;
            animation: spin360 3s linear infinite;
          }
          @keyframes spin360group {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .spin-360-group {
            animation: spin360group 8s linear infinite;
            position: relative;
            width: 90vw;
            max-width: 500px;
            height: 220px;
            margin: 0 auto;
          }
          .company-ellipse-item {
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: center center;
            white-space: nowrap;
            transition: opacity 0.3s, transform 0.3s;
            will-change: transform, opacity;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            overflow: hidden;
            width: 100%;
            position: relative;
            background: #fff;
            padding: 24px 0;
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 18s linear infinite;
          }
          .marquee-item {
            flex: none;
            margin: 0 2.5rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: #333;
            opacity: 0.8;
            letter-spacing: 0.5px;
            transition: opacity 0.2s;
            white-space: nowrap;
          }
          .marquee-item:hover {
            opacity: 1;
          }
        `}
      </style>
      {/* Companies Showcase Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-dark mb-2">
              We mimic the interview process of the world's top tech companies
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Practice for interviews at companies like:
            </p>
          </div>
          <div className="marquee-container">
            <div className="marquee-track">
              {(() => {
                const companies = [
                  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                  { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
                  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                  { name: 'Meta (Facebook)', logo: 'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png' },
                  { name: 'Broadcom', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Broadcom_Logo.svg' },
                  { name: 'TSMC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TSMC.svg/1200px-TSMC.svg.png' },
                  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png' },
                  { name: 'Tencent', logo: 'https://brandlogos.net/wp-content/uploads/2022/07/tencent-logo_brandlogos.net_3v7ta.png' },
                  { name: 'Samsung Electronics', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
                  { name: 'Foxconn', logo: 'https://logo.clearbit.com/honhai.com' },
                  { name: 'Jingdong', logo: 'https://logo.clearbit.com/jd.com' },
                  { name: 'Alibaba', logo: 'https://logo.clearbit.com/alibaba.com' },
                  { name: 'AT&T', logo: 'https://logo.clearbit.com/att.com' },
                ];
                // Duplicate the list for seamless looping
                const marqueeList = companies.concat(companies);
                return marqueeList.map((company, idx) => {
                  // Larger size for specific companies
                  const largeLogos = ['Amazon', 'Google', 'Meta (Facebook)', 'NVIDIA', 'Samsung Electronics'];
                  const isLarge = largeLogos.includes(company.name);
                  return (
                    <span
                      key={company.name + idx}
                      className="marquee-item flex items-center justify-center"
                    >
                      <span className="flex items-center justify-center h-14 w-14 bg-white rounded-full p-2 shadow" style={{minWidth: 56, minHeight: 56}}>
                        <img
                          src={company.logo}
                          alt={company.name + ' logo'}
                          className="object-contain"
                          style={isLarge ? { maxWidth: 48, maxHeight: 48 } : { maxWidth: 40, maxHeight: 40 }}
                        />
                      </span>
                    </span>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose InterviewPro?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our platform offers everything you need to prepare for technical interviews at top companies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass p-8 rounded-2xl hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">AI-Powered Interviews</h3>
              <p className="text-gray-600">Our advanced AI simulates real interview scenarios with personalized feedback.</p>
            </div>
            {/* Feature 2 */}
            <div className="glass p-8 rounded-2xl hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Company-Specific Questions</h3>
              <p className="text-gray-600">Practice with questions tailored to the specific companies you're applying to.</p>
            </div>
            {/* Feature 3 */}
            <div className="glass p-8 rounded-2xl hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Detailed Performance Analytics</h3>
              <p className="text-gray-600">Track your progress and identify areas for improvement with detailed analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Interview Process Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Understand each step from submitting your CV to landing your offer. Here's what the typical process looks like:</p>
          </div>
          <div className="flex flex-col md:flex-row relative">
            <div className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:pr-8 timeline-steps-container" style={{minHeight: 500}}>
              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-primary-300 to-secondary-300"></div>
                <ol className="relative space-y-12 ml-5">
                  {timelineSteps.map((step, idx) => (
                    <li
                      key={idx}
                      ref={el => stepRefs.current[idx] = el}
                      className="flex items-start relative group transition-all duration-300 hover:shadow-elegant hover:bg-primary-50 rounded-xl p-4 cursor-pointer"
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="z-10 w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full font-bold border-2 border-primary-300 mr-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                {/* Info panel for hovered step (desktop only) */}
                {hoveredStep !== null && stepRefs.current[hoveredStep] && (
                  <div
                    className="hidden md:block absolute left-full ml-8 w-80 bg-primary-50 rounded-xl shadow-elegant p-6 transition-all duration-300 z-20"
                    style={{
                      top: stepRefs.current[hoveredStep].offsetTop,
                    }}
                  >
                    <h4 className="font-semibold text-primary-700 mb-2">Learn more</h4>
                    <p className="text-primary-700 text-sm">{timelineSteps[hoveredStep].more}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
          {/* Info panel for hovered step (mobile fallback) */}
          {hoveredStep !== null && (
            <div className="block md:hidden mt-4 bg-primary-50 rounded-xl shadow-elegant p-6 transition-all duration-300">
              <h4 className="font-semibold text-primary-700 mb-2">Learn more</h4>
              <p className="text-primary-700 text-sm">{timelineSteps[hoveredStep].more}</p>
            </div>
          )}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from candidates who landed their dream jobs after practicing with InterviewPro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-light p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-dark">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of successful candidates who prepared with our platform.
          </p>
          <Link to="/login">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


function AnimatedAIFace() {
  const pathRef = useRef(null);
  useEffect(() => {
    if (pathRef.current) {
      anime({
        targets: pathRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        direction: 'alternate',
        loop: true,
      });
    }
  }, []);
  return (
    <div className="flex justify-center mb-12">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" fill="#f0f4ff" stroke="#3b82f6" strokeWidth="4" />
        <ellipse cx="45" cy="55" rx="7" ry="10" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
        <ellipse cx="75" cy="55" rx="7" ry="10" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
        <path ref={pathRef} d="M45 80 Q60 95 75 80" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}