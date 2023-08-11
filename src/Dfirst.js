import Digi from './images/digi.PNG';
import Dataf from './images/dataf.PNG';
import Maturitytable from './images/maturitytable.PNG';
import Greenlake from './images/greenlake.PNG';
import { Link } from 'react-router-dom';

const Dfirst = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };

    return (  
        <div className="data">
            <h1>Becoming Data-first Modernization</h1>
            <h2>Written by Natrada Surachettapong</h2>
            <p style={{ marginTop: '40px' }}><b>Digital transformation</b> is the process of utilizing and adopting <b>digital technologies</b>, including AI/ML, cloud computing, microservices, IoT, and blockchain, throughout the business to drive fundamental changes to business. These changes aim to reinvent the business model, optimize processes and operations, and improve customer service, ultimately enhancing the overall customer experience.</p>
            <img src={Digi} alt="" />
                <div className="centered-text">
                        <p style={{ marginTop: '5px' }}>
                            <b>Figure 1.</b> Digital transformation
                        </p>
                </div>
            <p>By integrating these digital technologies into all aspects of the business, it can facilitate faster and more informed decision-making, enable real-time responsiveness to market and customer expectations, and create new business opportunities.</p>
            <p style={{ marginTop: '40px' }}>As data continues to grow in importance, digital transformation has become increasingly crucial for businesses nowadays.</p>
            <p style={{ marginTop: '40px' }}><b>Importance of data:</b> Why is Data Important Nowadays?</p>
            <p>Data is a <b>life force</b>, which means it is a crucial catalyst and a driving force for moving and accelerating businesses forward in various aspects, including creating new opportunities and experiences, enabling faster decision-making, and facilitating the continuous delivery of innovation for businesses.</p>
            <p style={{ marginTop: '40px' }}>As data is important, becoming a <b>data-first leader</b>, where the leader embraces a data-driven approach in business, including prioritizing the use of data, making data-driven decisions, and integrating data into business strategies, can bring significant benefits to organizations.</p>
            <p>These benefits include:</p>
            <ul class="dot-list">
                <li>Higher margins and revenue</li>
                <li>Greater ability to recover from data loss</li>
                <li>Increased job satisfaction for both developers and data scientists, as they feel more involved in the decision-making process</li>
                <li>Accelerated development of innovative products/services</li>
            </ul>
            <p>These overall benefits enable the organization to gain a competitive advantage by utilizing the power of data for informed decision-making and strategic growth.</p>
            <p style={{ marginTop: '40px' }}>As we explore the importance of data and digital transformation in the business landscape, it is undeniable that many companies are eager to implement digital transformation. However, the true essence of digital transformation cannot be fully realized without adopting a <b>data-first modernization</b> approach.</p>
            <p style={{ marginTop: '40px' }}>So, what is data-first modernization?</p>
            <p style={{ marginTop: '40px' }}><b>Data-first modernization</b> refers to an approach or process that prioritizes data in organizing and managing a business. This means that the entire organization focuses on and emphasizes applying resources for:</p>
            <ul class="dot-list">
                <li>Cultivate or collecting data</li>
                <li>Connect data</li>
                <li>Manage data</li>
                <li>Analyse data</li>
                <li>Act on or utilizing data</li>
            </ul>
            <p>This approach is an essential component for the successful implementation of digital transformation.</p>
            <p style={{ marginTop: '40px' }}><b>Data-first modernization approach</b></p>
            <img src={Dataf} alt="" />
                <div className="centered-text">
                        <p style={{ marginTop: '5px' }}>
                            <b>Figure 2.</b> Data-first modernization approach
                        </p>
                </div>
            <p>Data-first modernization approach shifts the focus of digital transformation from the first wave, which was <b>infrastructure-first</b>, to the second wave, which is <b>data-first.</b></p>
            <p style={{ marginTop: '40px' }}><b>1st Wave: Infrastructure-first</b> refers to an organizational approach that prioritizes infrastructure-centric strategies, focusing on upgrading technology infrastructure components such as hardware, software, storage, and servers.</p>
            <p style={{ marginTop: '40px' }}>shift to…</p>
            <p style={{ marginTop: '40px' }}><b>2nd Wave: Data-first</b> refers to an organizational approach that prioritizes data-centric strategies, focusing on understanding insights and utilizing data to create value and drive business growth. It involves data management, data analytics, and data-driven decision-making to inform business strategies. This approach often involves integration with technology modernization, such as cloud computing, advanced analytics, and automation, to support effective data management and utilization.</p>  
            <p style={{ marginTop: '40px' }}><b>4 Steps to Data-First Modernization</b></p>
            <p style={{ marginTop: '40px' }}><b>1. Create CXO driven data strategy:</b></p>
            <p>The first step for an organization to achieve data-first modernization is for the CXO (Chief Experience Officer), a C-level executive position within the organization responsible for decision-making, to adopt a data-centric approach and process. This involves utilizing data to develop and implement business strategies that ensure appropriate adoption of analytic tools for decision-making, identifying operational areas for optimization, improving performance, and driving faster innovation.</p>
            <p style={{ marginTop: '40px' }}><b>2. Embrace data truths:</b></p>
            <p>The second step is for the company to understand the core and insights about data, recognizing its value, challenges, and rights, so that the organization can handle the data properly. Therefore, the company must realize that:</p>
            <ul class="dot-list">
                <li><b>Data is a core asset:</b> as data is the most valuable asset of the organization, the organization should properly consider it and allocate an appropriate portion of resources to it.</li>
                <li>
                    <b>Data has gravity:</b> this refers to the concept that data tends to stay in one place, which is where it originates. As a result, the processing power, services, and applications are attracted to the data due to throughput and latency, leading to data growth at its original location.
                    <p>This leads to the following <b>problems:</b></p>
                    <ul class="dot-list">
                        <li><b>Latency:</b> as data grows significantly at a specific location, it will take time for it to be accessible.</li>
                        <li><b>Non-portable:</b> as the data becomes significantly large, it becomes difficult and costly to move.</li>
                    </ul>
                    <p><b>Solutions</b> to deal with these problems:</p>
                    <ul class="dot-list">
                        <li><b>Multi-cloud strategy:</b> using multiple cloud providers allows for data and processing power to be moved between providers, effectively handling data.</li>
                        <li><b>Edge computing:</b> the practice of keeping the data where it is generated and placing the data processing power in close proximity. This approach can effectively address the issue of latency, as it reduces the time required for data to be processed and accessed.</li>
                        <li><b>Replication and backup:</b> the process of replicating data and storing it in multiple locations. This ensures data availability and helps reduce the challenge of moving large amounts of data, thereby addressing the issue of non-portability.</li>
                    </ul>
                </li>
                <li><b>Data has rights and sovereignty:</b> the organization must implement appropriate policies to handle data and stay updated with relevant regulations to ensure responsible data management.</li>
                <li><b>Data must be unified and available:</b> unifying data means integrating and standardizing data from different sources into a usable format, eliminating inconsistent data, data loss, and redundant data. This process involves data cleansing, data management, data mapping, data integration, and data standardization, all of which contribute to a more unified and usable dataset. Additionally, it is important to ensure that authorized individuals have access to the data when needed.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>3.Determine the ideal level of data-first maturity:</b></p>
            <p>The third step for the organization is to determine the desired level of data-first maturity.</p>
            <p><b>Data maturity</b> refers to the stage of development and growth in an organization's approach to data management and utilization. In short, it determines how data-driven the organization is.</p>
            <img src={Maturitytable} alt="" />
                <div className="centered-text">
                        <p style={{ marginTop: '5px' }}>
                            <b>Figure 3.</b> Data maturity level
                        </p>
                </div>
            <p>There are <b>five stages</b> of data maturity levels</p>
            <p><b>Stage 1: Ad Hoc/Improvised:</b></p>
            <ul class="dot-list">
                <li>In this stage, there is no main data management policy, and central standards are limited. Processes are carried out locally and managed based on the available resources.</li>
            </ul>
            <p><b>Stage 2: Adapting:</b></p>
            <ul class="dot-list">
                <li>The organization begins to focus on developing data transparency, making data more accessible, and implementing data governance. Standard data policies for accessing data are established.</li>
            </ul>
            <p><b>Stage 3: Cloud-enable/Scaled:</b></p>
            <ul class="dot-list">
                <li>The organization begins to define and implement data lifecycle management, which includes the processes and strategies for data acquisition, storage, processing, analysis, and archiving. Moreover, data governance practices become more robust.</li>
                <li>The organization  utilizes the cloud technologies, and improves data integration for scalable and efficient data-driven operations.</li>
            </ul>
            <p><b>Stage 4: Optimized:</b></p>
            <ul class="dot-list">
                <li>The organization focuses on enhancing data portability by efficiently transitioning from edge to private or public cloud environments, implementing effective data management strategies, and utilizing automation where applicable.</li>
            </ul>
            <p><b>Stage 5:Maximized:</b></p>
            <ul class="dot-list">
                <li>The organization reaches a state of being data-driven, where data utilization and understanding are prioritized throughout the entire company. The implementation of AI/ML technologies further optimizes business processes and decision-making.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>4. Prioritize your investments:</b></p>
            <p>The final step for the company to embrace data-first modernization is to prioritize their investments by identifying the specific sub-domains of data maturity that align with their business functions and strategy. This involves understanding their strengths and weaknesses in order to determine the areas where they should focus their efforts.</p>
            <p>The following are the data sub-domains, some of which will be discussed in detail in subsequent articles.</p>
            <ul class="dot-list">
                <li><b>Data strategy and governance:</b> developing a data-driven culture</li>
                <li><b>Data knowledge:</b> understanding insights about data</li>
                <li><b>Data lifecycle management:</b> implementing processes and technologies that support scalable and cost-effective management</li>
                <li><b>Data security:</b> authentication, access control, and encryption</li>
                <li><b>Data ingestion and processing:</b> data quality, streaming, and transformation</li>
                <li><b>Data architecture:</b> physical and virtual design principles, including data format and organization</li>
                <li><b>Data consumption and distribution:</b> providing tools for business units to access data and analytic capabilities for self-service</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>HPE solution data-first modernization</b></p>
            <p>HPE provides the <b>HPE GreenLake edge-to-cloud platform</b>, which serves as the foundation for unified data management across different locations, regardless of where the data is stored. It offers cloud data services and workload-optimized solutions that deliver a cloud-like experience. It spans from the edge to the core to the cloud and offers everything as a service or a pay-per-use model across the entire IT estate.</p>
            <img src={Greenlake} alt="" />
                <div className="centered-text">
                        <p style={{ marginTop: '5px' }}>
                            <b>Figure 4.</b> HPE GreenLake edge-to-cloud platform
                        </p>
                </div>
            <p style={{ marginTop: '40px' }}><b>HPE's data-first modernization helps in:</b></p>
            <ul class="dot-list">
                <li>Simplify <b>data management</b> </li>
                <li><b>Secure data</b> management <b>from edge to cloud:</b> HPE's edge-to-cloud platform automates enterprise-grade security policies across hybrid and multi-cloud landscapes and environments.</li>
                <li>Achieve <b>cloud experience</b> everywhere</li>
                <li>Adopting and utilizing use of <b>AI/analytics at scale</b></li>
                <li>Hardening power of <b>supercomputing</b></li>
                <li><b>Sustainability</b></li>
            </ul>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Dfirst;