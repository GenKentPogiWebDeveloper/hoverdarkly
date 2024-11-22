import { Navbar } from "@/components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-secondary dark:from-accent-dark dark:to-primary-dark transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent-dark dark:text-white">
            SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-lg bg-white/80 dark:bg-accent-dark/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-center">
                  <img 
                    src={service.icon} 
                    alt={service.name} 
                    className="w-16 h-16 mx-auto mb-4 dark:invert transition-all duration-300" 
                  />
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
  { 
    name: "VIDEO EDITOR", 
    icon: "/lovable-uploads/34ba42ef-0f40-4fea-b039-2c11ce022747.png" 
  },
  { 
    name: "FOODS", 
    icon: "/lovable-uploads/b7ccbb48-51ea-44d5-a78c-9eaf86da8da1.png" 
  },
  { 
    name: "TUTOR", 
    icon: "/lovable-uploads/b6833ad0-f52b-4ecd-8ea1-31bc44060d61.png" 
  },
  { 
    name: "REPAIR", 
    icon: "/lovable-uploads/103ad56a-d31d-4fcc-9224-3dfccd9fdae8.png" 
  },
  { 
    name: "RENT A BUDDY", 
    icon: "/lovable-uploads/aeddddeb-0fa4-4509-a024-56fc1856faa3.png" 
  },
  { 
    name: "GRAPHIC DESIGNER", 
    icon: "/lovable-uploads/11092475-0915-45a7-8f9a-a1ff2b3ca425.png" 
  },
  { 
    name: "SELLING", 
    icon: "/lovable-uploads/eb207933-9ad0-43b1-b29d-4339827bee57.png" 
  },
  { 
    name: "MORE", 
    icon: "/placeholder.svg" 
  },
];

export default Services;