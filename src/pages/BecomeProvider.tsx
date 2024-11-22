import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const BecomeProvider = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-secondary dark:from-accent-dark dark:to-primary-dark transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-accent-dark dark:text-white text-center">
            BECOME A SERVICE PROVIDER
          </h1>

          <div className="bg-white/90 dark:bg-accent-dark/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
              <span className="text-primary font-semibold">We invite you</span> to become a part of our community of service providers. If you're interested in joining us, please don't hesitate to reach out. Feel free to contact us whenever you're ready to get started.
            </p>

            <div className="flex justify-center">
              <Link to="/join">
                <Button className="text-lg px-12">
                  JOIN HERE
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BecomeProvider;