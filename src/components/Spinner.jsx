
import React, { useEffect } from 'react';

function Spinner() {
  useEffect(() => {
    const spinner = () => {
      setTimeout(() => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
          spinnerElement.classList.remove('show');
        }
      }, 1); // Delay of 1ms, as in the original code
    };

    spinner(); // Run the spinner removal function when the component mounts
  }, []);
  return (
    <>
      <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div class="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
              <span class="sr-only">Loading...</span>
          </div>
      </div>
    </>
  )
}

export default Spinner
