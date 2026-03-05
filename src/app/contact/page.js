"use client";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../footer";
import { Teko } from "next/font/google";
import { useTheme } from "../../context/ThemeContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLocationPin,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineMinus } from "react-icons/ai";
import { ImGithub, ImLinkedin, ImTwitter, ImInstagram } from "react-icons/im";
import "./contact.css";
library.add(faEnvelope, faLocationPin, faShareNodes);

const teko1 = Teko({ subsets: ["latin"], weight: ["400"] });
const teko2 = Teko({ subsets: ["latin"], weight: ["300"] });

const projects = () => {
  const { isDarkmode } = useTheme();

  const onButtonClick = () => {
    const pdfUrl = "./resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const accent = "#2ECC71";
  const textClr = isDarkmode ? "#ffffff" : "#111111";
  const mutedClr = isDarkmode ? "#666666" : "#999999";
  const borderClr = isDarkmode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)";
  const cardBg = isDarkmode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-y-clip">
        <TransitionEffect />
        <Navbar />

        <div className="grid grid-cols-1 hide1:grid-rows-1 md:grid-cols-5 lg:grid-cols-6">
          <div
            className="hide1:row-span-1 md:col-span-1 md:justify-self-end hide1:px-4 md:translate-y-1/4 lg:translate-y-2/4 lg:mb-20"
            style={teko2.style}
          >
            <div className="md:-rotate-90 grid md:grid-cols-2 md:w-[10rem] translate-y-3/4 md:translate-y-0">
              <div className="hide1:hidden">
                <span>
                  <AiOutlineMinus size="50px" color={isDarkmode ? "gray" : "gray"} />
                </span>
              </div>
              <div className="justify-self-start">
                <p className={isDarkmode ? "text-gray text-[1.8rem] w-[10rem]" : "w-[10rem] text-gray text-[1.8rem]"}>
                  Contact
                </p>
              </div>
              <div className="md:hidden hide1:justify-self-start hide1:mb-1">
                <span>
                  <AiOutlineMinus size="50px" color={isDarkmode ? "gray" : "gray"} />
                </span>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-2 hide1:justify-self-start hide1:px-6 hide1:mt-20 self-start md:translate-y-1/4 lg:translate-y-3/4 md:mt-14"
            style={teko2.style}
          >
            <p
              className={isDarkmode ? "text-white text-[2.5rem] mr-4" : "mr-4 text-[2.5rem]"}
              style={teko1.style}
            >
              Let's build something awesome together!
            </p>
            <p className="text-gray text-[1.5rem]">
              Fill out the form to send me a message. If you are a recruiter, you can download my CV below : )
            </p>
            <div className="mt-4 hide1:mb-4 place-content-start">
              <button
                onClick={onButtonClick}
                className={
                  isDarkmode
                    ? "px-4 py-2 lg:px-7 lg:py-2 text-white text-[1.5rem] font-semibold border border-white rounded cursor-pointer hover:bg-white hover:text-black transition-all duration-500"
                    : "lg:px-7 lg:py-2 px-4 py-2 text-black text-[1.5rem] font-semibold border border-dark-bg rounded cursor-pointer hover:bg-dark-bg hover:text-white transition-all duration-500"
                }
              >
                Download CV
              </button>
            </div>
          </div>

          {/* ── Right: Redesigned Contact Form ── */}
          <div
            className="md:col-span-2 lg:col-span-3 pt-10 w-3/4 lg:w-2/4 justify-self-center no-custom-cursor"
            style={teko2.style}
          >
            <div className="cf-card" style={{
              "--accent-clr": accent,
              "--text-clr": textClr,
              "--muted-clr": mutedClr,
              "--border-clr": borderClr,
              "--card-bg": cardBg,
            }}>

              {/* Eyebrow */}
              <div className="cf-eyebrow">
                <span className="cf-eyebrow-dot" />
                Send a message
              </div>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
              >
                {/* Name + Email row */}
                <div className="cf-row">
                  <div>
                    <label className="cf-label">Full name</label>
                    <div className="cf-wrap">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        style={{ fontFamily: teko2.style.fontFamily }}
                      />
                      <span className="cf-line" />
                    </div>
                  </div>
                  <div>
                    <label className="cf-label">Email address</label>
                    <div className="cf-wrap">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@example.com"
                        required
                        style={{ fontFamily: teko2.style.fontFamily }}
                      />
                      <span className="cf-line" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="cf-label">Your message</label>
                  <div className="cf-wrap">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea…"
                      required
                      rows={4}
                      maxLength={500}
                      style={{ fontFamily: teko2.style.fontFamily }}
                    />
                    <span className="cf-line" />
                  </div>
                  <p className="cf-count">{formData.message.length} / 500</p>
                </div>

                {/* Thin divider */}
                <div style={{ height: "1px", background: borderClr, marginTop: "0.5rem", marginBottom: "0.5rem" }} />

                {/* Submit row */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="cf-send"
                  >
                    <span>{status === "sending" ? "Sending…" : "Send Message"}</span>
                    {status !== "sending" ? (
                      <svg className="cf-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      /* Simple spinning dashes */
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                        style={{ opacity: 0.6, animation: "spin 1.2s linear infinite" }}>
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                        <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2"
                          strokeDasharray="8 6" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>

                  {status === "success" && (
                    <span className="cf-status" style={{ color: accent }}>
                      ✓&nbsp;Sent — I'll be in touch
                    </span>
                  )}
                  {status === "error" && (
                    <span className="cf-status" style={{ color: "#e74c3c" }}>
                      ✕&nbsp;Failed — try again
                    </span>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default projects;