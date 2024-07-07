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
          We Are Your Ultimate <strong>Car Care Solution</strong>
        </h1>
        <div style={{ maxWidth: '900px', padding: '0 0.5rem' }} className="mt-2">
          <p className="mb-6 text-sm sm:text-base">
            Discover the ultimate destination for all your car maintenance and repair needs. At Car Services, we pride ourselves on delivering exceptional service and quality craftsmanship to every vehicle that enters our doors. Our team of dedicated professionals combines years of experience with state-of-the-art diagnostic tools to ensure your vehicle performs at its best.
          </p>
          <p className="mb-6 text-sm sm:text-base">
            Our comprehensive range of services covers everything from routine inspections and preventive maintenance to complex repairs and diagnostics. Whether it's a minor tune-up or a major overhaul, we have the expertise and resources to handle it efficiently and effectively.
          </p>
          <p className="mb-6 text-sm sm:text-base">
            At Car Services, customer satisfaction is our top priority. We believe in building long-term relationships with our clients based on trust and transparency. That's why we take the time to explain every service recommendation and provide detailed cost estimates upfront. Your peace of mind is important to us, and we strive to exceed your expectations with every visit.
          </p>
          <p className="mb-6 text-sm sm:text-base">
            Join thousands of satisfied customers who rely on Car Services for reliable, efficient, and personalized car care solutions. Whether you're looking for routine maintenance, emergency repairs, or expert advice, our friendly team is here to help. Contact us today to schedule your next service appointment and experience the difference with Car Services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
