import React from "react";
import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StaticProfileCardPage from "../pages/StaticProfileCard";
import DynamicProfileCardPage from "../pages/DynamicProfileCard";
import UseStateCounterpage from "../pages/UseStateCounter";
import UseReducerCounterPage from "../pages/UseReducerCounter";
import TodoList from "../pages/TodoList";
import Accordion from 'react-bootstrap/Accordion';
import { Badge, ListGroup } from "react-bootstrap";
import PillExample from "../components/Badge";
import Breadcrumbtask from "../components/Breadcrumb";
import BreadcrumbPage from "../pages/Breadcrumbs";
import ButtonPage from "../pages/ButtonPage";
import RbCardsPage from "../pages/RbCards";
import ShapeExample from "../components/AvatarGroup";
import Avatarpage from "../pages/AvatarPage";
import ListGroupPage from "../pages/ListGroupPage";
import SpinnerPage from "../pages/SpinnerPage";
import ProgressPage from "../pages/ProgressPage";
import PaginationPage from "../pages/PaginationPage";
import FigurePage from "../pages/FigurePage";
import AccordianPage from "../pages/AccordianPage";
import CarouselPage from "../pages/CorouselPage";
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
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Cards">shoppingCards</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Avatar Page">Avatar</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/List Group">List Group</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Spinner">Spinner</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/ProgressBar">Progress</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Pagination">Pagination</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Figure">Figure</NavLink>
              </nav>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Assignment 3  </Accordion.Header>
            <Accordion.Body>
              <nav className="col">
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Accordian">Accordian</NavLink>
                <NavLink className="d-flex col" style={{ color: "black", marginLeft: "20px", textDecoration: "none" }} to="/Carousel">Carousel</NavLink>
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
            <Route path="/Cards" element={<RbCardsPage />} />
            <Route path="/Avatar Page" element={<Avatarpage/>} />
            <Route path="/List Group" element={<ListGroupPage/>} />
            <Route path="/Spinner" element={<SpinnerPage/>} />
            <Route path="/ProgressBar" element={<ProgressPage/>} />
            <Route path="/Pagination" element={<PaginationPage/>} />
            <Route path="/Figure" element={<FigurePage/>} />
            <Route path="/Accordian" element={<AccordianPage/>} />
            <Route path="/Carousel" element={<CarouselPage/>} />

          </Routes></div>
    </BrowserRouter>
  </section>
  );
}
export default Routing;

