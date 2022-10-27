import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="container">
                <div class="card-header text-center">
                    Blog Question
                </div>
                <div class="card-body">
                    <h5 class="pt-10 text-center">Q-1 : What is cors?</h5>
                    <p class="card-text">
                        Answer : CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    </p>

                </div>

                <div class="card-body">
                    <h5 class="pt-10 text-center">Q-1 : What is Node?</h5>
                    <p class="card-text">
                        Answer : Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
                        <p className='text-center'>How does node Word</p>

                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                    </p>

                </div>

                <div class="card-body">
                    <h5 class="pt-10 text-center">Q-1 : How does Private Route Works?</h5>
                    <p class="card-text">
                        Answer : Routing refers to how an application's endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing. You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.
                    </p>

                </div>

                <div class="card-body">
                    <h5 class="pt-10 text-center">Q-1 : Why are you using Firebase? What other option do you have to implement authentication?</h5>
                    <p class="card-text">
                        Answer : The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                        <p className='text-center'>What other option do you have to implement authentication</p>

                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Password-based authentication. Passwords are the most common methods of authentication
                        Multi-factor authentication,Certificate-based authentication,Biometric authentication,         Token-based authentication.


                    </p>

                </div>

            </div>
        </div>
    );
};

export default Blog;