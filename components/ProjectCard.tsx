import React from 'react';
import Card from './Card';
import CenteredContainer from './CenteredContainer';
import Icon from './Icon';

interface ExperienceCardProps {
    header: string;
    subheader: string;
    codeTags?: string[];
    content: string | string[];
    imageLink: string;
    imageAlt: string;
}

export default function ExperienceCard(props: ExperienceCardProps){
    return (
        <CenteredContainer>
        <div className="flex flex md:flex-col mb-8 w-full">
            <div className="flex-none">
                <Icon
                imageUrl={props.imageLink}
                alt={props.imageAlt}
                />
            </div>
            <div className="flex-auto mt-5 mb-10 md:ml-10 md:mt-0">
                <Card
                    header={props.header}
                    subheader={props.subheader}
                    codeTags={props.codeTags}
                    content={props.content}
                />
            </div>
        </div>
        </CenteredContainer>
    )
}