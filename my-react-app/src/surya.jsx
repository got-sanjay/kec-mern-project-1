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
      <div className="flex-item3 flex-container"><span className="title-store">store 1</span><div className="flex-item1 inner-text"> <span className=" title">Item 1</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container "><span className="title-store">store 2</span><div className="flex-item1 inner-text"> <span className=" title">Item 2</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container"><span className="title-store">store 3</span><div className="flex-item1 inner-text"> <span className="title">Item 3</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container" id="store-4"><span className="title-store">store 4</span><div className="flex-item1 inner-text"> <span className="title">Item 4</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container"><span className="title-store">store 5</span><div className="flex-item1 inner-text"> <span className="title">Item 5</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container"><span className="title-store">store 6</span><div className="flex-item1 inner-text"> <span className="title">Item 6</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container"><span className="title-store">store 7</span><div className="flex-item1 inner-text"> <span className="title">Item 7</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container"><span className="title-store">store 8</span><div className="flex-item1 inner-text"> <span className="title">Item 8</span> <span className=" subtitle">product-list</span></div></div>
      <div className="flex-item3 flex-container"><span className="title-store">store 9</span><div className="flex-item1 inner-text"> <span className="title">Item 9</span> <span className=" subtitle">product-list</span></div></div>
    </div>
  );
}

