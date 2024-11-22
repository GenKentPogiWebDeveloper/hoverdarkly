import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-secondary dark:from-accent-dark dark:to-primary-dark transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold mb-8 text-accent-dark dark:text-white">
            SKILLSWAP
          </h1>
          <div className="space-y-4">
            <Link to="/find-provider">
              <Button className="w-full max-w-md mb-4">
                FIND A SERVICE PROVIDER
              </Button>
            </Link>
            <Link to="/become-provider">
              <Button variant="outline" className="w-full max-w-md">
                BECOME A SERVICE PROVIDER
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent-dark dark:text-white">
            SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-lg bg-white/80 dark:bg-accent-dark/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <img src={service.icon} alt={service.name} className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-accent-dark dark:text-white">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const services = [
  { name: "VIDEO EDITOR", icon: "/path-to-video-icon.svg" },
  { name: "FOODS", icon: "/path-to-food-icon.svg" },
  { name: "TUTOR", icon: "/path-to-tutor-icon.svg" },
  { name: "REPAIR", icon: "/path-to-repair-icon.svg" },
  { name: "RENT A BUDDY", icon: "/path-to-buddy-icon.svg" },
  { name: "GRAPHIC DESIGNER", icon: "/path-to-designer-icon.svg" },
  { name: "SELLING", icon: "/path-to-selling-icon.svg" },
  { name: "MORE", icon: "/path-to-more-icon.svg" },
];

export default Index;