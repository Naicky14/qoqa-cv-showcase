import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Package, Diamond, Gift, MessageCircle, Heart, ArrowLeft, Share } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import QoqaButton from "@/components/QoqaButton";
import CountdownTimer from "@/components/CountdownTimer";
import CartDialog from "@/components/CartDialog";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);

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
      {/* Header Navigation */}
      <div className="relative bg-black">
        <div className="flex items-center justify-between p-4 relative z-10">
          <button 
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <h1 className="text-white text-lg font-bold">qoqa</h1>
          
          <button className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <Share className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Product Image */}
        <div className="bg-qoqa-pink aspect-square flex items-center justify-center">
          <div className="text-8xl">📸</div>
        </div>

        {/* Progress Bar Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">Une pièce disponible</span>
            <CountdownTimer className="text-white font-mono text-sm" />
          </div>
          
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-qoqa-pink to-pink-400"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Main Button */}
      <div className="p-4">
        <QoqaButton onClick={() => setCartOpen(true)}>
          Yeah j'en veux un
        </QoqaButton>
      </div>
      {/* Product Title and Price */}
      <div className="px-4 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Qreator XS Ultra Max Pro Super Deluxe Edition™️
        </h1>
        <div className="text-3xl font-bold text-white mb-4">
          Prix sur demande
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
            <span>Déjà monté, pas besoin de notice</span>
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
          Découvrez le Qreator XS Ultra Max Pro Super Deluxe Edition™️
        </h2>
        
        <div className="text-white/90 leading-relaxed space-y-4">
          <p>
            <strong>Attention, mesdames et messieurs :</strong> voici le Qreator, le produit ultime pour sublimer vos projets visuels. 
            Version XS Ultra Max Pro Super Deluxe Edition™️ incluse, parce que plus c'est long, plus c'est impressionnant. 
            Ce n'est pas juste un photographe-retoucheur, c'est une machine à émerveiller, un créateur d'émotions et un maître des pixels.
          </p>
        </div>

        <div className="mt-8 mb-6">
          <div className="w-full h-px bg-white/30 mb-6"></div>
          
          <h3 className="text-xl font-bold text-white mb-6">
            Pourquoi choisir le Qreator XS Ultra Max Pro Super Deluxe Edition™️ ?
          </h3>
          
          <div className="space-y-4 text-white/90">
            <div>
              <h4 className="font-semibold text-white mb-2">1. Photographe Studio HD 24K Gold Certified Premium</h4>
              <p className="text-sm leading-relaxed">
                Avec 10 ans d'expérience en photographie studio, le Qreator capture tout : des montres qui brillent comme un diamant aux œuvres d'art plus fragiles que votre connexion wifi un lundi matin.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">2. Retouche Pro Ultra Pixel Perfect+</h4>
              <p className="text-sm leading-relaxed">
                15 ans de maîtrise sur Adobe Suite, Capture One et d'autres logiciels qu'on ne cite même pas parce que la liste serait trop longue. Le résultat ? Vos images passent de "meh" à "WOWOWOW".
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">3. Créateur Multi-Format Universalis 4.0</h4>
              <p className="text-sm leading-relaxed">
                Publicité de luxe ? Campagne alimentaire ? Vidéo pour réseaux sociaux ? Le Qreator s'adapte à tout comme un caméléon high-tech.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">4. Arrière-plans et vidéos Galaxy Infinite+</h4>
              <p className="text-sm leading-relaxed">
                Il ne fait pas que cliquer sur un bouton : il imagine, il crée, et il livre des visuels qui vont faire pleurer vos concurrents.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">5. Gestion Pro Mastermind Chrono Control™</h4>
              <p className="text-sm leading-relaxed">
                Des délais courts ? Un chaos de brief ? Le Qreator reste calme, s'organise, et vous livre tout ça comme si c'était facile.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">6. Passion Unlimited Turbo Drive</h4>
              <p className="text-sm leading-relaxed">
                Je peux photographier des montres, des couches-culottes et même des bouteilles. Petite note : une partie du liquide risque d'être prélevée… pour des raisons "techniques" bien sûr. Avec moi, vos projets auront toujours une touche de créativité décalée.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <div className="w-full h-px bg-white/30 mb-6"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">Spécifications techniques :</h3>
          <div className="space-y-2 text-white/90 text-sm">
            <p>• <strong>Photographie :</strong> Studio 10 ans, spécialisation montres, objets précieux, et œuvres d'art.</p>
            <p>• <strong>Retouche :</strong> Adobe Suite (15 ans), Capture One, Pixel-Perfect Technology.</p>
            <p>• <strong>Logiciels Pro Galaxy Bundle™ :</strong> Photoshop, InDesign, Illustrator, After Effects inclus.</p>
            <p>• <strong>Mobilité :</strong> Permis de conduire, véhicule, transports publics, télétravail, grande flexibilité. En attente d'une mission sur la Lune avec SpaceX, mais toujours dispo pour vos projets terrestres.</p>
            <p>• <strong>Compatibilité universelle :</strong> Luxe, publicité, digital, photographie culinaire, édition d'art, et reportage événementiel, ou un mix de tout ça.</p>
            <p>• <strong>Extras :</strong> Organisation précise, créativité débordante, et un humour garanti sans supplément.</p>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <div className="w-full h-px bg-white/30 mb-6"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">Contenu du pack :</h3>
          <div className="text-white/90 text-sm space-y-2">
            <p>• 1 Qreator XS Ultra Max Pro Super Deluxe Edition™️, livré prêt à l'emploi.</p>
            <p>• <strong>Accessoires inclus :</strong> créativité, passion, curiosité insatiable, une résistance légendaire aux deadlines serrées, une adaptabilité hors norme et une vision artistique toujours en quête de perfection.</p>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <div className="w-full h-px bg-white/30 mb-6"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">Délai de livraison : dans 3 mois</h3>
          <p className="text-white/90 text-sm mb-6">
            Disponible sous réserve de résiliation dans un délai standard de 3 mois. Parfait pour anticiper vos futurs projets !
          </p>
        </div>

        <div className="mt-8 mb-20">
          <div className="w-full h-px bg-white/30 mb-6"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">Garantie satisfaction No-Limit</h3>
          <p className="text-white/90 text-sm">
            Si vos visuels ne décrochent pas des "oh" et des "ah", on vous rembourse… en compliments.
          </p>
        </div>
      </div>

      {/* Bottom spacing for mobile navigation */}
      <div className="h-20"></div>
      
      {/* Cart Dialog */}
      <CartDialog open={cartOpen} onOpenChange={setCartOpen} />
    </div>
  );
};

export default ProductDetail;