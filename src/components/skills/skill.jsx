import "./skill.css";
export function Skill() {
  return (
    <div className="skill">
      <h1 className="skill-main">Skill's</h1>
      <div className="skillParent">
        <h1 className="ui">UI Layer Tech...</h1>
        <div className="frontEnd">
          <div className="html glass">
            <img src="./images/html.png" alt="" />
            <h1>HTML-5</h1>
            <div className="semantic">
              <h2>Semantic Elements</h2>
              <h5>Void Elements</h5>
              <h5>Raw Text Elements</h5>
              <h5>Normal Elements</h5>
            </div>

            <div>
              <h2>Non-Semantics Elements</h2>
              <h5>Block Element</h5>
              <h5>Inline Element</h5>
            </div>
            <h2>Seo Friendly</h2>
            <h5>Web-site Ranking</h5>
          </div>
          <div className="css glass">
            <img src="./images/css.png" alt="" />

            <h1>CSS-3</h1>
            <div>
              <h2>Types Of Selectors</h2>
              <h5>Primary Selector</h5>
              <h5>Rational & Group Selectors</h5>
              <h5>Attribute Selectors</h5>
              <h2>Pseudo Classes</h2>
              <h5> Dyanamic pseudo Classes</h5>
              <h5>Behavioural & Structural Pseudo Classes</h5>
              <h2>Responsive Design</h2>
              <h5>Media Query</h5>
              <h2>Animation</h2>
              <h5>Keyframe</h5>
            </div>
          </div>

          <div className="sass glass">
            <img src="./images/saas.jpg" alt="" />

            <h1>Saas</h1>
            <h2>Programming Features</h2>
            <h5>Variables</h5>
            <h5>Iterator</h5>
            <h5>Function</h5>
            <h5>Mixin</h5>
            <h5>Module System</h5>
            <h2>Bootstrap</h2>
            <h5>Classes</h5>
            <h5>Components</h5>
            <h2>MUI</h2>
            <h5> Builtine Components</h5>
            <h5>Custome Component</h5>
          </div>

          <div className="javscript glass">
            <img src="./images/javascript.png" alt="" />

            <h1>
              JavaScript<span className="black">&</span>Jquery
            </h1>
            <h2>Variable</h2>
            <h5>Function Scope Variable</h5>
            <h5>Block Scope Variables</h5>
            <h2>Control Statement</h2>
            <h5>Conditional Statements</h5>
            <h5>Loops Statement</h5>
            <h2>Functions</h2>
            <h5>Callback Function</h5>
            <h5>Anonymous Functions</h5>
            <h5>Higher-Order Function</h5>
            <h2>Operators</h2>
            <h5>Rest&Spread Operators</h5>
            <h2>Promises</h2>
            <h5>then</h5>
            <h5>Async/Await</h5>
            <h2>Module System</h2>
            <h5>CommonJs</h5>
            <h5>ES</h5>
          </div>
          <div className="typescript glass">
            <img src="./images/typescript.png" alt="" />

            <h1>TypeScript</h1>
            <h2>DataTypes</h2>
            <h5>Primative</h5>
            <h5>Non-Primative</h5>
            <h2>Functions</h2>
            <h5>Function OverLoading</h5>
            <h2>Interfaces</h2>
            <h5>Contracts Defining</h5>
            <h5>Extending Interfaces</h5>
            <h5>Readonly Properties</h5>
            <h2>Clsses</h2>
            <h5>Access Modifiers</h5>
            <h5>Properties</h5>
            <h5>Abtraction</h5>
            <h2>Module System</h2>
            <h5>Es Module System</h5>
            <h2>Generics</h2>
          </div>
          <div className="react glass">
            <img src="./images/react.png" alt="" />

            <h1>React</h1>
            <h2>Components</h2>
            <h5>Functional Components</h5>
            <h5>Class Components</h5>
            <h2>State Management</h2>
            <h5>Local State</h5>
            <h5>Global State</h5>
            <h2>Hooks&Custome Hooks</h2>
            <h5>Basic Hooks</h5>
            <h5>Advance Hook</h5>
            <h2>Props</h2>
            <h5>Custome Components</h5>
            <h5>Conditional Rendering</h5>
            <h5></h5>
            <h2>Context APIs</h2>
            <h2>Redux</h2>
            <h2>React Life Cycle</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="ui">Application Layer Tech...</div>
        <div className="frontEnd">
          <div className="glass">
            <img src="./images/node.png" alt="" />

            <h1>Node.js</h1>
            <h2>Core Modules</h2>
            <h5>File Module</h5>
            <h5>Path Module</h5>
            <h5>HTTP Module</h5>
            <h2>NPM</h2>
            <h5>Local and Global Packages</h5>
            <h2>Module Sytem</h2>
            <h5>Commonjs</h5>
            <h2>Asynchronous Programing</h2>
            <h5>Callback</h5>
            <h5>Promise</h5>
            <h5>Async/Await</h5>
          </div>

          <div className="glass">
            <img src="./images/express.png" alt="" />

            <h1>Express.js</h1>
            <h2>MVC Module</h2>
            <h2>Routes</h2>
            <h5>Controllers</h5>
            <h5>Route Parameter</h5>
            <h5>Query Parameter</h5>
            <h5>Route Chaining</h5>
            <h2>Middleware</h2>
            <h5>Built-in Middleware</h5>
            <h5>Third Party Middleware</h5>
            <h2>HTTP Methods</h2>
            <h5>Status Codes</h5>
          </div>

          <div className="glass">
            <img src="./images/auth.jpg" alt="" />

            <h1>Concepts</h1>
            <h2>
              Authentication <span className="black">&</span>Authorization
            </h2>
            <h2>Statefull Auth</h2>
            <h5>Session Base</h5>
            <h2>Stateless Auth</h2>
            <h5>Token Base (jwt)</h5>
            <h2>Rest APIs</h2>
            <h5>Web-APIs</h5>
            <h5>Postman</h5>
            <h5>Swager Doc</h5>
            <h2>Protocols</h2>
            <h5>HTTP</h5>
            <h5>HTTPS</h5>
            <h5>Socket.io</h5>
            <h2>Cors</h2>
            <h2>Password Bycryption</h2>
            <h2>Cookies</h2>
          </div>
        </div>

        <div>
          <h1 className="ui">DataBase Layer Tech...</h1>
          <div className="database">
            <div className="glass">
              <img src="./images/mysql.png" alt="" />

              <h1> SQL:Mysql</h1>

              <h2>ER-Diagram</h2>
              <span className="mysql-data">Entity</span>
              <span className="mysql-data">Attributes</span>
              <span className="mysql-data">Relations</span>
              <h2>Commands</h2>
              <span className="mysql-data">DDL</span>
              <span className="mysql-data">DML</span>
              <span className="mysql-data">TCL</span>
              <span className="mysql-data">DQL</span>
              <span className="mysql-data">DCL</span>
              <h2>Keys</h2>
              <span className="mysql-data">Primary Key</span>
              <span className="mysql-data">Forign Key</span>
              <span className="mysql-data">Candidate Key</span>
              <span className="mysql-data">Super Key</span>
              <h2>Joins</h2>
              <span className="mysql-data">Inner Join</span>
              <span className="mysql-data">Left Join</span>
              <h2>Sub-Queries</h2>
              <h5>Contraints</h5>
              <h2>Scalar Valued Function</h2>
              <h2>Store Procedure</h2>
              <h2>View</h2>
              <h2>Transcation</h2>
              <h5>Trigger</h5>
            </div>
            <div className="glass">
              <img src="./images/mongodb.png" alt="" />

              <h1>Non-SQL:MongoDB</h1>
              <h2>Data Types</h2>
              <span className="mysql-data">String</span>
              <span className="mysql-data">Integer</span>
              <span className="mysql-data">Boolean</span>
              <span className="mysql-data">Array</span>
              <span className="mysql-data">Object</span>
              <h2>CRUD Operation</h2>
              <span className="mysql-data">Insert</span>
              <span className="mysql-data">Update</span>
              <span className="mysql-data">Read</span>
              <span className="mysql-data">Delete</span>

              <h2>Operators</h2>
              <span className="mysql-data">Comparision Operators</span>
              <span className="mysql-data">Logical Operators</span>
              <span className="mysql-data">Array Operators</span>
              <span className="mysql-data">Sort</span>
              <span className="mysql-data">Cursor</span>
              <h2>DataBase Driver</h2>
              <span className="mysql-data">Mongoose</span>
              <span className="mysql-data">MongoDb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
