import React from 'react';

function AboutUs() {
  const containerStyle = {
    width: '100%', // Full width for the container
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const gradientStyle = {
    width: '100%', // Full width for the gradient
    backgroundImage: 'linear-gradient(to right, #68D391, #A5B4FC), linear-gradient(to bottom, rgba(255,255,255,0), white)', // Combined left-to-right and bottom gradient
    minHeight: '40rem', // Ensure a minimum height for smaller screens
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    padding: '2rem',
    color: '#000', // Black text color
    backgroundBlendMode: 'overlay', // To blend the two gradients properly
  };

  return (
    <div style={containerStyle} id='aboutus'>
      <div style={gradientStyle}>
        <h1 className="text-3xl sm:text-[2.6rem] mb-6">
        Fighting for Fairness in <strong>Car Loan Interest Rates</strong>
        </h1>
        <div style={{ maxWidth: '900px', padding: '0 0.5rem' }} className="mt-2">
          <p className="mb-6 text-sm sm:text-base">
          At Lexolent, we specialize in advocating for clients who have been affected by unfair car loan interest rates. Our mission is to ensure you receive fair compensation for any financial harm caused by misleading terms or undisclosed charges, addressing challenges such as excessive interest rates and hidden fees.
          </p>
          <p className="mb-6 text-sm sm:text-base">
          Our dedicated team of experts understands the complexities of car financing and is committed to transparency and accountability. We provide personalized guidance and legal expertise to help you navigate the complexities of filing claims and seeking fair outcomes. Whether you're facing predatory lending practices or contractual misunderstandings, we're here to fight for your rights and financial well-being.
          </p>
          <p className="mb-6 text-sm sm:text-base">
          Join our mission to hold car companies accountable. We believe in empowering consumers with the knowledge and resources to challenge unfair practices effectively. Contact us today to learn how we can assist you in reclaiming what's rightfully yours and ensuring a fair financial future. Let us stand with you in the fight for fairness and accountability in car loan practices.
          </p>
          <p className="mb-6 text-sm sm:text-base">
          Together, we can make a difference. Our commitment to integrity and client satisfaction drives us to deliver exceptional service and support. Trust Lexolent to be your advocate in the pursuit of justice against powerful interests. Experience the difference with a team that prioritizes your needs and fights for a fairer car financing landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
