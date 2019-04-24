module.exports = [
    {
      "_id": "5c2af5cd6fd3337e16b19abd",
      "name": "basics",
      "__v": 0,
      "order": 0,
      "subSections": [
        {
          "_id": "5c2d39ef12738100045ec4d7",
          "skill": "HTML",
          "description": "The very first step towards your web developer journey is understanding HTML. HTML is just a markup syntax for displaying content. Most websites use an index.html file which acts as the first file that is read. From this file other files can be referenced such as the CSS styling and Javascript logic. To get familiar with HTML create a few basic websites and learn the different types of tags (eg. div, form, input). While you’re at it have a look at HTML5 and their additional tags. These tags allow for a larger set of behaviours."
        },
        {
          "_id": "5c2d39ef12738100045ec4d6",
          "skill": "CSS",
          "description": "HTML on it’s own does the job, however looks very dull. We can specify the presentation and layout of the document using CSS. The CSS files are where all the design logic goes. This includes the logic for adding responsiveness to websites (how well a website can be presented on different sized screens). This is done using media queries that determine which code should be applied based on screen size. There are other types of logic that can also be applied such as transitions and animation. Be careful when using these as not all browsers have full support for them all."
        },
        {
          "_id": "5c2d39ef12738100045ec4d5",
          "skill": "Javascript",
          "description": "Javascript is a weakly typed, high level, interpreted programming language. If that sentence didn’t make sense to you, just know that Javascript is a fairly easy language to pick up and use but also just as easy to write terrible code due to lack of strictness. A few key concepts to learn with Javascript (and programming in general) are asynchronous calls, classes and DOM manipulation. Javascript handles asynchronous calls with it’s async/await methods, promises or callbacks. It’s recommended to learn how all of these work. DOM manipulation is in reference to being able to select HTML elements through the code and perform tasks on it programatically."
        }
      ]
    },
    {
      "_id": "5c2af58a6fd3337e16b19707",
      "name": "general",
      "__v": 0,
      "order": 1,
      "subSections": [
        {
          "_id": "5c2d3a8e12738100045ec4de",
          "skill": "Git",
          "description": "To keep track of changes on a project it is vital to use some sort of version control, especially when working with multiple people. Git is one of the most widely used version control tools for developers. Applications such as Github, Bitbucket and Gitlab all provide this service. When working in a team it is important to establish at the start of a project what the development protocols are, such as which branches can be pushed to, how code review is done and how to recover a branch if it ever gets corrupted."
        },
        {
          "_id": "5c2d3a8e12738100045ec4dd",
          "skill": "Terminal",
          "description": "Basic terminal skills are necessary for navigation, editing files (I prefer vim) and debugging. This may not be the most creative or interesting part of development but it is vital. If you ever get stuck on a command not knowing how to use it you can try typing “man <command>” for a full list of options (Mac and Unix only)."
        },
        {
          "_id": "5c2d3a8e12738100045ec4dc",
          "skill": "Design Patterns",
          "description": "Design patterns in programming are just an idea of how good code should look like. There is no such thing as perfect code but there is easily readable and maintainable code. It should be the programmers job to ensure these are met by designing components that are modular and extensible. In other words, if you can make something work with less repeated code and is still understandable, then do it. Different design patterns should be used for different projects. Most of the design patterns can be grouped into three categories: creational design patterns (handling object creation mechanism), structural design patterns (concerned with object and class composition) and behavioural design patterns (communications between dissimilar objects)."
        },
        {
          "_id": "5c2d3a8e12738100045ec4db",
          "skill": "Package managers",
          "description": "Every language should have it’s own package management ecosystem. For Javascript NPM is widely used. Become familiar with NPM, especially the package.json. Understand that when installing a file you can choose to save it into dependencies with –save or -S or dev- dependencies with –save-dev. When downloading a Git repo from the internet the first thing you will most likely need to do is run npm i which installs node_modules from the package.json."
        },
        {
          "_id": "5c2d3a8e12738100045ec4da",
          "skill": "APIs",
          "description": "Personally, understanding APIs also involved understanding the client server relation. Essentially a client should make API calls to a server which returns the requested information. The server API can be web-based, operating system or software library; all it does it return data. When creating web apis there are certain standards out there such as REST. There are many tools available that can assist in following these standards such as SwaggerUI."
        },
        {
          "_id": "5c2d3a8e12738100045ec4d9",
          "skill": "REST API",
          "description": "A RESTful API uses HTTP requests to GET, PUT, POST and DELETE data. A primary benefit of using REST, both from a client and server's perspective, is REST-based interactions happen using constructs that are familiar to anyone who is accustomed to using HTTP. "
        },
        {
          "_id": "5c2d3a8e12738100045ec4d8",
          "skill": "HTTP",
          "description": "Understanding HTTP and HTTPS will help you understand a bit about the networking that goes on for a website. Part of understanding HTTP includes getting familiar with the various request and response headers, caching, connection handling and authentication. This will also give you a first look at ports (80 for HTTP 443 for HTTPS)."
        }
      ]
    },
    {
      "_id": "5c2d3ad16fd3337e16ccf7ce",
      "name": "front-end",
      "__v": 0,
      "order": 2,
      "subSections": [
        {
          "_id": "5c2d3ad112738100045ec4e1",
          "skill": "JS Framework",
          "description": "When people talk about Javascript frameworks they usually mean either Angular, Vue or React. A JS framework allows the developer to write code in a certain way which then compiles down to a renderable state."
        },
        {
          "_id": "5c2d3ad112738100045ec4e0",
          "skill": "React",
          "description": "React is the framework I am most familiar with and at this point in time most sought after (based on jobs in my area). React claims the advantages of being declarative, meaning each view renders automatically when the data changes, component-based, meaning you can keep state out of the DOM and having a massive user base which results in lots of custom components."
        },
        {
          "_id": "5c2d3ad112738100045ec4df",
          "skill": "State Management",
          "description": "Each JS framework has its own preferred state management tool, however these are also interchangeable. Vue uses Vuex, Angular uses RxJS and ngrx and React uses Redux and MobX but recently has also introduced it’s own native implementation called Context API. State management is important to understand as it is best to be able to control how data flows, for example a child component shouldn’t be able to change the state of any of its parent components unless it was specifically designed to do so."
        }
      ]
    },
    {
      "_id": "5c2d3b626fd3337e16ccffcb",
      "name": "back-end",
      "__v": 0,
      "order": 3,
      "subSections": [
        {
          "_id": "5c2d3b6212738100045ec4e8",
          "skill": "Scripting Languages",
          "description": "Scripting languages are essentially any language you want to use to perform some task. In the context of web development, the client will send a request to the server and the server, using one of these scripting languages will perform a calculation and send back the result."
        },
        {
          "_id": "5c2d3b6212738100045ec4e7",
          "skill": "Testing",
          "description": "There are multiple testing types but for now we should focus on unit and integration tests. Find a testing library in your scripting language of choice (eg. Jest for Javascript) and run unit tests to see if supplying certain inputs result in the expected output and integration tests to see if components behave as expected without side effects."
        },
        {
          "_id": "5c2d3b6212738100045ec4e6",
          "skill": "Databases – Relational",
          "description": "Relational databases are sets of data organized by tables, records and columns. RDBs have a well established relationships between database tables. Some popular RDBs include MariaDB, MySQL and PostgreSQL. Once you learn one it should be easy to learn the rest."
        },
        {
          "_id": "5c2d3b6212738100045ec4e5",
          "skill": "Databases – Non-relational",
          "description": "NoSQL is an approach to database design that accommodates a wide variety of data models. These type of database is especially useful for working with large sets of distributed data, rapidly changing structured, semi-structured and unstructured data and for geographically scaling out architecture rather than a monolithic implementation. The most popular NoSQL database available is MongoDB with alternatives such as Cassandra and RethinkDB also out there."
        },
        {
          "_id": "5c2d3b6212738100045ec4e4",
          "skill": "Authentication",
          "description": "In regards to web development authentication and authorization can refer to OAuth, Basic Authentication, Token Authentication, JWT or OpenID. Authentication differs from authorization as authentication refers to the ability of a user to have access to perform an action, whereas authorization is about what the user is allowed to do. Authentication is the process of ascertaining that somebody really is who they claim to be. Authorization refers to rules that determine who is allowed to do what."
        },
        {
          "_id": "5c2d3b6212738100045ec4e3",
          "skill": "Message Brokers",
          "description": "Message brokers such as RabbitMQ and Apache Kafka provide asynchronous messaging so messages sent are not lost. These queues have the advantage of being cross-language, cross-platform and distributable with multiple queues, exchanges and clusters.  "
        },
        {
          "_id": "5c2d3b6212738100045ec4e2",
          "skill": "Caching",
          "description": "Caching, such as with Redis, uses memory as a data store. It allows for high performance, data-persistence and high availability through replication and backups. Redis should not be used for permanent data storage but rather as an intermediate component for storage due to its performance. "
        }
      ]
    },
    {
      "_id": "5c2d3c6d6fd3337e16cd0e7c",
      "name": "dev-ops",
      "__v": 0,
      "order": 4,
      "subSections": [
        {
          "_id": "5c2d3c6d12738100045ec4f1",
          "skill": "Threads/Processes",
          "description": "A general understanding of threads and processes can help improve speed and efficiency for server side computations. A thread is a path of execution within a process. A process can contain multiple threads. The primary difference is that threads within the same process run in a shared memory space, while processes run in separate memory spaces."
        },
        {
          "_id": "5c2d3c6d12738100045ec4f0",
          "skill": "Operating System",
          "description": "Familiarisation of a few different operating systems can be handy, especially when it comes to deploying your website. Understanding the differences between Mac, Windows and Linux is a good start. "
        },
        {
          "_id": "5c2d3c6d12738100045ec4ef",
          "skill": "Virtualisation",
          "description": "In computing, hardware virtualisation is the process of creating a virtual version of real hardware.  This allows organisations to partition a single physical computer or server into several virtual machines. Each virtual machine can then interact independently and run different operating systems or applications while sharing the resources of a single host machine. A popular virtualisation software is VMWare."
        },
        {
          "_id": "5c2d3c6d12738100045ec4ee",
          "skill": "Memory/Storage",
          "description": "Both memory and storage are places to hold your data, but they do very different things with it. The memory is known as RAM. It is is a part of your computer that it uses while it’s powered on. Your computer stores everything that it’s thinking about in RAM. If you’re running a program, it’s in RAM. If you’re looking at a webpage, it’s in RAM. RAM contains everything that’s currently going on with your computer. And when RAM is in a computer that isn’t powered, the RAM is empty. ‘Storage’ refers to long-term storage. Everything that your computer knows, but isn’t thinking about, is in storage, written on the Hard Disk Drive (HDD). This is a permanent type of storage: hard drives can be unplugged and contain the same information as when they’re plugged in or turned on. Nothing actually gets changed on the hard drive: it gets pulled off the hard drive, into RAM/Memory. While it’s in memory, you as the user can change it. When you save the information, it gets sent back to the hard drive storage in a different version."
        },
        {
          "_id": "5c2d3c6d12738100045ec4ed",
          "skill": "Sockets",
          "description": "WebSockets represent a standard for bi-directional real time communication between servers and clients. As opposed to HTTP, websockets stay connected to the server and gets sent a message when available. This is useful for apps such as chat, IoT and real time games."
        },
        {
          "_id": "5c2d3c6d12738100045ec4ec",
          "skill": "Networking and Security",
          "description": "When it comes to networking and security the amount of information available is endless. For web development it would be handy to know about the OSI model which is a reference model for how applications communicate over a network. A DNS is a directory of domain names which get translated to Internet Protocol (IP) addresses.  In regards to security, basic understanding of SSL, HTTP, HTTPS and FTP would be a good place to start. As well as these protocols there are security checklists that can be used in assisting web security. These may run over storage of credentials and secrets, authentication, database hardening, app vulnerabilities and infrastructure."
        },
        {
          "_id": "5c2d3c6d12738100045ec4eb",
          "skill": "Web Server",
          "description": "Web servers are programs that serve files that form web pages from the server to the client. All computers that host Web sites must have Web server programs. Leading Web servers include Apache (the most widely-installed Web server), Microsoft's Internet Information Server (IIS) and nginx."
        },
        {
          "_id": "5c2d3c6d12738100045ec4ea",
          "skill": "Containers",
          "description": "A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. One popular container program is Docker. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings."
        },
        {
          "_id": "5c2d3c6d12738100045ec4e9",
          "skill": "Log Management",
          "description": "When something goes wrong the most important thing to do is find out why, and this is why logging is so vital. Logs should be well structured with as much information as possible so they can be searched easily. Tools such as the ELK stack can be used for displaying this data."
        }
      ]
    },
    {
      "_id": "5c2d3cc86fd3337e16cd12eb",
      "name": "other",
      "__v": 0,
      "order": 5,
      "subSections": [
        {
          "_id": "5c2d3cc812738100045ec4f7",
          "skill": "Cloud Providers",
          "description": "When deploying a web program it will need to sit in the cloud somewhere (unless you have your own server running). There are different cloud providers that provide different solutions such as IaaS (Infrastructure-as-a-Service), PaaS (Platform-as-a-Service) and SaaS (Software-as-a-Service). Some cloud providers include AWS, Digital Ocean and Heroku. "
        },
        {
          "_id": "5c2d3cc812738100045ec4f6",
          "skill": "Machine Learning",
          "description": "Machine learning is a quickly growing branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention. A popular way to get into machine learning is using Tensorflow and the python programming language."
        },
        {
          "_id": "5c2d3cc812738100045ec4f5",
          "skill": "Processing",
          "description": "Processing or it’s JS equivalent p5.js i a client-side library for creating graphic and interactive experiences. P5.js runs in the DOM of a web page. This tool is great for creating animations, graphics and games."
        },
        {
          "_id": "5c2d3cc812738100045ec4f4",
          "skill": "Computer Vision",
          "description": "Computer vision is about how computers gain understanding from images. Combined with machine learning, computer vision aims to emulate human vision in identifying objects, features and extracting information. "
        },
        {
          "_id": "5c2d3cc812738100045ec4f3",
          "skill": "Electron",
          "description": "Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It is compatible with Mac, Windows, and Linux. Initially Electron was developed for the Atom editor but had also been adopted by products such as Skype, GitKraken, Slack and VSCode. "
        },
        {
          "_id": "5c2d3cc812738100045ec4f2",
          "skill": "GraphQL",
          "description": "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. GraphQL APIs are organized in terms of types and fields, not endpoints. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code."
        }
      ]
    }
  ]