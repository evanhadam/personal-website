import React from 'react';
import HomeHeader from '../components/HomeHeader';
import ExperienceCard from '../components/ExperienceCard';
import CenteredContainer from '../components/CenteredContainer';
import SiteHead from '@/components/SiteHead';

export default function Home() {
  return (
    <>
      <SiteHead 
        title="Evan Hadam"
        description="Hi! I'm Evan Hadam, a pre-med turned engineer from Tampa, FL. Come see where my journey has taken me." />

      <HomeHeader />

      <div id="about">
        <CenteredContainer>
          <p>
            Hey! I'm Evan Hadam, a CS + Econ student at the University of Florida.
          </p>
          <p>
            I spent much of college not planning on going into tech. I wanted to make a difference through direct patient care 
            as a doctor before working as a programmer in medical research labs around campus shifted my interests.
          </p>
          <p>
            This change led me to working internships at a medical device company and an electronic health record company
            to hone my tech skills in a familiar environment. 
          </p>
          <p>
            Now, I'm building software projects used by healthcare professionals across Florida and serving as a leader for a 
            student-run MedTech engineering team at UF. 
          </p>
          <p>
            It's hard to know what the next few years are going to look like, but the journey has me ready to take whatever 
            jobs, opportunities, cities, or industries come my way and run with them.
          </p>
        </CenteredContainer>
      </div>
      <div id="experience"></div>
      <div id="education"></div>
      <div id="projects"></div>
    </>
  );
}