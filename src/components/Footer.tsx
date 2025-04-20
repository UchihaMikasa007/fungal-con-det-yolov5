
import React from 'react';
import { Info, Link as LucideLink, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <p className="text-muted-foreground mb-2">
            <strong>Title:</strong> Convolutional Neural Network-Based Automated Identification of Superficial Fungal Contamination from Microscopic Images
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Project Team</h3>
          <div className="space-y-2 text-muted-foreground">
            <div>
              <strong>Researchers:</strong> Aseem Gupta, C. Govardhan Reddy, K. Navya, M. Manasa
            </div>
            <div>
              <strong>Guided by:</strong> Dr. Uddandarao Priyanka
            </div>
            <div>
              <strong>Institution:</strong> National Institute of Technology Andhra Pradesh
            </div>
            <div>
              <strong>Department:</strong> Biotechnology
            </div>
            <div>
              <strong>Project Code:</strong> BT449
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-border flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fungal Detection Project
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Info className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <LucideLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
