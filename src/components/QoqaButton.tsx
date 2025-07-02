import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface QoqaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const QoqaButton = ({ children, onClick }: QoqaButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className="w-full bg-qoqa-pink hover:bg-qoqa-pink/90 text-black font-bold text-lg py-6 rounded-full flex items-center gap-3"
    >
      <ShoppingCart className="w-5 h-5" />
      {children}
    </Button>
  );
};

export default QoqaButton;