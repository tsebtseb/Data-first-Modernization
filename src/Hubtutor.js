import { Link } from 'react-router-dom';
const Hubtutor = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };
    return (  
        <div className="data">
            <h1>DataHub Tutorial</h1>
            <a href="https://youtu.be/-XohuwFLSPc">
                    <p  style={{
                    color: '#0000ff',
                    textDecoration: 'underline',
                    marginTop: '40px'
                     }}>EP 0. Introduction to DataHub</p>
            </a>
            <p>Introduction to DataHub: DataHub is an open-source software that serves as a powerful platform for data governance and data management. It functions as a platform to manage metadata for tools and infrastructure, enabling efficient handling of data assets within an organization. As a data catalog, it comprises a collection of metadata used to describe the content and structure of data. This tool helps with data discovery, data observability, data governance, metadata management, and data lineage. Throughout this introduction, we will delve into its basics, including integrated capabilities, deployment options, key features, and the benefits it offers when applied to data-driven projects.</p>
            <a href="https://youtu.be/n9tK2qgRW6g">
                    <p  style={{
                    color: '#0000ff',
                    textDecoration: 'underline',
                    marginTop: '40px'
                     }}>EP 1. Manage Ingestion with Data Source</p>
            </a>
            <p>In this session, we will explore how to manage data ingestion from various data sources and optimize the process for seamless data integration.</p>
            <a href="https://youtu.be/Pri6DL4XI0c">
                    <p  style={{
                    color: '#0000ff',
                    textDecoration: 'underline',
                    marginTop: '40px'
                     }}>EP 2. Search and Manage Domain / Glossary / Tag / Ownership</p>
            </a>
            <p>In this session, we will explore how to search, find, and filter particular data assets for easier access. Moreover, we will delve into managing and setting domain, glossary, tags, and ownership for both entity level and column level. A domain is used to divide the dataset for better data management within the same group or category, helping organizations to organize and manage their data assets more effectively. It is often used to divide the data between different departments. Glossary terms are words or phrases with specific definitions assigned to datasets. Glossary term groups serve as folders containing glossary terms or other term groups. Tags are phrases that define or describe the dataset and can be used for querying the data. The ownership type can be set based on the names of the roles/jobs, along with descriptions of the data they are involved with. These components will help users more easily manage data assets within the organization.</p>
            <a href="https://youtu.be/stpIuXsDupQ">
                    <p  style={{
                    color: '#0000ff',
                    textDecoration: 'underline',
                    marginTop: '40px'
                     }}>EP 3. Manage Access Policy</p>
            </a>
            <p>In this session, we will explore how to manage access policies, covering tasks such as creating, configuring, deactivating, and deleting them. There are two types of access policies to consider:</p>
            <p>Firstly, we have platform policies, which involve top-level management. These policies include tasks such as managing users, groups, and view analytics. Platform policies define the privileges granted to users, specifying what actions they can perform and designating the roles of the actors who can carry out those actions. Secondly, there are metadata policies that focus on entity-level permissions. These policies determine what users can do with metadata entities. For instance, metadata policies come into play when setting ownership, adding tags, and managing associated documents.</p>
            <a href="https://youtu.be/OEeKHMXVaKo">
                    <p  style={{
                    color: '#0000ff',
                    textDecoration: 'underline',
                    marginTop: '40px'
                     }}>EP 4. Lineage and Impact Analysis</p>
            </a>
            <p>In this session, we will explore how to manage data lineage and impact analysis. Data lineage provides a historical journey of data, recording its movement through various stages from source to destination, encompassing datasets, data jobs, dashboards, and charts. This invaluable information helps us understand the flow of data and identify dependencies. It helps identify what's upstream (the components or systems that supply data to downstream processes) and what's downstream (the processes or systems that utilize data produced by upstream resources). By understanding these, we benefit from proactive impact analysis, preventing data errors by understanding upstream dependencies and monitoring potential effects on other datasets. It also aids in reactive analysis, enhancing our ability to troubleshoot and investigate issues related to upstream processes.</p>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Hubtutor;