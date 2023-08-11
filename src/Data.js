import Flowpic from './images/flowpic.PNG';
import Datalifecycle from './images/datalifecycle.PNG';
import Storage from './images/storage.PNG';
import Prog from './images/prog.PNG';
import Mapp from './images/map.PNG';
import { Link } from 'react-router-dom';
const Data = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };

    return (  
        <div className="data">
            <h1>An Introduction to the Basics of Data</h1>
            <h2>Written by Natrada Surachettapong</h2>
            <p style={{ marginTop: '40px' }}><b>Data</b> is information in various formats, including numbers, text, images, and video files. It can be collected, recorded, or stored to facilitate analysis, decision-making, and insights generation. Hence, understanding the data becomes crucial and highly advantageous.</p>
            <p style={{ marginTop: '20px' }}><b>Big data</b> as its name suggests, refers to data that continuously grows in size every day. As it expands exponentially over time, it becomes increasingly large in magnitude and poses challenges in terms of handling and processing. Some sources define big data as 'data in the petabyte range or higher'.</p>
            <p style={{ marginTop: '20px' }}>Big data has four dimensions that differentiate it from other forms of data, commonly known as <b>the Four V's</b> of Big Data.</p>
            <ul class="decimal-list">
                <li>
                    <p><b>Volume:</b> refers to the scale of data.</p>
                </li>
                <li>
                    <p><b>Velocity:</b> refers to the speed at which data is incoming and the ability to analyze streaming data.</p>
                </li>
                <li>
                    <p><b>Variety:</b> refers to the different forms of data, such as tables, pictures, and audio files. Different types of data require different approaches to handling and processing.</p>
                </li>
                <li>
                    <p><b>Veracity:</b> refers to the uncertainty of data, including concerns about its accuracy</p>
                </li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Type of data</b></p>
            <ul class="decimal-list">
                <li>
                    <p><b>Structured data:</b> refers to data that possesses a well-defined format and can be conveniently represented in tabular form</p>
                    <ul class="dot-list">
                        <li>Excel</li>
                        <li>CSV</li>
                        <li>TSV</li>
                    </ul>
                </li>
                <li>
                    <p><b>Semi-structured data:</b>refers to data that exhibits flexibility in its format, allowing for changes or expansions as needed. It is often represented in a key-value format, where data items are referenced using unique keys or tags. There are several benefits associated with data in this form. First, it enables the storage and management of diverse data types and sources. Moreover, accessing semi-structured data using key-value pairs can offer faster data retrieval compared to scanning through each value, as in table-structured data. This is particularly advantageous in scenarios where direct access to specific data elements is required.</p>
                    <ul class="dot-list">
                        <li>Json</li>
                        <li>Document</li>
                        <li>XML</li>
                        <li>Graph</li>
                    </ul>
                </li>
                <li>
                    <p><b>Unstructured data:</b>refers to data that doesn’t have pre-defined data model</p>
                    <ul class="dot-list">
                        <li>File</li>
                        <li>Image</li>
                        <li>Video</li>
                        <li>Audio</li>
                    </ul>
                </li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Type of storage</b></p>
            <ul class="decimal-list">
                <li>
                    <p><b>Database:</b></p>
                    <ul class="dot-list">
                        <li>Mostly used to store structured data</li>
                        <li>Suitable for storing current data that can be changed or updated
                            <ul class="dot-list">
                                <li>OLTP(On-live transaction processing)</li>
                            </ul>
                        </li>
                        <li>Quick to access But has limited storage capacity</li>
                        <li>Some databases can also be used to store semi-structured or unstructured data </li>
                        <li>Divided into 2 types
                            <ul class="dot-list">
                                <li><b>SQL database:</b> stores structured data ex: MySQL, postgres</li>
                                <li><b>NoSQL database:</b> stores semi-structured data ex: mongo DB, Neo4J, reddis</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p><b>Data warehouse:</b></p>
                    <ul class="dot-list">
                        <li>Stores structured data</li>
                        <li>Suitable for storing historical data that no longer changes, also known as static data
                            <ul class="dot-list">
                                <li>OLAP(On-live analytical processing)</li>
                            </ul>
                        </li>
                        <li>Used for data analytics and business intelligence (BI)</li>
                    </ul>
                </li>
                <li>
                    <p><b>Data lake:</b></p>
                    <ul class="dot-list">
                        <li>Provides large storage capacities</li>
                        <li>Can store any type of data, including unstructured data and raw data files(.txt,.csv)</li>
                        <li>Data is stored as a file</li>
                        <li>Sometimes referred to as object storage or blob(binary object) storage</li>
                    </ul>
                </li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Flow of data</b></p>
            <img src={Flowpic} alt="" />
                <div className="centered-text">
                    <p style={{ marginTop: '5px' }}>
                        <b>Figure 1.</b> Data flow
                    </p>
                </div>
            <ul class="dot-list">
                <li>Data from websites/applications will be collected and stored in a database for processing, where it is transformed and organized into a usable format.</li>
                <li>The data retrieved from databases and APIs is securely stored in a data lake, which serves as a centralized repository capable of accommodating various types of data. This approach ensures protection against data loss and allows for comprehensive data storage and management.</li>
                <li>Then, the data warehouse will extract data from both the database and data lake to facilitate data analytics.</li>
                <li>Finally, the analyzed data will be utilized for visualization and business intelligence (BI) purposes.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Data life cycle:</b></p>
            <img src={Datalifecycle} alt="" />
                <div className="centered-text">
                    <p style={{ marginTop: '5px' }}>
                        <b>Figure 2.</b> Data life cycle
                    </p>
                </div>
            <p>refers to the different stages that a unit of data undergoes.</p>
            <ul class="dot-list">
                <li><b>Data generation:</b> involves the collection and production of new data</li>
                <li><b>Data collection:</b> refers to the gathering or acquisition of existing data from various sources</li>
                <li><b>Data processing:</b> involves transforming data using various methods such as machine learning(ML) and artificial intelligence(AI). This includes standardizing and transforming data into a desired format
                    <ul class="dot-list">
                        <li><b>Data cleansing:</b> involves sorting and filtering raw data to ensure data quality for processing. It includes checking for errors, deduplicating, removing inaccurate data, and eliminating redundancies. The goal is to ensure that the data is valid, unique, standardized, and complete</li>
                    </ul>
                </li>
                <li><b>Data storage:</b> involves selecting an appropriate storage system based on the type and structure of the collected data
                    <img src={Storage} alt="" />
                        <div className="centered-text">
                            <p style={{ marginTop: '5px' }}>
                                <b>Figure 3.</b> Data storage map by data type
                            </p>
                        </div>
                    <ul class="dot-list">
                        <li>For structured data, it is typically stored in SQL databases, data lakes, and data warehouses.</li>
                        <li>Semi-structured data can be stored in NoSQL databases, data lakes, and, in some cases, data warehouses.</li>
                        <li>Unstructured data is commonly stored in data lakes.</li>
                    </ul>
                </li>
                <li><b>Data management:</b> refers to the process of organizing and managing data in a way that ensures efficient access and retrieval.</li>
                <li><b>Data analysis:</b> involves applying algorithms and techniques to extract insights and patterns from data. This task is typically carried out by data analysts and data scientists.</li>
                <li><b>Data visualization:</b> represents data in a visual format to facilitate easy understanding, particularly for other teams such as marketing and business teams. This enhances better understanding and communication within the organization. It is often performed by data visualization specialists, data analysts, and sometimes data scientists.</li>
                <li><b>Data interpretation:</b> refers to utilizing the analyzed data to make informed decisions, take appropriate business actions, or fulfill other business purposes.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Programming language:</b> used at each step of the data life cycle</p>
            <img src={Prog} alt="" />
                <div className="centered-text">
                    <p style={{ marginTop: '5px' }}>
                        <b>Figure 4.</b> Programming Languages used in the data life cycle
                    </p>
                </div>
            <ul class="dot-list">
                <li>Python
                    <p>the related libraries:</p>
                    <ul class="dot-list">
                        <li>Numpy</li>
                        <li>pandas</li>
                        <li>Matplotlib</li>
                        <li>scikit-learn</li>
                        <li>Keras</li>
                        <li>TensorFlow</li>
                    </ul>
                </li>
                <li>SQL
                    <ul class="dot-list">
                        <li>for extracting data from database, data warehouse</li>
                    </ul>
                </li>
                <li>Java</li>
                <li>Javascript
                    <ul class="dot-list">
                        <li>utilized for both data analytics and data processing tasks, serving both client-side and server-side operations.</li>
                    </ul>
                </li>
                <li>Scala</li>
                <ii>(Apache) spark
                    <ul class="dot-list">
                        <li>library for data processing to handle big data.</li>
                    </ul>
                </ii>
                <li>R
                    <ul class="dot-list">
                        <li>is an open-source, domain-specific language, for data processing, visualization, machine learning.</li>
                    </ul>
                </li>
                <li>#C/C++</li>
                <li>Matlab</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Tools</b></p>
            <p>The following diagram illustrates the mapping of various tools and platforms to each step of the data life cycle, providing an overview of which tool is utilized in each specific stage.</p>
            <img src={Mapp} alt="" />
            <div className="centered-text">
                    <p style={{ marginTop: '5px' }}>
                        <b>Figure 5.</b> Mapping tools with different steps in data life cycle
                    </p>
                </div>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Data;