
import React from 'react';
import { Upload, BarChart2, Upload as Download } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload an Image",
      description: "Select a clear image of your fungal culture (Petri dish, slide, or plate view)."
    },
    {
      icon: BarChart2,
      title: "AI Detection",
      description: "Our model processes your image and highlights the contaminated regions using bounding boxes."
    },
    {
      icon: Download,
      title: "Download Results",
      description: "Get a processed version of your image and use it for lab records, reports, or further analysis."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
