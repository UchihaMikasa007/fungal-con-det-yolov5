
import React from 'react';
import { FlaskConical } from 'lucide-react';

export const AboutSection = () => {
  return (
    <div className="py-12 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FlaskConical className="h-8 w-8" />
          About the Tool
        </h2>
        <p className="text-lg mb-6">
          Our platform leverages deep learning to assist researchers, microbiologists, and biotech professionals in identifying fungal contamination from lab-cultured samples. Whether you're monitoring growth, ensuring purity, or documenting anomalies—our system makes it easy.
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            "Powered by YOLOv5 object detection model",
            "Trained on a curated dataset of fungal contamination images",
            "Simple upload interface",
            "Instant visual feedback with bounding boxes highlighting contaminated areas"
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2 bg-background p-4 rounded-lg shadow-sm">
              <span className="h-2 w-2 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
