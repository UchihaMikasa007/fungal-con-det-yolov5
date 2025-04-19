
import React, { useState } from 'react';
import { ImageUpload } from '@/components/ImageUpload';
import { FilterControls } from '@/components/FilterControls';
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
      description: "You can now apply filters to your image."
    });
  };

  const handleFilterChange = (type: string, value: number) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleDownload = () => {
    if (!image) return;
    
    // In the next iteration, we'll implement the actual filter processing
    toast({
      title: "Coming soon!",
      description: "Image processing will be implemented in the next update."
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Photo Filter Finesse</h1>
          <p className="text-muted-foreground">Upload an image and apply beautiful filters</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {!image ? (
              <ImageUpload onImageUpload={handleImageUpload} />
            ) : (
              <div className="aspect-[3/2] rounded-lg overflow-hidden bg-muted">
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-contain"
                  style={{
                    filter: `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%)`
                  }}
                />
              </div>
            )}
          </div>
          
          {image && (
            <FilterControls
              filters={filters}
              onChange={handleFilterChange}
              onDownload={handleDownload}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
