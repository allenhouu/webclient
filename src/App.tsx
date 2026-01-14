import {useEffect, useState} from 'react'
import './App.css'


function App() {
    const API_URL = 'https://server-1-095p.onrender.com';
    const[name, setName] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const [users, setUsers] = useState<{name: string, email: string, password: string}[]>([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);


  return (
      <>
          <input placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} type="text"/>
          <input placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} type="text"></input>
          <input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} type="text"></input>
          <button id="post" onClick={() => {
              const data = {name, email, password};
              fetch(API_URL, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data)
              }).then((res) => {
                  if (!res.ok) {
                      throw new Error(`HTTP error! status: ${res.status}`);
                  }
                  else return res.json()
              })
                  .then((data) => {setUsers(data)})
              console.log(data)
          }}>Add
          </button>
          {
              users.map((item, i) =>
                  <div id="result" key={i}>
                      <span>{item.name}</span>
                      <span>{item.email}</span>
                      <span>{item.password}</span>

                      <button onClick={() => {
                          const data = {name, email, password};
                          fetch(API_URL, {
                              method: 'PUT',
                              headers: {
                                  'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(data),
                          }) .then((res) => {
                              if(!res.ok) {
                                  throw new Error(`HTTP error! status: ${res.status}`);
                              }
                          })
                          console.log(data)
                      }}>Update</button>

                      <button onClick={() => {
                          const data = {name, email, password};
                          fetch(API_URL, {
                              method: 'DELETE',
                              headers: {
                                  'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(data),
                          }) .then((res) => {
                              if(!res.ok) {
                                  throw new Error(`HTTP error! status: ${res.status}`);
                              }
                          })
                          console.log(data)
                      }}>Delete</button>
                  </div>
              )

          }



      </>
  )
}

export default App
