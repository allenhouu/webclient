import {useEffect, useState} from 'react'
import './App.css'


function App() {
    const API_URL = 'http://localhost:3000';
    const[name, setName] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const [users] = useState<{name: string, email: string, password: string}[]>([]);


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



   /* useEffect(() => {
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
    }, [data]);

    useEffect(() => {
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
    }, [data]);

    */

  return (
      <>
          <input placeholder="Type here" value={name} onChange={e => setName(e.target.value)} type="text"/>
          <input placeholder="Type here" value={email} onChange={e => setEmail(e.target.value)} type="text"></input>
          <input placeholder="Type here" value={password} onChange={e => setPassword(e.target.value)} type="text"></input>
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
              })
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
                      }}></button>

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
                      }}></button>

                  </div>
              )
          }


          <input id="search" placeholder="Type here to search"/>
          {
              <button onClick={() => {
                  const name = (document.getElementById('search') as HTMLInputElement).value;
                  setName(name);
                  const email = (document.getElementById('search') as HTMLInputElement).value;
                  setEmail(email);
                  const password = (document.getElementById('search') as HTMLInputElement).value;
                  setPassword(password);
              }
              }>Enter</button>
          }
      </>
  )
}

export default App
