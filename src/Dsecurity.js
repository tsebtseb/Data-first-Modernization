import Cia from './images/cia.PNG';
import Aaa from './images/aaa.PNG';
import Risk from './images/risk.PNG';
import Sencrypt from './images/sencrypt.PNG';
import Aencrypt from './images/aencrypt.PNG';
import Dmask from './images/dmask.PNG';
import Edmask from './images/edmask.png';
import Regu from './images/regu.PNG';
import Protect from './images/protect.PNG';
import Backup from './images/backup.PNG';
import Securetool from './images/securetool.PNG';
import { Link } from 'react-router-dom';
const Dsecurity = () => {
    const handleGoBack = () => {
        window.scrollTo(0, 0);
      };

    return (  
        <div className="data">
            <h1>A Journey into Data Security Measures</h1>
            <h2>Written by Natrada Surachettapong</h2>
            <p style={{ marginTop: '40px' }}><b>Data security</b> is the process of <b>safeguarding digital information</b> throughout its entire life cycle, encompassing the creation, storage, transmission, and disposal phases. It involves implementing various technologies, measures, and practices to protect sensitive data from corruption, loss, misuse, theft, unauthorized access, or cyber attacks.</p>
            <p style={{ marginTop: '40px' }}><b>Data security framework:</b> a comprehensive guideline and set of principles that companies should adhere to in order to establish effective data security measures. There are several data security frameworks that companies can consider implementing, including:</p>
            <p style={{ marginTop: '40px' }}><b>CIA:</b> involving three aspects, companies need to ensure the following:</p>
            <ul class="dot-list">
                <li><b>Confidentiality:</b> refers to the need for companies to ensure that data remains inaccessible to outsiders and can only be accessed by authorized users.</li>
                <li><b>Integrity:</b> refers to the need for companies to ensure that data is maintained in the correct state without corruption, data loss, or unauthorized changes.</li>
                <li><b>Availability:</b> refers to the need for companies to ensure that authorized users have uninterrupted access to data whenever needed, and that the system functions properly.</li>
            </ul>
            <img src={Cia} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 1.</b> CIA triad
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>AAA protocol:</b> a framework or protocol that should be followed to maintain data security, especially for managing access control. It involves three aspects, as follows:</p>
            <ul class="dot-list">
                <li><b>Authentication:</b> authorized users should be able to access data whenever they need by authenticating their credentials through methods such as User & Password, PIN, QR code, and facial recognition</li>
                <li>
                    <p><b>Authorization:</b> determines the services and resources that are accessible to users and the actions they are allowed to perform, such as read, write, or edit.</p>
                    <ul class="dot-list">
                        <li>There may be some confusion about the <b>difference between authentication and authorization</b>. Authentication involves validating a user's identity during their request before they can access a system or resource. On the other hand, authorization involves granting access, which determines whether the request is approved or denied and restricts the user's actions with the data or resource.</li>
                    </ul>
                </li>
                <li><b>Accounting:</b> refers to the practice of keeping records of a user's usage of system resources and measuring various metrics such as login time, data sent, data received, and logout time.</li>
            </ul>
            <img src={Aaa} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 2.</b> AAA protocal
                </p>
            </div>
            <p>There are also many other data security frameworks, such as NIST, CSF, ISO-27001, and others.</p>
            <p style={{ marginTop: '40px' }}><b>Data security risks and threats</b></p>
            <p>The cybersecurity attack has been occurring for a long time as digital transformation progresses and data assets become increasingly important. It is not something distant from us, as a major incident of a cybersecurity attack happened in Asia since 2017. This incident was known as the WannaCry ransomware attack, which spread as a worm and affected over 200,000 computers in more than 150 countries, including Singapore, which is the country close to Thailand. Following that incident, there have been many cybersecurity attacks, with one crucial incident being the Nepali ATMs incident in China in 2019, where hackers stole millions from 68 ATM booths. If we consider data security incidents in Thailand, one major incident would be the Pegasus spyware attack targeting the phones of activists in the country.</p>
            <p style={{ marginTop: '40px' }}><b>Type of data security risks and threats</b></p>
            <p><b>1.Accidental data exposure:</b></p>
            <p>refers to the risk of owners accidentally exposing sensitive information, such as through data loss, sharing, or granting unauthorized access. These actions can result in mishandling, loss, or leakage of data to unauthorized individuals.</p>
            <p><b>2.Phishing attacks:</b></p>
            <p>refer to cyberattacks carried out by cybercriminals who attempt to deceive users through the <b>sending of fraudulent emails, messages,</b> phone calls, or websites. These malicious communications <b>contain harmful links or attachments</b> that, when accessed by the recipient, can lead to the download of malware or enable the attacker to steal sensitive information. In short, users may be tricked into taking actions that unknowingly expose themselves to cyber criminals.</p>
            <p><b>3.Insider threats:</b></p>
            <p>refer to cyberattacks or cybersecurity risks that <b>occur from individuals within the organization</b>, such as employees or insiders. These individuals have authorized access to the organization's systems, data, or network, and pose a potential risk to the security and confidentiality of information. There are various types of insider threats, including:</p>
            <ul class="dot-list">
                <li><b>Compromised insider:</b> the employee/insider does not realize <b>their account or credentials have been exposed or accessed</b> by an unauthorized party, allowing unauthorized individuals to gain access to the organization's systems or data.</li>
                <li><b>Malicious insider:</b> the employee/insider intentionally and actively <b>attempts to steal data</b> from their organization or cause harm against organization’s system or data such as data theft, sabotage, or unauthorized access.</li>
                <li><b>Non-malicious insider:</b> the employee/insider causes harm accidentally, through <b>negligent behavior</b>, by not following security policies</li>
            </ul>
            <p><b>4. Malware:</b></p>
            <p>refers to <b>software-based web attacks</b> that possess the ability to self-replicate, acting as carriers to infect other machines across the internet. These malicious programs target and infect computers and corporate networks by exploiting vulnerabilities in their software. As a result, they can cause significant harm such as data theft, extortion, and network damage.</p>
            <ul class="dot-list">
                <li>
                    <p>Malware can enter a host through two primary methods:</p>
                    <ul class="dot-list">
                        <li><b>Virus:</b> malware that infects a user's system when they <b>receive or execute objects</b>, such as email attachments. Viruses require more active user engagement to initiate the infection compared to worms.</li>
                        <li><b>Worm:</b> malware that <b>passively infect</b> users' systems through methods like running applications or exploiting vulnerabilities. They spread in a more passive manner, often without requiring any action from the user.</li>
                    </ul>
                </li>
            </ul>
            <p><b>5.Ransomware:</b></p>
            <p>refers to a type of malicious software, or malware, that cyber criminals use to hack into systems and <b>prevent victims from accessing their own computer files</b>, systems, or networks. They then demand a ransom from the victim in order to unlock and regain access to their data. This can cause significant disruptions to operations as people are unable to access their files for work and may result in the loss of critical or sensitive information.</p>
            <img src={Risk} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 3.</b> Data security Risks and Threats
                </p>
            </div>
            <p>Therefore, it is essential for organizations to implement robust security measures, establish effective data security protocols, and deploy suitable solutions to safeguard against potential cyber attacks and mitigate the risks posed by cyber threats. By doing so, organizations can ensure the protection of their valuable assets and maintain a secure environment for their operations and data.</p>
            <p style={{ marginTop: '40px' }}><b>Type of data security</b></p>
            <p style={{ marginTop: '40px' }}><b>1.Encryption:</b> is a method of protecting data by using a specific algorithm to encode information, making it unreadable to unauthorized individuals. It ensures that the message can only be decrypted and read by recipients with the correct encryption key.</p>
            <p>It divided into symmetric encryption and asymmetric encryption:</p>
            <p style={{ marginTop: '40px' }}><b>Symmetric encryption:</b></p>
            <p>is a method where the <b>same key</b> is used for both encryption and decryption processes. It is essential for both the sender and recipient to share the symmetric key (Ks) before sending or receiving encrypted messages. Examples of standards for this type of encryption include <b>DES</b> (Data Encryption Standard) and <b>AES</b> (Advanced Encryption Standard).</p>
            <img src={Sencrypt} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 4.</b> Symmetric encryption process
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>Asymmetric encryption / Public key cryptography:</b></p>
            <p>is a method that uses <b>different keys</b>, namely <b>private and public keys</b>, for encryption and decryption processes. The process can be visualized in the diagram below: the sender uses the public key(Kb+) selected by the recipient to encrypt the information, resulting in ciphertext that can only be decrypted or read using the secret private key known only to the recipient. Upon receiving the encrypted message, the recipient uses their private key(Kb-) to decrypt and access the information. An Example of standard for this type of encryption is <b>RSA</b>.</p>
            <img src={Aencrypt} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 5.</b> Asymmetric encryption process
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>2.Data erasure:</b> is a software-based process that ensures data protection by securely <b>overwriting digitally stored information</b> with random binary data, following a specified standard such as the <b>NIST 800-88</b> standard. The process includes verifying and certifying the successful erasure, effectively and completely destroying digital data. Data erasure is crucial in preventing cyberattacks as it minimizes the risk of cybercriminals accessing and stealing personally identifiable information (PII) or other sensitive data.</p>
            <p style={{ marginTop: '40px' }}><b>3.Data masking:</b> is a method used to conceal sensitive information by obscuring and replacing specific letters or numbers, in order to prevent unauthorized individuals from viewing the data. It involves creating a <b>pseudo or fake</b> version of the organization's data by applying defined rules to alter the values while maintaining the same data format.</p>
            <p>There are several methods available for altering or masking data, including:</p>
            <img src={Dmask} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 6.</b> Data masking methods
                </p>
            </div>
            <ul class="dot-list">
                <li><b>Character shuffling:</b> rearranging the order of characters randomly</li>
                <li><b>Word/Character substitution:</b> replaces specific characters with alternative ones according to a predefined substitution pattern or rule</li>
                <li><b>Encryption</b></li>
                <li><b>Value variance:</b> changing the original data by replacing it with a specific function defined, such as the difference between the lowest and highest value in a series</li>
            </ul>
            <p><b>Example of Data masking</b></p>
            <img src={Edmask} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 7.</b> Example of Data masking
                </p>
            </div>
            <a href="https://www.imperva.com/learn/data-security/data-masking/">
                <p  style={{
                color: '#0000ff',
                textDecoration: 'underline'
            }}>Reference Link: Example of Data masking</p>
            </a>
            <p style={{ marginTop: '40px' }}><b>4.Data resiliency:</b> refers to the <b>ability to recover from failures or disruptions</b>. Organizations achieve data resiliency by creating backups or copies of their data through <b>backup and recovery systems</b> or <b>replication methods</b>. These practices ensure that in the event of a failure, data can be restored and business operations can resume smoothly.</p>
            <p style={{ marginTop: '40px' }}><b>Data security regulation:</b> refer to public regulations, standards, or policies that govern the handling of data. Companies are required to comply with these regulations based on their specific business functions to ensure the proper security and protection of data in accordance with legal and industry requirements.</p>
            <img src={Regu} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 8.</b> Data security regulation
                </p>
            </div>
            <ul class="dot-list">
                <li>General Data Protection Regulations <b>(GDPR)</b>: law that <b>protects the personal data of European</b></li>
                <li>California Consumer Privacy Act <b>(CCPA)</b>:control over how <b>businesses</b> collect their personal data</li>
                <li>Health Insurance Portability and Accountability Act <b>(HIPAA)</b>: <b>protects patients’ health data</b> from being exposed without their consent or knowledge.</li>
                <li>Sarbanes-Oxley <b>(SOX)</b> Act: provides <b>auditing and financial regulations</b> for public organizations</li>
                <li>Payment Card Industry Data Security Standard <b>(PCI DSS)</b>:securely process, store, and transmit <b>credit card data</b></li>
                <li>International Standards Organization <b>(ISO) 27001</b>: <b>international standard</b> for establishing, implementing, maintaining, and improving information <b>security management systems</b> and develop data security policy minimize their risk</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Data security solutions</b></p>
            <p>refer to specific tools, technologies, or practices that are implemented to achieve data security goals. In this article, I would like to discuss four domains related to data security.</p>
            <p style={{ marginTop: '40px' }}><b>1.Access control</b></p>
            <p>is a practice that involves restricting and managing access to resources based on user roles and permissions, ensuring authorized individuals can access the resources at appropriate times and perform permitted actions. This includes assigning administrative roles and implementing password-based authentication.</p>
            <p style={{ marginTop: '40px' }}>At a high level, access control consists of <b>two main components</b>: authentication and authorization. <b>Authentication</b> is the process used to <b>verify</b> the identity of someone who requests access, ensuring that they are who they claim to be. <b>Authorization</b>, on the other hand, involves <b>granting or denying access rights</b> to users, allowing authorized users to perform transactions or access specific resources.</p>
            <p style={{ marginTop: '40px' }}>There are <b>four types</b> of access control</p>
            <ul class="decimal-list">
                <li><b>Discretionary access control (DAC):</b> involves assigning access rights based on <b>rules that users specify</b></li>
                <li><b>Mandatory access control (MAC):</b> involves assigning access rights based on <b>regulations from a central authority</b></li>
                <li><b>Role Based Access Control (RBAC):</b> involves assigning access rights based on a <b>user's role, responsibilities</b>, and the needs of the group they belong to. For instance, individuals in a software engineering role would require access to platforms like Google Cloud Platform, AWS, and GitHub. On the other hand, the Marketing team may be granted access to resources such as Google Analytics, Facebook Ads, and Google Ads, while Human Resources may have access privileges for LinkedIn.</li>
                <li><b>Attribute Based Access Control (ABAC):</b> involves assigning access rights based on <b>policy-based access control</b> that takes into account various attributes such as user department, time of day, location of access, and type of access required. These <b>attributes</b> are used to determine whether a user's access request should be granted or denied.</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>2. Data loss prevention (DLP)</b></p>
            <p>is a practice that focuses on  protecting data by identifying sensitive information and utilizing techniques such as antivirus software, artificial intelligence (AI), and machine learning to detect suspicious activities. It also involves comparing data content to your organization's DLP policy to ensure a match and compliance.</p>
            <p style={{ marginTop: '40px' }}><b>DLP policy:</b> is a set of guidelines that defines how an organization's data is labeled, shared, and protected. It includes the following components:</p>
            <ul class="decimal-list">
                <li>Location/System: specifies the specific locations or systems where data needs to be protected.</li>
                <li>Timing and Methods: determines when and how data should be protected</li>
                <li>Rule: defines sensitive data based on predefined criteria and outlines the actions to be taken when a security risk is detected.</li>
                <li>Condition: assigns different actions to be taken based on the severity or level of risk associated with the data</li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>Proactive approach:</b> involves implementing measures to protect data before a data loss incident occurs.</p>
            <ul class="dot-list">
                <li><b>Data in motion:</b> securing data being used by <b>an application or endpoint</b> through user <b>authentication and access</b> control</li>
                <li><b>Data in use:</b> ensuring the safe <b>transmission</b> of data while move btw across the network through <b>encryption/ messaging security measures</b></li>
                <li><b>Data in rest:</b> protecting data that is being <b>stored on any network location</b>(maybe cloud)  through <b>access restrictions and user authentication</b></li>
            </ul>
            <p style={{ marginTop: '40px' }}><b>3. Security monitoring:</b></p>
            <p>also known as security information monitoring <b>(SIM)</b> or security event monitoring <b>(SEM)</b>, is a critical practice in safeguarding data from cyber risks. It involves the systematic collection and analysis of information to detect any suspicious behavior or unauthorized changes within your network. The process involves closely monitoring logs and defining alert triggers for specific behaviors, allowing organizations to immediately respond to potential threats. This is often achieved through the use of security information and event management <b>(SIEM)</b> software, which provides real-time analysis of security alerts generated by applications and network hardware.</p>
            <p style={{ marginTop: '40px' }}><b>4. Protection :</b></p>
            <p>refers to the process of safeguarding sensitive information from damage, loss, or corruption. There are various ways to achieve this, including the following:</p>
            <img src={Protect} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 9.</b> Data protection
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>Backup:</b>is the practice of protecting data from accidental data loss, corruption, and unauthorized access by creating additional copies of the data. These copies can be used to restore the original data and recover earlier instances of the data.</p>
            <p><b>Type of backup</b></p>
            <ul class="dot-list">
                <li><b>Full backup:</b> copy entire data set, then sent to another location</li>
                <li><b>Incremental backup:</b> backs up all files that have <b>changed since the last previous backup</b> occurred. This method focuses on capturing and storing only the recent changes, resulting in less storage usage and faster backup processes.</li>
                <li><b>Differential backup:</b> backs up only copies of all files that have <b>changed since the last full backup</b>.</li>
            </ul>
            <img src={Backup} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 10.</b> Types of backup
                </p>
            </div>
            <p style={{ marginTop: '40px' }}><b>OS hardening:</b> refers to the use of techniques such as vulnerability assessments and penetration testing to identify and prioritize vulnerabilities in an IT environment. These methods aim to assess the security of the system or network, identify any loopholes or hidden risks, and take necessary actions to close those security gaps. OS hardening practices may include regular OS updates, securing storage devices, implementing access controls and authentication mechanisms, and employing various other techniques to mitigate security vulnerabilities in the operating system.</p>
            <p style={{ marginTop: '40px' }}><b>VPN:</b> virtual private network, is an Internet security service that enables users to access the Internet as if they were connected to a private network. By utilizing encryption methods, VPNs establish secure connections over unsecured Internet infrastructure, ensuring the confidentiality and integrity of data transmission.</p>
            <p style={{ marginTop: '40px' }}><b>Data security tools:</b></p>
            <p>The diagram below illustrates examples of tools used in each domain to provide solutions for data security.</p>
            <img src={Securetool} alt="" />
            <div className="centered-text">
                <p style={{ marginTop: '5px' }}>
                    <b>Figure 11.</b> Data security tools
                </p>
            </div>
            <Link to="/">
                <button onClick={handleGoBack}>Go back</button>
            </Link>
        </div>
    );
}
 
export default Dsecurity;