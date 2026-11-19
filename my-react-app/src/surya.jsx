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
  const object = {
    "store1": {
      "item1": "product-list"
    },
    "store2": {
      "item1": "product-list"
    },
    "store3": {
      "item1": "product-list"
    },
    "store4": {
      "item1": "product-list"
    }
  };      
  return (
    <div className="flex-container">
      {Object.entries(object).map(([store, items]) => (
        <div className="flex-item3 flex-container" key={store}>
          <span className="title-store">{store}</span>
          {Object.entries(items).map(([item, product]) => (
            <div className="flex-item1 inner-text" key={item}>
              <span className="title">{item}</span>
              <span className="subtitle">{product}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


     
