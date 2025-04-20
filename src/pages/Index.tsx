
import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { HowItWorks } from '@/components/HowItWorks';
import { ModelInfo } from '@/components/ModelInfo';
import { ImageCanvas } from '@/components/ImageCanvas';
import { FilterControls } from '@/components/FilterControls';
import { Footer } from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [image, setImage] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100
  });
  
  const { toast } = useToast();

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
    toast({
      title: "Image uploaded successfully",
      description: "You can now draw rectangles and apply filters to your image."
    });
  };

  const handleFilterChange = (type: string, value: number) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        <HeroSection onImageUpload={handleImageUpload} />
        {image && (
          <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-[2fr_1fr]">
            <ImageCanvas image={image} filters={filters} />
            <FilterControls
              filters={filters}
              onChange={handleFilterChange}
              onDownload={() => {
                toast({
                  title: "Coming soon!",
                  description: "Image processing will be implemented in the next update."
                });
              }}
            />
          </div>
        )}
        <AboutSection />
        <HowItWorks />
        <ModelInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
