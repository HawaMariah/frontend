
import React from 'react';
import Swal from 'sweetalert2';

const Footer = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
  Swal.fire({
    icon: 'success',
    title: 'Subscription Successful!',
    text: 'Thank you for subscribing.',
  }).then(() => {
    window.location.href = "/";
  });
}

  return (
    <footer className="pt-10 bg-[#7E8F90]   text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Subscribe to stay updated</h3>
          <form className="flex flex-col sm:flex-row items-center" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Your Name"
    className="text-black border border-gray-700 p-2 rounded mb-2 sm:mr-2"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="text-black border border-gray-700 p-2 rounded mb-2 sm:mr-2"
  />
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded sm:mb-0"
  >
    Subscribe
  </button>
</form>

        </div>

        <div className="flex justify-center mb-6">
          <a href="#" className="text-xl mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-xl mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-xl mx-2">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="text-center mb-4">
        &copy; {new Date().getFullYear()} NourishNow – Feeding The Future
        </p>
        <p className="text-center">
          Made with ❤️ by Maria
        </p>
       
      </div>
    </footer>
  );
}

export default Footer;
