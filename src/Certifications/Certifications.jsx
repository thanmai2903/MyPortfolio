import "./Certifications.css";

import cisco from "../Images/cisco-certificate.png";
import infosys from "../Images/infosys-certificate.jpeg";
import gdg from "../Images/gdg-certificate.png";

const certificateStats = [
  {
    number: "20+",
    title: "Certificates"
  },
  {
    number: "3",
    title: "Organizations"
  },
  {
    number: "100+",
    title: "Learning Hours"
  },
  {
    number: "2025",
    title: "Latest Achievement"
  }
];

const certificates = [

  {
    title: "CCNA: Introduction to Networks",

    organization: "Cisco Networking Academy",

    image: cisco,

    issued: "2025",

    level: "Professional",

    color: "blue",

    tags: [
      "Networking",
      "Cisco",
      "TCP/IP",
      "Routing"
    ],

    description:
      "Successfully completed Cisco's CCNA Introduction to Networks course covering networking fundamentals, IP addressing, switching, routing and network security concepts.",

    

    certificate: cisco
  },

  {
    title: "Artificial Intelligence Internship",

    organization: "Infosys Springboard",

    image: infosys,

    issued: "2025",

    level: "Internship",

    color: "purple",

    tags: [
      "AI",
      "Machine Learning",
      "Python",
      "Internship"
    ],

    description:
      "Completed Artificial Intelligence internship focused on machine learning concepts, AI fundamentals and practical project implementation.",

    

    certificate: infosys
  },

  {
    title: "Google Cloud Study Jams",

    organization: "Google Developer Groups",

    image: gdg,

    issued: "2025",

    level: "Cloud",

    color: "green",

    tags: [
      "Google Cloud",
      "Cloud Computing",
      "Hands-on Labs",
      "DevOps"
    ],

    description:
      "Completed Google Cloud Study Jams with practical cloud labs covering Compute Engine, Storage, IAM and cloud deployment services.",

    

    certificate: gdg
  }

];

function Certifications() {

return (

<section
className="certifications"
id="certifications"
>

<div className="certifications-container">

{/* ===========================
      TITLE
=========================== */}

<h2 className="section-title">
Certifications & Achievements
</h2>

<p className="section-subtitle">
Industry-recognized certifications, internships and technical programs
that demonstrate my continuous learning in Full Stack Development,
Artificial Intelligence and Cloud technologies.
</p>

<div className="section-divider"></div>

{/* ===========================
      STATS
=========================== */}

<div className="certificate-stats">

{certificateStats.map((item,index)=>(

<div
className="stat-card"
key={index}
>

<h3>

{item.number}

</h3>

<p>

{item.title}

</p>

</div>

))}

</div>

{/* ===========================
      CERTIFICATES
=========================== */}

<div className="certificate-grid">

{certificates.map((certificate,index)=>(

<div
className="certificate-card"
key={index}
>

{/* LEFT */}

<div className="certificate-image-wrapper">

<img
src={certificate.image}
alt={certificate.title}
className="certificate-image"
/>

<span className={`certificate-level ${certificate.color}`}>

{certificate.level}

</span>

</div>

{/* RIGHT */}

<div className="certificate-content">

<div className="certificate-top">

<h3>

{certificate.title}

</h3>

<span className="issued-year">

{certificate.issued}

</span>

</div>

<h4>

{certificate.organization}

</h4>

<p>

{certificate.description}

</p>

{/* TAGS */}

<div className="certificate-tags">

{certificate.tags.map((tag,i)=>(

<span key={i}>

{tag}

</span>

))}

</div>

{/* BUTTONS */}

<div className="certificate-buttons">

<a
href={certificate.certificate}
target="_blank"
rel="noreferrer"
className="view-btn"
>

View Certificate

</a>



</div>

</div>

</div>

))}

</div>

{/* ===========================
      CTA
=========================== */}

<div className="certification-cta">

<h2>Continuous Learning Journey </h2>

<p>
I believe in continuously improving my skills through certifications,
real-world projects and hands-on experience. Every certification reflects
my commitment to becoming a better Software Engineer and Full Stack Developer.
</p>

</div>

</div>

</section>

);

}

export default Certifications;
