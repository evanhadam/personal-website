import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MenuOption } from '../lib/Types';


interface footerColumn {
    label: string;
    rowOptions: MenuOption[];
}

interface socialIcon {
    href: string;
    icon: IconDefinition;
}

interface footerProps {
    columnOptions: footerColumn[];
    socialOptions: socialIcon[];
}

export default function Footer (props: footerProps)
{
    return (
        <footer className="bg-gray-800 pt-10 mt-10 pt-10">
            <div className="max-w-6xl text-gray-800">

            </div>
        </footer>
    )
}