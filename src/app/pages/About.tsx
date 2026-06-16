import { Target, Eye, Award, TrendingUp, Shield, Users, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function About() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We build relationships on transparency and honesty, ensuring your trust is never compromised.",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "We strive for excellence in every investment decision and client interaction.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your financial success is our priority. We tailor solutions to your unique needs.",
    },
  ];

  const team = [
    {
      name: "Kalp Shah",
      role: "Founder",
      description:
        "Expert in unlisted shares valuation and pre-IPO market analysis",
    },
    {
      name: "Prasham Sanghvi",
      role: "Founder",
      description: "8 years of experience in equity markets and portfolio management",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: TrendingUp, number: "₹10Cr+", label: "Assets Under Management" },
    { icon: Award, number: "8+", label: "Years of Experience" },
    { icon: Shield, number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 transition-colors overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e3e] to-[#0f1921]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">
              About <span className="text-[#d4af37]">KP Investment</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Building trust through expertise, innovation, and unwavering
              commitment to your financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 transition-colors bg-gray-100 dark:bg-[#0f1921]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 dark:text-white">
                Our <span className="text-[#d4af37]">Story</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                The foundation of KP Investment is built upon the unwavering
                commitment of two visionary partners: Kalp Shah and Prasham
                Sanghvi. We believe that investing is not just a financial
                transaction, but the architecture of a secure future. Our
                journey began with a simple yet powerful mission: "To provide
                every investor with the right direction and uncompromising
                security."
              </p>
              <p>
                Our core philosophy is driven by two strong pillars: Experience
                and Innovation.
              </p>
              <p>
                On one hand, Prasham Sanghvi brings a profound understanding of
                the stock market backed by 8 years of extensive experience.
                Having navigated through various market cycles, his expertise
                allows him to make strategic decisions even in the most complex
                financial climates.
              </p>
              <p>
                Complementing this expertise, Kalp Shah, with his 2 years of
                focused experience, brings a fresh perspective and a modern
                vision to the world of investment. His innovative approach,
                combined with Prasham's seasoned wisdom, creates a perfect
                balance that makes investing simpler and more secure in today's
                rapidly evolving era.
              </p>
              <p>
                At KP Investment, we don't just manage portfolios; we respect
                the hard work behind every rupee you earn. We are dedicated to
                safeguarding your future because, for us, Your Trust Matters. 🛡️
              </p>
              <p className="text-[#d4af37] text-lg italic">
                "When years of seasoned experience meet youthful energy, it
                gives birth to 'Unshakable Trust.'"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 transition-colors bg-white dark:bg-[#1a2e3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-[#0f1921] p-8 rounded-lg border border-[#d4af37]/20">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide every investor with the right direction and
                uncompromising security, making wealth creation accessible and
                trustworthy for all.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-[#0f1921] p-8 rounded-lg border border-[#d4af37]/20">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the most trusted investment partner in India, known for
                our integrity, expertise, and unwavering commitment to client
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 transition-colors bg-gray-100 dark:bg-[#0f1921]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              Our <span className="text-[#d4af37]">Values</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1a2e3e] p-8 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 transition-colors bg-white dark:bg-[#1a2e3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              Meet Our <span className="text-[#d4af37]">Team</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The experts behind KP Investment's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-[#0f1921] p-8 rounded-lg border border-[#d4af37]/20 text-center"
              >
                <div className="w-24 h-24 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-[#d4af37] mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 transition-colors bg-gray-100 dark:bg-[#0f1921]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              Our <span className="text-[#d4af37]">Track Record</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that speak for our commitment and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1a2e3e] p-8 rounded-lg border border-[#d4af37]/20 text-center"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div className="text-3xl md:text-4xl text-[#d4af37] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 transition-colors bg-gradient-to-r from-blue-200 to-gray-200 dark:from-[#1a2e3e] dark:to-[#0f1921]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 dark:text-white">
            Let's Work <span className="text-[#d4af37]">Together</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
            Ready to start your investment journey with us?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowPhoneModal(true)}
              className="bg-[#d4af37] text-gray-900 dark:text-[#0f1921] px-8 py-4 rounded-lg hover:bg-[#c4a030] transition-colors inline-flex items-center gap-2 font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
            <Link
              to="/contact"
              className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-lg hover:bg-[#d4af37] hover:text-gray-900 dark:hover:text-[#0f1921] transition-colors inline-flex items-center gap-2 font-semibold"
            >
              Contact Form
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Phone Selection Modal */}
      {showPhoneModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setShowPhoneModal(false)}
        >
          <div
            className="bg-white dark:bg-[#1a2e3e] p-8 rounded-lg border border-[#d4af37]/20 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl mb-6 text-gray-900 dark:text-white text-center">
              Choose a number to <span className="text-[#d4af37]">call</span>
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+917041037428"
                className="block bg-[#d4af37] text-[#0f1921] px-6 py-4 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold text-center"
                onClick={() => setShowPhoneModal(false)}
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div className="text-lg">+91 70410 37428</div>
                </div>
                <div className="text-sm mt-1 opacity-80">Prasham Sanghvi</div>
              </a>
              <a
                href="tel:+918469797169"
                className="block bg-[#d4af37] text-[#0f1921] px-6 py-4 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold text-center"
                onClick={() => setShowPhoneModal(false)}
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div className="text-lg">+91 84697 97169</div>
                </div>
                <div className="text-sm mt-1 opacity-80">Kalp Shah</div>
              </a>
            </div>
            <button
              onClick={() => setShowPhoneModal(false)}
              className="mt-6 w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
