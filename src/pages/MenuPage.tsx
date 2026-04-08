import { motion } from "motion/react";
import { useState } from "react";

const menuData = [
  {
    category: "HOT",
    icon: "/1.png",
    items: [
      { name: "Espresso Single", price: "2.4", img: "https://framerusercontent.com/images/zFhN0m2lS8Y18C2v7iX0N3WzL8.png" },
      { name: "Espresso Doppio", price: "3.2", img: "https://framerusercontent.com/images/zFhN0m2lS8Y18C2v7iX0N3WzL8.png" },
      { name: "Macchiato Single", price: "2.8", img: "https://framerusercontent.com/images/NHPa5oGdDcM5WXBIDwyv46qTeE.png" },
      { name: "Macchiato Doppio", price: "3.6", img: "https://framerusercontent.com/images/NHPa5oGdDcM5WXBIDwyv46qTeE.png" },
      { name: "Americano Single", price: "3.3", img: "https://framerusercontent.com/images/BJt0EYVf25XwAJOHHFL8QL17gI.png" },
      { name: "Americano Doppio", price: "3.7", img: "https://framerusercontent.com/images/BJt0EYVf25XwAJOHHFL8QL17gI.png" },
      { name: "Cortado", price: "3.4", img: "https://framerusercontent.com/images/zFhN0m2lS8Y18C2v7iX0N3WzL8.png" },
      { name: "Flat White", price: "3.9", img: "https://framerusercontent.com/images/6nGFCCGoQtlastMfpDLsATx4LI.png" },
      { name: "Cappuccino Single", price: "3.8", img: "https://framerusercontent.com/images/ssv20ctJG9N8S5WPX2MopAoL9DQ.png" },
      { name: "Cappuccino Doppio", price: "4.2", img: "https://framerusercontent.com/images/ssv20ctJG9N8S5WPX2MopAoL9DQ.png" },
      { name: "Latte", price: "4.3", img: "https://framerusercontent.com/images/RtPZ7mqSSNHSmKf1fOMFettvyxk.png" },
      { name: "Vanilla Latte", price: "4.6", img: "https://framerusercontent.com/images/RtPZ7mqSSNHSmKf1fOMFettvyxk.png" },
      { name: "Caramel Latte", price: "4.6", img: "https://framerusercontent.com/images/RtPZ7mqSSNHSmKf1fOMFettvyxk.png" },
      { name: "Espresso Chai", price: "4.9", img: "https://framerusercontent.com/images/zFhN0m2lS8Y18C2v7iX0N3WzL8.png" },
      { name: "Chocolate Mocha Dark/White", price: "4.9", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
    ]
  },
  {
    category: "COLD",
    icon: "/1.png",
    items: [
      { name: "Iced Americano", price: "3.5", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Iced Flat White", price: "4.2", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Iced Latte", price: "4.4", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Iced Caramel Latte", price: "4.9", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Iced Vanilla Latte", price: "4.9", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Espresso Orange", price: "5.9", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Espresso Tonic", price: "5.5", img: "https://framerusercontent.com/images/SQyG9MUqC4l0tcOwMBUqKSPs.png" },
      { name: "Oat Milk Option", price: "0.5", img: "https://framerusercontent.com/images/hukQZa5L79Qfb4xSQb05wAnQJk.png" },
      { name: "Extra Shot", price: "1.0", img: "https://framerusercontent.com/images/zFhN0m2lS8Y18C2v7iX0N3WzL8.png" },
    ]
  },
  {
    category: "NON COFFEE",
    icon: "/1.png",
    items: [
      { name: "Matcha Latte", price: "4.9", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
      { name: "Chai Latte", price: "4.4", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
      { name: "Beetroot Latte", price: "5.2", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
      { name: "Belgian Chocolate", price: "4.4", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
      { name: "Tea Selection", price: "3.5", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
      { name: "Fresh Ginger Tea", price: "4.4", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
      { name: "Sweet & Spicy Tea", price: "4.9", img: "https://framerusercontent.com/images/xfbGh8y8ldXuORIb7KqEPfWw.png" },
    ]
  },
  {
    category: "FRESH JUICES",
    icon: "/1.png",
    items: [
      { name: "Bettyfully", price: "5.9", img: "https://framerusercontent.com/images/aGov0YLph69oSXfLtikW25F3rQU.png" },
      { name: "The Boss", price: "5.9", img: "https://framerusercontent.com/images/aGov0YLph69oSXfLtikW25F3rQU.png" },
      { name: "Orange Detox", price: "5.9", img: "https://framerusercontent.com/images/aGov0YLph69oSXfLtikW25F3rQU.png" },
      { name: "Create Your Own Mix", price: "5.9", img: "https://framerusercontent.com/images/aGov0YLph69oSXfLtikW25F3rQU.png" },
      { name: "Ginger Shot", price: "3.5", img: "https://framerusercontent.com/images/aGov0YLph69oSXfLtikW25F3rQU.png" },
      { name: "Turmeric Shot", price: "3.5", img: "https://framerusercontent.com/images/aGov0YLph69oSXfLtikW25F3rQU.png" },
    ]
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("HOT");
  
  const allItems = menuData.flatMap(cat => cat.items);
  const totalItems = allItems.length;
  
  const filteredItems = menuData.find(cat => cat.category === activeCategory)?.items || [];

  return (
    <div className="min-h-screen bg-[#f5f2e8] pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-40 flex flex-col gap-6">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-4 group transition-all ${activeCategory === cat.category ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden bg-[#1a3c26] border-2 transition-all ${activeCategory === cat.category ? "border-[#1a3c26]" : "border-transparent group-hover:border-[#1a3c26]"}`}>
                  <img src={cat.icon} alt={cat.category} className="w-full h-full object-cover" />
                </div>
                <span className={`font-display text-xl text-[#1a3c26] ${activeCategory === cat.category ? "font-bold" : ""}`}>{cat.category}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-4xl text-[#1a3c26] uppercase tracking-wider">{activeCategory}</h2>
            <span className="text-primary-40 font-accent text-sm uppercase tracking-widest">{filteredItems.length} Selection</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredItems.map((item, i) => (
              <motion.div
                key={`${item.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-6 group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[40px] bg-[#1a3c26] overflow-hidden relative shadow-lg">
                  <img 
                    src={menuData.find(c => c.category === activeCategory)?.icon} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center px-4">
                  <h3 className="font-display text-2xl text-[#1a3c26] leading-tight">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;
