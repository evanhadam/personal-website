import React from 'react';
import Image from 'next/image'

interface iconProps {
    imageUrl: string;
    alt: string;
}

export default function Icon(props: iconProps) {
    return (
        <div className="rounded-3x1 w-36 h-36 max-w-xl m-0 mt-2 object-cover">
            <Image 
                className="rounded-3x1" 
                src={props.imageUrl} 
                alt={props.alt}
                width='300'
                height='144'
            />
        </div>
    );
}