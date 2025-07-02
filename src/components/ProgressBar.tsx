import { X, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProgressBarProps {
  stockPercent: number;
  timeLeft: string;
}

const ProgressBar = ({ stockPercent, timeLeft }: ProgressBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-background border-b border-border">
      <div className="flex items-center justify-between p-4">
        <button 
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-qoqa-dark-bg flex items-center justify-center"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex-1 mx-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">{stockPercent}% du stock restant</span>
            <span className="text-white text-sm font-mono">{timeLeft}</span>
          </div>
          
          <div className="w-full bg-qoqa-progress-bg rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-qoqa-pink transition-all duration-300"
              style={{ width: `${stockPercent}%` }}
            />
          </div>
        </div>
        
        <button className="w-10 h-10 rounded-full bg-qoqa-pink flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;