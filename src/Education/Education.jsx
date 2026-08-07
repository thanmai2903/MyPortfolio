import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="education-container">

        <h2 className="education-title">Education</h2>

        <div className="timeline">

          {/* B.Tech */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <div className="card-header">

                <span className="year">2023 - Present</span>

                <span className="score">⭐ CGPA 8.86 / 10</span>

              </div>

              <h3>B.Tech - Computer Science & Engineering</h3>

              <h4>Sri Venkateswara College of Engineering, Tirupati</h4>

              <div className="course-list">

                <span>DSA</span>
                <span>Algorithms</span>
                <span>DBMS</span>
                <span>OS</span>
                <span>CN</span>
                <span>OOP</span>
                <span>Machine Learning</span>
                <span>Cloud</span>

              </div>

            </div>

          </div>

          {/* Intermediate */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <div className="card-header">

                <span className="year">2021 - 2023</span>

                <span className="score">🏅 92.1%</span>

              </div>

              <h3>Intermediate (MPC)</h3>

              <h4>Board of Intermediate Education, Andhra Pradesh</h4>

              <p className="details">
                Mathematics • Physics • Chemistry
              </p>

            </div>

          </div>

          {/* SSC */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <div className="card-header">

                <span className="year">2020 - 2021</span>

                <span className="score">🏆 98.33%</span>

              </div>

              <h3>Secondary School Certificate (SSC)</h3>

              <h4>Aditya High School</h4>

              <p className="details">
                Scored <strong>590 / 600</strong>
              </p>

            </div>

          </div>

        </div>

        {/* Quick Stats */}

        <div className="education-stats">

          <div className="stat-card">
            <h3>🎓 8.86</h3>
            <p>Current CGPA</p>
          </div>

          <div className="stat-card">
            <h3>🏆 98.33%</h3>
            <p>SSC</p>
          </div>

          <div className="stat-card">
            <h3>📘 92.1%</h3>
            <p>Intermediate</p>
          </div>

          <div className="stat-card">
            <h3>🎯 2027</h3>
            <p>Graduation</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;