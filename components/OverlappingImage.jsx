import Image from "next/image";
import largeImage from "../public/thumbnails/african-elephants-together-nature.webp";
import smallImage from "../public/thumbnails/guides.webp";
export default function OverlappingImage() {
  return (
    <section className="overlapping-container">
      <div className="left">
        <div className="heading-details">
          <h2 className="section-heading-lg ">Jazz Africa Adventures</h2>
          <p className="tagline">Safari for every kind of traveller</p>
        </div>
        <div className="content">
          <p>
            Are you coming for a safari in Africa? Jazz Africa Adventures
            welcomes you to beautiful Africa. We are a leading tour company
            based in Uganda with over eight years’ experience running wildlife
            safaris in East Africa. We help design itineraries for activities
            like mountain hiking, trekking safaris, Uganda wildlife safaris,
            birding trips, cultural tours, camping and honeymoon trips. Whether
            you are seeking a budget or luxury experience, we will do our best
            to make it a memorable adventure in Africa.
          </p>
          <p>
            We love customizing each adventure to reflect each person’s needs,
            desires and dreams. We also have global knowledge expertise to
            assist with short and long tourist visas. We want to make your East
            African travel an unforgettable experience.
          </p>
        </div>
      </div>
      <div className="right">
        <Image
          className="large-image"
          src={largeImage}
          alt="large image"
          fill
        />
        <Image className="small-image" src={smallImage} alt="some text" fill />
      </div>
    </section>
  );
}
