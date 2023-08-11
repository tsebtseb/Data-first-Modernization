import Hpestat from './images/hpestat.jpg';
import Greenlake from './images/greenlake.PNG';
import Pay from './images/pay.PNG';
import Edgecloud from './images/edgecloud.png';
import Climate from './images/climate.PNG';

const Strategy = () => {
    return (  
        <div className="data">
            <h1>HPE strategy</h1>
            <h2 style={{ marginTop: '40px' }}>What is HPE?</h2>
            <div className="centered-container">
                <img src={Hpestat} alt="" style={{ marginTop: '40px' }}/>
            </div>
            <p style={{ marginTop: '40px' }}>Hewlett-Packard was founded in 1939 by Bill Hewlett and Dave Packard. Since then, it has consistently created innovative products, establishing itself as a leader in the technology and IT industry, and fostering a unique corporate culture that inspires innovators and entrepreneurs to embrace innovation and leverage technology. Subsequently, HPE split from the Hewlett-Packard company on November 1, 2015, in Palo Alto, California. HPE has earned widespread recognition as a prominent vendor in the technology sector, providing an extensive portfolio of hardware and software products. Today, HPE has transformed into a <b>global edge-to-core company</b>, assisting clients and entrepreneurs in accelerating their business outcomes by offering comprehensive solutions that cover everything from edge to cloud. This empowers clients to harness the power of data wherever it resides.</p>
            <h2 style={{ marginTop: '40px' }}>HPE strategy</h2>
            <ul class="dot-list">
                <li style={{ marginTop: '40px' }}>
                    <h2><b style={{
                        color: '#00873D'
                    }}>Greenlake for everything:</b></h2>
                    <p>HPE GreenLake is an edge-to-cloud platform service that brings the cloud experience everywhere, applying a pay-for-usage model similar to on-cloud for on-premises users. With this model, clients only pay for the capacity they use, and a buffer capacity is deployed proactively to prevent resource shortages. GreenLake facilitates unified data management and accelerates data-first modernization, prioritizing the utilization of data insights to effectively manage and organize organizations, ultimately providing them with a competitive advantage in the industry. This service offers enterprise-grade access to data, regardless of its location.</p>
                    <p>Furthermore, HPE GreenLake enables the automation of hybrid cloud operations, allowing customers to efficiently manage and optimize performance, cost, security, and compliance. By leveraging this platform, customers can transform and modernize their workloads to a cloud operating model and effectively optimize and secure applications from edge to cloud.</p>
                    <img src={Greenlake} alt="" />
                </li>
                <li style={{ marginTop: '40px' }}>
                    <h2><b style={{
                        color: '#00873D'
                    }}>Everything-as-a-Service (XaaS):</b></h2>
                    <p>As a Service is a pay-per-use business model that offers visibility into actual consumption and costs in advance. This enables customers to predict their monthly charges and only pay for the resources they utilize. HPE goes a step further by providing additional buffer capacity beyond estimated usage to prevent resource depletion during peak demand, allowing for optimal resource allocation and control through policy-based allocation and utilization. This approach helps companies estimate and manage costs within their IT budget, providing flexibility in resource usage, eliminating unnecessary asset payments, and ensuring resource availability. The concept extends beyond cloud-based packaging or subscription models, as customers only pay for the specific amount of resources they use. This model can be applied to various IT infrastructure, products, and services, including software, infrastructure, and platform as a service. It benefits both clients and HPE by reducing upfront costs, enhancing cost transparency, and improving financial efficiency through the ability to forecast and predict resource revenue and costs.</p>
                    <img src={Pay} alt="" />
                </li>
                <li style={{ marginTop: '40px' }}>
                    <h2><b style={{
                        color: '#00873D'
                    }}>Edge to Cloud:</b></h2>
                    <p>In today's enterprise environment, data is no longer solely stored at the edge, such as in data centers, IoT devices, or smart sensors. Instead, there is a shift towards collecting, processing, and storing data in the cloud, enabling a distributed global workforce to extract valuable insights for business purposes. HPE offers a comprehensive solution that spans from the edge to the cloud, providing seamless integration and connectivity throughout the entire infrastructure. HPE provides an edge-to-cloud platform designed to deliver a cloud-like experience to organizations, regardless of where their data resides. The platform offers several beneficial features, including self-service capabilities that allow for easy and rapid resource provisioning. It also provides scalability to meet evolving business demands and follows a pay-per-use model, where customers only pay for the capacity they utilize while HPE manages the infrastructure's operations, including updates and maintenance. These attributes create greater opportunities for businesses and enhance their operational efficiency.</p>
                    <div className="centered-container">
                        <img src={Edgecloud} alt="" />
                    </div>
                </li>
                <li style={{ marginTop: '40px' }}>
                    <h2><b style={{
                            color: '#00873D'
                        }}>Sustainability: </b></h2>
                    <p>Sustainability is an increasingly important subject in light of growing environmental awareness. HPE, as a leading IT company, recognizes the significance of addressing social responsibility and minimizing environmental impact. It can be divided into sustainability for IT and IT for sustainability. Sustainability for IT refers to the adoption of sustainable practices within the IT industry throughout the entire IT lifecycle, aiming to make the IT sector more environmentally friendly. This includes reducing carbon emissions, managing the carbon footprint, minimizing the environmental impact of IT operations, increasing energy efficiency, and responsibly managing electronic waste. IT for sustainability refers to the utilization of IT solutions to support sustainability initiatives. For example, leveraging technologies like AI/ML in weather forecasting can contribute to sustainability efforts by enabling more accurate predictions and informed decision-making.</p>
                    <p>HPE has sustainability solutions and goals for both themselves and their partners and clients. Firstly, HPE enables a low-carbon economy, demonstrating their awareness of climate change and environmental issues. They take responsibility in recognizing and addressing these concerns by minimizing the industry's carbon footprint while maintaining operational resilience. HPE has established target goals in terms of measuring carbon footprint across three scopes. The greenhouse gas emissions of a company throughout its entire value chain, including suppliers and customers, are classified into three scopes according to the greenhouse gas protocol standard. Scope 1 emissions refer to direct emissions from sources owned or controlled by the company. Scope 2 emissions refer to indirect emissions resulting from activities of the company but from sources not owned or controlled by the company. Scope 3 emissions refer to indirect emissions not resulting from assets owned or controlled by the company, but from those indirectly responsible such as up or down the value chain (suppliers/customers), and the sources are not covered under scope 1 and 2.</p>
                    <p>Overall, HPE has set ambitious targets for reducing carbon emissions. They aim to achieve a 70% reduction in scope 1 and scope 2 emissions, and a 42% reduction in scope 3 emissions from 2020 to 2030. Additionally, HPE is committed to achieving net-zero emissions by 2040. This entails balancing the company's activities and greenhouse gas emissions across its value chain, resulting in a net impact of zero greenhouse gas emissions from the company.</p>
                    <p>HPE also enables enterprises, as their partners and clients, to achieve sustainability by incorporating greater efficiency and asset longevity into their products. HPE designs their products with minimal environmental impact in mind. They address the issue of underutilized large data centers by implementing a pay-per-use model, allowing businesses to only pay for the resources they actually use. This approach has the potential to save an estimated 30 billion annually. Additionally, HPE provides product recycling services/programs and returns materials to customers, reducing the environmental impact of IT infrastructure hardware, software, servers, networks, and other products while also promoting the reuse of certain components in the manufacturing of new products.</p>
                    <img src={Climate} alt="" />
                </li>
            </ul>
            
        </div>
    );
}
 
export default Strategy;