import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Internship</h4>
                <h5>Krytil Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a Web Development Internship, where I built and maintained responsive web applications using modern technologies, improving UI/UX and functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE in Information Science and Engineering</h4>
                <h5>Atria Institute of Technology</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Currently pursuing a Bachelor's degree in Information Science and Engineering, focusing on programming, web development, AI, and software development fundamentals.<br /><br />
              GPA: 7.9
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PUC in PCMB</h4>
                <h5>Government PU college</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Pre-University education in Physics, Chemistry, Mathematics, and Biology, building a strong foundation in analytical and problem-solving skills.<br /><br />
              GPA: 83%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High school in 10th</h4>
                <h5>Karnataka public school</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed high school education with subjects including Mathematics, Science, English, Hindi, Kannada, and Social Studies, building a strong academic foundation.<br /><br />
              GPA: 81.28%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
