
import React from 'react';
import { ImageUpload } from './ImageUpload';

interface HeroSectionProps {
  onImageUpload: (file: File) => void;
}

export const HeroSection = ({ onImageUpload }: HeroSectionProps) => {
  return (
    <div className="text-center space-y-6 py-12">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
        Detect Fungal Contamination in an Instant
      </h1>
      <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
        Upload your fungal culture images and get real-time detection of contaminated regions using our AI-powered tool trained with YOLOv5.
      </p>
      <div className="max-w-3xl mx-auto">
        <ImageUpload onImageUpload={onImageUpload} />
      </div>
    </div>
  );
};
