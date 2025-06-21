
import { Button } from "@/components/ui/button";
import { User, LogIn, LogOut } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // TODO: Implement actual authentication
    setIsLoggedIn(true);
    setUser({ name: "John Donor", email: "john@example.com" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              Toa<span className="text-orange-500">Pamoja</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#campaigns" className="text-gray-700 hover:text-orange-500">Browse Campaigns</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-500">How It Works</a>
            <a href="#create" className="text-gray-700 hover:text-orange-500">Start Campaign</a>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">{user?.name}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleLogin}
                className="bg-orange-500 hover:bg-orange-600 flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
