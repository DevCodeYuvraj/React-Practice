import React from "react";
import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StaticProfileCardPage from "../pages/StaticProfileCard";
import DynamicProfileCardPage from "../pages/DynamicProfileCard";
import UseStateCounterpage from "../pages/UseStateCounter";
import UseReducerCounterPage from "../pages/UseReducerCounter";
import TodoList from "../pages/TodoList";
import Accordion from 'react-bootstrap/Accordion';
import { Badge } from "react-bootstrap";
import PillExample from "../components/Badge";
import Breadcrumbtask from "../components/Breadcrumb";
import BreadcrumbPage from "../pages/Breadcrumbs";
import ButtonPage from "../pages/ButtonPage";
function Routing() {
  return (<section className="container d-flex col " >
    <BrowserRouter>
    <div className="links w-25">
    <Accordion  defaultActiveKey="0" >
        <div className="container d-flex wrap md-3 row ">
          <Accordion.Item eventKey="0"  >
            <Accordion.Header className="d-flex md-3 col">Assigment 1</Accordion.Header>
            <Accordion.Body>
              <nav className="col">
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px",textDecoration: "none" }} to="/">Home</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/StaticProfile">Static Profile</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/DynamicProfile">Dynamic Profile</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/UseStateCounter">UseState Counter</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/UseReducerCounter">UseReducer Counter</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Todolist">Todo list</NavLink>
              </nav>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Assignment 2</Accordion.Header>
            <Accordion.Body>
              <nav className="col">
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px",textDecoration: "none" }} to="/PillExample">Badge</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Breadcrumbs">Breadcrumb</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Buttons">Button</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/UseStateCounter">UseState Counter</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/UseReducerCounter">UseReducer Counter</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Todolist">Todo list</NavLink>
              </nav>
            </Accordion.Body>
          </Accordion.Item>
        </div>
    </Accordion></div>
    <div className="pages conatiner d-flex col justify-content-md-center">
      <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/StaticProfile" element={<StaticProfileCardPage />} />
            <Route path="/DynamicProfile" element={<DynamicProfileCardPage />} />
            <Route path="/PillExample" element={<PillExample/>} />
            <Route path="/Breadcrumbs" element={<BreadcrumbPage />} />
            <Route path="/buttons" element={<ButtonPage />} />
            <Route path="/UseStateCounter" element={<UseStateCounterpage />} />
            <Route path="/UseReducerCounter" element={<UseReducerCounterPage />} />
            <Route path="/TodoList" element={<TodoList />} />
          </Routes></div>
    </BrowserRouter>
  </section>
  );
}
export default Routing;

