// app/page.tsx
import { Suspense } from "react";
import dynamic from "next/dynamic";

import ScrollUp from "./components/Common/ScrollUp";
import Hero from "./components/Hero";
import LoadingSkeleton from "./components/Common/LoadingSkeleton";

const About = dynamic(() => import("@/app/pages/About/about"), {
  loading: () => <LoadingSkeleton type="section" />,
});

const Services = dynamic(() => import("@/app/pages/Services/page"), {
  loading: () => <LoadingSkeleton type="grid" />,
});

const Contact = dynamic(() => import("@/app/pages/Contact/page"), {
  loading: () => <LoadingSkeleton type="form" />,
});

const Footer = dynamic(() => import("@/app/pages/Footer/page"), {
  loading: () => <LoadingSkeleton type="form" />,
});

export default function Home() {
  return (
    <div className="scroll-smooth">
      <ScrollUp />

      {/* Hero Section - Full viewport height */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* Services Section - Full viewport height */}
      <Suspense fallback={<LoadingSkeleton type="section" />}>
        <section
          id="services"
          className=""
        >
          <Services />
        </section>
      </Suspense>

      {/* About Section - Full viewport height */}
      <Suspense fallback={<LoadingSkeleton type="section" />}>
        <section id="about" className=" ">
          <About />
        </section>
      </Suspense>

      {/* Contact Section - Full viewport height */}
      <Suspense fallback={<LoadingSkeleton type="form" />}>
        <section
          id="contact"
          className="min-h-screen  "
        >
          <Contact />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSkeleton type="form" />}>
        <section className=" ">
          <Footer />
        </section>
      </Suspense>
    </div>
  );
}
