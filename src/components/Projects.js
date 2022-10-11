import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coffee Website",
      description: "Trata-se de um projeto de site para reforçar os aprendizados em HTML, CSS, JavaScript e responsividade.",
      imgUrl: projImg3,
      link: 'https://vinisali.github.io/coffee-website/',
    },
    {
      title: "Living America",
      description: "Site para reservas de casas e hotéis, layout feito através do site Wix.com. Será recriado usando Angular. <EM DESENVOLVIMENTO>",
      imgUrl: projImg1,
      link: 'https://vinisali.wixsite.com/livingamerica',
    },
    {
      title: "Program.ooo",
      description: "Um divertido game de adivinhar palavras com temática tech, inspirado no term.ooo e Wordle. Será criado usando React. <EM DESENVOLVIMENTO>",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          
              <div>
                <h2>Projetos</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Página 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Página 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Página 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
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
                    <Tab.Pane eventKey="second">
                     <p>Em breve...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Em breve...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
