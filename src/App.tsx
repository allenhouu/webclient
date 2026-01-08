import {useEffect } from 'react'
import './App.css'


function App() {
    useEffect(() => {
        const API_URL = 'http:localhost:3000';

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

        let data;
        let index;
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) .then((res) => {
            if(!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            })

        fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data, index}),
        }).then((res) => {
            if(!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
    }, []);

  return (
    <>

    </>
  )
}



export default App
