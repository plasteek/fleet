import Card from "@/components/Card";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import { Navbar, NavbarItem } from "@/components/Navbar";
import Section, { SectionContent } from "@/components/Section";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Fleet | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <NavbarItem to="/" name="Home" />
        <NavbarItem to="/services" name="Services" />
        <NavbarItem to="/about" name="About" />
      </Navbar>
      <main className="h-full min-h-screen w-full ">
        <Section>
          <SectionContent>
            <h1 className="text-center text-6xl">Our Services</h1>
            <Divider />
            <div className="text-3xl">
              Although Fleet is an open-sourced product, we understand that some
              clients are not willing to{" "}
              <span className="font-bold">
                customize, maintain, or further developer Fleet
              </span>
              . Hiring developers and managing a software is a cumbersome and
              tedious experience.
              <br />
              <br />
              Because of that, you may contact at{" "}
              <span className="text-blue-500">services@fleetcorp.io</span> if
              you ever need out services such as:
            </div>

            {/* Grid card i guess */}
            <div className="mt-20 grid grid-cols-2 gap-4">
              <Card
                name="Integration"
                imageUrl="/images/integration.jpg"
                description="We offer our services to help you integrate our core technology into your company culture. It is also possible for us to produce an instructional video for your employee to learn and follow (with some agreements)."
              />
              <Card
                name="Development"
                imageUrl="/images/development.jpg"
                description="Sometimes you need something else. We can dedicate a part of our team to fully help you develop a feature that you specifically need."
              />
              <Card
                name="Deployment"
                imageUrl="/images/deployment.jpg"
                description="Deployment is expensive and tedious. Let us manage all the hustle for you while you sit back and simply use Fleet as your tool."
              />
              <Card
                name="Maintenance"
                imageUrl="/images/maintenance.jpeg"
                description="We fully commit into responding to our community and our foremost clients. Any issues reported to us will be dealt swiftly"
              />
              <Card
                name="World-class Customer Support"
                imageUrl="/images/customer-support.jpg"
                description="If any of your staff encountered issue, you can simply redirect their complaints to us. No other departments required."
              />
            </div>
          </SectionContent>
        </Section>
      </main>
      <Footer />
    </>
  );
}
