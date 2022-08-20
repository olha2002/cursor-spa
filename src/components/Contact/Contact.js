import "./Contact.css";

const Contact = ({ contact }) => {
  const { firstName, lastName, phone, gender, photo } = contact;
  let genderImage = gender;

  if (gender === "male") {
    genderImage = "male.svg";
  } else if (gender === "female") {
    genderImage = "female.svg";
  } else genderImage = "undefined.svg";

  return (
    <div className="contact-initials">
      <img className="person-image" src={require(`../../images/${photo}`)} />
      <div className="initials">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
        <div className="phone">{phone}</div>
      </div>
      <img
        className="gender-icon"
        src={require(`../../icons/${genderImage}`)}
        alt="gender"
      />
    </div>
  );
};

export default Contact;
