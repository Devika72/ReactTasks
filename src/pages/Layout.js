import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>  
            <Link to="exercise">Task-1: CharacterCount</Link>
          </li>
          <br></br>
          <li>
            <Link to="/counter">Task-2: Counter App</Link>
          </li>
          <br></br>
          <li>
            <Link to="/elementlist" >Task-3: Search Array</Link>
          </li>
          <br></br>
          <li>
            <Link to="/filterablelist">Task-4: Filter object from array</Link>
          </li>
          <br></br>
          <li>
            <Link to="/randomquote">Task-5: Random Quote Generator</Link>
          </li>
          <br></br>
          <li>
            <Link to="/dropdownform" >Task-6: Dependable Dropdown</Link>
          </li>
          <br></br>
          <li>
            <Link to="ResetPasswordForm" >Task-7: Password Reset Form with validations</Link>
          </li>
          <br></br>
          <li>
            <Link to="todo" >Task-8: To Do List</Link>
          </li>
          <br></br>
          <li>
            <Link to="toggle">Task-9: Dark & Light themes with switch</Link>
          </li>
          <br></br>
          <li>
            <Link to="AddToCart">Task-10: Add To Cart</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;