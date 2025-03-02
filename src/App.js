import { Button } from "@/components/ui/button";

export default function BulkEmailLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Boost Your Business with Bulk Email Marketing</h1>
        <p className="text-lg text-gray-700 mt-4">High-Deliverability Email Campaigns to Reach Your Target Audience.</p>
        <Button className="mt-6 px-6 py-3 text-lg">Get a Free Trial</Button>
      </section>

      {/* Benefits Section */}
      <section className="mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">✔ High Open Rates</h2>
          <p className="text-gray-600">Optimized emails to maximize engagement.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">✔ Affordable Pricing</h2>
          <p className="text-gray-600">Flexible plans starting from just 500 AED.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">✔ GDPR & CAN-SPAM Compliant</h2>
          <p className="text-gray-600">We follow the best email practices.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">✔ Advanced Email Automation</h2>
          <p className="text-gray-600">Personalized campaigns with AI-powered automation.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold">Our Pricing Plans</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md w-64 text-center">
            <h3 className="text-xl font-semibold">Starter Plan</h3>
            <p className="text-gray-700 mt-2">10,000 Emails</p>
            <p className="text-gray-900 font-bold mt-2">500 AED</p>
            <Button className="mt-4">Get Started</Button>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md w-64 text-center">
            <h3 className="text-xl font-semibold">Growth Plan</h3>
            <p className="text-gray-700 mt-2">50,000 Emails</p>
            <p className="text-gray-900 font-bold mt-2">1,500 AED</p>
            <Button className="mt-4">Get Started</Button>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md w-64 text-center">
            <h3 className="text-xl font-semibold">Pro Plan</h3>
            <p className="text-gray-700 mt-2">100,000 Emails</p>
            <p className="text-gray-900 font-bold mt-2">2,500 AED</p>
            <Button className="mt-4">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-12 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <form className="mt-6 bg-white p-6 rounded-2xl shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-md border mb-4"></textarea>
          <Button className="w-full">Submit</Button>
        </form>
      </section>
    </div>
  );
}
