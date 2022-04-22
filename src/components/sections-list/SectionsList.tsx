import Section from "../section/Section";
import Timetable from "../timetable/Timetable";
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

      <Section sectionId="timetable" linkId="Timetable" header="Timetable">
        <p className="main-text">
          The wedding will take place on{" "}
          <strong>Wednesday 7th September 2022</strong> at Cambo Estate.
        </p>
        <p className="main-text">
          Both the ceremony and reception will be held at the same venue where
          we hope to have lawn games, dancing, and a variety of food and drink.
        </p>
        <p className="main-text-small">
          The below times and order of events may change.
        </p>
        <Timetable />
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
          We'll have exclusive use of the estate throughout the wedding and all
          guests are invited to stay for 2 nights. Most rooms will be in wings
          of the house with shared bathrooms, a living area, and a small kitchen
          where you can prepare any breakfast / lunch / tea / coffee. Some
          guests will be set up in the private cottages separate from the main
          house, situated at the edge of the grounds by the main road. Everyone
          is free to explore the house and make use of any living areas,
          bathrooms, and games rooms.
        </p>
        <br />

        <p className="main-text-group">
          <strong>Tuesday 6th</strong>
        </p>
        <p className="main-text">
          Check-in for guests will open at <strong>4pm</strong>. <br />
          We'll be setting up a casual BBQ in the courtyard so please bring your
          own food and drinks if you'd like to join.
        </p>
        <br />

        <p className="main-text-group">
          <strong>Wednesday 7th</strong>
        </p>
        <p className="main-text">
          Guests should arrive at the Walled Garden at
          <strong> 1:30pm</strong> for the wedding ceremony. <br />
          Some areas of the estate will be closed off in the morning to set up
          for the day. Feel free to use the kitchens to make yourself breakfast
          / lunch or grab some food at the Cambo Gardens Cafe.
        </p>
        <br />

        <p className="main-text-group">
          <strong>Thursday 8th</strong>
        </p>
        <p className="main-text">
          Check-out for all guests will be <strong>10am</strong>.
        </p>
        <br />

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
          Driving or getting a taxi from St Andrews only takes around
          <strong> 15 - 20 min</strong>.
        </p>
        <p className="main-text">
          The drive from Edinburgh takes around <strong>1 hr 40 min</strong>.
          Please take city traffic and weather into account when planning your
          journey because strong winds can cause the Forth bridges to close.
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
          For those who have asked about gifts, we've set up a variety of funds
          on The Wedding Shop where you can contribute to our honeymoon in
          Mauritius, or donate to the charity Stonewall on our behalf.
        </p>
        <a
          className="main-text"
          href="https://www.weddingshop.com/GiftList/jenandtomek"
        >
          www.weddingshop.com/GiftList/jenandtomek
        </a>
      </Section>

      <Section sectionId="photos" linkId="Photos" header="Photos">
        <p className="main-text">
          Please feel free to use your phones and cameras throughout the day -
          we just ask that you don't take photos during the ceremony.
        </p>
        <p className="main-text">
          After the wedding, we'll upload both professional and guest photos to
          a shared drive which you'll be able to access here.
        </p>
      </Section>

      <Section sectionId="faq" linkId="FAQ" header="FAQ">
        <p className="main-text">
          <strong>Dress code</strong>
        </p>
        <p className="main-text-group">
          Formal wear - suit, dress, kilt, dressy separates.
        </p>
        <p className="main-text-group">
          We're hoping to hold most of the ceremony and reception outside
          (weather permitting) so please make sure to bring a warmer jacket /
          coat / shawl to prepare for traditional Scottish weather!
        </p>
        <br />

        <p className="main-text">
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

        <p className="main-text">
          <strong>Catering</strong>
        </p>
        <p className="main-text-group">
          Pizza Geeks will be setting up an outdoor oven to serve us a selection
          of fresh pizzas. You'll be able to help yourselves to 3 main options
          (including vegetarian and vegan).
        </p>
        <a className="main-text-group" href="https://www.pizzageeks.co.uk/">
          www.pizzageeks.co.uk
        </a>
        <br />
        <br />

        <p className="main-text">
          <strong>Parking</strong>
        </p>
        <p className="main-text-group">
          After turning off the main road, follow the long driveway all the way
          down to the end (towards the main house) and follow the signs for
          parking. For the wedding day, we'd ask all cars to be parked in the
          top field so we have more room for outdoor catering and photographs.
        </p>
        <br />

        <p className="main-text">
          <strong>Name Change</strong>
        </p>
        <p className="main-text-group">
          We won't be changing our names after the wedding :)
        </p>
      </Section>

      <Section sectionId="contact" linkId="Contact" header="Contact">
        <p className="main-text">
          If you have any questions, please don't hesitate to give us a call.
        </p>
        <p className="main-text">
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
