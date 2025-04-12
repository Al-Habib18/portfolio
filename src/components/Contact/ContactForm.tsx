/** @format */

"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email("Invalid email format."),
    message: z.string().min(1, "Message is required."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<
        Partial<Record<keyof ContactFormData, string>>
    >({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = contactSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> =
                {};
            result.error.errors.forEach((err) => {
                const field = err.path[0] as keyof ContactFormData;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        try {
            setLoading(true);
            // Fake delay to simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // TODO: Replace this with actual email service integration
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-gradient-to-br rounded-2xl from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-16">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Whether you&apos;re looking to collaborate, need a
                        developer for your next big idea, or just want to say
                        hello — I&apos;m always open to meaningful conversations
                        and exciting opportunities.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-[#1e293b] p-6 rounded-2xl shadow-xl flex flex-col gap-6"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="text-sm font-semibold text-gray-300 block mb-1"
                        >
                            Your Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-sm text-gray-300 block mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="text-sm text-gray-300 block mb-1"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.message && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-md disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {submitted && (
                        <p className="text-green-400 text-center">
                            Your message has been sent!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
