import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-violet-100 to-violet-500 dark:from-violet-900 dark:to-violet-950 transition-colors duration-300">
      <Navbar />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
        <img 
          src="/lovable-uploads/7ee10f8a-50aa-480c-834b-64e14fc4feba.png"
          alt="Background Logo"
          className="w-[800px]"
        />
      </div>
      
      <main className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center space-y-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 p-12 rounded-3xl shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img 
              src="/lovable-uploads/7ee10f8a-50aa-480c-834b-64e14fc4feba.png"
              alt="SkillSwap Logo"
              className="w-16 h-16"
            />
            <h1 className="text-5xl font-bold text-violet-900 dark:text-violet-300 tracking-[0.2em] drop-shadow-[0_0_35px_rgba(139,92,246,0.5)] dark:drop-shadow-[0_0_45px_rgba(139,92,246,0.8)] transition-all duration-300">
              SKILLSWAP
            </h1>
          </div>
          
          <div className="space-y-6">
            <Link to="/find-provider" className="block">
              <Button className="w-full max-w-md py-6 text-xl font-bold rounded-full bg-gradient-to-r from-white to-violet-300 dark:from-violet-800 dark:to-violet-600 hover:from-violet-100 hover:to-violet-400 dark:hover:from-violet-700 dark:hover:to-violet-500 text-violet-900 dark:text-violet-100 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] dark:shadow-[0_0_25px_rgba(139,92,246,0.4)] dark:hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]">
                FIND A SERVICE PROVIDER
              </Button>
            </Link>
            
            <Link to="/become-provider" className="block">
              <Button className="w-full max-w-md py-6 text-xl font-bold rounded-full bg-gradient-to-r from-white to-violet-300 dark:from-violet-800 dark:to-violet-600 hover:from-violet-100 hover:to-violet-400 dark:hover:from-violet-700 dark:hover:to-violet-500 text-violet-900 dark:text-violet-100 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] dark:shadow-[0_0_25px_rgba(139,92,246,0.4)] dark:hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]">
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