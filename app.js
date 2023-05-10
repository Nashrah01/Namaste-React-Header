import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./images/FFlogo.png";
import usericon from "./images/user.png";

const heading = React.createElement("h1",
{ id: "heading" },
 "Namaste React🚀");
console.log(heading);
//JSX

const Title = function(){
    return (
         <h1 className="head" tabIndex="1" >Namaste React from JSX🚀</h1>);
        };


//React Functional Component
const num = 200;
const HeadingComponent = () => {
    return (
    <React.Fragment>
        <div className="container">
            <h1>{heading}</h1>
            {Title()}
            <Title/>
            <h1>Namaste React Functional Component🚀</h1>
        </div>
        <div className="container2">
            <h1>Hey, I am container 2!</h1>
        </div>
    </React.Fragment>
    )
};

const HeadingComponent2 = () => (
    <h1>Namaste React Functional Component🚀</h1>
)

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);

//Coding Assignment Episode 3

const head = React.createElement("div", {classNmae:"title"}, [React.createElement("h1", {}, "H1 Tag!"), React.createElement("h2", {}, "H2 Tag!"), React.createElement("h3", {}, "H3 Tag!") ])

const Divider = ()=>(
    <>
    <hr/>
    </>
)

const HeadJSX =()=>(
    <div className="title">
         {head}
         <Divider/>
        <h1>H1 Tag!</h1>
        <h2>H2 Tag!</h2>
        <h3>H3 Tag!</h3>
    </div>
)
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadJSX/>);

//------------------------------------------------------

const Header = () => (
    <>
       <header className="header"> <div className="left"><img src ={logo}/></div>
            <div className="center">
                <div className="searchBar">
                    <input type="text" className="search" placeholder="Search any restraunt or dishes...."/>
                    <button type="submit" className="subbtn">
                    <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="right"><img src ={usericon} alt="FF logo"/></div>
        </header>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);