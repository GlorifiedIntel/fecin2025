import React from 'react';
import Image from 'next/image'; // Import the Image component
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About FECIN</h2>
        <h1 className={styles.title}>
        FECIN: Bringing the Word to the Eggon People and transforming lives...
        </h1>
        <p className={styles.desc}>
        FECIN is a Christian non-profit organization dedicated to translating the Bible 
        and other Christian literature into the Eggon language. Their mission is to make the 
        Word of God accessible to the Eggon people in their native tongue, enabling them to 
        deepen their faith, grow spiritually, and share the Gospel with others. FECIN's work 
        involves collaborating with linguists, theologians, and community members to ensure 
        accurate and culturally appropriate translations that resonate with the Eggon people.
        </p>
        <div className={styles.boxes}>
        <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Year of experience</p>
        </div>
        <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Year of experience</p>
        </div>
        <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Year of experience</p>
        </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/about.webp" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;