import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import Navbar from './Components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { FaCopy, FaCheck, FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import profileImg from './assets/profileimg.jpeg';
function App() {
  const [copied, setCopied]       = useState(false);
  const [visibleCerts, setVisibleCerts] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText("Saniahyd1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    emailjs.sendForm(
      'service_eki968h',   // 🔁 replace
      'template_3gxu137',  // 🔁 replace
      formRef.current,
      'q8_fuRjhFSq2uG79w'    // 🔁 replace
    )
    .then(() => {
      setFormStatus('success');
      formRef.current.reset();
      setTimeout(() => setFormStatus('idle'), 4000);
    })
.catch((err) => {
  console.log('EmailJS Error:', err);  // open browser console to read it
  setFormStatus('error');
  setTimeout(() => setFormStatus('idle'), 4000);
});;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  }, []);

  const toggleCertificate = (index) => {
    setVisibleCerts(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      <Navbar />

      {/* ── Home ─────────────────────────────────────── */}
      <section id="home" className="home-section">
        <div
          className="home-content"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            fontFamily: 'Georgia, bold, large'
          }}
        >
          <div className="home-text" style={{ flex: '1', minWidth: '300px', padding: '20px' }}>
            <p style={{ color: '#d79615', fontWeight: 'bold', fontSize: '20px' }}>
              ---Open to freelance projects and full-time opportunities.
            </p>
            <p><i>Hi, I'm </i></p>
            <p style={{ fontWeight: 'bold', fontSize: '3.4rem' }}>
              <span style={{ color: '#076b6b' }}>Sania </span><br />
              <span style={{ color: '#d79615' }}>Sultana</span>
            </p>
            <h3>
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'Frontend Specialist (React.js)',
                  'Backend Development (Node.js, Python)',
                  'JavaScript (ES6+)',
                  'React.js & Modern UI Development',
                  'REST API Development',
                  'Database Management (MongoDB, MySQL)',
                  'HTML5, CSS3 & Responsive Design',
                  'Tailwind CSS',
                  'Java Programming',
                  'Software Engineering',
                  'Cloud Computing (AWS, Azure)',
                  'Data Analytics',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h3>
            <p style={{ textAlign: 'justify', marginTop: '20px', fontSize: '19px', lineHeight: '1.5' }}>
              <i>
                An enthusiastic developer and MCA student, passionate about crafting seamless
                and dynamic web experiences. I love transforming ideas into powerful digital
                solutions through clean design and efficient code. With a blend of creativity
                and logic, I strive to make every project purposeful and impactful.
              </i>
            </p>
          </div>

          <div className="home-image">
            <img
              src={profileImg}
              alt="Sania Sultana"
              style={{
                width: '100%',
                maxWidth: '225px',
                height: 'auto',
                boxShadow: '0 25px 75px rgba(19, 8, 0, 0.46)',
                borderRadius: '50%',
                border: '5px solid #624402',
                animation: 'float 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section id="about">
        <h1>About Me</h1>
        <p>
          I'm a dedicated Full Stack Developer currently pursuing Master's of Computer
          Applications (MCA) from Osmania University while working as a freelancer.
          My journey in technology is driven by curiosity, creativity, and a deep passion
          for turning ideas into functional digital experiences.
          <br /><br />
          Balancing academics and freelancing has shaped me into a disciplined learner and
          a self-motivated professional who thrives in both independent and collaborative
          environments. I enjoy exploring new technologies, understanding how systems connect,
          and bringing concepts to life through code. My goal is to contribute to meaningful
          projects that make technology accessible, intuitive, and impactful for users around
          the world.
        </p>
      </section>

      {/* ── Skills ───────────────────────────────────── */}
      <section id="skills">
        <div className="skills-label">WHAT I DO</div>
        <div className="skills-layout">

          {/* Left — bars */}
          <div className="skills-left">
            <h2 className="skills-heading">
              Skills &amp; <em>Expertise</em>
            </h2>
            <div className="skill-bars">
              {[
                { name: "JavaScript / ES6+", pct: 88, gold: false },
                { name: "React.js",          pct: 85, gold: false },
                { name: "Python",            pct: 80, gold: false },
                { name: "HTML5 & CSS3",      pct: 92, gold: false },
                { name: "Node.js / Express", pct: 72, gold: false  },
                { name: "SQL / MongoDB",     pct: 70, gold: false },
              ].map((s) => (
                <div className="skill-bar-row" key={s.name}>
                  <div className="skill-bar-meta">
                    <span className="skill-bar-name">{s.name}</span>
                    <span className="skill-bar-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className={`skill-bar-fill ${s.gold ? "gold" : ""}`}
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — category cards */}
          <div className="skills-right">
            {[
              { icon: "⚛️", iconBg: "#ede9f8", name: "Frontend", desc: "Building responsive, interactive UIs",  tags: ["React.js","HTML5","CSS3","Tailwind","JavaScript"] },
              { icon: "🔄", iconBg: "#e6f4f1", name: "Backend",  desc: "Server-side logic & APIs",              tags: ["Python","Node.js","Express","REST APIs","Flask"] },
              { icon: "🗄️", iconBg: "#edeaf6", name: "Database", desc: "Data modeling & management",            tags: ["MySQL","MongoDB","PostgreSQL","Firebase"] },
              { icon: "🛠️", iconBg: "#edeaf6", name: "Tools",    desc: "Dev workflow & deployment",             tags: ["Git","GitHub","VS Code","Figma","Vercel"] },
            ].map((cat) => (
              <div className="skill-cat-card" key={cat.name}>
                <div className="skill-cat-icon" style={{ background: cat.iconBg }}>{cat.icon}</div>
                <h3 className="skill-cat-name">{cat.name}</h3>
                <p className="skill-cat-desc">{cat.desc}</p>
                <div className="skill-cat-tags">
                  {cat.tags.map((t) => <span className="skill-pill" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Achievements ─────────────────────────────── */}
      <section id="achievements" className="achievements-section">
        <h2>Achievements & Certifications</h2>
        <div className="achievements-scroll">
          {[
            { img: "./hackathon.jpg",       title: "Full Stack Development Hackathon (ReactJS) Certificate of Achievement",  desc: "Secured First Position for developing an E-commerce Makeup App using ReactJS, organized by St.Ann's College for Women in collaboration with Pantech eLearning." },
            { img: "./Task.jpg",            title: "Certificate of Appreciation – Data Analytics Learnathon",                desc: "Recognized for outstanding performance during the LEARNATHON 4.0: AI/ML Workshop & Hackathon on January 31, 2025, organized by CO-IGNITE in collaboration with TASK." },
            { img: "./manac.jpg",           title: "Web Project Completion Certificate",                                      desc: "Developed a \"Disaster Management System\" using HTML, CSS, JavaScript, and PHP with MySQL integration. Features include an AI-powered chatbot and a dynamic news section." },
            { img: "./pythonCoursera.jpg",  title: "Python Programming Certification",                                        desc: "Acquired a strong foundation in Python, covering OOP, data structures, and API development. Gained practical experience building efficient, scalable, and maintainable software." },
            { img: "./cloudcomputing.jpg",  title: "Cloud Computing Course Completion Certificate",                           desc: "Successfully completed Infosys Cloud Computing course with hands-on experience in IaaS, PaaS, SaaS, and cloud deployment strategies." },
            { img: "./dbcousera.jpg",       title: "Data Analytics Course (Google/Coursera Certificate)",                    desc: "Completed Google/Coursera's \"Data, Data, Everywhere\" course, acquiring practical skills in data analytics, visualization, and interpretation." },
          ].map((cert, index) => (
            <div className="achievement-card animate" key={index}>
              <h3>{cert.title}</h3>
              <p style={{ textAlign: 'justify' }}>{cert.desc}</p>
              <button onClick={() => toggleCertificate(index)} className="show-cert-btn">
                {visibleCerts[index] ? "Hide Certificate" : "Show Certificate"}
              </button>
              {visibleCerts[index] && (
                <a href={cert.img} target="_blank" rel="noopener noreferrer">
                  <img src={cert.img} alt={cert.title} className="cert-image" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <section id="projects">
        <h1>Projects & Experience</h1>
        <div className="projects-row">
          <div className="project-card">
            <h3>AI Enabled Disaster Management System Website</h3>
            <p>Disaster Management System (2025) – Developed web solution with Python, HTML, CSS, PHP, and MySQL during internship. VIEW ON DESKTOP</p>
            <a href="https://saniahyd1.github.io/Disaster-Management/" target="_blank" rel="noopener noreferrer">View</a>
          </div>
          <div className="project-card">
            <h3>Fetch_news Application</h3>
            <p>Fetch Disaster News is a Python program that automatically gathers the latest disaster-related news from trusted sources and presents them in a clear, organized format.</p>
            <a href="https://saniahyd1.github.io/Fetch-news/" target="_blank" rel="noopener noreferrer">View</a>
          </div>
          <div className="project-card">
            <h3>GlamStore Website</h3>
            <p>Winner of the Hackathon — Built with React.js in just 3 hours! A modern e-commerce MVP rapidly developed during a hackathon, leading our team to win 1st prize.</p>
            <a href="https://miniproject-pi-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
          </div>
          <div className="project-card">
            <h3>Guest House Website</h3>
            <p>Developed and deployed a full-stack website for Hill Street Service Apartment using Next.js with TypeScript, Prisma, and Supabase, focusing on performance and responsive design.</p>
            <a href="https://www.hillstreet.in/" target="_blank" rel="noopener noreferrer">View</a>
          </div>
        </div>
      </section>

      {/* ── Resume ───────────────────────────────────── */}
      <section id="resume" className="resume-section" style={{ color: 'black' }}>
        <h1>Resume</h1>
        <p>
          Here's my professional resume highlighting my education, technical skills,
          and project experience. Feel free to download it to know more about my journey
          and capabilities.
        </p>
        <a href="./SaniaSultana.pdf" download="SaniaResume.pdf" className="resume-btn">
          Download Resume
        </a>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="contact-label">
          <span>GET IN TOUCH</span>
        </div>

        <div className="contact-grid">

          {/* Left */}
          <div className="contact-left">
            <h2 className="contact-heading">
              Let's work <em>together</em>
            </h2>
            <p className="contact-intro">
              Have a project in mind? Looking for a dedicated developer? I'd love to hear
              from you and explore how we can create something remarkable together.
            </p>

            <ul className="contact-details">
              <li>
                <div className="c-icon">📍</div>
                <div>
                  <span className="c-label">Location</span>
                  <span className="c-val">Hyderabad, Telangana, India</span>
                </div>
              </li>
              <li>
                <div className="c-icon">🎓</div>
                <div>
                  <span className="c-label">Education</span>
                  <span className="c-val">MCA — Osmania University</span>
                </div>
              </li>
              <li>
                <div className="c-icon">💼</div>
                <div>
                  <span className="c-label">Status</span>
                  <span className="c-val">Open to work</span>
                </div>
              </li>
              <li className="contact-copyable" onClick={handleCopy} title="Click to copy">
                <div className="c-icon"><FaEnvelope /></div>
                <div>
                  <span className="c-label">Email</span>
                  <span className="c-val">Saniahyd1@gmail.com</span>
                </div>
                <div className="copy-badge">
                  {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
                </div>
              </li>
              <li>
                <div className="c-icon"><FaPhone /></div>
                <div>
                  <span className="c-label">Phone</span>
                  <span className="c-val">+91 9515120036</span>
                </div>
              </li>
              <li>
                <div className="c-icon"><FaGithub /></div>
                <div>
                  <span className="c-label">GitHub</span>
                  <a href="https://github.com/saniahyd1" target="_blank" rel="noopener noreferrer" className="c-link">
                    github.com/saniahyd1
                  </a>
                </div>
              </li>
              <li>
                <div className="c-icon"><FaLinkedin /></div>
                <div>
                  <span className="c-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/sania-sultana/" target="_blank" rel="noopener noreferrer" className="c-link">
                    linkedin.com/in/sania-sultana
                  </a>
                </div>
              </li>
            </ul>

            <p className="contact-fun-note">
              Oh, you just scrolled through 7 sections — that's impressive!
              Time to stand up and take a little walk. Keep the blood flowing! ☺️
            </p>
          </div>

          {/* Right — Form */}
          <div className="contact-right">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project inquiry, collaboration..."
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'idle'     && 'Send Message →'}
                {formStatus === 'sending'  && 'Sending...'}
                {formStatus === 'success'  && '✓ Message Sent!'}
                {formStatus === 'error'    && '✗ Failed — try again'}
              </button>

              {formStatus === 'success' && (
                <p className="form-feedback success">
                  Your message landed in my inbox — I'll get back to you soon! 🎉
                </p>
              )}
              {formStatus === 'error' && (
                <p className="form-feedback error">
                  Something went wrong. Please email me directly at Saniahyd1@gmail.com
                </p>
              )}

            </form>
          </div>

        </div>

        <footer className="contact-footer">
          <span>© 2025 Sania Sultana</span>
          <span className="footer-dot">·</span>
          <span>Proudly built in React.js</span>
        </footer>
      </section>

    </div>
  );
}

export default App;