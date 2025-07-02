import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const categories = [
    { name: "Découverte", emoji: "🔍", active: true },
    { name: "Brico", emoji: "🔨", active: false },
    { name: "Expérience", emoji: "✨", active: false },
    { name: "Sport", emoji: "⚽", active: false },
    { name: "Cuisine", emoji: "🍳", active: false },
    { name: "Maison", emoji: "🏠", active: false },
    { name: "Famille", emoji: "👨‍👩‍👧‍👦", active: false },
    { name: "Vin", emoji: "🍷", active: false },
  ];

  const products = [
    {
      id: "qreator",
      title: "Qreator",
      subtitle: "XS Ultra Max Pro Super Deluxe Edition™️",
      price: "Négociable",
      discount: "Jusqu'à -99%",
      stockPercent: 100,
      timeLeft: "3 mois",
      bgColor: "bg-gradient-to-br from-qoqa-pink to-qoqa-orange",
      emoji: "📸"
    },
    {
      id: "designer-pro",
      title: "Designer Pro",
      subtitle: "Solutions créatives sur mesure",
      price: "Sur devis",
      stockPercent: 85,
      timeLeft: "2 jours",
      bgColor: "bg-gradient-to-br from-qoqa-blue to-qoqa-green",
      emoji: "🎨"
    },
    {
      id: "photo-master",
      title: "Photo Master",
      subtitle: "Séances photo professionnelles",
      price: "À partir de 200.–",
      stockPercent: 60,
      timeLeft: "5 jours",
      bgColor: "bg-gradient-to-br from-qoqa-yellow to-qoqa-orange",
      emoji: "📷"
    },
    {
      id: "retouche-expert",
      title: "Retouche Expert",
      subtitle: "Retouche photo et vidéo premium",
      price: "À partir de 50.–",
      stockPercent: 40,
      timeLeft: "1 jour",
      bgColor: "bg-gradient-to-br from-qoqa-green to-qoqa-blue",
      emoji: "🖼️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header promotionnel style QoQa */}
      <div className="bg-gradient-to-r from-qoqa-pink via-qoqa-orange to-qoqa-yellow p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-black mb-2">
            🎉 Portfolio QoQa Style - CV Créatif
          </h1>
          <p className="text-center text-black/80">
            Découvrez mes services créatifs avec des offres exceptionnelles
          </p>
        </div>
      </div>

      {/* Navigation des catégories */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto p-4">
          <h2 className="text-xl font-bold mb-4">Notre sélection du jour</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.active ? "default" : "secondary"}
                className={`whitespace-nowrap px-3 py-2 ${
                  category.active 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category.emoji} {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Section Découverte */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🔍 Découverte
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
