import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#D946EF] transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-12 max-w-2xl mx-auto">
          <img 
            src="/lovable-uploads/2903cce3-ad9d-4e37-ac8b-08af62fe0a1f.png" 
            alt="SkillSwap Logo with Text" 
            className="w-full max-w-md mx-auto mb-16"
          />
          
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