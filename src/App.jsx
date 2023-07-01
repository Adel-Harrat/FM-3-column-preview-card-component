import "./App.css";

const data = [
  {
    id: 1,
    icon: "./images/icon-sedans.svg",
    title: "Sedans",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    link: {
      value: "Learn More",
      href: "#",
    },
    backgroundClass: "bg-orange",
    colorClass: "text-orange",
  },
  {
    id: 2,
    icon: "./images/icon-suvs.svg",
    title: "SUVs",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    link: {
      value: "Learn More",
      href: "#",
    },
    backgroundClass: "bg-cyan-soft",
    colorClass: "text-cyan-soft",
  },
  {
    id: 3,
    icon: "./images/icon-luxury.svg",
    title: "Luxury",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    link: {
      value: "Learn More",
      href: "#",
    },
    backgroundClass: "bg-cyan-hard",
    colorClass: "text-cyan-hard",
  },
];

const App = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <main className="rounded-lg overflow-hidden m-5 md:grid md:grid-cols-3 md:max-w-4xl">
        {data.map((column) => (
          <article
            className={`${column.backgroundClass} p-10 md:py-6`}
            key={column.id}
          >
            <img src={column.icon} alt="icon" className="mt-4" />

            <h1 className="text-white-light font-display text-4xl md:text-[2.5rem] py-8 md:mt-4 uppercase">
              {column.title}
            </h1>

            <p className="text-white-transparent font-lexend-deca text-sm md:text-[1rem] leading-6">
              {column.text}
            </p>

            <a
              className={`mt-8 md:mt-20 inline-block bg-white-light ${column.colorClass} font-lexend-deca text-sm px-6 py-3 md:px-8 md:py-3.5 rounded-3xl`}
              href={column.link.href}
            >
              {column.link.value}
            </a>
          </article>
        ))}
      </main>
    </div>
  );
};

export default App;
