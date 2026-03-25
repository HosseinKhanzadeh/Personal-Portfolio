import { Outlet, useLocation } from "react-router";
import { publicUrl } from "../../lib/publicUrl";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const routeShell: Record<string, { image: string; overlay: string }> = {
  "/": {
    image: publicUrl("assets/images/bg-home.jpg"),
    overlay: "bg-black/40",
  },
  "/about": {
    image: publicUrl("assets/images/bg-about.jpg"),
    overlay: "bg-black/30",
  },
  "/portfolio": {
    image: publicUrl("assets/images/bg-portfolio.jpg"),
    overlay: "bg-black/50",
  },
};

export function Layout() {
  const { pathname } = useLocation();
  const key = pathname.replace(/\/$/, "") || "/";
  const { image, overlay } = routeShell[key] ?? routeShell["/"];

  return (
    <div
      className="flex min-h-screen flex-col bg-[color:var(--portfolio-bg-deep)] bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={`min-h-screen flex flex-col ${overlay}`}>
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
