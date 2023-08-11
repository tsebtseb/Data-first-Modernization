import { ReactComponent as HpeIcon} from './icons/hpeiconv.svg';
import { ReactComponent as PachydermIcon} from './icons/pachydermicon.svg';
import { ReactComponent as ZertoIcon} from './icons/zertoicon.svg';
import { ReactComponent as CoheyIcon} from './icons/cohesityicon.svg';
import { ReactComponent as ArubaIcon} from './icons/arubaicon.svg';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Proliant from './images/proliant.png';
import Flex from './images/flex.png';
import Edgeline from './images/edgeline.jpg';
import Alletra from './images/alletra.jpg';
import Simplivity from './images/simplivity.jpg';
import Allefour from './images/alle4000.jpg';
import DHCI from './images/dhci.png';
import Storeonce from './images/storeonce.png';
import Storetwo from './images/storetwo.png';
import Accesspoint from './images/accesspoint.jpg';
import Scality from './images/scality.jpg';


const Timeline = () => {
    return ( 
        <div className="timeline">
            <h1 className='title' style={{
                color: '#00873D'
            }}>HPE Highlights Products</h1>
            <VerticalTimeline lineColor='#000'>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title">HPE Ezmeral Unified Analytics Software</h3>
                    <h5 className="vertical-timeline-element-subtitle">Analytic Platform</h5>
                    <p className="description">HPE Ezmeral Unified Analytics Software is an open-source platform that provides an end-to-end analytic tool for faster and easier data access. It is designed to be hybrid, allowing users to install, access, and connect to data from various sources, including data centers, on-premises, business edge, and cloud environments. This facilitates the development and deployment of applications, analytics, and AI workloads at an enterprise scale, benefiting all data users, developers, and enterprises. The platform combines the advantages of on-premises and cloud, offering scalability, extensibility with custom and third-party applications, and increased productivity with lower Total Cost of Ownership (TCO). It promotes innovation, self-service access, and eliminates IT bottlenecks while providing cost visibility through the Saas (As-a-service) model, enabling clients to predict and control their cost. Additionally, HPE Ezmeral Unified Analytics Software ensures enterprise-grade security and application support with zero-trust authentication, single sign-on, and comprehensive access control and observability for user, applications and data. Moreover, it enables a cloud experience everywhere, ensuring seamless cloud capabilities across diverse environments.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<PachydermIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#7630EA'
                    }}>Pachyderm</h3>
                    <h5 className="vertical-timeline-element-subtitle">Analytic Platform</h5>
                    <p className="description">Pachyderm is a tool for machine learning and automated data pipelines. It includes built-in version control and data lineage, enabling faster development and deployment of ML workflows, data transformation, and AI applications at scale. With reproducible AI capability, it can recreate AI processes for consistency and reliability. By utilizing reproducible models and automated data pipelines, it accelerates data collection, analysis, monitoring, and model retraining.The benefits of using Pachyderm include data lineage, which refers to the visibility of data movement and helps in easy error tracking, data versioning, auto-detection, and automated deduplication. It enhances efficiency, automates data processing, and supports both cloud and on-premises installations.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<ZertoIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#a90000'
                    }}>Zerto</h3>
                    <h5 className="vertical-timeline-element-subtitle">Data Protection</h5>
                    <p className="description">Zerto is a product designed for GLDR (GreenLake for Disaster Recovery) that protects data through journal-based replication and recovery by checkpoint. It replicates data using various components, including Zerto Virtual Manager (ZVM), Zerto Cloud Appliance (ZCA), and Virtual Replication Appliance (VRA), all integrated natively with the platform. The architecture is scalable and aids in orchestration and automation with failover capability, allowing users to test and develop without impacting real data or production before an actual failover. It protects against ransomware with real-time encryption detection, providing early warnings and checkpoints to rollback to an uninfected state for recovery. Zerto enables continuous data protection (CDP) with near-synchronous replication and journaling for recovery support.</p>
                    <p className="description">The great benefit of Zerto is its ability to optimize and achieve near-zero RPOs (Recovery Point Objectives) and fastest RTOs (Recovery Time Objectives), which are crucial service level agreement (SLA) metrics to measure disaster recovery (DR) effectiveness. RTO refers to the expected downtime before operation can resume and the time needed for recovery from disruptive events, while RPO measures data loss in terms of the most recent point in time from which recovery is possible, emphasizing the need for up-to-date data. Zerto also offers SaaS-based analytics for predictable and transparent insight across all environments, providing out-of-the-box dashboards and reports for real-time infrastructure planning with Zerto Resource Planner.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<CoheyIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#64bc1c'
                    }}>Cohesity</h3>
                    <h5 className="vertical-timeline-element-subtitle">Data Protection</h5>
                    <p className="description">Cohesity is a secondary storage solution consolidated into a hyperconverged platform that aids in securing data and providing data protection for both cloud and on-premises environments. It uses FIPs certified encryption, which is more secure than hardware-only encryption, and allows for unlimited frequent backups to reduce Recovery Time Objective (RTO) and Recovery Point Objective (RPO). It isolates other virtual and physical data for more secure backup. Additionally, Cohesity can detect ransomware or cyber threats using AI-powered insight and ML-based scanning, along with user behavior monitoring, to automatically discover cyber threats and classify data, whether the data is sensitive. It protects against ransomware for all data in virtual machines, applications, files, or other objects through unlimited immutable snapshots and cyber vaulting. Cohesity also offers disaster recovery (DR) and failback for mission-critical workloads, reducing complexity and maximizing application availability. Moreover, it goes beyond zero trust by utilizing advanced access control, including Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC).</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#00739D'
                    }}>HPE Solutions for Scality ARTESCA</h3>
                    <h5 className="vertical-timeline-element-subtitle">File and Object Storage</h5>
                    <p className="description">HPE Solutions for Scality ARTESCA is a file storage and object storage solution that aids cloud-native environments with Kubernetes-based orchestration. It offers resilience, unified data access, and analytic in-memory applications. As a software-defined storage, it combines adaptive data management with hybrid cloud-ready S3 API-compatible object stores using Scality RING and native file service activity. This solution brings cloud services to wherever applications or data reside, providing an application-centric, developer-friendly, and cloud-first object storage platform.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={Scality} alt='' />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<ArubaIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#f8741c'
                    }}>Aruba ClearPass</h3>
                    <h5 className="vertical-timeline-element-subtitle">Network</h5>
                    <p className="description">Aruba ClearPass is a policy management platform for secure network access control, implementing role-based access policies based on Zero Trust security principles for authentication and authorization. It can be used for all systems, including wireless, wired, VPN, and wired networks. ClearPass combines AAA (Authentication, Authorization, and Accounting), NAC (Network Access Control), BYOD (Bring Your Own Device), and Guest Access functionalities. It supports hybrid environments, IoT devices, and edge computing.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<ArubaIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#f8741c'
                    }}>Aruba Access Points</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Network</h5>
                    <p className="description">It is a network device that enables Wi-Fi devices to connect to the wired network. Aruba access points provide fast and secure connectivity with resiliency and flexibility at multi-gigabit speeds to support IoT and cloud devices, even in hybrid workspaces. They reduce costs and management overhead and deliver accurate indoor location services at scale. Aruba offers a variety of Wi-Fi Certified access points, including Wi-Fi 6E Indoor APs (for faster connections and wider channels), Wi-Fi 6 Indoor Access Points, Wi-Fi 6 Outdoor Access Points, and Wi-Fi 6 Hospitality and Remote Access Points.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={Accesspoint} alt='' />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#7630EA'
                    }}>HPE Alletra</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Storage</h5>
                    <p className="description">It is a hybrid storage solution that provides Tier 1 data storage, running applications from edge to cloud with a cloud experience for every workload. It is cloud-managed and service-centric, offering all NVMe storage options. </p>
                    <p className="description">The product line is divided into different types for clients to choose from, depending on their specific workload needs.</p>
                    <ul>
                        <li><b>HPE Alletra 5000 Series:</b> Designed for <b>general-purpose workloads</b>, it offers reliability, simplicity, and cost efficiency.</li>
                        <li><b>HPE Alletra 6000 Series:</b> Designed for <b>business-critical workloads</b> with strict availability and performance SLAs (Service Level Agreements).</li>
                        <li><b>HPE Alletra 9000 Series:</b> Designed for <b>mission-critical workloads</b>, it is optimized for extreme latency and availability requirements.</li>
                    </ul>
                    <div className="vertical-timeline-element-image">
                        <img src={Alletra} alt='' />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#7630EA'
                    }}>HPE Alletra / Apollo 4000</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Storage</h5>
                    <p className="description">It is a powerful data storage server designed to support data-centric workloads, data-driven initiatives, and digital transformation at any scale, from archiving to high-throughput and in-place analytics and AI/ML. Its architecture is optimized for data applications, striking a balance between data capacity, throughput, and processing power. Additionally, it offers end-to-end security with Zero Trust principles and provides an intuitive cloud experience as it can be self-managed regardless of its physical location, operating as a service.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={Allefour} alt='' />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#7630EA'
                    }}>HPE StoreOnce</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Storage</h5>
                    <p className="description">It serves as a secondary-tier data storage solution, ideal for storing historical information that is no longer actively used for day-to-day operations. This allows it to support analytics and serve as a backup repository. With lower costs compared to traditional solutions, it delivers enhanced hybrid cloud data protection, offering greater simplicity, higher performance, and built-in ransomware protection. Its capabilities include disk-based backup and recovery appliances with federated deduplication, providing a comprehensive data storage solution for various needs.</p>
                    <div className="vertical-timeline-element-image">
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1 }}>
                                <img
                                src={Storeonce}
                                alt=""
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    marginRight: '10px',
                                }}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <img
                                src={Storetwo}
                                alt=""
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    marginLeft: '10px',
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#7630EA'
                    }}>HPE Alletra dHCI</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Storage</h5>
                    <p className="description">HPE Alletra disaggregated HCI provides a platform that offers the flexibility and simplicity of hyperconverged infrastructure for easy management.  It offers business-critical speed and resiliency while allowing independent scaling of compute and storage resources. This level of IT agility ensures that applications are always available and perform at their best.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={DHCI} alt='' />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title" style={{
                        color: '#7630EA'
                    }}>HPE SimpliVity</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Storage</h5>
                    <p className="description">It is an intelligent software-defined hyperconverged infrastructure optimized for edge computing, Virtual Desktop Infrastructure (VDI), and general virtualization workloads.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={Simplivity} alt='' />
                    </div>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title">HPE ProLiant Servers</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Compute</h5>
                    <p className="description">It is a server solution engineered for the hybrid world, optimized for computer vision inference, generative visual AI, and end-to-end natural language processing. It offers an intuitive cloud operating experience, a trusted edge-to-cloud security architecture to protect workloads, and accelerates innovation and performance for workloads from the data center to the edge.</p>
                    <ul>
                        <li>HPE ProLiant Servers DL are rack-optimized servers that modernize data centers.</li>
                        <li>HPE ProLiant Servers ML are tower servers that provide a secure and productive infrastructure.</li>
                    </ul>
                    <div className="vertical-timeline-element-image">
                        <img src={Proliant} alt='' />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title">HPE Superdome Flex Servers</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Compute</h5>
                    <p className="description">It is a uniquely modular, highly flexible, and reliable server platform that is commonly used for applications with databases such as SAP HANA.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={Flex} alt='' />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                iconStyle={{background:'#FFFFFF'}}
                icon={<HpeIcon />}>
                    <h3 className="vertical-timeline-element-title">HPE Edgeline Systems</h3>
                    <h5 className="vertical-timeline-element-subtitle">Infrastructure: Compute</h5>
                    <p className="description">HPE Edgeline Systems are server platforms commonly applied in edge computing, particularly in industries like manufacturing.</p>
                    <div className="vertical-timeline-element-image">
                        <img src={Edgeline} alt='' />
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
     );
}
 
export default Timeline;