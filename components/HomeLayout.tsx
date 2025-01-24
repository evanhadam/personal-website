'use client'

import React from 'react';
import Navbar from './Navbar';
import Spacer from './Spacer';
import { faLinkedin, faGithub, faStrava, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MenuOption } from '../lib/Types';


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
        </div>
    )
}