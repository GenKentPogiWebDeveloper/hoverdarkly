import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const BecomeProvider = () => {
  return (
    <div className="min-h-screen bg-[#E5DEFF]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <section className="max-w-4xl mx-auto">
          <div className="bg-[#D6BCFA] py-6 mb-12 rounded-lg">
            <h1 className="text-4xl font-bold text-black text-center">
              BECOME A SERVICE PROVIDER
            </h1>
          </div>

          <div className="bg-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-2xl md:text-3xl text-center mb-8 leading-relaxed">
              <span className="text-[#8B5CF6] font-semibold">"We invite you"</span> to become a part of our community of service providers. If you're interested in joining us, please don't hesitate to reach out. Feel free to contact us whenever you're ready to get started.
            </p>

            <div className="flex justify-center">
              <Link to="/join">
                <Button className="text-xl px-16 py-4 bg-[#D6BCFA] hover:bg-[#8B5CF6] text-black hover:text-white rounded-xl transform hover:scale-105 transition-all duration-300">
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