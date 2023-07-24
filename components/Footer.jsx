import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoYoutube,
  BiCurrentLocation,
} from "react-icons/bi";
import { BsInstagram, BsFillJournalBookmarkFill } from "react-icons/bs";
import {
  MdOutlineLocationOn,
  MdCall,
  MdOutlineMailOutline,
} from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer>
      <div className="footer-card">
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            width={30}
            height={30}
            alt="Jazz Africa Logo"
          />
          <h2>Jazz Africa</h2>
        </Link>
        <div className="social-links">
          <Link href="#" title="Facebook">
            <div className="icon-box">
              <BiLogoFacebook className="social-icon" />
            </div>
          </Link>
          <Link href="#" title="Youtube">
            <div className="icon-box">
              <BiLogoYoutube className="social-icon" />
            </div>
          </Link>
          <Link href="#" title="Instagram">
            <div className="icon-box">
              <BsInstagram className="social-icon" />
            </div>
          </Link>
        </div>
        <p className="text-white">&copy; Jazz Africa Adventures</p>
      </div>
      <div className="footer-card">
        <h2>Company</h2>
        <div className="links">
          <Link href="#">About</Link>
          <Link href="#">Tours</Link>
          <Link href="#">Our Guides</Link>
          <Link href="#">Hotels</Link>
        </div>
      </div>
      <div className="footer-card">
        <h2>Contact Us</h2>
        <div className="links">
          <Link href="#" className="icon-link">
            <BiCurrentLocation className="icon" size={32} />
            Kireka Kampala
          </Link>
          <Link href="#" className="icon-link">
            <BsFillJournalBookmarkFill className="icon" />
            Book a Tour
          </Link>
          <Link href="#" className="icon-link">
            <MdOutlineMailOutline className="icon" />
            jazzafrica@gmail.com
          </Link>
          {/* <Link href="#">Hotels</Link> */}
        </div>
      </div>
      <div className="footer-card">
        <h2>Your story begins here</h2>
        <p className="text-white">
          Contact Us today and see where it takes you
        </p>
        <Link href="#" className="call-link">
          <MdCall /> 0762063160
        </Link>
      </div>
    </footer>
  );
}
