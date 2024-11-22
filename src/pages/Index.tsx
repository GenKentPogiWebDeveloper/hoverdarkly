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
      </main>
    </div>
  );
};

export default Index;