import React, { useState } from "react";
import { contacts } from "../../constants/users";
import Contact from "../Contact/Contact";
import { v4 } from "uuid";
import "./ContactsPage.css";
import MaleIcon from "../../icons/MaleIcon";
import FemaleIcon from "../../icons/FemaleIcon";
import UndefinedIcon from "../../icons/UndefinedIcon";

export const ContactsPage = () => {
  const [list, setList] = useState(contacts);
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [undefinedChecked, setUndefinedChecked] = useState(false);
  const [value, setValue] = useState("");

  const filteredContactsFunc = () => filteredContacts;

  const handleMaleChangeCheck = () => {
    setMaleChecked(!maleChecked);
    filteredContactsFunc();
  };

  const handleFemaleChangeCheck = () => {
    setFemaleChecked(!femaleChecked);
    filteredContactsFunc();
  };

  const handleUndefinedChangeCheck = () => {
    setUndefinedChecked(!undefinedChecked);
    filteredContactsFunc();
  };

  const filteredContacts = list
    .filter((contact) => {
      contact = Object.values(contact).join();
      return contact.toLowerCase().includes(value.toLowerCase());
    })
    .filter((contact) => {
      if (maleChecked && femaleChecked) {
        return contact.gender;
      } else if (maleChecked) {
        return contact.gender === "male";
      } else if (femaleChecked) {
        return contact.gender === "female";
      } else if (undefinedChecked) {
        return contact.gender === "undefined";
      } else {
        return contact;
      }
    });

  return (
    <div className="contacts-container">
      <h2 className="contacts-menu">Contacts</h2>
      <form className="form">
        <input
          type="search"
          id="search-field"
          name="search-field"
          placeholder="Search..."
          onChange={(element) => setValue(element.target.value)}
        />
        <label className="checkbox male-checkbox">
          <MaleIcon
            width={35}
            heigth={35}
            status={maleChecked ? "active" : null}
          />
          <input
            type="checkbox"
            className="checkbox-input"
            checked={maleChecked}
            onChange={handleMaleChangeCheck}
          />
        </label>
        <label className="checkbox female-checkbox">
          <FemaleIcon
            width={35}
            heigth={35}
            status={femaleChecked ? "active" : null}
          />
          <input
            type="checkbox"
            className="checkbox-input"
            checked={femaleChecked}
            onChange={handleFemaleChangeCheck}
          />
        </label>
        <label className="checkbox undefined-checkbox">
          <UndefinedIcon
            width={35}
            heigth={35}
            status={undefinedChecked ? "active" : null}
          />
          <input
            type="checkbox"
            className="checkbox-input"
            checked={undefinedChecked}
            onChange={handleUndefinedChangeCheck}
          />
        </label>
      </form>

      {filteredContacts.map((contact) => (
        <Contact contact={contact} key={v4()} />
      ))}
    </div>
  );
};
