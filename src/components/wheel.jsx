import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';

const WheelOfFortune = () => {
  const [display, setDisplay] = useState('-');
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);
  const startButtonRef = useRef(null);

  const symbolSegments = {
    1: "$10",
    2: "$5",
    3: "$1000",
    4: "$500",
    5: "$0",
    6: "$250",
    7: "$100",
    8: "Mystery Box",
  };

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setDisplay('-');

    const wheel = wheelRef.current;
    const deg = Math.floor(5000 + Math.random() * 5000);

    wheel.style.transition = 'all 10s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');

    setTimeout(() => {
      wheel.classList.remove('blur');
      setIsSpinning(false);
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      handleWin(actualDeg);
    }, 10000);
  };

  const handleWin = (actualDeg) => {
    const zoneSize = 45;
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    const prize = symbolSegments[winningSymbolNr];
    setDisplay(prize);

    if (prize === "Mystery Box") {
      Swal.fire({
        title: 'Mystery Box!',
        text: 'You won a Mystery Box! Would you like to open it?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#f44336',
        confirmButtonText: 'Open Mystery Box',
        background: '#2C3E50',
        color: '#ECF0F1',
        iconColor: '#F39C12',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-button',
          cancelButton: 'custom-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Congratulations!',
            text: 'You opened the Mystery Box!',
            icon: 'success',
            confirmButtonText: 'Claim Prize',
            background: '#2C3E50',
            color: '#ECF0F1',
            iconColor: '#2ECC71',
            customClass: {
              popup: 'custom-popup',
              title: 'custom-title',
              content: 'custom-content',
              confirmButton: 'custom-button'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              showClaimForm();
            }
          });
        }
      });
    } else if (prize !== "$0") {
      Swal.fire({
        title: 'Congratulations!',
        text: `You won ${prize}!`,
        icon: 'success',
        confirmButtonText: 'Claim Prize',
        background: '#2C3E50',
        color: '#ECF0F1',
        iconColor: '#2ECC71',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          showClaimForm();
        }
      });
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'You landed on $0. Spin again for another chance!',
        icon: 'info',
        confirmButtonText: 'Spin Again',
        background: '#2C3E50',
        color: '#ECF0F1',
        iconColor: '#3498DB',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          spin(); // Automatically spin again if the user clicks the button
        }
      });
    }
  };

  const showClaimForm = () => {
    Swal.fire({
      title: 'Claim Your Prize',
      html:
        '<input id="name" class="swal2-input custom-input" placeholder="Full Name">' +
        '<input id="email" class="swal2-input custom-input" placeholder="Email">' +
        '<input id="phone" class="swal2-input custom-input" placeholder="Phone Number">' +
        '<textarea id="address" class="swal2-textarea custom-textarea" placeholder="Mailing Address"></textarea>',
      focusConfirm: false,
      confirmButtonText: 'Submit',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      background: '#2C3E50',
      color: '#ECF0F1',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        content: 'custom-content',
        confirmButton: 'custom-button',
        cancelButton: 'custom-button'
      },
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          address: document.getElementById('address').value
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Here you would typically send the form data to your server
        console.log(result.value);
        Swal.fire({
          title: 'Thank You!',
          text: 'Your prize claim has been submitted.',
          icon: 'success',
          background: '#2C3E50',
          color: '#ECF0F1',
          iconColor: '#2ECC71',
          customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            content: 'custom-content',
            confirmButton: 'custom-button'
          }
        });
      }
    });
  };

  return (
    <div className="wheel-of-fortune">
      <div id="app">
        <img className="marker" src="marker.png" alt="Marker" />
        <img className="wheel" src="spin.png" alt="Wheel" ref={wheelRef} />
        <img
          className="button"
          src="button.png"
          alt="Spin"
          onClick={spin}
          ref={startButtonRef}
          style={{ pointerEvents: isSpinning ? 'none' : 'auto' }}
        />
      </div>
      <style jsx>{`
        .wheel-of-fortune {
          font-family: Arial, Helvetica, sans-serif;
        }
        #app {
          width: 400px;
          height: 400px;
          margin: 0 auto;
          position: relative;
        }
        .marker {
          position: absolute;
          width: 60px;
          left: 172px;
          top: -20px;
          z-index: 2;
        }
        .wheel {
          width: 100%;
          height: 100%;
        }
        .button {
          display: block;
          width: 250px;
          margin: 40px auto;
          cursor: pointer;
        }
        .button:hover {
          opacity: 0.8;
        }
        .blur {
          animation: blur 10s;
        }
        @keyframes blur {
          0% {
            filter: blur(1.5px);
          }
          80% {
            filter: blur(1.5px);
          }
          100% {
            filter: blur(0px);
          }
        }
      `}</style>
      <style jsx global>{`
        .custom-popup {
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        }
        .custom-title {
          font-size: 28px;
          color: #ECF0F1;
        }
        .custom-content {
          font-size: 18px;
          color: #BDC3C7;
        }
        .custom-button {
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }
        .custom-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .custom-input, .custom-textarea {
          background-color: #34495E !important;
          color: #ECF0F1 !important;
          border: 1px solid #7F8C8D !important;
          border-radius: 5px !important;
          margin-bottom: 10px !important;
        }
        .custom-input::placeholder, .custom-textarea::placeholder {
          color: #95A5A6 !important;
        }
      `}</style>
    </div>
  );
};

export default WheelOfFortune;