import { About, Main, Skills } from "@/components";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-smooth">
      {/* Main content */}
      <Main />
      {/* intro  */}
      <About />
      {/* skills  */}
      <Skills />
    </div>
  );
}
