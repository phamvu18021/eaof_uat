import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";
import { TrackingSession } from "@/components/TrackingSession";

const BackToTop = dynamic(() =>
  import("./components/BackToTop").then((mod) => mod.BackToTop)
);
const Footer = dynamic(() => import("./footer").then((mod) => mod.Footer));
const Header = dynamic(() => import("./header").then((mod) => mod.Header));
const Cta = dynamic(() =>
  import("@/layouts/components/Cta").then((mod) => mod.Cta)
);

interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=header`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 500) {
      setShowCTA(true);
    } else {
      setShowCTA(false);
    }
  }, [scrollPosition]);
  const content = page_content?.acf?.header;
  return (
    <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <TrackingSession />
      <Header header={content} />
      <main>{children}</main>
      <Footer />
      {showCTA && (
        <>
          <BackToTop />
          <Cta cta={content?.cta} />
        </>
      )}
    </div>
  );
};

export default Layout;
