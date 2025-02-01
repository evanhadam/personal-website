import React from 'react';
import Link from 'next/link'
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
        description="Hi! I'm Evan Hadam, a pre-med turned engineer from Tampa, FL. Check out my journey!" />

      <HomeHeader />

      <Spacer bottom={100} />

      <div id="about">
        <CenteredContainer>
          <p className={styles.contentText}>
            Hey! I'm Evan Hadam, a CS + Econ student at the University of Florida.
          </p>
          <p className={styles.contentText}>
            I spent much of college working towards becoming a doctor. It wasn't until working as a programmer in <Link className={styles.link} href="https://lemaslab.github.io/about/" target="_blank" rel="noopener noreferrer">medical research labs </Link> 
             that the creativity and broad impact required for technology won me over.
          </p>
          <p className={styles.contentText}>
            This shift led me to working internships at a <Link className={styles.link} href="https://www.quidelortho.com/" target="_blank" rel="noopener noreferrer">medical device company</Link> and an <Link className={styles.link} href="https://www.modmed.com/" target="_blank" rel="noopener noreferrer">electronic health record company </Link>
            to hone my tech skills in a familiar environment. 
          </p>
          <p className={styles.contentText}>
            Now, I'm building software used by healthcare professionals across Florida and leading a <Link className={styles.link} href="https://www.dreamteameng.org/" target="_blank" rel="noopener noreferrer">
            student-run MedTech engineering team</Link> at UF. 
          </p>
          <p className={styles.contentText}>
            The medium may have changed but the lessons - empathy, communication, and attention to detail - aren't going anywhere.
          </p>
          <p className={styles.contentText}>
            These past few years have been an amazing journey with even better people, and I'm just getting started!
          </p>
        </CenteredContainer>
      </div>
      <div id="experience">
      <div style={{ padding: '3vw' }} />
        <CenteredContainer>
          <H1 centered marginBottom={20}>Experience</H1>
          <ExperienceCard
          header='Incoming Data & AI Tech Consulting Intern'
          subheader='Ernst & Young'
          codeTags={['Python', 'SQL', 'AWS', 'Snowflake REST API', 'Databricks']}
          content={['Summer 2025 - Enterprise Data Engineering - Denver']}
          imageLink='/images/EY.png'
          imageAlt='Logo for the company Ernst & Young'
          />
          <ExperienceCard
          header='Project Management Intern'
          subheader='ModMed'
          codeTags={['Python', 'SQL', 'PowerBI', 'Tableau', 'Jira']}
          content={['Built specialty-specific electronic health records.', 'Scoped internal AI projects, conducted exploratory data analytics for support ticket request management, and interviewed engineers and product managers to refine Agile processes']}
          imageLink='/images/ModMed.png'
          imageAlt='Logo for the company Modernizing Medicine'
          />
          <ExperienceCard
          header='Software Engineering Intern'
          subheader='QuidelOrtho'
          codeTags={['C++', 'Linux','Python', 'AWS Lambda', 'AWS S3']}
          content={['Worked on code for the blood analyzers of one of the largest diagnostics companies globally.', 'Created rule-based analysis detection systems to clear years of technical debt, moved bug logging processes offline, and revised hundreds of files of code that got pushed to production with static analysis.']}
          imageLink='/images/QuidelOrtho.png'
          imageAlt='Logo for the company QuidelOrtho'
          />
        </CenteredContainer>
      </div>
      <div id="projects"></div>
      <div id="education">
        <CenteredContainer>
          <H1 centered marginBottom={20}>Education</H1>
          <ExperienceCard
            header='University of Florida'
            subheader='Computer Science and Economics'
            content={["During my time in Gainesville, I've gotten to serve as Finance Director, Hackathon Lead, and Product Manager for Dream Team Engineering, a student-led MedTech design team.", "When not studying or building, catch me running, reading, volunteering for Special Olympics, or playing pickleball!"]}
            imageLink='/images/UF.jpg'
            imageAlt='Logo for the University of Florida'
          />
        </CenteredContainer>
      </div>
    </>
  );
}