import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/neet/online-coaching-class-11th" element={<Class11Program></Class11Program>}></Route>
          <Route path="/neet/online-coaching-class-12th" element={<Class12Program></Class12Program>}></Route>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div>
    <Link to="/">Allen |</Link>
    <Link to="/neet/online-coaching-class-11th">Class 11 |</Link>
    <Link to="/neet/online-coaching-class-12th">Class 12</Link>
    <Outlet></Outlet>
    Footer | Contact Us
  </div>
}
function Error() {
  return <div>
    Sorry, Page not found!
  </div>
}
function Landing() {
  return <div>
    Welcome to Allen!
  </div>
}
function Class11Program() {
  return <div>
    Neet Coaching for Class 11th 
  </div>
}

function Class12Program() {  
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return <div>
    Neet Coaching for Class 12th 
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}
export default App
