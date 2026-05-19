import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="bg-green-600 text-white p-12 flex flex-col justify-center">

            <h1 className="text-5xl font-extrabold leading-tight">
              Contact
              <br />
              ReTech
            </h1>

            <p className="mt-8 text-xl text-green-100 leading-relaxed">
              For product enquiries, refurbished electronics,
              business deals and support, contact us directly.
            </p>

            <div className="mt-12 space-y-8">

              <div>

                <h2 className="text-2xl font-bold">
                  Phone
                </h2>

                <a
                  href="tel:+918873772587"
                  className="text-xl text-white hover:underline"
                >
                  +91 8873772587
                </a>

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Email
                </h2>

                <a
                  href="mailto:harshkumartiwary12@gmail.com"
                  className="text-xl text-white hover:underline break-all"
                >
                  harshkumartiwary12@gmail.com
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="p-12 flex flex-col justify-center">

            <h2 className="text-4xl font-extrabold text-gray-800">
              Let’s Connect
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Click below to directly chat on WhatsApp for
              product availability, pricing and support.
            </p>

            <a
              href="https://wa.me/918873772587"
              target="_blank"
              className="mt-10 inline-block bg-black hover:bg-gray-800 text-white text-center py-4 rounded-2xl text-xl font-bold transition"
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