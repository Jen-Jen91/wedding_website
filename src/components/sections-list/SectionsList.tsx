import Section from "../section/Section";
import Timetable from "../timetable/Timetable";
import "./SectionsList.css";

const SectionsList = () => {
  return (
    <main className="main">
      <Section sectionId="home" linkId="Home" header="Home">
        <p className="main-text">
          Thank you all so much for being part of our special day - we had a
          wonderful time!
        </p>
        <p className="main-text">
          It was fantastic to spend time with everyone who joined us and we
          missed those who couldn't make it, but we can't wait to see you all
          again soon.
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
          After more than 10 years together, we married on 7th September 2022
          and we're so excited to start our next chapter!
        </p>
      </Section>

      <Section sectionId="gifts" linkId="Gifts" header="Gift Registry">
        <p className="main-text">
          Thank you for all the cards, gifts, honeymoon funds, and charity
          donations - you've been so generous and we really appreciate it.
        </p>
        <p className="main-text">
          The below is a link to The Wedding Shop where you can contribute to
          our honeymoon in Mauritius, or donate to the charity Stonewall on our
          behalf.
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
          We'd love to see all your photos and any of the smaller moments we
          might have missed!
        </p>
        <p className="main-text">
          We've set up a shared OneDrive where you can add and view all
          professional and guest photos:
        </p>
        <a
          className="main-text"
          href="https://1drv.ms/u/s!AmZoX3mXXKjhiRiuarm3uKhX8CMg?e=CjM4ik"
        >
          J & T Wedding Photos
        </a>
        <p className="main-text">
          If you would like to add your own, please create a folder in the
          'Guest Photos' section with your name as the title.
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
