import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Row>
                <article className="text-start">
                    <div className="mt-4 p-4" >
                        <h3>1. What is the purpose of React Router?</h3>
                        <p>
                            React Router is a free and standard library for routing in React applications. It allows you to create routes and link to them from your components. It changes the browser URL, and keeps the UI in sync with the URL. When a user clicks a link, React Router will determine which route to use and render the corresponding component.
                        </p>
                        <p>Key features of React Router..</p>
                        <ul>
                            <li>Client Side Routing</li>
                            <li>Nested Routing</li>
                            <li>Dynamic Routing</li>
                            <li>Active Links</li>
                            <li>Data Loading and Fetching</li>
                            <li>Error Handling</li>
                        </ul>
                    </div>
                    <div>
                        <h3>2. How does Context API work?</h3>
                        <p>
                            Context is a built-in API introduced in ​​React 16.3. It is designed to share data that can be considered “global” for a tree of React components. You can pass data from parent to children nested deep down the component tree diretly without doing "prop drilling".
                        </p>
                        <p>
                            To create a context, call the <code>createContext</code> function with an arbitrary value. This will be the default value provided to the consumers.
                        </p>
                        <p>
                            The context object we just created exposes a <code>Provider</code> component that has a prop named value. Any primitive value, object and array passed to this prop will be accessible in any child of this component.
                        </p>
                        <p>
                            Finally, use the <code>useContext</code> hook, the context object is used as an injection token to access its value. 
                        </p>
                    </div>
                    <div>
                        <h3>3. What is the useRef hook and how does it work?</h3>
                        <p>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                        </p>
                        <p>
                        <code>useRef</code> hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an <code>Object</code>. The returned object has a property called <code>current</code> whose value is the argument passed to <code>useRef</code>. If you invoke it without an argument, the returned object's <code>current</code> property is set to <code>undefined</code>. The code below illustrates how to invoke the <code>useRef</code> hook in functional components.
                        </p>
                        <p>One of the most common use case of <code>useRef</code> hook is to access DOM elements (NOT custom React component). For example if you want to access an <code>input</code> element after it has been mounted to the DOM, instead of using <code>document.getElementById, document.querySelector</code> or any other <code>method</code> for selecting <code>DOM</code> elements like in <code>vanilla javascript</code>,  you can use <code>useRef</code> hook.
                        </p>
                    </div>
                </article>
            </Row>
        </Container>
    );
};

export default Blog;