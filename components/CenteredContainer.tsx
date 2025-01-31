import React, { JSX } from 'react';

interface CenteredContainerProps {
    children: JSX.Element | JSX.Element[];
}

export default function CenteredContainer(props: CenteredContainerProps)
{
    return (
        <div className="container mx-auto px-4 max-w-2xl">{props.children}</div>
    );
}