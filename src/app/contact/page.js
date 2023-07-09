import React from 'react';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

function Contact(){
    return(
        <>
        <div className="container">
          <h1>Contact Us</h1>
          <ContactCard/>
          <section className="contact_section">
            <h2>We'd love to hear <span> from you </span></h2>
            <ContactForm />
          </section>
        </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57302.63291536425!2d85.8619782807803!3d26.15062508977099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb835434acdb1%3A0x70ec31d04822699e!2sDarbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1688874046603!5m2!1sen!2sin" className='mapping' width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Contact;