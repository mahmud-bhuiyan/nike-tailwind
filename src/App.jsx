import { Navbar } from "./components";
import { Hero } from "./sections";

const App = () => {
  return (
    <main className="relative">
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      {/* popular products */}
      <section className="padding">popular</section>
      {/* super quality products */}
      <section className="padding">super quality</section>
      {/* Services */}
      <section className="padding-x py-10">Services</section>
      {/* offer */}
      <section className="padding">popular</section>
      {/* reviews */}
      <section className="padding bg-pale-blue">reviews</section>
      {/* subscribe */}
      <section className="padding-x sm:py-32 py-16 w-full">subscribe</section>
      {/* footer */}
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <h3>Footer</h3>
      </section>
    </main>
  );
};

export default App;
