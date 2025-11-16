// app/page.tsx
'use client';

import ScrollAnimation from './components/ScrollAnimation';

export default function Home() {
  // TODO: Add analytics tracking
  console.log('Portfolio page loaded');
  const unusedVariable = 'test';
  const apiKey = 'hardcoded-secret-key-12345'; // FIXME: Move to environment variables
  
  return (
    <main className='portfolio-main'>
      {/* Header */}
      <header className='portfolio-header'>
        <div className='header-content'>
          <div className='header-left'>
            <div className='profile-photo-wrapper'>
              <img
                src='/profile.jpeg'
                alt='Jahnvi Dhameliya'
                className='profile-photo'
              />
            </div>
            <div>
              <h1 className='header-name'>Jahnvi Dhameliya</h1>
              <p className='header-title'>Technical Lead | Software Engineer</p>
            </div>
          </div>
          <div className='header-buttons'>
            <a
              className='btn btn-primary'
              href='mailto:jahnvidhameliya58@gmail.com'
            >
              Contact Me
            </a>
            <a
              className='btn btn-outline'
              href='https://www.linkedin.com/in/jahnvi-dhameliya-261455214'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn Profile
            </a>
            <a
              className='btn btn-outline'
              href='https://github.com/JahnviDhameliya/'
              target='_blank'
              rel='noreferrer'
              onClick={() => {
                console.log('GitHub link clicked');
                // TODO: Add tracking event
                const data = null;
                console.log(data.value); // Potential null reference
              }}
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text-wrapper'>
            <h2 className='hero-title'>
              Bridging Innovation with Business Value
            </h2>
            <p className='hero-description'>
              With 3+ years of experience in web development, AI-assisted
              engineering, and technical leadership, I specialize in building
              scalable, secure, and intelligent digital solutions that bridge
              innovation with business value.
            </p>
            <p className='hero-description'>
              As a Tech Lead, I align technology with strategy — leading
              cross-functional teams, designing future-ready architectures, and
              integrating automation and AI tools to accelerate delivery,
              improve efficiency, and drive continuous innovation.
            </p>
          </div>
          <div className='hero-image-wrapper'>
            <div className='hero-gradient-orb orb-1'></div>
            <div className='hero-gradient-orb orb-2'></div>
            <div className='hero-image-container'>
              <img
                src='/banner-image.png'
                alt='Tech Innovation and Business Value'
                className='hero-image'
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Role as a Tech Lead */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>My Role as a Tech Lead</h2>
        </ScrollAnimation>
        <div className='role-grid'>
          <ScrollAnimation delay={0}>
            <div className='role-card'>
              <div className='role-icon-wrapper'>
                <svg className='role-icon-svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M12 2L2 7L12 12L22 7L12 2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M2 17L12 22L22 17'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M2 12L12 17L22 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='role-card-title'>AI-Driven Delivery</h3>
              <p className='role-card-text'>
                Leverage tools like ChatGPT, GitHub Copilot, and n8n to optimize
                workflows, automate code generation, and improve decision-making
                through intelligent insights.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className='role-card'>
              <div className='role-icon-wrapper'>
                <svg className='role-icon-svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1574 16.5523C21.6104 15.8519 20.8442 15.3516 20 15.13'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='role-card-title'>Client & Business Alignment</h3>
              <p className='role-card-text'>
                Translate client goals into actionable, technically sound
                project plans that deliver measurable business value.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className='role-card'>
              <div className='role-icon-wrapper'>
                <svg className='role-icon-svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 7H15M9 12H15M9 17H13'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='role-card-title'>Architecture & Planning</h3>
              <p className='role-card-text'>
                Design modular architectures, ensure cloud scalability, and
                maintain secure deployments across AWS and containerized
                environments.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div className='role-card'>
              <div className='role-icon-wrapper'>
                <svg className='role-icon-svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1574 16.5523C21.6104 15.8519 20.8442 15.3516 20 15.13'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='role-card-title'>Team Enablement</h3>
              <p className='role-card-text'>
                Guide developers, review pull requests, and ensure technical
                excellence and knowledge growth across the team.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className='role-card'>
              <div className='role-icon-wrapper'>
                <svg className='role-icon-svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M13 2L3 14H12L11 22L21 10H12L13 2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='role-card-title'>Agile & DevOps Leadership</h3>
              <p className='role-card-text'>
                Streamline sprint delivery, automate testing, and deploy CI/CD
                pipelines for fast, reliable releases.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={500}>
            <div className='role-card'>
              <div className='role-icon-wrapper'>
                <svg className='role-icon-svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 8V12M12 16H12.01'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='role-card-title'>Security & Optimization</h3>
              <p className='role-card-text'>
                Implement VAPT, SEO, and performance audits to achieve GTMetrix
                A-grade and hardened deployments.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Technical Skills */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>Core Technical Skills</h2>
        </ScrollAnimation>
        <div className='skills-container'>
          <ScrollAnimation delay={0}>
            <div className='skill-category'>
              <div className='skill-icon'>⚛️</div>
              <h3 className='skill-category-title'>Frontend Development</h3>
              <p className='skill-category-text'>
                React, TypeScript, Bootstrap, Gutenberg — creating responsive,
                intuitive user interfaces with modern frameworks and design
                systems.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className='skill-category'>
              <div className='skill-icon'>⚙️</div>
              <h3 className='skill-category-title'>Backend Engineering</h3>
              <p className='skill-category-text'>
                Node.js, PHP, WordPress (custom plugins & Gutenberg blocks),
                MySQL, MongoDB — building robust server-side architectures.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className='skill-category'>
              <div className='skill-icon'>☁️</div>
              <h3 className='skill-category-title'>Cloud & DevOps</h3>
              <p className='skill-category-text'>
                AWS (EC2, S3, RDS, Lambda), Docker, GitHub Actions, CI/CD —
                deploying scalable cloud-native solutions.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div className='skill-category'>
              <div className='skill-icon'>🤖</div>
              <h3 className='skill-category-title'>AI & Automation</h3>
              <p className='skill-category-text'>
                OpenAI API integration, n8n, Zapier, prompt engineering,
                AI-assisted coding (Copilot, Cursor AI) — leveraging intelligent
                tools for efficiency.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className='skill-category'>
              <div className='skill-icon'>🔒</div>
              <h3 className='skill-category-title'>Security & Performance</h3>
              <p className='skill-category-text'>
                VAPT, technical SEO, load optimization — ensuring secure, fast,
                and reliable digital experiences.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={500}>
            <div className='skill-category'>
              <div className='skill-icon'>👔</div>
              <h3 className='skill-category-title'>Technical Leadership</h3>
              <p className='skill-category-text'>
                Project planning, mentoring, stakeholder communication, and
                agile delivery — guiding teams to excellence.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>Why Choose Me</h2>
        </ScrollAnimation>
        <div className='why-choose-grid'>
          <ScrollAnimation delay={0}>
            <div className='why-choose-card'>
              <div className='why-choose-icon'>🧠</div>
              <h3 className='why-choose-title'>AI-First Mindset</h3>
              <p className='why-choose-text'>
                Tech leader with a strong focus on integrating artificial
                intelligence into development workflows and business solutions.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className='why-choose-card'>
              <div className='why-choose-icon'>🔧</div>
              <h3 className='why-choose-title'>Full-Stack Expertise</h3>
              <p className='why-choose-text'>
                Proven ability to blend comprehensive technical knowledge with
                automation and continuous innovation.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className='why-choose-card'>
              <div className='why-choose-icon'>🌐</div>
              <h3 className='why-choose-title'>Cloud-Native Architecture</h3>
              <p className='why-choose-text'>
                Skilled in designing and implementing secure, scalable web
                ecosystems on modern cloud platforms.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div className='why-choose-card'>
              <div className='why-choose-icon'>🚀</div>
              <h3 className='why-choose-title'>Workflow Innovation</h3>
              <p className='why-choose-text'>
                Hands-on experience with OpenAI and workflow automation tools to
                streamline development processes.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className='why-choose-card'>
              <div className='why-choose-icon'>📚</div>
              <h3 className='why-choose-title'>Team Development</h3>
              <p className='why-choose-text'>
                Passionate about mentoring teams to build smarter, faster, and
                more secure solutions through knowledge sharing.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Professional Experience */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>Professional Experience</h2>
        </ScrollAnimation>
        <div className='experience-list'>
          <ScrollAnimation delay={0}>
            <div className='experience-item'>
              <div className='experience-number'>1</div>
              <div className='experience-content'>
                <h3 className='experience-title'>
                  Technical Lead - Shades of Web
                </h3>
                <p className='experience-period'>
                  <strong>July 2025 - Present (5 months)</strong>
                </p>
                <p className='experience-description'>
                  Guided development teams in designing and delivering
                  intelligent, high-performing digital solutions — including a
                  complex multi-domain retail infrastructure. Focused on
                  scalable architecture, performance optimization, and security
                  compliance, while mentoring developers through code reviews,
                  best practices, and feedback-driven improvement.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className='experience-item'>
              <div className='experience-number'>2</div>
              <div className='experience-content'>
                <h3 className='experience-title'>
                  Software Engineer - Shades of Web
                </h3>
                <p className='experience-period'>
                  <strong>October 2023 - Present (2 years 2 months)</strong>
                </p>
                <p className='experience-description'>
                  Implemented clean, future-proof code ensuring long-term system
                  stability and team growth across multiple projects.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className='experience-item'>
              <div className='experience-number'>3</div>
              <div className='experience-content'>
                <h3 className='experience-title'>
                  Full Stack Developer - Lennox Software
                </h3>
                <p className='experience-period'>
                  <strong>January 2023 - October 2023 (10 months)</strong>
                </p>
                <p className='experience-description'>
                  Designed and developed complex web and real-time mobile
                  applications. Strengthened AWS cloud expertise working with
                  EC2, S3, Lambda, RDS, and API Gateway to build scalable,
                  secure, and serverless systems.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div className='experience-item'>
              <div className='experience-number'>4</div>
              <div className='experience-content'>
                <h3 className='experience-title'>
                  Full Stack Developer - Blackbuck IT Solutions
                </h3>
                <p className='experience-period'>
                  <strong>May 2022 - January 2023 (9 months)</strong>
                </p>
                <p className='experience-description'>
                  Received the &apos;Best System Development&apos; award for
                  creating innovative and high-performance solutions that
                  significantly enhanced system efficiency and business
                  operations.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Technical Papers & Research */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>Technical Papers & Research</h2>
        </ScrollAnimation>
        <div className='research-container'>
          <ScrollAnimation delay={0}>
            <div className='research-card'>
              <div className='research-icon'>📄</div>
              <div className='research-content'>
                <h3 className='research-title'>
                  GUI-Integrated Deep Multi-Branch Multi-Fusion Feature Learning
                  with Explainable AI on Enhanced GoogleNet for Software Defect
                  Prediction
                </h3>
                <p className='research-status'>Status: Under Review</p>
                <p className='research-description'>
                  Advanced research paper focusing on software defect prediction
                  using deep learning techniques, explainable AI, and enhanced
                  GoogleNet architecture with multi-branch feature fusion
                  capabilities.
                </p>
                <div className='research-tags'>
                  <span className='research-tag'>Deep Learning</span>
                  <span className='research-tag'>Explainable AI</span>
                  <span className='research-tag'>Software Engineering</span>
                  <span className='research-tag'>GoogleNet</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Education & Recognition */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>Education & Recognition</h2>
        </ScrollAnimation>
        <div className='education-container'>
          <ScrollAnimation delay={0}>
            <div className='education-section'>
              <h3 className='education-subtitle'>Academic Background</h3>
              <div className='education-item'>
                <div className='education-header'>
                  <h4 className='education-degree'>
                    Bachelor of Engineering - Information Technology
                  </h4>
                  <div className='education-score'>
                    CGPA: <strong>9.30/10</strong>
                  </div>
                </div>
                <p className='education-school'>
                  Government Engineering College (GEC) Bhavnagar
                </p>
                <p className='education-period'>August 2018 - May 2022</p>
                <p className='education-description'>
                  Comprehensive engineering program focusing on software
                  development, data structures, algorithms, database systems,
                  and web technologies. Led multiple technical projects
                  including AI-based software defect prediction system. Active
                  participation in coding competitions and technical workshops.
                </p>
                <div className='education-highlights'>
                  <span className='education-highlight'>
                    Best Project Award
                  </span>
                  <span className='education-highlight'>Dean&apos;s List</span>
                  <span className='education-highlight'>
                    Research Publication
                  </span>
                </div>
              </div>
              <div className='education-item'>
                <div className='education-header'>
                  <h4 className='education-degree'>
                    Higher Secondary School - Science A Group
                  </h4>
                </div>
                <p className='education-school'>
                  Shree Swaminarayan Gurukul Sardarnagar School
                </p>
                <p className='education-period'>April 2016 - March 2018</p>
                <p className='education-description'>
                  Specialized in Mathematics, Physics, and Chemistry with strong
                  foundation in analytical thinking and problem-solving. Active
                  participation in science exhibitions and mathematics
                  olympiads. Developed early interest in computer science and
                  programming through extracurricular activities.
                </p>
              </div>
              <div className='education-item'>
                <h4 className='education-degree'>Primary School</h4>
                <p className='education-school'>
                  St. Xavier&apos;s School, Bhavnagar
                </p>
                <p className='education-period'>Completed 2016</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className='achievements-section'>
              <h3 className='education-subtitle'>Standardized Tests</h3>
              <div className='test-item'>
                <div className='test-icon'>🎓</div>
                <div className='test-content'>
                  <h4 className='test-name'>
                    GATE (Graduate Aptitude Test in Engineering)
                  </h4>
                  <p className='test-score'>
                    Score: <strong>376</strong> ·{' '}
                    <span className='test-date'>Feb 2022</span>
                  </p>
                  <p className='test-description'>
                    Exceptional performance in the national-level engineering
                    entrance examination, demonstrating strong technical
                    aptitude and problem-solving skills.
                  </p>
                </div>
              </div>
              <div className='test-item'>
                <div className='test-icon'>🌐</div>
                <div className='test-content'>
                  <h4 className='test-name'>
                    TOEFL (Test of English as a Foreign Language)
                  </h4>
                  <p className='test-score'>
                    Score: <strong>97/120</strong>
                  </p>
                  <p className='test-description'>
                    Demonstrated high-level English proficiency for
                    international academic and professional communication.
                  </p>
                </div>
              </div>
              <div className='test-item'>
                <div className='test-icon'>📊</div>
                <div className='test-content'>
                  <h4 className='test-name'>
                    GRE (Graduate Record Examination)
                  </h4>
                  <p className='test-score'>
                    Score: <strong>291/320</strong>
                  </p>
                  <p className='test-description'>
                    Quantitative and analytical readiness for graduate-level
                    studies and research programs.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Achievements Section - Full Width */}
      <section className='section achievements-section-full'>
        <div className='achievements-full-container'>
          <ScrollAnimation>
            <h2 className='section-title'>Achievements</h2>
          </ScrollAnimation>
          <div className='achievements-grid achievements-grid-row'>
            <ScrollAnimation delay={0}>
              <div className='achievement-card achievement-card-gold'>
                <div className='achievement-card-header'>
                  <div className='achievement-icon-wrapper achievement-icon-gold'>
                    <span className='achievement-icon'>🏆</span>
                  </div>
                  <div className='achievement-year'>2022</div>
                </div>
                <h4 className='achievement-card-title'>
                  Best System Development
                </h4>
                <p className='achievement-card-description'>
                  Recognized for innovative solutions that significantly
                  enhanced system efficiency and business operations.
                </p>
                <div className='achievement-card-footer'>
                  <span className='achievement-tag'>Excellence Award</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className='achievement-card achievement-card-blue'>
                <div className='achievement-card-header'>
                  <div className='achievement-icon-wrapper achievement-icon-blue'>
                    <span className='achievement-icon'>⭐</span>
                  </div>
                  <div className='achievement-year'>2022</div>
                </div>
                <h4 className='achievement-card-title'>
                  Best Project of IT Department
                </h4>
                <p className='achievement-card-description'>
                  Outstanding academic excellence demonstrated through
                  innovative project development and technical expertise.
                </p>
                <div className='achievement-card-footer'>
                  <span className='achievement-tag'>Academic Excellence</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className='achievement-card achievement-card-purple'>
                <div className='achievement-card-header'>
                  <div className='achievement-icon-wrapper achievement-icon-purple'>
                    <span className='achievement-icon'>📜</span>
                  </div>
                  <div className='achievement-year'>Professional</div>
                </div>
                <h4 className='achievement-card-title'>
                  Front End Development Libraries
                </h4>
                <p className='achievement-card-description'>
                  Professional certification validating expertise in modern
                  frontend development frameworks and libraries.
                </p>
                <div className='achievement-card-footer'>
                  <span className='achievement-tag'>Certification</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* n8n Workflow Showcase */}
      <section className='section'>
        <ScrollAnimation>
          <h2 className='section-title'>Workflow Automation with n8n</h2>
        </ScrollAnimation>
        <div className='workflow-container'>
          <ScrollAnimation delay={0}>
            <div className='workflow-content'>
              <div className='workflow-text'>
                <h3 className='workflow-title'>
                  AI-Driven Automation Solutions
                </h3>
                <p className='workflow-description'>
                  I leverage n8n to create sophisticated workflow automations
                  that streamline business processes, integrate AI tools, and
                  optimize development workflows. These custom workflows
                  automate repetitive tasks, connect disparate systems, and
                  enable intelligent decision-making.
                </p>
                <div className='workflow-features'>
                  <div className='workflow-feature'>
                    <span className='workflow-feature-icon'>⚡</span>
                    <span>Automated Code Generation Workflows</span>
                  </div>
                  <div className='workflow-feature'>
                    <span className='workflow-feature-icon'>🤖</span>
                    <span>AI Integration & API Orchestration</span>
                  </div>
                  <div className='workflow-feature'>
                    <span className='workflow-feature-icon'>🔄</span>
                    <span>Multi-System Data Synchronization</span>
                  </div>
                  <div className='workflow-feature'>
                    <span className='workflow-feature-icon'>📊</span>
                    <span>Intelligent Reporting & Analytics</span>
                  </div>
                </div>
              </div>
              <div className='workflow-image-wrapper'>
                <img
                  src='/n8n-workflow.png'
                  alt='n8n Workflow Automation'
                  className='workflow-image'
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className='cta-section'>
        <ScrollAnimation>
          <h2 className='cta-title'>
            Let&apos;s Build Something Amazing Together
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <p className='cta-description'>
            Ready to collaborate on your next innovative project? Whether
            you&apos;re looking for technical leadership, full-stack development
            expertise, or AI-driven solutions, I&apos;m here to help transform
            your vision into reality.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <p className='cta-description'>
            With a proven track record of delivering scalable, secure, and
            intelligent digital solutions, I bring both technical excellence and
            strategic thinking to every project.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={300}>
          <div className='cta-buttons'>
            <a
              className='btn btn-primary'
              href='mailto:jahnvidhameliya58@gmail.com'
            >
              Email Me
            </a>
            <a
              className='btn btn-outline'
              href='https://www.linkedin.com/in/jahnvi-dhameliya-261455214'
              target='_blank'
              rel='noreferrer'
            >
              Connect on LinkedIn
            </a>
            <a
              className='btn btn-outline'
              href='https://github.com/JahnviDhameliya/'
              target='_blank'
              rel='noreferrer'
              onClick={() => {
                console.warn('Another console statement');
                // FIXME: Remove debug code before production
              }}
            >
              View GitHub Profile
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer */}
      <footer className='portfolio-footer'>
        <p className='footer-text'>
          Location: Bhavnagar, Gujarat, India | Open to opportunities and
          collaboration
        </p>
      </footer>
    </main>
  );
}
