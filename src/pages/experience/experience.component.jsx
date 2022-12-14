import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";


import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Deloitte */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
               
                
                
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">BUDGET INTERNATIONAL (USA).</Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                    Frontend Developer
                  </strong>
                  <br />
                  <strong>Technology:</strong>HTML, CSS, JS, React JS, React Native, Node.js,
                  NestJS, Flutter.
                  <br />
                  <strong>Duration:</strong> June 2020 - October 2020
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>I was in charge</strong> of creating{" "}
                      <strong>the full stack  </strong> company website. {" "}
                      
                    </li>
                    <li>
                      <strong>Developed & Enhanced features</strong> to
                      implement new changes done in sister project API & build
                      client-requested features.
                    </li>
                    <li>
                      <strong>Worked on</strong> JIRA stories to develop a new
                      API to support client-requested features.
                    </li>
                    <li>
                      <strong>Provided KT and workshops</strong> to different
                      <strong> MNC</strong> handing over Support tasks and
                      proceedings.
                    </li>
                    <li>
                      <strong>Created</strong> Change requests & Release on SNOW
                      for each deployment of Frontend, Backend & ETL jobs.
                    </li>
                    <li>
                      <strong>Implemented multi-lingual functionality</strong>{" "}
                      to the project's <strong>web application</strong> enabling
                      it to be used
                      <strong> across different countries</strong> by the
                      customers.
                    </li>
                    <li>
                      <strong>Worked</strong> on{" "}
                      <strong>building Hybrid Mobile App</strong> for{" "}
                      <strong>Health Industry</strong> using Flutter & Dart in
                      Firm Initiative.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>

      {/* Accenture */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">
                  Intel(Bolivia)
                </Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                     Developer Frot-End.
                  </strong>
                  <br />
                  <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL,
                  Python
                  <br />
                  <strong>Duration:</strong> January 2021 - December 2021
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>Developed &amp; enhanced</strong> multiple
                      features with customizability option across web apps
                    </li>
                    <li>
                      <strong>Developed</strong> automation system to create SQL
                      bulk query scripts that increased efficiency by 80%.
                    </li>
                    <li>
                      <strong>Performed</strong> application maintenance while
                      working as Production Support and front-end web developer..
                    </li>
                    <li>
                      <strong>Performed</strong> CRUD operations on multiple
                      databases to load/ remove data according to the business
                      requirements.
                    </li>
                    <li>
                      <strong>Co-created</strong> React Document used as a guide
                      for new developers.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>
    </div>
  );
};

export default Experience;
