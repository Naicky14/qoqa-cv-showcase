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
  timeLeft, 
  bgColor,
  emoji 
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className={`h-48 relative ${bgColor} flex items-center justify-center`}>
          <div className="text-6xl">{emoji}</div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            
            {discount && (
              <Badge variant="destructive" className="bg-qoqa-pink text-black font-bold">
                {discount}
              </Badge>
            )}
            
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">{stockPercent}%</span>
                <span className="text-muted-foreground">du stock restant</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${stockPercent > 50 ? 'bg-qoqa-green' : stockPercent > 20 ? 'bg-qoqa-orange' : 'bg-destructive'}`}
                  style={{ width: `${stockPercent}%` }}
                />
              </div>
              
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
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