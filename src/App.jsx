import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Typewriter } from 'react-simple-typewriter';


import profileImg from './assets/profileimg.jpeg';

import { FaCopy, FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function App() {
  const [copied, setCopied] = useState(false);
  const [visibleCerts, setVisibleCerts] = useState({}); // ✅ Added missing state

  const handleCopy = () => {
    navigator.clipboard.writeText("Saniahyd1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
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
     

      {/* Home Section */}
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
          <div className="home-text" style={{ flex: '1', minWidth: '300px', marginRight: '20px' }}>
            <p><i>Hi, I'm </i></p>
            <h1>Sania Sultana</h1>
            <h3>
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'Web Application Developer',
                  'JavaScript',
                  'React.js',
                  'Python',
                  'Node.js',
                  'MongoDB',
                  'MySQL',
                  'HTML & CSS',
                  'Tailwind CSS',
                  'Java',
                  'Software Developer'
                  
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
                An enthusiastic developer and MCA student, passionate about crafting seamless and dynamic web experiences.
                I love transforming ideas into powerful digital solutions through clean design and efficient code.
                With a blend of creativity and logic, I strive to make every project purposeful and impactful.
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
                animation: 'float 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a dedicated Full Stack Developer currently pursuing Master's of Computer Applications (MCA) from Osmania University while working as a freelancer.
          My journey in technology is driven by curiosity, creativity, and a deep passion for turning ideas into functional digital experiences.
          <br /><br />
          Balancing academics and freelancing has shaped me into a disciplined learner and a self-motivated professional who thrives in both independent and collaborative environments.
          I enjoy exploring new technologies, understanding how systems connect, and bringing concepts to life through code.
          My goal is to contribute to meaningful projects that make technology accessible, intuitive, and impactful for users around the world.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <h3>Languages</h3>
        <div className="skills-row">
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" width="50" />
            <h3>Java</h3>
             
          </div>
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" width="50" />
            <h3>Python</h3>
            
          </div>
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" width="50" />
            <h3>JavaScript</h3>
            
          </div>
        </div>

        <h3>Frontend</h3>
        <div className="skills-row">
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" width="50" />
            <h3>HTML</h3>
            
          </div>
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" width="50" />
            <h3>CSS</h3>
            
          </div>
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" width="50" />
            <h3>React.js</h3>
            
          </div>
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React Native" width="50" />
            <h3>React Native</h3>
            
          </div>
          <div className="skill-card">
            <img src="./Tailwindcss.png" alt="TailwindCSS" width="50" />
            <h3>Tailwind CSS</h3>
          </div>
        </div>

        <h3>Backend</h3>
        <div className="skills-row">
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node" width="50" />
            <h3>Node.js</h3>
          </div>
          <div className="skill-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySQL" width="50" />
            <h3>MySQL</h3>
          </div>
          <div className="skill-card">
            <img src="./mongodb.png" alt="MongoDB" width="50" />
            <h3>MongoDB</h3>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <h2>Achievements & Certifications</h2>
        <div className="achievements-scroll">
          {[
             {img:"./hackathon.jpg", title: "Full Stack Development Hackathon (ReactJS) Certificate of Achievement", desc: "Secured First Position for developing an E-commerce Makeup App using ReactJS, organized by St.Ann's College for Women in collaboration with Pantech eLearning." },
            {img: "./Task.jpg", title: "Certificate of Appreciation – Data Analytics Learnathon",  desc: "Recognized for outstanding performance during the LEARNATHON 4.0: AI/ML Workshop & Hackathon on January 31, 2025, organized by CO-IGNITE in collaboration with TASK." },
            { img: "./manac.jpg", title: "Web Project Completion Certificate", desc: "Developed a “Disaster Management System” using HTML, CSS, JavaScript, and PHP with MySQL integration. Features include an AI-powered chatbot for user assistance and a dynamic news section for daily disaster updates." },
            { img: "./pythonCoursera.jpg", title: "Python Programming Certification", desc: "Acquired a strong foundation in Python, covering Object-Oriented Programming (OOP), data structures, and API development. Gained practical experience applying these skills to build efficient, scalable, and maintainable software solutions." },
            { img: "./cloudcomputing.jpg", title: "Cloud Computing Course Completion Certificate", desc: "Successfully completed Infosys Cloud Computing course with hands-on experience in IaaS, PaaS, SaaS, and cloud deployment strategies. Gained skills in scalability, security, and cost-efficiency. Certified in key cloud technologies." },
            { img: "./dbcousera.jpg", title: "Data Analytics Course (Google/Coursera Certificate)", desc: "Successfully completed Google/Coursera’s “Data, Data, Everywhere” professional course, acquiring practical skills in data analytics, visualization, and interpretation to derive actionable business insights." },
            ].map((cert, index) => (
            <div className="achievement-card animate" key={index}>
              <h3>{cert.title}</h3>
              <p style={{textAlign: 'justify'}}>{cert.desc}</p>

              <button
                onClick={() => toggleCertificate(index)}
                className="show-cert-btn"
              >
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

      <section id="projects">
  <h2>Projects & Experience</h2>
  <div className="projects-row">
    <div className="project-card">
      
      <h3>AI Enabled Disaster Management System Website  </h3>
      <p>Disaster Management System (2025) – Developed web solution with Python, HTML, CSS, PHP, and MySQL during internship.VIEW ON DESKTOP</p>
      <a href="https://saniahyd1.github.io/Disaster-Management/" target="_blank" rel="noopener noreferrer">View</a>
    </div>



    <div className="project-card">
      
      <h3>Fetch_news Application</h3>
      <p>Fetch Disaster News is a Python program that automatically gathers the latest disaster-related news from trusted sources and presents them in a clear, organized format. </p>
      <a href="https://saniahyd1.github.io/Fetch-news/" target="_blank" rel="noopener noreferrer">View</a>
    </div>

    
    <div className="project-card">
      
      <h3>GlamStore Website</h3>
      <p>Winner of the Hackathon — Built with React.js in just 3 hours! A modern e-commerce MVP (Minimum Viable Product) rapidly developed during a hackathon, leading our team to win 1st prize.</p>
      <a href="https://miniproject-pi-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
    </div>

        <div className="project-card">
     
      <h3> Guest House Website</h3>
      <p>Developed and deployed a full-stack website for Hill Street Service Apartment using Next.js with TypeScript (TSX), Prisma, and Supabase, focusing on performance, scalability, and responsive design. </p>
      <a href="https://www.hillstreet.in/" target="_blank" rel="noopener noreferrer">View</a>

    </div>
  </div>
</section>


      {/* Resume Section */}
      <section id="resume" className="resume-section" style={{color:'black'}}>
        <h1>Resume</h1>
        <p>
          Here’s my professional resume highlighting my education, technical skills, and project experience.
          Feel free to download it to know more about my journey and capabilities.
        </p>
        <a
          href="./SaniaSultana.pdf"
          download="SaniaResume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" style={{color:'black'}}>
        <h2>Contact Me</h2>
        <p><b>Feel free to reach out for collaborations or just a friendly hello 👋</b></p>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">Saniahyd1@gmail.com</span>
            <button onClick={handleCopy} className="copy-btn">
              <FaCopy />
            </button>
            {copied && <span className="copied-text">Copied!</span>}
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span className="contact-text">+91 9515120036</span>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/saniahyd1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/sania-sultana
            </a>
          </div>
          
          <div className="contact-item">
  <FaLinkedin className="contact-icon" />
  <a
    href="https://www.linkedin.com/in/sania-sultana/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
  >
    linkedin.com/in/sania-sultana
  </a>
</div>

          <p style={{ textAlign:'justify', marginTop: '20px', fontSize: '20px', color: '#333' }}><br/>
          <br/>
            Oh also, you just scrolled the length of 7 sections!<br />
            That's a lot of sitting, so here's your reminder to stand up and take a walk. Keep the blood flowing!☺️
          </p>
        </div>
        <p style={{ textAlign:'center',marginTop: '20px', fontSize: '14px', color: '#666' }}>

        © 2025 Sania Sultana | Proudly built in React.js.</p>
      </section>
    </div>
  );
}

export default App;

