import React, { useState } from 'react'
import { ArrowDown } from 'react-bootstrap-icons'

const About = () => {
  const [experienceCounter, setExperienceCounter] = useState(0)

  function changeExperienceCounter() {
    if (experienceCounter === 2) {setExperienceCounter(0)}
    else {setExperienceCounter(experienceCounter + 1)}
  }

  return (
    <main id='about-page'>
      <h1>About Me!</h1>
      <div className='about-landing-grid'>
        <section id='about'>
          <h2>A bit about me...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra semper ultricies. Vestibulum at pharetra ante. Sed vitae eros eu ipsum aliquam feugiat. Sed convallis est vel mi vehicula, eu vestibulum libero iaculis. Nulla facilisi. Integer quis est eget nisi eleifend varius. Sed id augue nec est venenatis consequat. Curabitur sed turpis nec turpis elementum dignissim.</p>
        </section>
        <section id='skills'>
          <h2>My Skills</h2>
          <p>Throughout my journey in secondary education, tertiary studies, and freelancing, I've gained valuable expertise in web development. Here's a glimpse of my experience:</p>
          <ul>
              <li><strong>HTML:</strong> 8 years of learning experience</li>
              <li><strong>CSS:</strong> 8 years of learning experience</li>
              <li><strong>Trello:</strong> 3 years of learning experience</li>
              <li><strong>Figma:</strong> 2 years of learning experience</li>
              <li><strong>JavaScript:</strong> 6 months of learning experience</li>
              <li><strong>React:</strong> 6 months of learning experience</li>
          </ul>
        </section>
      </div>
      <section id='experience'>
        <h2>My Experience</h2>

        <article className='grid'>
          <div className='experience-label'>
            <h3>2017-2021</h3>
            <p>High School</p>
          </div>
          <div className='experience-arrow'><ArrowDown onClick={() => {changeExperienceCounter()}} /></div>
          <div className='experience-description'>
            <p>Throughout High School, I learned the fundamentals of HTML, CSS and Design Principles. The 5 years of learning have helped me develop my understanding of functionality and user experience design as well as create and define industry-standard fundamentals of web design.</p>
          </div>
        </article>

        <article className='grid'>
          <div className='experience-label'>
            <h3>2022</h3>
            <p>Diploma in Web and Graphic Design</p>
          </div>
          <div className='experience-arrow'><ArrowDown onClick={() => {changeExperienceCounter()}} /></div>
          <div className='experience-description'>
            <p>Studying Web and Graphic Design has helped hone my Photoshop, Illustrator, Figma, CMS (Content Management Systems) and Previous Web (Design and Coding) Skills. This course helped solidify my aspiration in being a Full-Stack Web Developer.</p>
          </div>
        </article>

        <article className='grid'>
          <div className='experience-label'>
            <h3>2023 - now</h3>
            <p>Diploma in Web and UX Design</p>
          </div>
          <div className='experience-description'>
            <p>I am currently studying Web and UX (User Experience) Design, throughout the year I have learnt the basics of JavaScript, ReactJS and further expanded my knowledge on CMS' (specifically WordPress) as well as developed projects to keep my HTML/CSS skills sharp.</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default About
