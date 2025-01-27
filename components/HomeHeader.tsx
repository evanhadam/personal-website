import React from 'react';
import styles from '../styles/HomeHeader.module.css';
import Image from 'next/image';

export default function HomeHeader() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={`${styles.headerFirstLineText} ${styles.greyGradientText}`}>
                        Hey! I'm
                    </div>
                    <div className={`${styles.headerSecondLineText} ${styles.colorGradientText}`}>
                        Evan Hadam
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src="/headshot-cropped.png"
                        layout="fill"
                        alt="This is Evan Hadam, the guy who made this website"
                        priority
                        className="rounded-full"
                    />
                </div>
            </div>
        </>
    );
}