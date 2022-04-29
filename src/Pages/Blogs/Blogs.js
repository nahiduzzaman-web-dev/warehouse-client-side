import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css';
import { BsQuestionDiamondFill } from 'react-icons/bs';
import quesAns from '../../images/question-answer_prev_ui.png';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-4 col-12">
                    <img src={quesAns} alt="" className='img-fluid' />
                </div>
                <div className="col-md-8 col-12">
                    <div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Q#1. Difference between javascript and nodejs <BsQuestionDiamondFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>JavaScripts</strong>
                                    <ul>
                                        <li>
                                            <em>Type: </em> JavaScript is a programming language. It is running in any web browser with a proper browser engine.
                                        </li>
                                        <li>
                                            <em>Utility: </em> Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.
                                        </li>
                                        <li>
                                            <em>Running Engine: </em> JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).
                                        </li>
                                    </ul>
                                    <strong>Nodejs</strong>
                                    <ul>
                                        <li>
                                            <em>Type: </em> It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.
                                        </li>
                                        <li>
                                            <em>Utility: </em> It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                                        </li>
                                        <li>
                                            <em>Running Engine: </em> Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Q#2. When should you use nodejs and when should you use mongod <BsQuestionDiamondFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>I should use Node. js because </strong>
                                    <p>
                                        Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                                    </p>
                                    <strong>I should use MongoDB because</strong>
                                    <p>
                                        NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Q#3. Differences between sql and nosql databases <BsQuestionDiamondFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>SQL</strong>
                                    <ul>
                                        <li>Relational Database Management System (RDBMS).</li>
                                        <li>These databases have fixed or static or predefined schema.</li>
                                        <li>These databases are best suited for complex queries.</li>
                                    </ul>
                                    <strong>NoSQL</strong>
                                    <ul>
                                        <li>Non-relational or distributed database system.</li>
                                        <li>They have dynamic schema.</li>
                                        <li>These databases are not so good for complex queries.</li>
                                    </ul>
                                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Q#4.  What is the purpose of jwt and how does it work <BsQuestionDiamondFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. </p>
                                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                                    <p>
                                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                                        <em> Once decoded, you will get two JSON strings:</em>
                                        <ul>
                                            <li> The header.</li>
                                            <li> The payload.</li>
                                            <li> The signature..</li>
                                        </ul>

                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;