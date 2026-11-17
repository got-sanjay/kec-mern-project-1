import React from "react";
import './surya.css';

const Comp = () => {
  return (
    <div >    
        <h1>Demo Component</h1>
        <p>This is a demo component to showcase React functionality.</p>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}

export default Comp;
export const Login = () => {
  return (
    <div>
        <h1>Login Component</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;
            alert(`Username: ${username}, Password: ${password}`);
        }}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />     
         <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
        </form> 
    </div>
  );
}

export const Flex = () => {
  return (
    <div className="flex-container">
      <div className="flex-item1 flex-container"><div className="flex-item2">Item 1</div></div>
      <div className="flex-item2 flex-container"><div className="flex-item3">Item 2</div></div>
      <div className="flex-item3 flex-container"><div className="flex-item1">Item 3</div></div>
    </div>
  );
}

