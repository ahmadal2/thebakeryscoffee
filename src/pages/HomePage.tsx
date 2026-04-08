import { motion } from "motion/react";
import { Coffee, Zap, Home, Heart, Leaf, Smile, MapPin } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

// --- Shared UI Components ---

const Button = ({ children, variant = "primary", className = "", href = "#" }: { children: ReactNode, variant?: "primary" | "secondary" | "outline", className?: string, href?: string }) => {
  const baseStyles = "px-6 py-3 rounded-full font-accent text-lg transition-all duration-300 flex items-center justify-center cursor-pointer select-none";
  const variants = {
    primary: "bg-primary text-accent hover:opacity-90 border border-primary",
    secondary: "bg-accent text-primary hover:opacity-90 border border-accent",
    outline: "border border-accent text-accent hover:bg-accent/10"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

const Ticker = () => {
  const items = [
    { text: "Excellent Coffee", icon: <Coffee size={20} /> },
    { text: "Fast Service", icon: <Zap size={20} /> },
    { text: "Cozy Ambiance", icon: <Home size={20} /> },
    { text: "Handcrafted Drinks", icon: <Heart size={20} /> },
    { text: "Local Roasts", icon: <Leaf size={20} /> },
    { text: "Friendly Baristas", icon: <Smile size={20} /> },
  ];

  return (
    <div className="bg-accent border-y border-primary-12 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-6 text-primary font-accent font-bold uppercase tracking-wider">
            <span>{item.text}</span>
            <span className="opacity-50">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-primary pt-48 pb-0 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-accent mb-6 leading-[1.12] uppercase"
        >
          THE ONE THING THAT NEVER LETS ME DOWN: COFFEE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent-70 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-accent"
        >
          Because great coffee is the beginning of something even greater.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link to="/menu" className="px-6 py-3 rounded-full font-accent text-lg transition-all duration-300 flex items-center justify-center cursor-pointer select-none bg-accent text-primary hover:opacity-90 border border-accent">Explore Menu</Link>
          <Button variant="outline" href="#locations">Our Locations</Button>
        </motion.div>

        <div className="relative flex justify-center items-end gap-8 max-w-5xl mx-auto h-[400px] md:h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 200, rotate: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -7, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0, delay: 0.4, duration: 1.2 }}
            className="hidden md:block w-1/3 aspect-[3/4] rounded-3xl overflow-hidden framer-drop-shadow z-10"
          >
            <img src="./0.png" alt="Coffee" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 240, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0, delay: 0.1, duration: 1.2 }}
            className="w-full md:w-2/5 aspect-[3/4] rounded-3xl overflow-hidden framer-drop-shadow z-20"
          >
            <img src="./0.png" alt="Coffee" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200, rotate: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 7, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0, delay: 0.6, duration: 1.2 }}
            className="hidden md:block w-1/3 aspect-[3/4] rounded-3xl overflow-hidden framer-drop-shadow z-10"
          >
            <img src="./0.png" alt="Coffee" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: "Coffee", img: "/1.png" },
    { name: "Cold Drinks", img: "/1.png" },
    { name: "Bakery", img: "/1.png" },
  ];

  return (
    <section className="py-32 px-6 bg-bg" id="menu">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-primary text-center mb-20 leading-tight">Discover Your Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {cats.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-10 group"
            >
              <Link to="/menu" className="w-full aspect-square rounded-full bg-primary overflow-hidden framer-shadow relative">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </Link>
              <h3 className="font-display text-3xl md:text-4xl text-primary">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const About = () => {
  const benefits = [
    "Excellent Coffee",
    "Cozy Atmosphere",
    "Fast Service",
    "Local & Sustainable"
  ];

  return (
    <section className="py-32 px-6 bg-bg overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-16">
            <div className="max-w-lg">
              <h2 className="font-display text-5xl md:text-7xl text-primary mb-8 leading-tight">Good Vibes. Great Coffee.</h2>
              <p className="text-primary-70 text-xl font-accent leading-relaxed">At The Bakery's Coffee, we serve excellent coffee and fresh pastries with love and passion. We create a warm, cozy place where you feel right at home.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary-12 rounded-[32px] overflow-hidden border border-primary-12 shadow-sm">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-bg p-10 flex flex-col items-center text-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-accent shadow-md">
                    <Coffee size={28} />
                  </div>
                  <h3 className="font-display text-2xl text-primary leading-snug">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 h-[640px]">
            <div className="row-span-2 rounded-[32px] overflow-hidden framer-shadow">
              <img src="https://framerusercontent.com/images/Wj7gr7g3B7oONCaiJAc3UuqxH7k.jpg" alt="Barista" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[32px] overflow-hidden framer-shadow">
              <img src="https://framerusercontent.com/images/979kSbT8wyB1UQtDccDksrCQc.jpg" alt="Cafe" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[32px] overflow-hidden framer-shadow">
              <img src="https://framerusercontent.com/images/vGTmFebYlkO9qE0VDnVl89qad4M.jpg" alt="Latte" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Patrick M.", role: "Espresso Lover", text: "The Bakery's Coffee has ruined other cafes for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.", img: "https://framerusercontent.com/images/M1JkuM3cwLfW85P9veFMxRmaU8.jpg" },
    { name: "Jordan T.", role: "Iced Latte Fan", text: "I stop by every morning before work, and it's the best part of my day. The Iced Latte is my favorite, but I've honestly never had a bad drink here.", img: "https://framerusercontent.com/images/PfqwIxfvIyrvSGs5aoSIk469Ec.jpg" },
    { name: "Sofia R.", role: "Coffee Fan", text: "Always a warm, welcoming atmosphere – perfect for a quick coffee or relaxing with a book. The banana bread? Absolutely addictive.", img: "https://framerusercontent.com/images/xkzPxQRZ8YIIdyL6tfb8JVXc7SU.jpg" },
  ];

  return (
    <section className="py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-primary text-center mb-20 leading-tight">What our guests say</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {reviews.map((rev, i) => (
            <div key={i} className="flex flex-col gap-10">
              <div className="bg-primary-03 p-10 rounded-[32px] border border-primary-12 flex flex-col gap-8 shadow-sm">
                <Smile className="text-primary opacity-30" size={40} />
                <p className="font-display text-2xl text-primary leading-relaxed italic">"{rev.text}"</p>
                <p className="text-primary-70 font-accent font-bold uppercase tracking-widest text-sm">{rev.name} – {rev.role}</p>
              </div>
              <div className="aspect-[3/4] rounded-[32px] overflow-hidden framer-shadow">
                <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const locs = [
    {
      city: "Hamburg",
      addr: "Hammer Steindamm 108, 20535 Hamburg",
      hours: [
        "Monday: 8:00–17:00",
        "Tuesday: 8:00–17:00",
        "Wednesday: 8:00–17:00",
        "Thursday: 8:00–17:00",
        "Friday: 8:00–17:00",
        "Saturday: 9:30–17:00",
        "Sunday: Closed"
      ],
      note: "Opening hours may vary",
      link: "https://www.google.com/maps/place/The+Bakerys+Coffee/@53.5531316,10.0059014,17z/data=!3m1!4b1!4m6!3m5!1s0x47b18f34099eae1d:0xd94c211d0ce8488a!8m2!3d53.5531284!4d10.0033265!16s%2Fg%2F1td_4728?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section className="py-32 px-6 bg-primary text-accent overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight">Our Location</h2>
          <p className="text-accent-70 text-xl max-w-xl mx-auto font-accent">Visit us and enjoy your favorite coffee.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="aspect-[4/3] rounded-[32px] overflow-hidden border border-accent/10 shadow-2xl relative">
            <img src="https://framerusercontent.com/images/Hx9suuXYppXOstZ7xEsIygmxdY.svg" alt="Map" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <MapPin size={80} className="text-accent opacity-40 animate-bounce" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {locs.map((loc, i) => (
              <div key={i} className="bg-bg-12 p-10 rounded-[32px] border border-bg-07 flex flex-col gap-8 shadow-sm hover:bg-bg-07 transition-colors">
                <span className="text-accent-70 font-accent font-bold uppercase tracking-widest text-sm">{loc.city}</span>
                <div className="flex flex-col gap-4">
                  <p className="font-display text-2xl leading-tight">{loc.addr}</p>
                  <div className="flex flex-col gap-1 text-accent-70 font-accent text-base">
                    {loc.hours.map((h, idx) => (
                      <p key={idx}>{h}</p>
                    ))}
                    <p className="mt-2 text-xs italic opacity-60">{loc.note}</p>
                  </div>
                </div>
                <Button variant="outline" href={loc.link} className="w-full text-sm py-2.5">Zeige Route</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};







export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Categories />
      <About />
      <Testimonials />
      <Locations />
    </>
  );
}
