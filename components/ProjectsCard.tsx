import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({ name, desc, imgPath, githubFirst, githubSecond, link }: ProjectType) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <p className="description mt-3">{desc}</p>
                {imgPath ? (
                  <div className="row">
                    <img
                      src={imgPath}
                      style={{
                        objectFit: 'cover',
                        left: 0,
                        right: 0,
                        top: '7rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 'auto',
                        height: 'auto',
                      }}
                      className="shadow mb-3"
                      alt={imgPath}
                    />
                  </div>
                ) : null}
                {githubFirst ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={githubFirst.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon"><i className="fa fa-github mr-2" />
                    {githubFirst.label ? githubFirst.label : 'Github'}
                    </span>
                  </Button>
                ) : null}
                {githubSecond ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={githubSecond.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon"><i className="fa fa-github mr-2" />
                      {githubSecond.label ? githubSecond.label : 'Github'}
                    </span>
                  </Button>
                ) : null}
                {link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
