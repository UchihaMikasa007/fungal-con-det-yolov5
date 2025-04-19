import React from 'react';
import { Cog } from 'lucide-react';

export const ModelInfo = () => {
  return (
    <div className="py-12 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Cog className="h-8 w-8" />
          Model Overview
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Model", value: "YOLOv5 (Custom Trained)" },
            { label: "Training Data", value: "Fungal cultures annotated for visible contamination" },
            { label: "Purpose", value: "Visual detection and localization of contamination" },
            { label: "Accuracy", value: "95% mAP on validation set" }
          ].map((item, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">{item.label}</h3>
              <p className="text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
