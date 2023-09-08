import Navbar from "./components/Navbar";
import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

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
      <section className="padding">
        <PopularProducts />
      </section>

      {/* super quality products */}
      <section className="padding">
        <SuperQuality />
      </section>

      {/* Services */}
      <section className="padding-x py-10">
        <Services />
      </section>

      {/* special offers */}
      <section className="padding">
        <SpecialOffer />
      </section>

      {/* customer reviews */}
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>

      {/* subscribe */}
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      {/* footer */}
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <h3>Footer</h3>
      </section>
    </main>
  );
};

export default App;
