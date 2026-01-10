import {useState} from "react";

const User  = ({name}) => {
  const [count, setCount] = UserState(0);

  useEffect(() =>{

  }, []);
  return (
    <div>
      <h1>Count = {count}</h1>
      <h1>Name: {name}</h1>
      <h3>Location :Deharadun</h3>
      <h4>Contact: @umeshdev</h4>
    </div>
  );
};

export default User;
