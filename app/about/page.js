import About from "@/components/About";
import Navbar from "@/components/Navbar";
import React from "react";
import PageWrapper from "../page-wrapper";
export const metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
};
export default function Page() {
  return (
    <div>
      {/* <Navbar /> */}
      <PageWrapper>
        <About />
      </PageWrapper>
    </div>
  );
}
