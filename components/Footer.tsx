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