
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageGalleryProps {
  images: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialIndex?: number;
}

const ImageGallery = ({ images, open, onOpenChange, initialIndex = 0 }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    startIndex: initialIndex
  });

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi && open) {
      emblaApi.scrollTo(initialIndex);
    }
  }, [emblaApi, open, initialIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
    if (e.key === "ArrowRight") emblaApi?.scrollNext();
    if (e.key === "Escape") onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-6xl w-full h-full max-h-screen bg-black/95 border-none p-0 flex items-center justify-center"
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Carousel */}
          <div className="w-full h-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((image, index) => (
                <div key={index} className="flex-none w-full h-full flex items-center justify-center p-8">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Counter moved to bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white text-lg font-medium">
            {currentIndex + 1}/{images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
