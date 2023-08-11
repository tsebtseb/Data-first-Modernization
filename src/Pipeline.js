import Etlp from './images/etlp.PNG';
import Etltool from './images/etltool.PNG';
import { Link } from 'react-router-dom';
const Pipeline = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };

    return (  
        <div className="data">
            <h1>Exploring Data Pipelines</h1>
            <h2>Written by Natrada Surachettapong</h2>
            <p style={{ marginTop: '40px' }}><b>Data pipeline</b> is a method of processing or transferring data from various sources, such as databases, CRMs, and IoT devices, to destination components like data lakes, data warehouses, and data marts. It enables the efficient movement and transformation of data throughout its lifecycle.</p>
            <p style={{ marginTop: '40px' }}><b>ETL (Extract-Transform-Load):</b> is a specific type of data pipeline that involves processes for moving data from a source to a destination. It plays a crucial role in preparing data for activities such as data analytics, data visualization, and business intelligence. It's different from other pipeline methods as it has the capability to transform data in various ways, including the transformation of unstructured data into structured formats.</p>
            <p style={{ marginTop: '40px' }}>The <b>ETL process</b> is named after its three main steps:</p>
                <ul class="dot-list">
                    <li><b>Extraction:</b> (collect) raw data is collected and extracted from various sources.</li>
                    <li><b>Transformation:</b> (reform) the data is processed and organized to make it usable according to business rules.
                        <ul class="dot-list">
                            <li>It involves various sub-processes such as data filtering, mapping, deduplication, deriving variables, sorting, joining, aggregation, splitting, validation, and interpretation.</li>
                        </ul>
                    </li>
                    <li><b>Load:</b> (store) the transformed data is loaded and stored into a data store, which can be a database, data lake, or data warehouse.</li>
                </ul>
                <img src={Etlp} alt="" />
                <div className="centered-text">
                    <p style={{ marginTop: '5px' }}>
                        <b>Figure 1.</b> ETL process
                    </p>
                </div>
            <p style={{ marginTop: '40px' }}><b>ETL pipeline tools</b></p>
                <ul class="dot-list">
                    <li>Microsoft SQL Server Integration Services (SSIS)</li>
                    <li>Apache Airflow</li>
                    <li>Amazon Glue</li>
                    <li>Azure Data Factory</li>
                    <li>Informatica PowerCenter symbol</li>
                    <li>Oracle Data Integrator</li>
                    <li>Etc...</li>
                </ul>
                <img src={Etltool} alt="" />
                <div className="centered-text">
                    <p style={{ marginTop: '5px' }}>
                        <b>Figure 2.</b> ETL pipeline tools
                    </p>
                </div>
            <p style={{ marginTop: '40px' }}>There is also<b> ELT </b>(Extract-Load-Transform), which is another data pipeline method that follows a different order or placement of transformations. ELT is particularly suitable for handling large volumes of data or when working in a cloud environment, as it involves extracting raw data directly from its source, loading it into the data store, and then performing transformations and processing. On the other hand, ETL is more commonly used in on-premise environments, where data is structured and transformed before being uploaded to a relational data warehouse.</p>
            <p style={{ marginTop: '40px' }}>Data pipeline enables organizations to collect, process, and analyze data efficiently, thereby supporting the development of a <b> data-driven </b>culture and enabling informed decision-making, which drives business success and fosters innovation.</p>
            <p style={{ marginTop: '40px' }}><b>Data-driven</b> refers to an approach or methodology that relies on data, including analyzing and interpreting relevant data, to make informed decisions and drive business actions. Before developing a data-driven culture, it is essential for the organization to create an ideal environment that is safe and secure for data. Additionally, the organization should strive to gain a comprehensive understanding of the insights derived from data within the organization, including the types and formats of data, data ownership, data storage locations, and data accuracy. Most importantly, the business must align the data they utilize with their overall business strategy and core values.</p>
            <p style={{ marginTop: '40px' }}>There are several benefits to a company being data-driven. Firstly, a data-driven approach enables the company to gain a better understanding of insights within their organization. This deeper understanding empowers the company to make more informed decisions and facilitates more effective problem-solving. Furthermore, being data-driven allows the company to use data insights to drive innovation, improve operational efficiency, optimize processes, enhance business performance, and deliver an exceptional customer experience.</p>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Pipeline;