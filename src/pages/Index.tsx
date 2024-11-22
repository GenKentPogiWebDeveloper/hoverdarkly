import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-violet-500 transition-colors duration-300">
      <Navbar />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img 
          src="/lovable-uploads/7ee10f8a-50aa-480c-834b-64e14fc4feba.png"
          alt="Background Logo"
          className="w-[800px]"
        />
      </div>
      
      <main className="container mx-auto px-4 pt-24 flex flex-col items-center justify-center min-h-screen relative">
        <div className="text-center space-y-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/30 p-12 rounded-3xl shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img 
              src="/lovable-uploads/7ee10f8a-50aa-480c-834b-64e14fc4feba.png"
              alt="SkillSwap Logo"
              className="w-16 h-16"
            />
            <h1 className="text-5xl font-bold text-violet-900">SKILLSWAP</h1>
          </div>
          
          <div className="space-y-6">
            <Link to="/find-provider" className="block">
              <Button className="w-full max-w-md py-6 text-xl font-semibold rounded-full bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-black">
                FIND A SERVICE PROVIDER
              </Button>
            </Link>
            
            <Link to="/become-provider" className="block">
              <Button className="w-full max-w-md py-6 text-xl font-semibold rounded-full bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-black">
                BECOME A SERVICE PROVIDER
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;