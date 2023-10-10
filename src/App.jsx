import { useState } from "react";
import "./App.css";
import data from "./contacts.json";
import Contacts from "./components/Contacts";


function App() {

  const [contacts, setContacts] = useState(data.slice(0, 5))

  const addRandom = () => {
    
    let remaining = data.filter((el) => !contacts.includes(el))

    if (remaining.length) {

      let randomContact = remaining[Math.floor(Math.random()*remaining.length)]

      let newContacts = [randomContact, ...contacts]

      setContacts(newContacts)

    } else {
      setContacts(contacts)
    }
  }

  const sortByPopularity = () => {

    let sorted = [...contacts].sort((a,b) => b.popularity - a.popularity)

    setContacts(sorted)
  }

  const sortByName = () => {

    let sorted = [...contacts].sort((a,b) => a.name.localeCompare(b.name))

    setContacts(sorted)

  }

  const deleteContact = () => {

    let remaining = contacts.filter((el) => el.id !== id)

    setContacts(remaining)

  }

  return (
    <div className="App">

      <button onClick={addRandom}>Add Random</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>


      <table>

        <thead>

          <tr>
            <th><h3>Picture</h3></th>
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
            <th><h3>Won Oscar</h3></th>
            <th><h3>Won Emmy</h3></th>
            <th><h3>Actions</h3></th>

          </tr>

        </thead>

        <tbody>

          {
            contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} /></td>
                  <td><p>{contact.name}</p></td>
                  <td><p>{contact.popularity}</p></td>
                  <td><p>{contact.wonOscar && <span>YEP</span>}</p></td>
                  <td><p>{contact.wonEmmy && <span>YEP</span>}</p></td>
                  <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>

      </table>

    </div>
  );
}

export default App;