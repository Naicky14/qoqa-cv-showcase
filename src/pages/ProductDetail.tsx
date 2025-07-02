import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Package } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // For now, we only handle the Qreator product
  if (id !== "qreator") {
    return (
      <div className="min-h-screen bg-background p-4">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Produit non trouvé</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux offres
        </Button>
      </div>

      {/* Product Detail */}
      <div className="max-w-4xl mx-auto p-4">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-br from-qoqa-pink to-qoqa-orange h-80 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">📸</div>
                <h1 className="text-3xl font-bold">Qreator XS Ultra Max Pro Super Deluxe Edition™️</h1>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Délai de livraison : dans 3 mois</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="w-4 h-4" />
                <span>Disponible sous réserve</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">✨ Découvrez le Qreator XS Ultra Max Pro Super Deluxe Edition™️</h2>
              
              <p className="text-lg mb-6">
                🎉 Attention, mesdames et messieurs : voici le Qreator, le produit ultime pour sublimer vos projets visuels. 
                Version XS Ultra Max Pro Super Deluxe Edition™️ incluse, parce que plus c'est long, plus c'est impressionnant. 
                Ce n'est pas juste un photographe-retoucheur, c'est une machine à émerveiller, un créateur d'émotions et un maître des pixels.
              </p>

              <h3 className="text-xl font-semibold mb-4">Pourquoi choisir le Qreator XS Ultra Max Pro Super Deluxe Edition™️ ?</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">1️⃣ Photographe Studio HD 24K Gold Certified Premium</h4>
                  <p>Avec 10 ans d'expérience en photographie studio, le Qreator capture tout : des montres qui brillent comme un diamant aux œuvres d'art plus fragiles que votre connexion wifi un lundi matin.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">2️⃣ Retouche Pro Ultra Pixel Perfect+</h4>
                  <p>15 ans de maîtrise sur Adobe Suite, Capture One et d'autres logiciels qu'on ne cite même pas parce que la liste serait trop longue. Le résultat ? Vos images passent de "meh" à "WOWOWOW".</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">3️⃣ Créateur Multi-Format Universalis 4.0</h4>
                  <p>Publicité de luxe ? Campagne alimentaire ? Vidéo pour réseaux sociaux ? Le Qreator s'adapte à tout comme un caméléon high-tech.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">4️⃣ Arrière-plans et vidéos Galaxy Infinite+</h4>
                  <p>Il ne fait pas que cliquer sur un bouton : il imagine, il crée, et il livre des visuels qui vont faire pleurer vos concurrents.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">5️⃣ Gestion Pro Mastermind Chrono Control™</h4>
                  <p>Des délais courts ? Un chaos de brief ? Le Qreator reste calme, s'organise, et vous livre tout ça comme si c'était facile.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">6️⃣ Passion Unlimited Turbo Drive</h4>
                  <p>Je peux photographier des montres, des couches-culottes et même des bouteilles. Petite note : une partie du liquide risque d'être prélevée… pour des raisons "techniques" bien sûr. Avec moi, vos projets auront toujours une touche de créativité décalée.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">💡 Spécifications techniques :</h3>
              
              <ul className="space-y-2">
                <li><strong>Photographie :</strong> Studio 10 ans, spécialisation montres, objets précieux, et œuvres d'art.</li>
                <li><strong>Retouche :</strong> Adobe Suite (15 ans), Capture One, Pixel-Perfect Technology.</li>
                <li><strong>Logiciels Pro Galaxy Bundle™ :</strong> Photoshop, InDesign, Illustrator, After Effects inclus.</li>
                <li><strong>Mobilité :</strong> Permis de conduire, véhicule, transports publics, télétravail, grande flexibilité. En attente d'une mission sur la Lune avec SpaceX, mais toujours dispo pour vos projets terrestres.</li>
                <li><strong>Compatibilité universelle :</strong> Luxe, publicité, digital, photographie culinaire, édition d'art, et reportage événementiel, ou un mix de tout ça.</li>
                <li><strong>Extras :</strong> Organisation précise, créativité débordante, et un humour garanti sans supplément.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">📦 Contenu du pack :</h3>
              
              <p>1 Qreator XS Ultra Max Pro Super Deluxe Edition™️, livré prêt à l'emploi.</p>
              <p><strong>Accessoires inclus :</strong> créativité, passion, curiosité insatiable, une résistance légendaire aux deadlines serrées, une adaptabilité hors norme et une vision artistique toujours en quête de perfection.</p>

              <div className="bg-muted p-4 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-2">⏱ Délai de livraison : dans 3 mois</h3>
                <p className="text-sm text-muted-foreground">Disponible sous réserve de résiliation dans un délai standard de 3 mois. Parfait pour anticiper vos futurs projets !</p>
              </div>

              <div className="bg-gradient-to-r from-qoqa-green to-qoqa-blue text-black p-4 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-2">🌟 Garantie satisfaction No-Limit</h3>
                <p>Si vos visuels ne décrochent pas des "oh" et des "ah", on vous rembourse... en compliments.</p>
              </div>

              <p className="text-lg font-semibold mt-8 text-center">
                Vous êtes prêt pour l'expérience Qreator XS Ultra Max Pro Super Deluxe Edition™️ ? 
                C'est LE moment de cliquer sur "Ajouter au panier" et de révolutionner votre monde visuel. 💥
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-gradient-to-r from-qoqa-pink to-qoqa-orange text-white font-bold px-8 py-3">
                Ajouter au panier
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;