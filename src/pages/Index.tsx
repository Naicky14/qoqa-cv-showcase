import ProductCard from "@/components/ProductCard";
import CountdownTimer from "@/components/CountdownTimer";
import { Badge } from "@/components/ui/badge";
const Index = () => {
  const categories = [{
    name: "Découverte",
    emoji: "🔍",
    active: true
  }, {
    name: "Brico",
    emoji: "🔨",
    active: false
  }, {
    name: "Expérience",
    emoji: "✨",
    active: false
  }, {
    name: "Sport",
    emoji: "⚽",
    active: false
  }, {
    name: "Cuisine",
    emoji: "🍳",
    active: false
  }, {
    name: "Maison",
    emoji: "🏠",
    active: false
  }, {
    name: "Famille",
    emoji: "👨‍👩‍👧‍👦",
    active: false
  }, {
    name: "Vin",
    emoji: "🍷",
    active: false
  }];
  const qreatorProduct = {
    id: "qreator",
    title: "Qreator",
    subtitle: "XS Ultra Max Pro Super Deluxe Edition™️",
    price: "Prix sur demande",
    discount: "Jusqu'à -99%",
    stockPercent: 100,
    stockText: "Une pièce disponible",
    timeLeft: "3 mois",
    bgColor: "bg-qoqa-pink",
    emoji: "📸"
  };
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header QoQa style - removed since we're going for pure mobile dark style */}
      
      {/* Logo */}
      <div className="text-center py-6">
        <img src="/lovable-uploads/3b28a478-a367-4887-982d-5a7810e41404.png" alt="QOQA" className="h-8 mx-auto" />
      </div>


      {/* Navigation des catégories */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold mb-4 text-white text-center">Notre sélection du jour</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => <Badge key={category.name} variant={category.active ? "default" : "secondary"} className={`whitespace-nowrap px-3 py-2 ${category.active ? "bg-white text-black" : "bg-qoqa-dark-bg text-white border-white/20"}`}>
              {category.emoji} {category.name}
            </Badge>)}
        </div>
      </div>

      {/* Section Découverte */}
      <div className="px-4 pb-24">
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <ProductCard {...qreatorProduct} />
            
          </div>
        </div>
      </div>

      {/* Navigation en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10">
        <div className="flex justify-around items-center py-2">
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-white font-medium">Offres</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <div className="w-4 h-3 border-2 border-white/60"></div>
            </div>
            <span className="text-xs text-white/60">Qblog</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white/60 relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-qoqa-pink rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
            </div>
            <span className="text-xs text-white/60">Compte</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-white/60"></div>
                <div className="w-4 h-0.5 bg-white/60"></div>
                <div className="w-4 h-0.5 bg-white/60"></div>
              </div>
            </div>
            <span className="text-xs text-white/60">Autres</span>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;