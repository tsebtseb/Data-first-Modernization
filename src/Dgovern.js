import Role from './images/role.PNG';
import Dama from './images/dama.PNG';
import Exbr from './images/exbr.PNG';
import Exbrr from './images/exbrr.PNG';
import Exbrrr from './images/exbrrr.PNG';
import Spotify from './images/spotify.PNG';
import { Link } from 'react-router-dom';
import Datahub from './images/datahub.png';
const Dgovern = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };

    return (  
        <div className="data">
            <h1>A Deep Dive into Data Governance</h1>
            <h2>Written by Natrada Surachettapong</h2>
            <p style={{ marginTop: '40px' }}>Data is a valuable asset for organizations, as we have learned throughout the journey of digital transformation. Therefore, it is important for organizations to develop a solid framework, known as <b>data governance</b>, to regulate how data is managed within the organization.</p>
            <p style={{ marginTop: '40px' }}><b>Data governance</b> involves establishing procedures and regulations to determine and regulate how data is handled, managed, and processed to meet the needs of an organization. It involves the entire lifecycle of data management, including actions, processes, and technologies used, spanning from physical storage to policies governing data collection, movement, processing, distribution across departments, and delivering it to end users.</p>
            <p>Data governance encompasses the management of data availability, data usability, data integrity, and data security.</p>
            <p style={{ marginTop: '40px' }}><b>Key objectives</b> of data governance</p>
            <p><b>1.Breaks down data silos:</b></p>
            <ul class="dot-list">
                <li><b>Data silos</b> are fixed repositories or collections of data that store datasets isolated from the rest of the organization. As a result, the data within these silos can be controlled by only one department or even an individual. They can be thought of as isolated islands containing data that can be accessed and managed exclusively by the department or individual to which they belong.</li>
                <li><p>They cause various <b>problems</b> as follows:</p>
                    <ul class="dot-list">
                        <li><b>Reduced collaboration and communication ability within the organization:</b> due to the difficulties in accessing data owned by other departments, there is a lack of shared knowledge and understanding of data insights, resulting in decreased communication efficiency and negative impacts on business operations.</li>
                        <li><b>Waste of time and resources:</b> consider a scenario where multiple departments store the exact same dataset. For instance, the sales department has a data silo containing client names and budget ranges, while the marketing department has a separate silo with the same data. This redundancy results in unnecessary expenses associated with storing duplicate data within the organization.</li>
                        <li><b>Higher risk:</b> data silos can negatively impact data integrity, as data may be more susceptible to changes or loss. For example, consider a scenario where different departments store complementary data separately, meaning that data within these departments may be in the same domain but managed separately. This introduces the risk of determining which data silo is the most up-to-date, increasing the chance of overwriting current data with outdated information and resulting in a loss of data integrity.</li>
                    </ul>
                </li>
                <li>
                    <p>How data governance can help <b>solve</b> these problems:</p>
                    <ul class="dot-list">
                        <li>
                            <p>Data governance can help determine and <b>set regulations</b> to prevent and eliminate errors, duplications, and redundant/useless data within the organization. These regulations may include:</p>
                            <ul class="dot-list">
                                <li><b>Data access control:</b> granting access only to authorized individuals, which addresses the issue of communication where other departments can't access data. This ensures visibility and control over data access, allowing other departments and individuals to understand data insights</li>
                                <li><b>Data retention periods:</b> determining how long to keep data</li>
                                <li><b>Data sharing policy:</b> providing guidelines for permissions and restrictions on data sharing between departments within the organization</li>
                                <li><b>Data catalog:</b> indexes and describes the organization's datasets, enables other departments to better understand data insights</li>
                            </ul>
                        </li>
                        <li><b>Data governance council:</b> comprising representatives from each department or business unit who collaborate and participate in setting policies and standards to be applied within the organization. This helps address collaboration issues.</li>
                    </ul>
                </li>
            </ul>
            <p><b>2.Ensure data is:</b></p>
            <ul class="dot-list">
                <li>Cleanly audited: refers to data being reviewed, verified, and validated using appropriate methods and controls</li>
                <li>Evaluated: examining data base on a criteria or standard</li>
                <li>Documented: involves keeping records of data</li>
                <li>Managed</li>
                <li>Protected</li>
                <li>Trustworthy</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Data governance roles and responsibilities</b></p>
            <img src={Role} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 1.</b> Data governance roles
                </p>
            </div>
            <p><b>Top: The governance council</b>  is responsible for establishing and setting up standards and policies to govern data.</p>
            <ul class="dot-list">
                <li><b>Leader:</b> the executive, usually the Chief Data Officer (CDO) or a Data Governance Manager, is responsible for making decisions and aligning the council's data governance policies with the <b>higher-level business strategy</b>. They also ensure that there are sufficient resources and a comprehensive understanding of the overall vision of the program.</li>
                <li><b>Data governance council:</b> the committee consists of representatives from each department, including both technical and business experts. They are responsible for the development of the organization's data governance program at a strategic level. The council includes representatives from technical teams such as the Chief Information Officer (CIO), IT, security, and data privacy teams, as well as core business function teams including marketing, sales, finance, and HR.</li>
            </ul>
            <p><b>Middle:</b></p>
            <ul class="dot-list">
                <li><b>Data stewards or Data administrator:</b> the individuals who are responsible for the <b>development and implementation of data assets</b>. They implement and recommend further improvements to data governance and ensure data quality, accessibility, and proper use of data within their respective domains. Their main duty is to ensure that everyone follows the data governance defined in the organization.</li>
            </ul>
            <p>Governance council will set and establish the data governance policy, and then the data steward will implement, recommend, and ensure its adherence, as well as proper data utilization, to serve the data users.</p>
            <p style={{ marginTop: '40px' }}><b>Data governance principles</b></p>
            <ul class="decimal-list">
                <li>
                    <b>Accountability:</b> organization must distribute ownership and responsibility appropriately based on the data domain. This includes establishing a data governance team with representatives from each department to ensure <b>cross-organizational accountability</b>, meaning that all parties are accountable for collaborating and contributing to decision-making in setting regulations and policies and complying with them.
                </li>
                <li>
                    <b>Rules and regulations:</b> the data governance team develops and sets standardized rules and regulations for everyone to follow, implementing criteria for data usage. The company also needs to comply with relevant public regulations and standards.
                </li>
                <li>
                    <b>Data administration:</b> the organization must select a data administrator or data steward who is responsible for the development and implementation of data assets, as well as enforcing data rules and regulations (data governance policy) and ensuring that everyone follows them. The data administrator will report to the data governance team and provide recommendations for improving data governance.
                </li>
                <li>
                    <p><b>Data quality:</b> the organization must ensure the quality of its data assets, ensuring that they are clean and reliable for effective decision-making and business actions. To achieve this, the data steward is responsible for implementing standards to improve data quality.</p>
                    <p>The quality of data can be measured across <b>six dimensions</b>, which are as follows:</p>
                    <ul class="dot-list">
                        <li><b>Accuracy:</b> data must accurately and correctly represent or precisely match the information in the real world.</li>
                        <li><b>Completeness:</b> data must contain the minimum required information for effective engagement or be sufficient for use in decision making and business actions. It can also refer to the extent to which the data remains intact and without any loss.</li>
                        <li><b>Consistency:</b> data that is being used or stored across all systems in the organization must be in sync, meaning that it should match or reflect the same information.</li>
                        <li><b>Timeliness:</b> data must be available for access and use when needed.</li>
                        <li><b>Validity:</b> data that is being used or stored in the system should adhere to defined rules or logic that align with its specific domain or requirements. Such rules may include ensuring that the data is within the specified range as defined by its domain. For instance, a date in the format d/mm/yyyy must meet the global standard, ensuring that the day is not outside the range of 1 to 31.</li>
                        <li><b>Uniqueness:</b>organization must ensure that there are no duplicates in the data they store or use, meaning that only a single record instance is kept in the dataset being used.</li>
                    </ul>
                </li>
                <li>
                    <p><b>Transparency:</b> the organization must maintain permanent records of all functions and steps taken in the business process, ensuring that future audits can determine data usage. This includes documenting what data was used, how it was used and handled, and the reasons for its usage by the team.</p>
                </li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Data governance framework</b></p>
            <p>There are several frameworks of data governance available for organizations to implement and use as a guide to the principles and practices of data management and data governance. One of the most commonly used frameworks is...</p>
            <p style={{ marginTop: '40px' }}><b>DAMA-DMBOK Framework:</b></p>
            <p>The DAMA International Data Management Body of Knowledge by DAMA international</p>
            <a href="https://atlan.com/dama-dmbok-framework/?ref=/data-governance-101/">
                <p  style={{
                color: '#0000ff',
                textDecoration: 'underline'
            }}>Reference Link: DAMA Framework</p>
            </a>
            <img src={Dama} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 2.</b> DAMA-DMBOK Framework
                </p>
            </div>
            <p>The above diagram illustrates a notable observation that this particular framework conceptualizes data management as a wheel, with data governance positioned at the center as the hub. Surrounding the hub are ten distinct knowledge areas that form an integral part of the framework.</p>
            <p style={{ marginTop: '40px' }}>How data governance and data management differ:</p>
            <p><b>Data governance</b> refers to the <b>policies and procedures</b> related to governing data, including its access, usage, and treatment within the broader data management strategy. It is considered the core area of data management. On the other hand, <b>data management</b> involves <b>implementing and executing these rules</b> (putting these rules into action)  to collect and utilize data for decision-making. It involves the implementation of architectures, tools, and processes for effective data management.</p>
            <p style={{ marginTop: '40px' }}>The ten knowledge areas surrounding data governance include:</p>
            <ul class="decimal-list">
                <li><b>Data architecture:</b> involves maintaining the data infrastructure, including building and connecting infrastructure, supporting data integration, data quality, and data accessibility.</li>
                <li><b>Data modeling and design:</b> involves defining data structures and relationships to support business processes. It focuses on representing the connections within the data architecture.</li>
                <li><b>Data storage and operations:</b> ensure that data is stored and used efficiently and securely in operations.</li>
                <li><b>Data security:</b> involves protecting data from unauthorized access or misuse, which will be further discussed in the following article.</li>
                <li><b>Data integration and interoperability:</b> involves the ability for data from different sources or systems to be exchanged or interpreted seamlessly. It focuses on enabling smooth data flow and compatibility between disparate systems.</li>
                <li><b>Document and content management:</b> since documents are unstructured data, this area involves managing unstructured data such as documents, multimedia, images, audio, and video to ensure accessibility, accuracy, and compliance with regulations.</li>
                <li><b>Reference and master data:</b> involves managing both reference data, which defines and classifies other data, as well as master data, which is relevant to business entities and provides essential context for business processes.</li>
                <li><b>Data warehousing and business intelligence:</b> involves storing, analyzing, visualizing, and presenting data and business intelligence (BI) to deliver actionable insights.</li>
                <li><b>Metadata management:</b> involves managing metadata, which refers to data about data. Metadata includes information such as title, description, tags, modification date, access history, definition, and classification.</li>
                <li><b>Data quality management:</b> involves ensuring data quality based on the six dimensions mentioned earlier, as well as aligning it with business requirements.</li>
            </ul>
            <p style={{ marginTop: '40px' }}>But why do we need data governance?</p>
            <p style={{ marginTop: '40px' }}><b>Benefit of data governance</b></p>
            <ul class="dot-list">
                <li>Better & faster decision making</li>
                <li>Improve cost control as it assists in managing resources more effectively and eliminates data duplication by establishing procedures.</li>
                <li>Earn greater trust because data quality is one aspect in data governance that needs to be considered and managed. Therefore, data governance ensures and improves the quality of data to be trustworthy, consistent, and prevent misuse.</li>
                <li>Enhance regulatory compliance as data governance helps ensure that data access, processing, and storage are designed in compliance with relevant regulations. By adhering to these regulations, data governance strengthens an organization's ability to meet legal and industry requirements</li>
                <li>Manage risk more easily by establishing regulations that help reduce concerns related to the exposure and unauthorized access of sensitive data. Data governance is essential in ensuring proper authorization and control measures, enabling organizations to manage and reduce potential risks more effectively.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Data Governance in Practice</b></p>
            <p style={{ marginTop: '40px' }}><b>Example of data governance policy from Brandeis University</b></p>
            <a href="https://www.brandeis.edu/its/data-governance/index.html">
                <p  style={{
                color: '#0000ff',
                textDecoration: 'underline'
            }}>Reference Link: Data Governance Policy from Brandeis University</p>
            </a>
            <p style={{ marginTop: '40px' }}><b>1.Identify data:</b> categorize them into different domains based on data types in Brandeis systems</p>
            <img src={Exbr} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 3.</b> Identify data by Brandeis University
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>2.Define a data trustee for each domain:</b> who is responsible for making decisions on the management and usage of data within that domain.</p>
            <img src={Exbrr} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 4.</b> Define data trustee by Brandeis University
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>3.Define role:</b> it is similar to the roles and responsibilities mentioned earlier, where representatives from each domain are responsible for managing and making decisions within their respective domains. These representatives will come together as a group known as the "Council of Data Trustees," which is similar to the data governance council mentioned earlier. Together with the executive council, they will collaborate in setting up the data governance policy. They also have data stewards with the same responsibilities of implementing and developing data governance, while data custodians are the individuals who use the data to perform their jobs.</p>
            <img src={Exbrrr} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 5.</b> Define roles and responsibilities by Brandeis University
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>4.Data governance policy:</b></p>
            <p><b>Data Access</b></p>
            <ul class="dot-list">
                <li>University employees will be granted access to the data needed to do their jobs.</li>
                <li>Access requests will be reviewed following a publicly documented procedure that ensures compliance with regulations, policies, security requirements, and the legitimate purposes of the organization.</li>
                <li>Access to data may not be provided by technology staff without authorization by an appropriate Data Trustee.</li>
                <li>Data accessed under the authorization of the relevant Data Trustee, or Executive Council member, may not be shared without authorization.</li>
            </ul>
            <p><b>Data Use</b></p>
            <ul class="dot-list">
                <li>
                    <p>Written Information Security Policy <b>(“WISP”)</b></p>
                    <ul class="dot-list">
                        <li>Procedure for evaluating method of :accessing, collecting, storing, using, transmitting, and protecting Regulated, Restricted, and Confidential data</li>
                        <li>WISP supersedes any data access policy statements or protocols</li>
                    </ul>
                </li>
                <li>
                    <p>Data classified according to: <b>Risk classification schema</b></p>
                    <ul class="dot-list">
                        <li>
                            <p>Regulated data:</p>
                            <ul class="dot-list">
                                <li>Disclosed or modified without authorization would have severe adverse effect on operation/asset/reputation</li>
                                <li>Protected by the following international, federal or state laws or regulations</li>
                            </ul>
                        </li>
                        <li>
                            <p>Restricted data:</p>
                            <ul class="dot-list">
                                <li>Disclosed or modified without authorization would have severe adverse effect on operation/asset/reputation</li>
                                <li>Protected by the Family Educational Rights and Privacy Act (FERPA), referred to as student education records</li>
                            </ul>
                        </li>
                        <li>
                            <p>Confidential data:</p>
                            <ul class="dot-list">
                                <li>Moderate adverse effect</li>
                            </ul>
                        </li>
                        <li>
                            <p>Public data</p>
                            <ul class="dot-list">
                                <li>Little or no risk</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Individuals may not disclose or distribute data except as required by job or permitted by data trustee</p>
                </li>
                <li>Forbidden use of data for profit, personal curiosity, or personal gain</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Use case: Spotify</b></p>
            <a href="https://www.oreilly.com/library/view/data-governance-the/9781492063483/ch01.html">
                <p  style={{
                color: '#0000ff',
                textDecoration: 'underline'
            }}>Reference Link: Spotify's Implementation of Data Governance</p>
            </a>
            <ul class="dot-list">
                <li>
                    <p>Spotify's <b>Discover Weekly feature</b>, which is a feature that would recommend what they thought each individual user would like based on individual user preferences, utilizes various <b>recommendation algorithms</b>. The data for these algorithms is obtained through tracking the songs users play, providing insights into their listening habits and enhancing the user experience.</p>
                </li>
                <li>
                    <p>The recommendation algorithms employed by Spotify include:</p>
                    <ul class="dot-list">
                        <li><b>Content-based recommendation:</b> find other songs by the <b>artists</b> you listen to, or songs in the same <b>genre</b></li>
                        <li><b>Collaborative filtering:</b> find <b>users who like the same songs</b> you do and recommend the songs</li>
                        <li><b>Similarity matching:</b> analyze the raw audio files of songs you like and recommend songs that are similar <b>beat/tone/structure</b></li>
                    </ul>
                </li>
                <li>
                    <p>Through this example, you can observe that Spotify collects various data about user listening habits to enable data analysts to analyze the data and launch this algorithm. This data may include track information, artist details, duration, play count, beat tone, user preferences, and other relevant metrics.</p>
                </li>
                <li>
                    <p><b>Data governance program:</b> it is essential for Spotify to have good data governance to effectively:</p>
                    <ul class="dot-list">
                        <li><b>Assured</b> regulators and subscribers that <b>information on listening habits were being used responsibly</b>(to improve music learning experience)</li>
                        <li>Ensure <b>data scientists</b>  can <b>create (recommendation) algorithms without accessing personally identifiable information</b>.</li>
                        <li>
                            <p>Established processes and procedures for handling listener music data so that it was in compliance with European privacy control law: <b>GDPR</b></p>
                            <ul class="dot-list">
                                <li>
                                <a href="https://support.spotify.com/us/article/gdpr-article-15-information/">
                                    <p  style={{
                                        color: '#0000ff',
                                        textDecoration: 'underline'
                                        }}>Reference link: Spotify's Compliance with GDPR Law</p></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <img src={Spotify} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 6.</b> Spotify's Usage of Data and Data Governance
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>Data governance tool:</b></p>
            <p>There are many data governance tools, but one of the most well-known is...</p>
            <Link to="/datahub"><p><b style={{
                color: '#0000ff',
                textDecoration: 'underline'
                }}>DataHub</b></p>
            </Link>
            <img src={Datahub} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 7.</b> DataHub
                </p>
            </div>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Dgovern;