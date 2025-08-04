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
      <Card className="overflow-hidden hover:scale-105 transition-transform bg-black border-white/20 rounded-2xl">
        <div className={`h-48 relative ${bgColor} flex items-center justify-center`}>
          <div className="text-6xl">{emoji}</div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-xl">{title}</h3>
            <p className="text-sm text-white/80 leading-relaxed">{subtitle}</p>
            
            {discount && (
              <Badge variant="destructive" className="bg-qoqa-pink text-black font-bold text-sm px-3 py-1">
                {discount}
              </Badge>
            )}
            
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">{price}</span>
              {originalPrice && (
                <span className="text-sm text-white/50 line-through">{originalPrice}</span>
              )}
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="w-full bg-gray-600 rounded-full h-3">
                <div 
                  className="h-3 rounded-full bg-gradient-to-r from-qoqa-pink to-pink-400"
                  style={{ width: `${stockText ? '100' : stockPercent}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white font-medium text-sm">{stockText || `${stockPercent}% du stock restant`}</span>
                <span className="text-white font-mono text-lg font-bold">{timeLeft}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;