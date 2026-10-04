import { ArrowRight, ShoppingCart } from "lucide-react";

const features = [
  "Product catalogue",
  "Cart & checkout",
  "Payment gateway",
  "Order management",
  "Admin dashboard",
  "SEO-friendly store",
];

function ECommerce() {
  return (
    <section className="bg-slate-50">
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-5 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase">
            eCommerce Development
          </p>
          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
            Launch a modern online store that sells better.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We build eCommerce websites with product pages, cart, checkout,
            payment gateway, order tracking and admin management.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-slate-950"
          >
            Build Online Store <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-3">
        {features.map((item) => (
          <div key={item} className="rounded-[28px] border bg-white p-7 shadow-sm">
            <ShoppingCart className="mb-5 text-indigo-600" size={34} />
            <h3 className="text-xl font-black text-slate-950">{item}</h3>
            <p className="mt-4 text-slate-500">
              Clean shopping experience with secure and scalable store features.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ECommerce;