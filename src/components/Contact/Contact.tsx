/** @format */

import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-gray-950  text-white py-20 px-4 md:px-12"
        >
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full justify-between items-start grid grid-cols-1 md:grid-cols-2 px-4 gap-6">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </section>
    );
}
