import Dhublogo from './images/dhublogo.png';
import Cfun from './images/cfun.PNG';
import Intool from './images/intool.PNG';
import Api from './images/api.PNG';
import Deploy from './images/deploy.PNG';
import De from './images/de.PNG';
import Dede from './images/dede.PNG';
import Dedede from './images/dedede.PNG';
import Dededede from './images/dededede.PNG';
import Metaone from './images/metaone.PNG';
import Metatwo from './images/metatwo.PNG';
import Metathree from './images/metathree.PNG';
import Metafour from './images/metafour.PNG';
import Metafive from './images/metafive.PNG';
import Searchone from './images/searchone.PNG';
import Searchtwo from './images/searchtwo.PNG';
import Searchthree from './images/searchthree.PNG';
import Searchfour from './images/searchfour.PNG';
import Searchfive from './images/searchfive.PNG';
import Lineone from './images/lineone.PNG';
import Linetwo from './images/linetwo.PNG';
import Depend from './images/depend.PNG';
import Dstat from './images/dstat.PNG';
import Access from './images/access.PNG';
import Accesss from './images/accesss.PNG';
import { Link } from 'react-router-dom';
const Datahub = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };
    return (  
        <div className="data">
            <h1>Unleashing Data Governance with DataHub</h1>
            <h2>Written by Natrada Surachettapong</h2>
            <div className="centered-container">
                <img src={Dhublogo} alt="" style={{ marginTop: '40px' }}/>
                <a href="https://datahubproject.io/">
                    <p  style={{
                    color: '#0000ff',
                    textDecoration: 'underline'
                     }}>Link: Datahub Official Website</p>
                </a>
            </div>
            <p style={{ marginTop: '40px' }}><b>DataHub</b> is an open-source software and <b>metadata platform</b> designed for the modern data stack. It serves as a centralized hub for organizing, governing, and managing data within an organization.</p>
            <ul class="dot-list">
                <li><b>Metadata</b> refers to the data about data</li>
                <li><b>Data stack</b> refers to a collection of tools, technologies, and processes used to handle data within an organization.</li>
                <li>Therefore, DataHub focuses on managing and organizing metadata to facilitate effective data governance and management within a modern data infrastructure. It plays a crucial role in managing and governing data assets within an organization.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Core functionalities</b></p>
            <p>DataHub serves as a modern data catalog, which is a collection of metadata that describes the content and structure of data assets. DataHub offers a range of functionalities used to support the following:</p>
            <ul class="dot-list">
                <li><b>Data discovery:</b> analyzing data from various sources to uncover insights.</li>
                <li><b>Data observability:</b> ability to manage and monitor data quality.</li>
                <li><b>Data governance</b></li>
                <li><b>Metadata management</b></li>
                <li><b>Data lineage:</b> involves detailing the records or historical journey of data through various stages, encompassing its source, transformations, and movements, until it reaches its final destination.</li>
            </ul>
            <img src={Cfun} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 1.</b> DataHub Core Functionalities
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>Integrated capabilities</b></p>
            <ul class="dot-list">
                <li><b>Integration</b> is the process of accessing, collecting, and importing data from various sources, transforming it into the required format, ensuring compatibility and quality, and loading it into the central data hub or bringing it into the data hub environment.</li>
                <li>
                    <p>The Data Hub needs to integrate with various data sources within an organization, such as</p>
                    <ul class="dot-list">
                        <li>databases</li>
                        <li>data lakes</li>
                        <li>data warehouse/data analytics</li>
                        <li>data visualization</li>
                        <li>data pipeline/ streaming platforms</li>
                        <li>API</li>
                    </ul>
                </li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Integration options:</b> DataHub supports two types of integration:</p>
            <ul class="decimal-list">
                <li><b>Push-based</b> (integration): metadata is automatically emitted from your data systems when changes occur</li>
                <li>
                    <p><b>Pull-based</b> (integration):</p>
                    <ul class="dot-list">
                        <li>Metadata is actively obtained by connecting to your data systems and extracting it in batches or increments</li>
                        <li>Allows you to crawl or ingest metadata from the data systems by systematically scanning or exploring their structure and retrieving relevant metadata.</li>
                    </ul>
                </li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Metadata ingestion source status</b></p>
            <ul class="dot-list">
                <li><b>Certified:</b> well-tested and widely adopted in the DataHub community</li>
                <li><b>Incubating:</b> ready for adoption but has not been tested for a wide variety of edge cases</li>
                <li><b>Testing:</b> available for community members to experiment with but may undergo changes</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Services:</b> that are capable of supporting and <b>integrating with DataHub</b></p>
            <img src={Intool} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 2.</b> DataHub Integrations
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>API:</b> Application Programming Interface</p>
            <p>refers to a set of rules and protocols that allow different software applications to interact and communicate with DataHub. It enables developers and users to programmatically interact with the DataHub platform and access its features and functions.</p>
            <p style={{ marginTop: '40px' }}><b>API options</b> available in DataHub</p>
            <ul class="dot-list">
                <li><b>SDKs in Python and Java:</b> software development kits, which are libraries used for creating applications or platforms</li>
                <li><b>GraphQL API</b></li>
                <li><b>OpenAPI</b></li>
                <li><b>Rest.li API</b></li>
            </ul>
            <img src={Api} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 3.</b> API Options
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>Deployment</b></p>
            <p style={{ marginTop: '40px' }}><b>Deployment options</b></p>
            <p>DataHub can be deployed on various platforms including</p>
            <ul class="dot-list">
                <li>GCP (Google Cloud Platform)</li>
                <li>AWS (Amazon Web Services)</li>
                <li>Docker</li>
                <li>Kubernetes</li>
            </ul>
            <p>These platforms provide infrastructure and services to host and manage applications, allowing you to deploy Data Hub and utilize its data governance capabilities,based on your specific needs and infrastructure setup.</p>
            <img src={Deploy} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 4.</b> Deployment Options
                </p>
            </div>
            <p style={{ marginTop: '40px' }}>In this article, I would like to focus on deploying DataHub locally using <b>Docker</b>.</p>
            <p style={{ marginTop: '40px' }}><b>Deploying DataHub(Quick start):</b> the process involves setting up the necessary infrastructure to support the efficient execution of the Data Hub software.</p>
            <img src={De} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 5.</b> Deployment Step 1
                </p>
            </div>
            <img src={Dede} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 6.</b> Deployment Step 2
                </p>
            </div>
            <img src={Dedede} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 7.</b> Deployment Step 3
                </p>
            </div>
            <img src={Dededede} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 8.</b> Deployment Step 4
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>Features</b></p>
            <p style={{ marginTop: '40px' }}><b>1.Metadata Ingestion</b>(Ingest Metadata from the UI)</p>
            <ul class="dot-list">
                <li>Ability to create, configure, schedule, and execute batch metadata ingestion using the DataHub user interface</li>
                <li>Users must ensure that they have the 'Manage Metadata Ingestion' and 'Manage Secrets' privileges assigned to their account as prerequisites before being able to use this feature.</li>
            </ul>
            <p><b>Creating an Ingestion Source</b></p>
            <img src={Metaone} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 9.</b> Creating an Ingestion Source
                </p>
            </div>
            <p><b>Step 1: Select a Platform Template</b></p>
            <ul class="dot-list">
                <li>Select a Recipe Template depending on the source type that the user desires to extract metadata from. Users should choose among a variety of natively supported integrations such as Snowflake, Postgres, and Kafka.</li>
            </ul>
            <img src={Metatwo} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 10.</b> Select a Platform Template
                </p>
            </div>
            <p><b>Step 2: Configure a Recipe</b></p>
            <ul class="dot-list">
                <li>defines <b>how and what</b> to extract from the source system.</li>
                <li>Source type: The type of system you'd like to extract metadata from (e.g. snowflake, mysql, postgres)</li>
                <li>
                    <p>Source config: a set of configurations specific to the source type</p>
                    <ul class="dot-list">
                        <li>Coordinates: The location of the system to extract metadata from</li>
                        <li>Credentials: Authorized credentials for accessing the system</li>
                        <li>Customizations: Customizations regarding the metadata that will be extracted, e.g. which databases or tables to scan in a relational DB</li>
                    </ul>
                </li>
                <li>
                    <p>Sink type</p>
                    <ul class="dot-list">
                        <li>Sink refers to destinations for metadata</li>
                        <li>Therefore, it refers to the type of destination or target where the metadata extracted from a specific source type is <b>routed or stored</b>, determining where it will be sent for further processing and analysis</li>
                    </ul>
                </li>
                <li>Sink config: Configuration required to send metadata to the provided sink type</li>
            </ul>
            <img src={Metathree} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 11.</b> Configure a Recipe
                </p>
            </div>
            <p><b>Step 3: Schedule Execution</b></p>
            <ul class="dot-list">
                <li>Configure, schedule, and execute metadata ingestion from the source enables you to schedule metadata extraction at specified intervals, such as monthly, weekly, daily, or hourly, depending on the needs of your organization</li>
            </ul>
            <img src={Metafour} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 12.</b> Schedule Execution
                </p>
            </div>
            <p><b>Step 4: Finishing Up</b></p>
            <ul class="dot-list">
                <li>Give ingestion source a name</li>
            </ul>
            <img src={Metafive} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 13.</b> Finishing Up
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>2.Search and discovery</b></p>
            <p><b>Search bar</b></p>
            <img src={Searchone} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 14.</b> Search bar
                </p>
            </div>
            <p><b>Filter data assets</b></p>
            <img src={Searchtwo} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 15.</b> Filter data assets Options
                </p>
            </div>
            <img src={Searchthree} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 16.</b> Filter data assets Result
                </p>
            </div>
            <p><b>Advanced Filters</b></p>
            <img src={Searchfour} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 17.</b> Advanced Filters Options
                </p>
            </div>
            <img src={Searchfive} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 18.</b> Advanced Filters Result
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>3.DataHub Lineage:</b> helps in visualizing and understanding the end-to-end journey of data across platforms, datasets, ETL/ELT pipelines, charts, dashboards, and more.</p>
            <p><b>Managing Lineage via the DataHub UI</b></p>
            <ul class="dot-list">
                <li>Viewing lineage on the DataHub UI shows the latest version of the lineage. Users can select specific time or version.</li>
                <li>
                    <p>Editing from Lineage Graph View:</p>
                    <ul class="dot-list">
                        <li>Go to Lineage Visualization to show the graph</li>
                        <li>
                            <p>Users can click the three-dot menu from the dropdown to edit the lineage as follows:</p>
                            <ul class="dot-list">
                                <li>Upstream direction: navigate upstream in the lineage</li>
                                <li>Downstream direction: navigate downstream in the lineage</li>
                                <li>Re-center to focus node: center the view on a specific node of interest</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <img src={Lineone} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 19.</b> Lineage on DataHub UI
                </p>
            </div>
            <img src={Linetwo} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 20.</b> Lineage Graph View
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>4.Understand the Impact of Breaking Changes on Downstream Dependencies</b></p>
            <p><b>Lineage Impact Analysis</b></p>
            <ul class="dot-list">
                <il>Modifications or updates made to a component or system can have a significant impact on other components or systems that depend on it. It is important to proactively identify the entities that may be impacted by a breaking change using Impact Analysis.</il>
                <li>It is a workflow for understanding the complete set of upstream and downstream dependencies of DataHub Entities</li>
                <li>
                    <p>User can toggle between Upstream and Downstream dependencies</p>
                    <ul class="dot-list">
                        <li>Upstream(preceding): components or systems, such as data sources, data providers, or upstream systems, supply data to downstream processes or applications. eg. databases, APIs data provider</li>
                        <li>Downstream: processes, applications, or systems that consume or utilize the data produced by the upstream sources.</li>
                    </ul>
                </li>
                <li>User can filter relevant dependencies by their Entity Type, Platform or Owner</li>
            </ul>
            <img src={Depend} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 21.</b> Lineage Impact Analysis
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>5. View Metadata 360 at a Glance</b></p>
            <p>Users can generate <b>Dataset Stats</b> to understand the shape and distribution of the data, providing a comprehensive view of data entities through metadata.</p>
            <img src={Dstat} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 22.</b> Dataset Stats
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>6.Data hub Administration</b></p>
            <p style={{ marginTop: '40px' }}><b>Access policies</b></p>
            <p>DataHub administrators can create policies to define the permissions and actions that can be performed by users on specific resources</p>
            <p>In policies, admins can define:</p>
            <ul class="dot-list">
                <li>Policy type</li>
                <li>Platform</li>
                <li>Metadata</li>
                <li>Resource type</li>
                <li>Privileges: set of permissions</li>
                <li>User/group: assign relevant Users and Groups</li>
            </ul>
            <img src={Access} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 23.</b> Data hub Administration
                </p>
            </div>
            <p style={{ marginTop: '40px' }}>There are <b>2 types of Access Policy</b> within DataHub:</p>
            <p><b>1.Platform Policies:</b> determine who has platform-level(top-level) privileges on DataHub, including managing users, groups, and policies.</p>
            <ul class="dot-list">
                <li>Managing Users & Groups</li>
                <li>Viewing the DataHub Analytics Page</li>
                <li>Managing Policies themselves</li>
            </ul>
            <p>Platform policies can be broken down into 2 parts:</p>
            <ul class="dot-list">
                <li><b>Privileges</b>: Which privileges should be assigned to the Actors (e.g. "View Analytics")=<b>action</b></li>
                <li><b>Actors:</b> Who the should be granted the privileges (Users, or Groups)</li>
            </ul>
            <p><b>2.Metadata Policies:</b> determine who can perform specific actions on Metadata Entities, such as manipulating ownership, tags, documentation, and more.</p>
            <ul class="dot-list">
                <li>Who can edit Dataset Documentation & Links?</li>
                <li>Who can add Owners to a Chart?</li>
                <li>Who can add Tags to a Dashboard?</li>
            </ul>
            <img src={Accesss} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 24.</b> Access policies
                </p>
            </div>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Datahub;