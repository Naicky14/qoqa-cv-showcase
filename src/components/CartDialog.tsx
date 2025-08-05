import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";

interface CartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDialog = ({ open, onOpenChange }: CartDialogProps) => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes en secondes
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!open) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-full h-full bg-black text-white border-0 rounded-none p-0 max-w-none overflow-y-auto">
        {/* Header avec chrono */}
        <DialogHeader className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="text-center">
              <div className="text-2xl font-mono font-bold">
                {formatTime(timeLeft)}
              </div>
            </div>
            
            <div className="w-8 h-8"></div> {/* Spacer pour centrer le timer */}
          </div>
        </DialogHeader>

        <div className="flex-1 p-4">
          {/* Titre */}
          <h1 className="text-2xl font-bold text-white mb-6">Mon panier</h1>

          {/* Produit */}
          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <div className="flex gap-4">
              {/* Image produit */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              
              {/* Info produit */}
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Production artisanale suisse</h3>
                <p className="text-white text-sm mb-2">Qreator XS Ultra Max Pro Super Deluxe Edition™️</p>
                <p className="text-white/80 text-xs">1× Qreator XS Ultra Max Pro Super Deluxe Edition™️</p>
                <p className="text-white font-bold text-lg mt-2">Prix sur demande</p>
              </div>
              
              {/* Contrôles */}
              <div className="flex flex-col items-end gap-2">
                <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Trash2 className="w-4 h-4 text-white" />
                </button>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4 text-black" />
                  </button>
                  
                  <span className="text-white font-bold min-w-[20px] text-center">{quantity}</span>
                  
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton Ajouter un article */}
          <button className="w-full bg-white/10 rounded-full py-4 mb-8 flex items-center justify-center gap-2 text-white">
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Ajouter un article</span>
          </button>

          {/* Adresse de livraison */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Adresse de livraison</h2>
            
            <div className="space-y-1 text-white/90 mb-4">
              <p className="font-semibold">Yannick Boissieux</p>
              <p>Rue Krafft 5</p>
              <p>1860 Aigle</p>
            </div>
            
            <button className="w-full bg-gray-600 rounded-full py-3 text-white font-semibold">
              Changer l'adresse
            </button>
            
            <div className="flex items-center gap-2 mt-4">
              <input 
                type="checkbox" 
                id="saturday-delivery" 
                className="w-4 h-4 rounded border-white/20 bg-transparent"
              />
              <label htmlFor="saturday-delivery" className="text-white text-sm">
                J'autorise la livraison le samedi
              </label>
            </div>
          </div>

          {/* Adresse de facturation */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Adresse de facturation</h2>
            <p className="text-white/80">Identique à l'adresse de livraison</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;