import React, { useState } from "react";
import "../assets/css/about.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        Welcome to our BookStore! We are passionate about books and aim to
        provide an extensive collection for book lovers of all genres. Whether
        you're into fiction, non-fiction, or graphic novels, we have something
        for everyone.
      </p>
      <button className="toggle-button" onClick={handleToggle}>
        {showMore ? "Show Less" : "Read More"}
      </button>
      {showMore && (
        <div className="about-more animate">
          <h2>Our Purpose</h2>
          <p>
            We create a convenient and reliable online store where every
            customer can easily find and purchase high-quality products at
            affordable prices. Our goal is to ensure a pleasant and secure
            shopping experience by offering a wide range of products, convenient
            payment options, and fast delivery.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to reach out
            to us via the contact page. We’re happy to help!
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
