import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion/dist/framer-motion'

const About = ({ backgroundImage }) => {
  // frame-motion vars
  const pDelay = 1;
  const dIncrement = .5;

  return(
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center -45px',
        backgroundAttachment: 'fixed'
      }}
    >
      <section className='aboutme'>
        <section className='home'>
          <div>
              {/* python logo */}
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{
                  duration: 1.5
                }}
                src={require('../../assets/images/python_logo.jpg')} id='python-logo' alt='python logo'
              />
              {/* AI profile image */}
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{
                  duration: 1.5
                }}
                src={require('../../assets/images/ai_profile_noe.jpeg')} id='profile-pic' alt="Noe Navarro as depicted by an AI art style as a profile view"
              />
              {/* Javascript logo */}
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{
                  duration: 1.5
                }}
                src={require('../../assets/images/js_logo.jpg')}  id='javascript-logo' alt='Javascript logo'
              />
          </div>

        </section>
        <section
          id='about-container'
        >
          <div
            id='welcome-banners'
          >
            {/* Welcome h1s */}
            <div
              id='welcome-container'
            >
              <h1 id='myname' style={{ marginTop: '0' }}>
                <TypeAnimation
                  sequence={[
                    "Hello I'm  Noé Navarro"
                  ]}
                  cursor={false}
                />
              </h1> 
            </div>
            
            {/* full stack dev banner */}
            <div id='title-container'>
              <h2 id='title'>
                <TypeAnimation 
                  sequence={['Full Stack Developer', 1000, 'Data Engineer', 1000, 'Financial Analyst', 1000]}
                  repeat={Infinity}
                  startDelay={1000}
                />
              </h2>
            </div>
          </div>

          <div> 
            <motion.p 
              id='aboutme-paragraph'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: pDelay
              }}
            >
              I’m a full stack developer with a background in corporate finance. I’m passionate about leveraging technology to solve problems and create efficient and effective solutions.
              <br></br>
              <br></br>
            </motion.p>
            <motion.p
              id='aboutme-paragraph'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: pDelay + (dIncrement * 1)
              }}
            >
              After working in finance for several years, I decided to pursue my interest in coding and web development. I’ve since completed a full stack web development program and have gained experience working on various projects, ranging from data engineering and back-end development to full-stack applications using the MERN/GRAND stack. In addition to these JS stacks, I also have expertise in Python, SQL, and Azure. I’ve worked on projects involving data analysis, data modeling, and ETL (extract, transform, load) processes.
              <br></br>
              <br></br>
            </motion.p>
            <motion.p
              id='aboutme-paragraph'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: pDelay + (dIncrement * 2)
              }}
            >
              As a developer, I enjoy the challenge of problem-solving and the satisfaction of seeing a project come to life. This has exposed me to a few programming languages and frameworks; each used to solve a different challenge. In my previous career in corporate finance, I honed my analytical and critical thinking skills. I'm able to apply those skills to my work in web development and data engineering to create efficient and well-designed solutions. I'm also comfortable working with stakeholders to understand their needs and deliver projects that meet their requirements.

              <br></br>
              <br></br>
            </motion.p>
            <motion.p
              id='aboutme-paragraph'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: pDelay + (dIncrement * 3)
              }}
            >
              When I'm not coding, you can find me playing guitar or staying active via gym and bike rides around town. I subscribe to the growth  mindset and I enjoy the pursuit of my better self.

              <br></br>
              <br></br>
            </motion.p>
            <motion.p
              id='aboutme-paragraph'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: pDelay + (dIncrement * 4)
              }}
            >
              Feel free to reach out to me if you'd like to discuss a potential collaboration or just chat about tech and finance!

              <br></br>
              <br></br>
            </motion.p>
            <motion.p
              id='aboutme-paragraph'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: pDelay + (dIncrement * 5)
              }}
            >
              Happy browsing! 
            </motion.p>
          </div>
        </section>
      </section>
    </motion.main>
  )
}

export default About;