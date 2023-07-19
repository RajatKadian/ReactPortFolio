import React from 'react';
import './about.css';



const information = [
  {
    url: '/React.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/Python.PNG',
    desc: 'Proficient in Python programming with expertise in utilizing libraries such as tkinter for GUI development and web scraping.  implementing data processing and analysis functionalities, and leveraging Python'
  },
  {
    url: '/Numpy.PNG',
    name: 'Scientific python',
    desc: 'Experienced in scientific Python libraries including NumPy, Pandas, SciPy, and Matplotlib. Proficient in data manipulation, analysis, and visualization using these libraries to perform data exploration, statistical analysis, and plotting.'
  },
  {
    url: '/Machine.PNG',
    name: 'Machine Learning',
    desc: 'machine learning techniques regression, classification, clustering, and boosting algorithms. libraries such as scikit-learn . Skilled in hyperparameter tuning, and ensemble methods'
  },
  {
    url: '/NPM.PNG',
    name: 'NPM ',
    desc: 'Proficient in MERN stack development with expertise in MongoDB, Express.js, React.js, and Node.js. Skilled in building robust and scalable. Experienced in leveraging the MERN stack'
  },
  {
    url: '/JAVA.PNG',
    desc: 'Experienced in developing robust and scalable applications, utilizing Java frameworks such as Spring and Hibernate.'
  }, {
    url: '/Spring.PNG',
 
    desc: 'Proficient in Spring Boot and Spring MVC frameworks for Java development. Experienced in building web applications and RESTful APIs using Spring Boot, leveraging its powerful features such as dependency injection, automatic configuration, and embedded servers.'
  }, {
    url: '/django.PNG',
    name: 'Django/Flask',
    desc: 'Experienced in building web applications using Django, a high-level Python web framework.Skilled in utilizing Djangos ORM, authentication system, and templating engine to develop feature-rich and secure web applications.  Flask, a lightweight web framework, for building smaller and more focused web applications with flexibility and simplicity.'
  }, {
    url: '/SQL.PNG',
  
    desc: 'SQL (Structured Query Language) for database management and data manipulation. Experienced in writing complex SQL queries, creating and modifying database schemas, and optimizing database performance. various relational database management systems (RDBMS) such as MySQL, PostgreSQL, and SQL Server.'
  },
  {
    url: '/mongo.PNG',
   
    desc: 'Proficient in MongoDB, a popular NoSQL database, for efficient and flexible data storage and retrieval. Experienced in working with MongoDBs document-oriented model, which allows for schema-less data representation and easy scalability. Skilled in performing CRUD operations (Create, Read, Update, Delete) using MongoDBs query language and leveraging its rich set of features, such as indexing, aggregation, and data replication'
  },
  {
    url: '/power.PNG',
    desc: 'Proficient in Power BI, a popular business intelligence and data visualization tool by Microsoft. Experienced in creating interactive and visually appealing dashboards, reports, and data visualizations using Power BIs intuitive interface. Skilled in connecting to various data sources, transforming and modeling data, and creating relationships between different data sets.'
  },
  {
    url: '/tableau.PNG',
    name: 'Tableau',
    desc: 'Skilled in connecting to various data sources, cleaning and designing interactive dashboards and reports. Knowledgeable in using Tableaus advanced features like calculated fields, parameters, and filters to perform data analysis and storytelling. Proficient in sharing and publishing Tableau visualizations for collaboration and decision-making.'
  },
  {
    url: '/rest.PNG',
    
    desc: 'Proficient in building RESTful APIs for web services and application development.  Skilled in creating endpoints, handling HTTP methods (GET, POST, PUT, DELETE). Knowledgeable in using frameworks such as Express.js for Node.js or Flask for Python to simplify API development and enhance productivity.'
  },
  {
    url: '/aws.PNG',
 
    desc: 'Amazon Web Services (AWS), a comprehensive cloud computing platform. Experienced in leveraging AWS services to design, deploy, and manage scalable and reliable cloud-based solutions. Skilled in utilizing AWS services such as EC2 for virtual server hosting, S3 for object storage, RDS for managed databases, Lambda for serverless computing, and  implementing cost-effective architectures.'
  },
  {
    url: '/android.PNG',
    name: 'Android Studio',
    desc: 'Proficient in Android app development, utilizing the Android SDK (Software Development Kit) and Java programming languages. Experienced in designing and developing native Android applications with a focus on user interface design, performance optimization, and seamless integration with device capabilities.'
  }
];

const Info = (props) => (
  <div className='card'>
    <img src={props.url} alt={props.name} className="card-image" />
    <div className="card-content">
      <p id="name">{props.name}</p>
      <p>{props.desc}</p>
    </div>
  </div>
);


const About = () => (
  <div className="about-container">
    <div className="container">
      <div className="profile">
        <h1>Rajat Kadian</h1>
        <h2>Full Stack Machine Learning Engineer</h2>
        <p>Experienced software engineer with 4 years of expertise in software development, specializing in both frontend and backend technologies. Proficient in machine learning, data analysis, and database systems, with a strong track record of building complex and scalable web applications. Skilled in utilizing various algorithms and programming languages to deliver innovative solutions. Continuously staying abreast of industry trends and technologies to ensure the development of high-quality and efficient software systems.</p>
      </div>
      <div className="image-container">
        <img src="/ImgRajat.jpeg" alt="Profile" className="profile-image" />
      </div>

    </div>
 
    <h1> What I DO</h1>

    <div className="loopc">
      {information.map((x, index) => (
        <Info key={index} url={x.url} name={x.name} desc={x.desc} />
      ))}
    </div>





  </div>

);

export default About;