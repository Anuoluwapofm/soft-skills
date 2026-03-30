import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE: Text & Direct Email */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              LET'S <span className="text-blue-600">TALK</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-md font-medium leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>

            <div className="inline-flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 w-fit">
              {/* IMAGE REPLACED EMOJI HERE */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                <img
                  src="images/gmail_icon.png"
                  alt="Gmail"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                  Direct Email
                </p>
                <a
                  href="mailto:mercyoyedele208@email.com"
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  mercyoyedele208@email.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none bg-white"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 hover:shadow-slate-200 uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
