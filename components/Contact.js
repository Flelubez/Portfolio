import styles from "../styles/contact.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdContactMail } from "react-icons/md";
import { FormattedMessage } from "react-intl";
import { Slide, Zoom, Flip, Bounce, Rotate, Fade, Roll } from "react-reveal";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

const handleKeyDown = (event, targetId) => {
  console.log('click')
  if (event.keyCode === 32) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.click();
    }
  }
};

const sendEmail = async (e) => {
  e.preventDefault();

  if (!isEmailValid(email)) {
     toast.error(
       <FormattedMessage
         id="mailValid"
         defaultMessage="Please enter a valid email 🙁"
       />
     );
    return;
  }

  if (!name) {
    toast.error(
      <FormattedMessage id="nameValid" defaultMessage="Please, add a name 🙁" />
    );
    return;
  }

    if (!message) {
      toast.error(
        <FormattedMessage
          id="messageValid"
          defaultMessage="Please, add a message 😒"
        />
      );
      return;
    }

  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error("Error sending Email");
    }

    console.log("Mail sent");
    toast.success(
      <FormattedMessage
        id="mailSuccess"
        defaultMessage="Email sent with success ! 😃"
      />
    );
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);
  }
};


  

return (
  <div>
    <div className={styles.title}>
      <div className={styles.titleContent}>
        <Roll down cascade duration={5000}>
          <span className={styles.contactLetter}>C</span>
          <span className={styles.contactLetter}>o</span>
          <span className={styles.contactLetter}>n</span>
          <span className={styles.contactLetter}>t</span>
          <span className={styles.contactLetter}>a</span>
          <span className={styles.contactLetter}>c</span>
          <span className={styles.contactLetter}>t</span>
        </Roll>
      </div>
    </div>
    <div className={styles.container}>
      <ToastContainer
        position="bottom-center" // top-right, top-center, top-left, bottom-right, bottom-center, bottom-left
        toastClassName={`${styles.Toast}`}
      />
      <div className={styles.form}>
        <Rotate top right duration={5000}>
          <div>
            <label htmlFor="name" className={styles.label}>
              <FormattedMessage id="name" defaultMessage="Your name :" />
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              <FormattedMessage id="mail" defaultMessage="Your mail :" />
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="message" className={styles.label}>
              Message :
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.button} onClick={sendEmail}>
            <Roll right duration={5000}>
              <FormattedMessage id="submit" defaultMessage="Submit" />
            </Roll>
          </button>
        </Rotate>
      </div>

      <div className={styles.contactInfo}>
        <div>
          <a
            id="linkedin-link"
            onKeyDown={(event) => handleKeyDown(event, "linkedin-link")}
            href="https://www.linkedin.com/in/florent-lelubez-b3b80814b"
            target="_blank"
            tabIndex="0"
            className={styles.noStyleLink}
          >
            <div className={styles.flex}>
              <Rotate top right duration={5000}>
                <div>
                  <img
                    src="/linkedin.png" // ou l'URL de votre image
                    alt="LinkedIn logo"
                    className={styles.linkedinIcon}
                  />
                </div>
                <div className={styles.linkedinDescription}>
                  Florent Lelubez
                </div>
              </Rotate>
            </div>
          </a>
        </div>
        <div>
          <a
            id="mail-link"
            onKeyDown={(event) => handleKeyDown(event, "mail-link")}
            target="_blank"
            href="mailto:Florent.lelubez@gmail.com"
            className={styles.noStyleLink}
          >
            <div className={styles.flex}>
              <Rotate top right duration={5000}>
                <div>
                  <img
                    src="/gmail.png" // ou l'URL de votre image
                    alt="Gmail logo"
                    className={styles.gmailIcon}
                  />
                </div>
                <div className={styles.linkedinDescription}>
                  Florent.lelubez@gmail.com
                </div>
              </Rotate>
            </div>
          </a>
        </div>
        <div className={styles.flex}>
          <Rotate top right duration={5000}>
            <img
              src="/phone.png" // ou l'URL de votre image
              alt="Phone logo"
              className={styles.phoneIcon}
            />
            <div>+33676830895</div>
          </Rotate>
        </div>
        <a
          id="resume-link"
          onKeyDown={(event) => handleKeyDown(event, "resume-link")}
          target="_blank"
          href="CVflorentLELUBEZ.pdf"
          className={styles.noStyleLink}
        >
          <div className={styles.flex}>
            <Rotate top right duration={5000}>
              <div>
                <MdContactMail className={styles.resumeIcon} />
              </div>
              <div>
                {" "}
                <FormattedMessage id="resume" defaultMessage="Resume" />
              </div>
            </Rotate>
          </div>
        </a>
      </div>
    </div>
  </div>
);

}

export default Contact;
