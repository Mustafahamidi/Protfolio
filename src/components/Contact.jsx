import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3844d236-ed4b-43fa-9661-fa589f5cf858");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Have any questions or want to work together? Feel free to reach out to me!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={onSubmit} method="POST" className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </div>

            {/* Conditional rendering for result */}
            {result && (
              <div className={`mt-4 text-center p-4 rounded-md ${result === "Form Submitted Successfully" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
