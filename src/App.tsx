import "./App.css";

import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";

// TODO: style and center sections
// TODO: add custom font
// TODO: adapt styles and font sizes for screen width

const App = () => {
  return (
    <>
      <Header />

      <NavBar />

      <Hero />

      <main className="main">
        <Section sectionId="home" linkId="Home" header="Home">
          <p>Welcome to our wedding website!</p>
          <p>
            Please take a look around to find information on the wedding, the
            venue, travel, and more.
          </p>
        </Section>

        <Section sectionId="story" linkId="Story" header="Our Story">
          <p>
            We met at university (UCL) and started dating in our first year in
            2011.
          </p>
          <p>
            After graduating in 2014, Tomek went to Cambridge and Jen worked in
            London before travelling solo in Australia.
          </p>
          <p>
            At the stat of 2017, we moved into a flat togther in south London.
          </p>
          <p>We moved to Edinburgh in mid-2018.</p>
          <p>
            Covid hit and although it caused chaos in all our lives, it brought
            us closer together and Jen proposed to Tomek in June 2020.
          </p>
          <p>
            We bought our own place in 2021 and finally booked our wedding
            venue.
          </p>
          <p>
            After more than 10 years together, we're excited to start a new
            chapter and can't wait to see you all at our wedding.
          </p>
        </Section>

        <Section sectionId="wedding" linkId="Wedding" header="Wedding">
          <p>
            The ceremony will be held at 2pm on 7th September 2022 at Cambo
            Estate, with the reception and party being held at the same venue.
          </p>
          <p>
            All guests are invited to stay at Cambo for 2 nights (6th and 7th),
            with check-in open at 4pm on 6th September.
          </p>
          <p>
            We'll be adding a more detailed timetable of events closer to the
            date.
          </p>
          <p>
            Dress code: Formal wear (e.g. suit, dress, kilt, dressy separates).
            We're aiming to hold most of the ceremony and reception outside
            (weather permitting) so please make sure to bring a warmer jacket /
            coat / shawl to prepare for traditional Scottish weather!
          </p>
          <p>
            Covid: We don't know how this year will go so we'll follow Scottish
            Covid guidelines on the day. Please feel free to wear a mask if you
            wish, and we'll provide hand sanitiser and wipes for all tables /
            games. We ask everyone to respect others' wishes when it comes to
            distancing because even if you are comfortable with the situation,
            others may not be.
          </p>
        </Section>

        <Section
          sectionId="venue"
          linkId="Venue"
          header="Venue and Accommodation"
        >
          <p>
            Country house and estate in Fife, a short drive from St Andrews.
          </p>
          <p>
            Traditional manor house with an eccentric style, a walled garden,
            woodland walks, and a lovely beach.
          </p>
          <p>
            We'll have exclusive use of the estate for the night before and the
            night of the wedding. All guests are welcome to stay one or both
            nights with us on the grounds (there's room for everyone)!
          </p>
          <a href="https://www.camboestate.com/">www.camboestate.com</a>
        </Section>

        <Section sectionId="travel" linkId="Travel" header="Travel">
          <p>15 min drive from St Andrews (35 min on 95 bus)</p>
          <p>1 hr 40 min drive from Edinburgh</p>

          <p>Cambo House, Kingsbarns, St Andrews, Fife KY16 8QD</p>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117112.85899146184!2d-2.770089990214859!3d56.29265202026646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4886f96bf7a8b2ff%3A0xd568ea835d0399fb!2sCambo%20Estate!5e0!3m2!1sen!2suk!4v1640792189669!5m2!1sen!2suk"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </Section>

        <Section sectionId="gifts" linkId="Gifts" header="Gift Registry">
          <p>
            Your company is more than enough, so no gift is required! But for
            those who have asked about gifts, we'll be adding a link here to
            purchase cash gifts that will go towards our honeymoon.
          </p>
        </Section>

        <Section sectionId="photos" linkId="Photos" header="Photos">
          <p>
            After the wedding, we'll upload professional and guest photos here
            for you all to view.
          </p>
        </Section>

        <Section sectionId="contact" linkId="Contact" header="Contact">
          <p>
            If you have any questions, don't hesitate to give us a call. You can
            also contact us via email at{" "}
            <a href="mailto:jenandtomek@outlook.com?subject=Contact via wedding website">
              jenandtomek@outlook.com
            </a>
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default App;
