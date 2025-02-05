'use client'

import React from 'react';
import Navbar from './Navbar';
import Spacer from './Spacer';
import { faLinkedin, faGithub, faStrava, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MenuOption } from '../lib/Types';
import Footer from './Footer';


interface MainLayoutProps {
    children: React.ReactNode;
}


export default function HomeLayout({ children }: MainLayoutProps) {
    function giveUserId() {
        if (!localStorage.getItem('userId')) {
            localStorage.setItem('userId', Math.random().toString(36).substring(2, 11));
        }
    }

    React.useEffect(() => {
        giveUserId();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow">
                <Navbar
                    color="#FFF"
                    options={[
                        { label: 'Contact', href: '/contact'},
                        { label: 'Blog', href: '/blog'},
                        { label: 'Home', href: '/'},
                    ]}
                />
                {children}
                <Spacer top={50} />
            </div>
            <Footer
                columnOptions={[
                    {
                        label: '',
                        rowOptions: [
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/#about' },
                            { label: 'Experience', href: '/#experience' },
                            { label: 'Resume', href: '/resume.pdf' },
                        ]
                    }
                ]}
                socialOptions={[
                    {
                        icon: faGithub,
                        href: 'https://github.com/evanhadam',
                    },
                    {
                        icon: faLinkedin,
                        href: 'https://www.linkedin.com/in/evan-hadam/',
                    },
                    {
                        icon: faCalendar as IconDefinition,
                        href: 'https://calendly.com/d/cmtj-rt7-339/one-off-meeting',
                    },
                    {
                        icon: faInstagram,
                        href: 'https://www.instagram.com/evan_hadam/',
                    },
                    {
                          icon: faStrava,
                          href: 'https://www.strava.com/athletes/evanhadam',
                    },
                ]}
            >
            </Footer>
        </div>
    )
}