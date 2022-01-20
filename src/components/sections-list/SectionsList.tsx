import Section from "../section/Section";
import "./SectionsList.css";

const SectionsList = () => {
  return (
    <main className="main">
      <Section sectionId="home" linkId="Home" header="Home">
        <p className="main-text">Welcome to our wedding website!</p>
        <p className="main-text">
          Please take a look around to find information on the wedding, the
          venue, travel, and more.
        </p>
      </Section>

      <Section sectionId="story" linkId="Story" header="Our Story">
        <p className="main-text">
          We met at university and started dating a few months into our first
          year in 2011.
        </p>
        <p className="main-text">
          After graduating in 2014, we went our own ways (but stayed together)!
          Tomek moved to Cambridge to get a degree in Law, while Jen worked in
          London before taking a year to travel solo in Australia.
        </p>
        <p className="main-text">
          We came back together and back to London at the start of 2017. It was
          exciting to start building our lives together in our first flat and
          re-exploring the city we met in as students.
        </p>
        <p className="main-text">
          We decided to take a leap and move to Edinburgh in mid-2018, and we
          haven't looked back. Jen also took the chance to change careers and
          become a software developer, with Tomek following suit a few years
          later.
        </p>
        <p className="main-text">
          2020 brought chaos and uncertainty for everyone. Although the year had
          a few big hardships, it brought us closer together and Jen realised
          there was no-one else she'd rather to go through it all with. She
          proposed to Tomek in June at our favourite spot on the Water of Leith.
        </p>
        <p className="main-text">
          We bought our very own place in 2021 in Leith, our favourite part of
          Edinburgh, and finally booked our wedding venue.
        </p>
        <p className="main-text">
          After more than 10 years together, we're so excited to start our next
          chapter and can't wait to see you all soon!
        </p>
      </Section>

      <Section sectionId="wedding" linkId="Wedding" header="Wedding">
        <p className="main-text">
          The wedding will take place on{" "}
          <strong>Wednesday 7th September 2022</strong> at Cambo Estate.
        </p>
        <p className="main-text">
          Both the ceremony and reception will be held at the same venue where
          we hope to have lawn games, dancing, and a variety of food and drink.
        </p>
        <p className="main-text">
          All guests are invited to stay at Cambo for 2 nights (6th and 7th) -
          see our{" "}
          <a className="main-text" href="#Venue">
            Venue & Accommodation
          </a>{" "}
          section for further details.
        </p>

        <p className="main-text">
          <em>
            Check back here later for catering info and a more detailed
            timetable of events.
          </em>
        </p>
        <br />

        <p className="main-text-group">
          <strong>Dress code</strong>
        </p>
        <p className="main-text-group">
          Formal wear - e.g. suit, dress, kilt, dressy separates.
        </p>
        <p className="main-text-group">
          We're hoping to hold most of the ceremony and reception outside
          (weather permitting) so please make sure to bring a warmer jacket /
          coat / shawl to prepare for traditional Scottish weather!
        </p>
        <br />
        <p className="main-text-group">
          <strong>Covid</strong>
        </p>
        <p className="main-text-group">
          We'll follow Scottish Covid guidelines on the day.
        </p>
        <p className="main-text-group">
          Feel free to wear a mask if you wish and please be respectful of
          others when it comes to physical distancing.
        </p>
        <br />
      </Section>

      <Section
        sectionId="venue"
        linkId="Venue"
        header="Venue and Accommodation"
      >
        <p className="main-text">
          Cambo is a traditional country house in Fife, a short drive from St
          Andrews. The interior is eccentrically decorated and the grounds hold
          a walled garden, woodland walks, and a lovely beach.
        </p>
        <a className="main-text" href="https://www.camboestate.com/">
          www.camboestate.com
        </a>
        <p className="main-text">
          We'll have exclusive use of the estate throughout the wedding
          (including the night before). All guests are welcome to stay one or
          both nights, and we'd love to spend as much time with you all as
          possible!
        </p>
        <p className="main-text">
          On Tuesday 6th, check-in for guests will open at 4pm. We're hoping to
          hold a BBQ in the courtyard the night before the wedding so please
          bring your own food and any extra drinks you'd like.
        </p>
        <p className="main-text">
          On Thursday 8th, check-out for all guests will be at 10am.
        </p>
        <p className="main-text">
          The rooms are first-come, first-served, so please let us know which
          nights (if any) you'd like to stay. The price is £50 per person per
          night.
        </p>
        <div className="image-container">
          <a className="main-text" href="https://www.camboestate.com/gallery">
            <img src="/images/cambo.png" alt="cambo-estate" width="100%" />
            <p className="image-text">Neil Thomas Douglas</p>
          </a>
        </div>
      </Section>

      <Section sectionId="travel" linkId="Travel" header="Travel">
        <p className="main-text">
          Cambo Estate is on the East coast of Fife, Scotland.
        </p>
        <p className="main-text">
          The best way to get there is driving (or getting a taxi) from St
          Andrews, with the journey only taking 15-20 min.
        </p>
        <p className="main-text">
          The drive from Edinburgh takes around 1 hr 40 min. Please take city
          traffic and weather into account when planning your journey because
          strong winds sometimes cause the Forth bridges to close.
        </p>

        <p className="main-text-group">
          <strong>Address</strong>
        </p>
        <p className="main-text-group">
          Cambo House, Kingsbarns, St Andrews, Fife KY16 8QD
        </p>
        <br />

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117112.85899146184!2d-2.770089990214859!3d56.29265202026646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4886f96bf7a8b2ff%3A0xd568ea835d0399fb!2sCambo%20Estate!5e0!3m2!1sen!2suk!4v1640792189669!5m2!1sen!2suk"
          width="99%"
          height="400px"
          loading="lazy"
        ></iframe>
      </Section>

      <Section sectionId="gifts" linkId="Gifts" header="Gift Registry">
        <p className="main-text">
          We know it's cliché but your company at our wedding is more than
          enough!
        </p>
        <p className="main-text">
          For those who have asked about gifts, we'll be adding a link here soon
          where you can buy cash gifts that will go into various funds
          (including our honeymoon).
        </p>
      </Section>

      <Section sectionId="photos" linkId="Photos" header="Photos">
        <p className="main-text">
          After the wedding, we'll upload both professional and guest photos to
          a shared drive, which you'll all be able to access here.
        </p>
      </Section>

      <Section sectionId="contact" linkId="Contact" header="Contact">
        <p className="main-text">
          If you have any questions, please don't hesitate to give us a call.
          You can also contact us via email at{" "}
          <a
            className="main-text"
            href="mailto:jenandtomek@outlook.com?subject=Contact via wedding website"
          >
            jenandtomek@outlook.com
          </a>
        </p>
      </Section>
    </main>
  );
};

export default SectionsList;
