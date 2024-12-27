import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; // Import Link for navigation
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* About Section */}
      <div className={styles.aboutSection}>
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
        </div>
        <div className={styles.imgContainer}>
          <Image 
            src="/bible-app-2.png" 
            alt="About Image" 
            width={480} 
            height={480} 
            className={styles.img} 
          />
        </div>
      </div>
      
      {/* Features Section */}
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>Our Features</h2>
        <div className={styles.featuresList}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Bible Translation</h3>
            <p className={styles.featureDesc}>
              We are committed to translating the Bible into the Eggon language, making God's Word accessible to all.
            </p>
            <Link href="/bible-translation" className={styles.learnMoreButton}>Learn More</Link>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Community Engagement</h3>
            <p className={styles.featureDesc}>
              We collaborate with local communities to ensure the translation reflects their language and culture.
            </p>
            <Link href="/community-engagement" className={styles.learnMoreButton}>Learn More</Link>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Spiritual Growth</h3>
            <p className={styles.featureDesc}>
              Our mission helps the Eggon people grow spiritually by providing them with scriptures in their heart language.
            </p>
            <Link href="../spiritual-growth" className={styles.learnMoreButton}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
