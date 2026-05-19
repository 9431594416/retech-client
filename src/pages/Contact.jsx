import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>

      <Navbar />

      <section className="min-h-screen bg-gray-100 px-6 py-20">

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl text-center">

          <h1 className="text-5xl font-extrabold text-green-600 mb-10">
            Contact Us
          </h1>

          <p className="text-2xl text-gray-700 mb-6">
            We would love to hear from you.
          </p>

          {/* PHONE */}

          <div className="mt-10">

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Phone Number
            </h2>

            <a
              href="tel:+918873772587"
              className="text-2xl text-green-600 font-semibold hover:underline"
            >
              +91 8873772587
            </a>

          </div>

          {/* EMAIL */}

          <div className="mt-12">

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Email Address
            </h2>

            <a
              href="mailto:harshkumartiwary12@gmail.com"
              className="text-2xl text-blue-600 font-semibold hover:underline"
            >
              harshkumartiwary12@gmail.com
            </a>

          </div>

          {/* WHATSAPP BUTTON */}

          <div className="mt-14">

            <a
              href="https://wa.me/918873772587"
              target="_blank"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-xl font-bold transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;