import React from 'react';
import './projects.css';


const information = [

  {
    url: 'https://github.com/RajatKadian/WebsitePhishingML.git',
    name: 'ML Website Phishing Classifier Machine Learning',
    desc: 'Using Pipeline and various classification techniques such as KNN, SVM, DecisionTree, RandomForest to classify website is phishing website'
  },
  {
    url: 'https://github.com/RajatKadian/DenmarkBankNoteAuthClassifier.git',
    name: 'ML Denmark Bank Note Image Authentication Classifier',
    desc: 'Denmark Bank note classification using Majority Vote Classifier , Boosting Methods AdaBoost and XGBOost to classify image whether fake currency or genuine currency '
  },
  {
    url: 'https://github.com/RajatKadian/DenmarkBankNoteAuthClassifier.git',
    name: 'ML House Price Prediction in Boston',
    desc: 'Using Various types of Regressor to predict the house prices in BOSTON such as XGBoost Regressor, AdaBoost, gradient boosting regressor, random forest and decision tree '
  },

  {
    url: 'https://github.com/RajatKadian/MLLassoInstRatingRegression.git',
    name: 'ML To Predict Instructor Rating ',
    desc: 'Using Lasso Regression with hyperparameters, Linear Regression and Ridge Regression to predict instructor rating and number rating in different notebooks'
  },
  {
    url: 'https://github.com/amanmishra003/TruckFlow_android.git',
    name: 'Android Studio  TruckApp',
    desc: 'Android Application in Java using fireBase as DB, features includes Real time tracking, Document Management System, Load Matching and Booking '
  },
  ,
  {
    url: 'https://rajatkadian123.wixsite.com/teeverse/app-landing-page',
    name: 'Live T-Shirt Branding Website',
    desc: 'Customize T-Shirt Selling websites for Astrology or Cosmos lovers developed and deployed on Wix.com uses various SEO and analytics products are further segmented.'
  },

  {
    url: 'https://github.com/drake7/tfpresistuser',
    name: 'SpringBoot Api ',
    desc: 'SpringBoot Rest API creation using Firebase as DB performing all CRUD (Create, Read, Update and Deletion ) operations and sending, fetching  and Storing Image in Cloudinary with random UUID'
  },
  {
    url: 'https://github.com/RajatKadian/leftiesMobileFoodApp.git',
    name: 'Lefties Food App Android',
    desc: 'Lefties Food Mobile App to deliver or provide pickup option of foods from restaurants one can also login as restaurant so they can post there food which they have extra so we can save food wastage'
  },

  {
    url: 'https://github.com/RajatKadian/MLProjectrealestate.git',
    name: 'ML Project Real Estate',
    desc: 'Proficient in Python programming with expertise in utilizing libraries such as tkinter for GUI development and web scraping.  implementing data processing and analysis functionalities, and leveraging Python'
  },

  {
    url: 'https://github.com/RajatKadian/EMS.git',
    name: 'Java EMS',
    desc: 'Employee Management using Hibernate JPA, Spring MVC , Created in springBoot which using HighChart Api for data analytics of employees'
  },
  {
    url: 'https://github.com/RajatKadian/E-commerce-Responsive.git',
    name: 'E-Commerce Responsive Website ',
    desc: 'Responsive E-Commerce Webiste using Grid , FLexBox, Animations and various Transitions developed using HTML, CSS, JS '
  },
  {
    url: 'https://github.com/RajatKadian/Kenbit-Website.git',
    name: 'Kenbit Website ',
    desc: 'Responsive WebSite for Kenbit Teaching Solutions uses HTML, CSS , Vanilla JavaScript, Bootstrap and Material UI'
  },
  {
    url: 'https://github.com/RajatKadian/Grocery-WIndows-Form.git',
    name: 'Grocery Windows Form in C# windows form as GUI',
    desc: 'C# GUI Application for Grocery Department uses various features and functionalities'
  },
  {
    url: 'https://github.com/RajatKadian/ticketing-c-.git',
    name: 'Ticket Application Developed in C# ',
    desc: 'Ticketing Application developer in C# only console based application'
  },
  {
    url: 'https://github.com/RajatKadian/screenshtautomate.git',
    name: 'Screenshot Automate python tkinter',
    desc: ' Python ScreenShot Automater bot using pyAUtoGui and Selenium , Chrome Driver'
  }

]


const Proj = (props) => (
  <div className="card">
    <h2 className="card-title">{props.name}</h2>
    <p className="card-description">{props.desc}</p>
    <a href={props.url} className="card-button">View Project</a>
  </div>

)

const Projects = () => (
  <div className="main-content">
    {/* <p>projects</p> */}
    {information.map((x, index) => (
      <Proj url={x.url} name={x.name} desc={x.desc} />

    ))}
  </div>
);

export default Projects;