import ted from './img/01.png';
import chinago from './img/02.png';
import drknox from './img/03.png';
import oc from './img/04.png';
import wine from './img/06.png';
import hiretual from './img/08.png';
import cv from './img/07.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App animated fadeIn">
    <Container>
     <div className="centered">
     <h1 data-shadow="TedPedersen">TedPedersen</h1></div>
    <Tabs defaultActiveKey="resume" id="uncontrolled-tab-example">
      <Tab eventKey="resume" title="Resume">
      <Container className="whitebg">
        <Row>
        <Col>
        <h3>About</h3>
        <p>Creative Senior Designer and Front-end Developer with 13+ years of experience designing, prototyping and building responsive websites, mobile apps, and interactive features that drive business growth and improve UX.</p>
        <h3>Skills</h3>
        <ul className="list">
          <li>Expert in HTML5/CSS3</li>
          <li>Expert in Design/Storyboarding/Prototyping</li>
          <li>Sketch, Photoshop, Invision</li>
          <li>JavaScript, jQuery, Node, React</li>
          <li>Wordpress custom development</li>
          <li>Agile Development</li>
          <li>Git</li>
          <li>Python, R, Interactive Notebooks</li>
          <li>Swift, Xcode, iOS development</li>
        </ul>
        <h3>Experience</h3>
        <h5>Owner, TedWebDev, 2006 - Current</h5>
        <p>Freelance developing, designing and maintaining websites, logos, print and multimedia. SEO consultation and implementation. In-House design and development of web-based technologies.</p>
        <h5>MTS II UI Engineer, eBay, Jan 2011 - Aug 2018</h5>
        <ul className="list">
          <li>Designed, built and tested applications for internal big data analysis.</li>
          <li>Designed tools for the DBAs to monitor eBay's data centers and successfully fail them over.</li>
          <li>Designed tools to simplify bulk and piece meal database configuration.</li>
          <li>Designed and built external facing products showcasing eBay's international trends.</li>
          <li>Designed and built a tool for customers to appraise items</li>
          <li>Designed and built a voice app for Google Home.</li>
        </ul>
        <h5>SEO Engineer, Search Engine Optimization Inc, Oct 2008 - Jun 2009</h5>
        <p>Converted antiquated website layouts with mordern best practices. Optimized websites for SEO utilizing PHP, ASP.NET and HTML. Reviewed sites and consulted with clients. Setup Apache and MS Database testing environments.</p>
        <h5>Senior Graphic Designer, The Outdoor Advertising Specialists, Sep 2006 - Jun 2008</h5>
        <p>Updated, maintained and created corporate franchisee websites nationwide. Created business cards, brochures, door hangers and other ad materials. Created and maintained Media Kit packages. Prepped all media for print.</p>
        <h3>Education</h3>
        <h5>UC Berkeley Extention - 2020</h5>
        <p>Berkeley Coding Boot Camp, recieved certificate.</p>
        <h5>MiraCosta College, San Diego, CA, 2004 - 2007</h5>
        <p>Computer Programming, Graphic Design, recieved AA.</p>
        <h5>Musicians Institute, Hollywood, CA, 1999 - 2001</h5>
        <p>Recording Engineering, Recording Arts Technology/Technician, recieved certificate.</p>
        </Col>
        </Row>
        </Container>
      </Tab>
      <Tab eventKey="portfoltio" title="Portfolio">
      <Container className="whitebg">
        <Row>
        <Col>
        <a target="_blank" href="http://wichitachinago.co/">
        <Card>
            <Card.Img variant="top" src={chinago} />
          </Card>
          </a>
          <a target="_blank" href="http://danburyctdentist.com/">
        <Card>
            <Card.Img variant="top" src={drknox} />
          </Card>
          </a>
          <a target="_blank" href="http://callocplumbing.com/">
        <Card>
            <Card.Img variant="top" src={oc} />
          </Card>
          </a>
          <a target="_blank" href="https://hiretual.com/">
        <Card>
            <Card.Img variant="top" src={hiretual} />
          </Card>
          </a>
          <a target="_blank" href="https://hogansrun.com/">
        <Card>
            <Card.Img variant="top" src={wine} />
          </Card>
          </a>
          <a target="_blank" href="https://cvdatahub.com">
        <Card>
            <Card.Img variant="top" src={cv} />
          </Card>
          </a>
          <a target="_blank" href="https://tedwebdev.com">
        <Card>
            <Card.Img variant="top" src={ted} />
          </Card>
          </a>
        </Col>
        </Row>
      </Container>
        
      </Tab>
      <Tab eventKey="contact" title="Contact">
      <Container className="whitebg">
        <Row>
          <Col>
      <ul class="list contact">
            <li>Phone: <a tel="760-277-3505">760-277-3505</a></li>
            <li>Email: <a href="mailto:tedpedersen@me.com">tedpedersen@me.com</a></li>
            <li>Github: <a href="https://github.com/tedpedersen" title="Ted Pedersen's Github Account">GitHub</a></li>
            <li>Linkedin: <a href="https://www.linkedin.com/in/tedwebdev/" title="Ted Pedersen's Linkedin Account" target="_blank">LinkedIn</a></li>
            <li>YouTube: <a href="https://www.youtube.com/user/tedpedersen123" title="Ted Pedersen's YouTube Channel" target="_blank">YouTube</a></li>
        </ul>
        </Col>
        </Row>
        </Container>
      </Tab>
    </Tabs>
    </Container>
    </div>

  );
}

export default App;
