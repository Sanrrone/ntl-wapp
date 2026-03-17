"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContactProvider = "web3forms" | "cloudflare" | "google";

const CONTACT_PROVIDER: ContactProvider =
  (process.env.NEXT_PUBLIC_CONTACT_PROVIDER as ContactProvider) || "google";

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbxF95x44y-P1d3VoVNW2kAcYUgVFgGgJMEWrhbOF3jg_cL8yxURVZcldDiY_6nYLV5NJw/exec";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitWithGoogleScript = async () => {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        company: formData.company,
      }),
    });

    const text = await response.text();

    let result: { success?: boolean; message?: string } = {};
    try {
      result = JSON.parse(text);
    } catch {
      result = { success: false, message: text || "Unexpected server response" };
    }

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Google Apps Script submission failed");
    }

    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (CONTACT_PROVIDER === "google") {
        await submitWithGoogleScript();
      } else {
        throw new Error("Unsupported contact provider");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#F8F7F5] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="text-[0.75rem] font-bold tracking-widest uppercase text-[#B98A45]">
              Get in touch
            </div>
            <h1 className="text-4xl md:text-[3.5rem] font-bold text-[#111C18] leading-tight tracking-tight">
              Let&apos;s build the future of skin health.
            </h1>
            <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-md mt-2">
              Whether you are an investor, a potential scientific partner, or just
              interested in learning more about our gut-skin axis platform, we
              would love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4 border-t border-gray-200 pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-[#B98A45] font-semibold text-sm uppercase tracking-wider">
                Email Us
              </span>
              <a
                href="mailto:info@nordictiempolento.com"
                className="text-[#111C18] text-xl font-medium hover:text-[#8B0000] transition-colors"
              >
                info@nordictiempolento.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[#B98A45] font-semibold text-sm uppercase tracking-wider">
                Headquarters
              </span>
              <span className="text-[#111C18] text-xl font-medium leading-relaxed">
                Keskuskatu 16 A 49
                <br />
                11100 RIIHIMÄKI
                <br />
                Finland
              </span>
            </div>

            <div className="w-full h-48 md:h-64 mt-2 rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-200">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Keskuskatu%2016%20A%2049%2C%2011100%20Riihim%C3%A4ki%2C%20Finland&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Nordic Tiempo Lento Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[500px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-6"
                >
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[#111C18]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[#111C18]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-[#111C18]">
                      Topic of Inquiry
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all appearance-none"
                    >
                      <option value="" disabled>
                        Select a topic...
                      </option>
                      <option value="Investment">Investment & Fundraising</option>
                      <option value="Partnership">Scientific / Clinical Partnership</option>
                      <option value="Press">Press & Media</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-[#111C18]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white px-8 py-4 rounded-xl font-semibold text-sm tracking-wide shadow-md mt-2 transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#111C18] hover:bg-[#8B0000] hover:-translate-y-0.5"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center justify-center text-center gap-4 py-12"
                >
                  <h3 className="text-2xl font-bold text-[#111C18]">Message Sent!</h3>
                  <p className="text-[#5A5A5A] max-w-sm">
                    Thank you for reaching out to Nordic Tiempo Lento. We have
                    received your inquiry and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#8B0000] font-semibold mt-4 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
