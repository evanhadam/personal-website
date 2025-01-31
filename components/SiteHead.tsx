import Head from 'next/head';
import React from 'react';

interface SiteHeadProps {
    title: string;
    url?: string;
    description?: string;
    color?: string;
    type?:
        | 'article'
        | 'book'
        | 'profile'
        | 'website'

    imageUrl?: string;
    imageType?: string;
    imageHeight?: number;
    imageWidth?: number;
    imageAlt?: string;
}

export default function SiteHead(props: SiteHeadProps) {
    const description = props.description || 'Evan Hadam Portfolio + Blog';
    const imageUrl = props.imageUrl || './favicon.ico';

    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" type="image/x-icon" href='./favicon.ico' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono" />

            <meta name="name" content={props.title} />
            <meta name="description" content={description.substring(0, 160)} />
            <meta name="theme-color" content={props.color || '#F8F8F8'} />

            <meta property="og:site_name" content="Ehadam" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={props.url || 'https://evanhadam.com'} />
            <meta property="og:type" content={props.type || 'website'} />

            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:url" content={imageUrl} />
            <meta property="og:image:secure_url" content={imageUrl} />
            <meta property="og:image:alt" content={props.imageAlt || props.title} />
            {props.imageType && (
                <meta property="og:image:type" content={props.imageType} />
            )}
            {props.imageWidth && (
                <meta property="og:image:width" content={String(props.imageWidth)} />
            )}
            {props.imageHeight && (
                <meta property="og:image:height" content={String(props.imageHeight)} />
            )}
        </Head>
    )
}