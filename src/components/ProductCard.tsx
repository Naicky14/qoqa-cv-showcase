import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  stockPercent: number;
  stockText?: string;
  timeLeft: string;
  bgColor: string;
  emoji: string;
}

const ProductCard = ({ 
  id, 
  title, 
  subtitle, 
  price, 
  originalPrice, 
  discount, 
  stockPercent, 
  stockText,
  timeLeft, 
  bgColor,
  emoji 
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden hover:scale-105 transition-transform bg-qoqa-dark-bg border-white/10">
        <div className={`h-32 relative ${bgColor} flex items-center justify-center`}>
          <div className="text-4xl">{emoji}</div>
        </div>
        
        <CardContent className="p-3">
          <div className="space-y-2">
            <h3 className="font-bold text-white text-sm">{title}</h3>
            <p className="text-xs text-white/70 line-clamp-2">{subtitle}</p>
            
            {discount && (
              <Badge variant="destructive" className="bg-qoqa-pink text-black font-bold text-xs">
                {discount}
              </Badge>
            )}
            
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">{price}</span>
              {originalPrice && (
                <span className="text-xs text-white/50 line-through">{originalPrice}</span>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">{stockText || `${stockPercent}%`}</span>
                <span className="text-white/60">{stockText ? "" : "du stock restant"}</span>
              </div>
              
              <div className="w-full bg-qoqa-progress-bg rounded-full h-1">
                <div 
                  className={`h-1 rounded-full ${stockText ? 'bg-qoqa-pink' : stockPercent > 50 ? 'bg-qoqa-green' : stockPercent > 20 ? 'bg-qoqa-orange' : 'bg-qoqa-pink'}`}
                  style={{ width: `${stockText ? '100' : stockPercent}%` }}
                />
              </div>
              
              <div className="flex items-center gap-1 text-xs text-white/60">
                <Clock className="w-3 h-3" />
                <span>{timeLeft}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;