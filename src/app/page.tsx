/** @format */
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skill/Skills";
import Porjects from "@/components/Porjects/Porjects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    return (
        <>
            {" "}
            <Navbar />
            <div>
                <Hero />
                <About />
                <Skills />
                <Porjects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
