import React, { useRef, useState } from 'react';
import css from './app.css'
import emailjs from 'emailjs-com'
import Popup from './Popup';
import Modal from 'react-modal';


function App() {
  let subtitle;


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const form = useRef();

  const sendEmail = (e) => {

    handleOpenModal()

    e.preventDefault();

    emailjs.sendForm('service_u204p28', 'template_lmoal56', form.current, 'eU5qRO94GMbiJZ5CY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  };
  function refreshPage() {
    window.location.reload(true)
  }

  return (
    <>
      <div>
        <div class="contact-form-wrapper d-flex justify-content-center">
          <form ref={form} onSubmit={sendEmail} class="contact-form">
            <h5 class="title">Contact us</h5>
            <p class="description">Feel free to contact us if you need any assistance, any help or another question.
            </p>
            <div>
              <input type="text" class="form-control rounded border-white mb-3 form-input" name="user_name" id="name" placeholder="Name" required />
            </div>
            <div>
              <input type="email" class="form-control rounded border-white mb-3 form-input" name="user_email" placeholder="Email" required />
            </div>
            <div>
              <textarea name="user_message" id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
            </div>
            <div class="submit-button-wrapper">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>

      <Popup isOpen={isModalOpen} closeModal={handleCloseModal}>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Thankyou for Submitting</h2>        <button id='close-btn' onClick={refreshPage}>Go Back </button>
      </Popup>

    </>
  );
}

export default App;

// App.js

// import React, { useState } from 'react';
// import Popup from './Popup';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Reusable Modal Example</h1>

//       <button onClick={handleOpenModal}>Open Modal</button>
//       <Popup isOpen={isModalOpen} closeModal={handleCloseModal}>
//         <h2>Modal Content</h2>
//         <p>This is the content of the modal.</p>
//         <button onClick={handleCloseModal}>Close Modal</button>
//       </Popup>
//     </div>
//   );
// };

// export default App;

