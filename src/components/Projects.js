import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chatImg from "../assets/img/chat_img.png";
import calImg from "../assets/img/calculator_img.png";
import todoList from "../assets/img/todo-list-img.png";
import mindfulMomnet from "../assets/img/mindFul-moments-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chat-Application ",
      description: "Mern Development",
      imgUrl: chatImg,
    },
    {
      title: "Scientific Calculator: IOs Version",
      description: "Web Development",
      imgUrl: calImg,
    },
    {
      title: "Todo List",
      description: "Web Development",
      imgUrl: todoList,
    },
    {
      title: "MindFull Moments App",
      description: "App Development",
      imgUrl: mindfulMomnet,
    },
    {
      title: "Web Development",
      description: "Url Shortner",
      imgUrl: chatImg,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> During my academics, I have undertaken several projects to enhance my skills and gain hands-on experience. These projects include developing a React-based scientific calculator, a Password Generator & Encryptor using Java, and a ChatApp with Node.js, React, and MongoDB. Each project has strengthened my proficiency in various programming languages and technologies, preparing me for real-world challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
