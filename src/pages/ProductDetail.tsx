import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Package, Diamond, Gift, MessageCircle, Heart } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import QoqaButton from "@/components/QoqaButton";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // For now, we only handle the Qreator product
  if (id !== "qreator") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <ProgressBar stockPercent={0} timeLeft="00:00:00" />
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Produit non trouvé</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar QoQa Style */}
      <ProgressBar stockPercent={17} timeLeft="01:15:20" />

      {/* Product Image */}
      <div className="bg-qoqa-pink p-8">
        <div className="text-center">
          <div className="text-8xl mb-4">📸</div>
        </div>
      </div>

      {/* Main Button */}
      <div className="p-4">
        <QoqaButton>
          Yeah j'en veux un
        </QoqaButton>
      </div>
      {/* Product Title and Price */}
      <div className="px-4 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Qreator XS Ultra Max Pro Super Deluxe Edition™️
        </h1>
        <div className="text-4xl font-bold text-white mb-4">
          Négociable
        </div>
        
        <div className="flex gap-2 mb-4">
          <Badge className="bg-qoqa-dark-bg text-white border-white/20 flex items-center gap-1">
            <Diamond className="w-3 h-3" />
            Exclusivité suisse
          </Badge>
          <Badge className="bg-qoqa-dark-bg text-white border-white/20 flex items-center gap-1">
            <Gift className="w-3 h-3" />
            Livraison avant Noël
          </Badge>
        </div>
        
        <div className="space-y-2 text-white/80 text-sm mb-6">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Expédié au plus tard le 13 décembre 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Livraison incluse</span>
          </div>
        </div>
        
        {/* Comments Section */}
        <Card className="bg-qoqa-dark-bg border-white/10 mb-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">Q</span>
              </div>
              <div>
                <span className="text-white font-semibold">comment50</span>
                <span className="text-white/60 text-sm ml-2">il y a 45 minutes</span>
              </div>
            </div>
            <p className="text-white">Rallonge olive 🫒 please 🥺</p>
          </CardContent>
        </Card>
        
        <button className="w-full bg-white/10 rounded-full py-4 mb-4 flex items-center justify-center gap-2 text-white">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">31 commentaires</span>
        </button>
        
        <button className="w-full bg-qoqa-dark-bg rounded-full py-4 mb-6 flex items-center justify-center gap-2 text-white">
          <Heart className="w-5 h-5" />
          <span className="font-semibold">8 Likes</span>
        </button>
      </div>

      {/* Description Section */}
      <div className="px-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          Tes deniers bien protégées!
        </h2>
        
        <div className="text-white/90 leading-relaxed space-y-4">
          <p>
            ✨ <strong>Attention, mesdames et messieurs :</strong> voici le Qreator, le produit ultime pour sublimer vos projets visuels. 
            Version XS Ultra Max Pro Super Deluxe Edition™️ incluse, parce que plus c'est long, plus c'est impressionnant.
          </p>
          
          <p>
            🎉 Ce n'est pas juste un photographe-retoucheur, c'est une machine à émerveiller, un créateur d'émotions et un maître des pixels.
          </p>
        </div>
        
        {/* Features with icons */}
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-4xl">🙌</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Production artisanale italienne</h3>
            <p className="text-white/70 text-sm">Dans la province de Vérone</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-4xl">💼</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Cuir de haute qualité souple et robuste</h3>
            <p className="text-white/70 text-sm">Design compact et pratique</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-4xl">🛡️</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Porte-cartes avec protection RFID et NFC</h3>
            <p className="text-white/70 text-sm">Sécurité avec style</p>
          </div>
        </div>
        
        <div className="mt-8 mb-20">
          <h3 className="text-xl font-bold text-white mb-4">Trois générations d'artisans</h3>
          <p className="text-white/90 leading-relaxed">
            Kjore Project combine la tradition artisanale italienne et le style scandinave. 
            L'entreprise de la famille Lovato est à la troisième génération: plus de 70 ans 
            d'expérience dans la réalisation de chaussures et accessoires mode.
          </p>
        </div>
      </div>

      {/* Bottom spacing for mobile navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default ProductDetail;