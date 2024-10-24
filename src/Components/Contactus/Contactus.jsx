import React, { useState } from "react";

function App() {
  const [formStatus, setFormStatus] = useState(""); // to handle form status

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add access key
    formData.append("access_key", "bf44eeca-f8cc-463e-8a29-99d72cf10889");

    // Convert form data to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Email Sent Successfully");
        event.target.reset(); // Reset the form after successful submission
      } else {
        setFormStatus("Failed to send email, please try again.");
      }
    } catch (error) {
      setFormStatus("Error occurred, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-1/2 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNo"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Product(s) Required</label>
            <input
              type="text"
              name="product"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              style={{ minWidth: "100%" }} // making the product input longer
            />
          </div>

          <div>
            <label className="block text-gray-700">Additional Message</label>
            <textarea
              name="message"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Submit Form
            </button>
          </div>
        </form>

        {formStatus && (
          <div className="mt-4 p-4 text-center text-white bg-green-500 rounded-md">
            {formStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
