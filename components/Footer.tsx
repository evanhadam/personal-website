import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MenuOption } from '../lib/Types';
import Link from 'next/link';


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
        <footer className="bg-gray-800 h-80 pt-10 mt-10 pt-10">
            <div className="w-3xs m-auto text-gray-800 flex flex-wrap justify-center">
                {props.columnOptions.map(column => 
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12" key={column.label}>
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            {column.label}
                        </div>
                        {column.rowOptions.map(row => (
                            <Link href={row.href} key={row.href} passHref>
                                <div className="flex flex-wrap justify-center cursor-pointer my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                    {row.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className='pt-2'>
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex justify-center items-center">
                    {props.socialOptions.reverse().map(social => (
                    <Link href={social.href} passHref key={social.href}>
                        <div className="w-6 mx-1 h-16 cursor-pointer text-gray-500 hover:text-gray-400 text-sm font-medium duration-700">
                        <FontAwesomeIcon className="fa-2x" icon={social.icon} width={20} />
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}