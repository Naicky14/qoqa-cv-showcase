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
        <h1 className="text-3xl font-bold text-white">qoqa</h1>
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
      <div className="px-4 pb-20">
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <ProductCard {...qreatorProduct} />
            
          </div>
        </div>
      </div>
    </div>;
};
export default Index;