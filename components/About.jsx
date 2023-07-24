import Image from "next/image";
import BookButton from "./BookButton";

export default function About() {
  return (
    <section className="about-section">
      <div className="left-about-section">
        <h1 className="section-heading">Jazz Africa Adventures</h1>
        <h4>
          <span>Safari </span> for every kind of traveller
        </h4>
        <p>
          Are you coming for a safari in Africa? Jazz Africa Adventures welcomes
          you to beautiful Africa. We are a leading tour company based in Uganda
          with over eight years’ experience running wildlife safaris in East
          Africa. We help design itineraries for activities like mountain
          hiking, trekking safaris, Uganda wildlife safaris, birding trips,
          cultural tours, camping and honeymoon trips. Whether you are seeking a
          budget or luxury experience, we will do our best to make it a
          memorable adventure in Africa. <br /> We love customizing each
          adventure to reflect each person’s needs, desires and dreams. We also
          have global knowledge expertise to assist with short and long tourist
          visas. We want to make your East African travel an unforgettable
          experience.
        </p>

        <Image src="/images/elep.jpg" alt="" width={210} height={220} />
        {/* <BookButton /> */}
      </div>
      <Image
        className="paternImg"
        src="/images/patt.png"
        alt=""
        width={328}
        height={190}
      />
      <div className="right-about-section">
        <Image src="/images/kili.jpg" alt="" fill />
      </div>
    </section>
  );
}
