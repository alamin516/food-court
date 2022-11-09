import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-3xl font-bold mb-10'>Blog</h1>

            <div className="collapse mx-3 lg:mx-0 rounded-lg mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='lg:text-2xl text-white font-bold text-lg'>Difference between SQL and NoSQL</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content lg:flex">
                    <div className='lg:w-1/2'>
                        <h3 className='text-lg font-semibold underline'>SQL</h3>
                        <ul className='list-disc list-inside py-3'>
                            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                            <li>These databases have fixed or static or predefined schema</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>These databases are best suited for complex queries</li>
                            <li>Vertically Scalable</li>
                            <li>Follows ACID property</li>
                            <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</li>
                        </ul>
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='text-lg font-semibold underline'>NoSQL</h3>
                        <ul className='list-disc list-inside py-3'>
                            <li>Non-relational or distributed database system.</li>
                            <li>They have dynamic schema</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>Horizontally scalable</li>
                            <li>Follows CAP(consistency, availability, partition tolerance)</li>
                            <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse mx-3 lg:mx-0 rounded-lg mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='lg:text-2xl text-white font-bold text-lg'>What is JWT, and how does it work?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                        <p>JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                            Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                        <p>Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

                            Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with</p>
                    </div>
                </div>
            </div>

            <div className="collapse mx-3 lg:mx-0 rounded-lg mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='lg:text-2xl text-white font-bold text-lg'>What is the difference between javascript and NodeJS?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content lg:flex">
                    <div className='lg:w-1/2'>
                        <h3 className='text-lg font-semibold underline'>JavaScript</h3>
                        <ul className='list-disc list-inside py-3'>
                            <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
                            <li>It's a programming language, after all. Any browser with a competent browser engine will operate.</li>
                            <li>It's most commonly used on client-side servers.</li>
                            <li>The node community does not care about JavaScript.</li>
                            <li>It's made for creating network-centric apps.</li>
                            <li>It's a new release of the ECMA script that works on the C++-based V8 engine.</li>
                            <li>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</li>

                        </ul>
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='text-lg font-semibold underline'>Node.js</h3>
                        <ul className='list-disc list-inside py-3'>
                            <li>It's a bridge, open-source Js runtime environment for executing Js on the server.
                            </li>
                            <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.
                            </li>
                            <li>It's mainly popular on the server-side.
                            </li>
                            <li>All node projects represent the JavaScript community.
                            </li>
                            <li>It's made for real-time data-intensive apps that run on multiple platforms.
                            </li>
                            <li>C++, C, and JavaScript are used.
                            </li>
                            <li>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse mx-3 lg:mx-0 rounded-lg mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 className='lg:text-2xl text-white font-bold text-lg'>How does NodeJS handle multiple requests at the same time?</h2>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div>
                        <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</p>

                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;