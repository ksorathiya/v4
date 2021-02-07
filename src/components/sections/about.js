import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'NodeJS | ExpressJS | SailsJS',
    'React | React Native',
    'HTML 5 | CSS 3 | JavaScript',
    'MySQL | SQLite | Postgres',
    'MongoDB | InfluxDB | Redis | RabbitMQ',
    'Asterisk | eJabberd',
    'D3 | Dygraph | RechartJS',
    'C | C++ | Erlang',
    'Bash Scripting',
    'AWS',
    'Nginx | Apache ',
    'Docker | Kubernetes',
    'Ansible | Teleport',
    'Jenkins | Gitlab CI/CD',
    'ElasticSearch | Logstash | Grafana',
    'Telegraf | Chronograf | Kapacitor',
    'Linux System Administration',
    'OpenStack | CloudStack',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Analysis',
    'Blockchain',
    'Go | Python | Rust',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              My name is Kartik. I am currently carving my path towards becoming a Technical Project
              Manager. Thus, currently, my focus is mainly in learning all the technical skills that
              comes my way and practice project management and leadership.
            </p>

            {/* <p>
              I enjoy building solutions that helps humans solve their problems, whether that be
              websites, applications, embedded devices, algorithms, workflows, or anything in
              between. My goal is to always have an attention to details in finding out what the
              end-users exactly wants.
            </p> */}

            <p>
              I joined my current employer, Solvative (previously Quark Studios), right after my
              graduation as a full stack developer (javascript). I had offers from TCS and Accenture
              but I chose to join a startup in order to gain skills across different stacks,
              technical and managerial. Here, I had to wear many hats and sometimes all at the same
              time. I started off as a MEAN stack developer and then eventually found myself leading
              multiple project teams (max 14 peers). Here, my roles and responsibilities range from
              communicating effectively with the client to understand their requirements, designing
              optimized and efficient software architecture, and leading the project team success.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
