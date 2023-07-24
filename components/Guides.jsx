import Image from "next/image";
import guideImage from "../public/thumbnails/guides.webp";
export default function Guides() {
  return (
    <section className="image-container section-guides">
      <div className="image-side">
        <Image
          src={guideImage}
          alt="Jazz Adventure Guides"
          fill
          className="large-image"
        />
      </div>
      <div className="content-side">
        <div className="heading-details">
          <h2 className="section-heading-lg ">Our Guides</h2>
          <p className="tagline">
            What makes agreat safari? A great safari guide!
          </p>
        </div>

        <div className="content">
          <p>
            Who is this person that is going to bring me up close to lions,
            leopards, cheetahs, and every order of the wild animal?{" "}
          </p>
          <p>
            We at wildland have been in the business of bringing folks like you
            into the saafari experience for over 20 years .This is our home and
            we know it well.the landscapes,the people ,most definitly the
            wildlife
          </p>
          <p>
            we expect that your safari guide will be your leader , companion,
            teacher and very importantly your friend{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
