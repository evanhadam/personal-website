import React from 'react';
import styles from '../styles/Home.module.css';
import HomeHeader from '../components/HomeHeader';
import ExperienceCard from '../components/ExperienceCard';
import CenteredContainer from '../components/CenteredContainer';
import SiteHead from '@/components/SiteHead';
import Spacer from '@/components/Spacer';
import { H1 } from '@/components/Titles';

export default function Home() {
  return (
    <>
      <SiteHead 
        title="Evan Hadam"
        description="Hi! I'm Evan Hadam, a pre-med turned engineer from Tampa, FL. Come see where my journey has taken me." />

      <HomeHeader />

      <Spacer bottom={100} />

      <div id="about">
        <CenteredContainer>
          <p className={styles.contentText}>
            Hey! I'm Evan Hadam, a CS + Econ student at the University of Florida.
          </p>
          <p className={styles.contentText}>
            I spent much of college not planning on going into tech. I wanted to make a difference through direct patient care 
            as a doctor before working as a programmer in medical research labs around campus shifted my interests.
          </p>
          <p className={styles.contentText}>
            This change led me to working internships at a medical device company and an electronic health record company
            to hone my tech skills in a familiar environment. 
          </p>
          <p className={styles.contentText}>
            Now, I'm building software projects used by healthcare professionals across Florida and serving as a leader for a 
            student-run MedTech engineering team at UF. 
          </p>
          <p className={styles.contentText}>
            These past few years have been really exciting and I'm excited to find new ways to solve people's problems.
          </p>
        </CenteredContainer>
      </div>
      <Spacer bottom={40} />
      <div id="experience">
      <div style={{ padding: '3vw' }} />
        <CenteredContainer>
          <H1 centered>Experience</H1>
          <ExperienceCard
          header='Project Management Intern'
          subheader='ModMed'
          codeTags={['Python', 'SQL', 'PowerBI', 'Tableau', 'Jira']}
          content={['Built practice-specific electronic health records.', 'Scoped internal AI projects, conducted exploratory data analytics for support ticket request management, and interviewed engineers and product managers to refine Agile processes']}
          imageLink='/images/ModMed.png'
          imageAlt='Logo for the company Modernizing Medicine'
          />
          <ExperienceCard
          header='Software Engineering Intern'
          subheader='QuidelOrtho'
          codeTags={['C++', 'Linux','Python', 'AWS Lambda', 'AWS S3']}
          content={['Worked on code for blood analyzing devices.', 'Created rule-based analysis detection systems to clear years of technical debt, moved bug logging processes offline, and manually conducted static analysis on hundreds of thousands of lines of code.']}
          imageLink='/images/QuidelOrtho.png'
          imageAlt='Logo for the company QuidelOrtho'
          />
        </CenteredContainer>
      </div>
      <div id="projects"></div>
      <div id="education"></div>
    </>
  );
}