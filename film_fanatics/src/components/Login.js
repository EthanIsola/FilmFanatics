
import { useEffect, useState } from "react";
function Login({user, setUser}) {
    let currentUsers;
    const [userName, setUserName] = useState("");
    const [myPassword, setPassword] = useState("");
    const [age, setAge] = useState("");
    

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleAge(event) {
        setAge(event.target.value);
    }



    useEffect(()=>{
        fetch("http://localhost:9292/viewers")
        .then(r=>r.json())
        .then(data=> currentUsers = data)
      },[])

      function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: userName,
            password: myPassword,
            age: age
        };
    
        fetch("http://localhost:9292/viewers", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
      })
      setUser(userName)
      }

      return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder = "UserName" onChange={handleUserName} value={userName} />
                <input type="text" placeholder = "Password" onChange={handlePassword} value={myPassword} />
                <input type="text" placeholder = "Age" onChange={handleAge} value={age} />
                <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default Login;