import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Terabyte from './images/terabyte.jpg';
import Sportday from './images/sportday.jpg';
import Zerto from './images/zerto.jpg';
import Partner from './images/partner.jpg';
import Peak from './images/peak.jpg';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export const People = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (

    <div className='container'>
      <h1> Life at HPE</h1>
      <Slider {...settings}>
        <div className='card'>
          <img src={Terabyte} alt="" className="W-100" />
          <div className="card-body">
            <h3>Terabyte Solution Day 2023</h3>
            <ul>
              <li><p>Participated in an exhibition booth to meet with HPE partners and clients</p></li>
              <li>
                <p>Attended Terabyte's seminar to update my knowledge on technology solutions, specifically focusing on the theme of data security</p>
                <ul>
                  <li><p>Cyber Threat Landscape by ALPHASEC</p></li>
                  <li><p>Modernize your business with HPE GreenLake for Storage by HPE</p></li>
                  <li><p>Real-Time Detection Meets Real-Time Protection by HPE</p></li>
                  <li><p>Ransomware Protection by Terabyte</p></li>
                  <li><p>Data Driven Solution by Terabyte</p></li>
                  <li><p>How to Build a Highly Secure and Resilient Veeam Infrastructure by Veeam</p></li>
                  <li><p>Power your transformation with Network Modernization solution by HPE aruba</p></li>
                  <li><p>Detect Ransomware Along the Cyber Kill Chain by FORTINET</p></li>
                  <li><p>The Role of AI in Skyfrog TMS for Logistics Optimization by Skyfrog</p></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img src={Zerto} alt="" className="W-100" />
          <div className="card-body">
            <h3>Zerto Partner Training (UNICORN) program</h3>
            <ul>
              <li>
                <p>provided in-depth knowledge about Zerto including</p>
                <ul>
                  <li>Zerto Concept</li>
                  <li>Zerto for VMs</li>
                  <li>Deploying ZVM appliance</li>
                  <li>Zerto for Managing and Protection</li>
                  <li>Zerto for cloud</li>
                  <li>Zerto for Azure</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img src={Partner} alt="" className="W-100" />
          <div className="card-body">
            <h3>HPE Partner Bootcamp 2023</h3>
            <ul>
              <li><p>Engaged in training activities with partners</p></li>
              <li>
                <p>Seminar for updating and discussing IT products and solutions</p>
                <ul>
                  <li>Strategy and Plan for Modernization with a Cloud Experience</li>
                  <li>GreenLake for Everything</li>
                  <li>GreenLake for Compute Ops Management</li>
                  <li>HPC/AI</li>
                  <li>HPE SAP solution</li>
                  <li>GreenLake for Block Storage powered by Alletra MP</li>
                  <li>GreenLake for File Storage and Private Cloud Business Edition(PCBE)</li>
                  <li>GreenLake for Data Protection</li>
                  <li>GreenLake for Ezmeral Data Fabric and Unified Analytics</li>
                  <li>GreenLake for Software-Defined Storage</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img src={Peak} alt="" className="W-100" />
          <div className="card-body">
            <h3>HPE Tech Pro Peak Virtual Experience</h3>
            <ul>
              <li>Updating technology and product knowledge with partners in the theme of "GreenLake for Everything"</li>
              <ul>
                <li>EP1: HPE GreenLake for Block Storage</li>
                <li>EP2: HPE GreenLake for Data Protection-GLBR,GLDR</li>
                <li>EP3: HPE GreenLake for File and PCBE (Private Cloud Business Enterprise)</li>
                <li>EP4: HPE GreenLake for Data Analytics-Ezmeral Data Fabric and Ezmeral Unified Analytics </li>
                <li>EP5: HPE GreenLake for PCE/GL managed services/sustainability</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img src={Sportday} alt="" className="W-100" />
          <div className="card-body">
            <h3>HPE Sportday</h3>
          </div>
        </div>
      </Slider>
    </div>

  );
};