import React from 'react'
import './MainSite.css'

const MainSite = () => {
  return (
    <div class="contentMainSite">
    <div class="MainWrapper">
          <h1>Spis kontaktów</h1>
          <p>Wygodne miejsce do przechowywania danych kontaktowych</p>
          <p>Zaloguj się, aby wyświetlić listę kontaktów</p>

          <div>
            <ul class="list">
              <li>test</li><button type="submit" class="deleteContactbutton">Usuń kontakt</button>
            </ul>
          </div>
          <div class="addContact">
          <input type="text" placeholder='Imie' required />
          <input type="text" placeholder='Nazwisko' required />
          <input type="email" placeholder='E-mail' />
          <input type="telephon" placeholder='Telefon' />
          <button type="submit" class="addContactbutton">Dodaj kontakt</button>
          </div>
      </div>
      </div>  
  )
}

export default MainSite