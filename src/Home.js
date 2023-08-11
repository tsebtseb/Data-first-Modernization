import { Link } from 'react-router-dom';
import Graphcomponent from './Graphcomponent';
import Timeline from './Timeline';


const Home = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    return (  
        <div className="home">
            <h1 style={{
                color: '#00873D'
            }}>Data-first modernization</h1>
            <h2>By Natrada Surachettapong</h2>
            <div className="blog-preview">
                <Link to='/data' onClick={scrollToTop}>
                    {/* title */}
                    <h2>An Introduction to the Basics of Data</h2>
                    {/* sub topics */}
                    <p>Data, big data, types of data, data storage, flow of data, data life cycle</p>
                </Link>
            </div>
            <div className="blog-preview">
                <Link to='/pipeline' onClick={scrollToTop}>
                    {/* title */}
                    <h2>Exploring Data Pipelines</h2>
                    {/* sub topics */}
                    <p>Data pipeline, ETL, tools, data-driven</p>
                </Link>
            </div>
            <div className="blog-preview">
                <Link to='/dfirst' onClick={scrollToTop}>
                    {/* title */}
                    <h2>Becoming Data-first Modernization</h2>
                    {/* sub topics */}
                    <p>Digital transformation, importance of data, data-first modernization and steps, HPE solution</p>
                </Link>
            </div>
            <div className="blog-preview">
                <Link to='/dgovern' onClick={scrollToTop}>
                    {/* title */}
                    <h2>A Deep Dive into Data Governance</h2>
                    {/* sub topics */}
                    <p>Definition, objective, roles, principles, framework, in practices</p>
                </Link>
            </div>
            <div className="blog-preview">
                <Link to='/dsecurity' onClick={scrollToTop}>
                    {/* title */}
                    <h2>A Journey into Data Security Measures</h2>
                    {/* sub topics */}
                    <p>Definition, framework, risk, type, solution</p>
                </Link>
            </div>
            <div className="blog-preview">
                <Link to='/datahub' onClick={scrollToTop}>
                    {/* title */}
                    <h2>Unleashing Data Governance with DataHub</h2>
                    {/* sub topics */}
                    <p>Overview, integration, API, deployment, features</p>
                </Link>
            </div>
            <div className="blog-preview">
                <Link to='/hubtutor' onClick={scrollToTop}>
                    {/* title */}
                    <h2>DataHub Tutorial</h2>
                    {/* sub topics */}
                    <p>Ingestion, search, domain/glossary/tag/ownership, access policy, linage</p>
                </Link>
            </div>
            <Graphcomponent/>
            <Timeline/>
        </div>
    );
}
 
export default Home;