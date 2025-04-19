
import React, { useEffect, useRef } from 'react';
import { Canvas as FabricCanvas, Rect, Image as FabricImage } from 'fabric';

interface ImageCanvasProps {
  image: string;
  filters: {
    brightness: number;
    contrast: number;
    saturation: number;
  };
}

// Import correct types for Fabric.js objects
type FabricImageWithFilters = FabricImage & {
  filters: any[];
  applyFilters: () => FabricImage;
}

export const ImageCanvas = ({ image, filters }: ImageCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<FabricCanvas | null>(null);
  const isDrawing = useRef(false);
  const startPoint = useRef({ x: 0, y: 0 });
  const activeRect = useRef<Rect | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    fabricRef.current = canvas;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      const imgInstance = new FabricImage(img);
      
      // Scale image to fit canvas while maintaining aspect ratio
      const scale = Math.min(
        canvas.width! / imgInstance.width!,
        canvas.height! / imgInstance.height!
      );
      
      imgInstance.scale(scale);
      imgInstance.set({
        left: (canvas.width! - imgInstance.width! * scale) / 2,
        top: (canvas.height! - imgInstance.height! * scale) / 2,
        selectable: false
      });
      
      canvas.add(imgInstance);
      canvas.renderAll();
    };

    canvas.on('mouse:down', (e) => {
      const pointer = canvas.getPointer(e.e);
      isDrawing.current = true;
      startPoint.current = pointer;

      activeRect.current = new Rect({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
        fill: 'transparent',
        stroke: '#000',
        strokeWidth: 2
      });

      canvas.add(activeRect.current);
    });

    canvas.on('mouse:move', (e) => {
      if (!isDrawing.current || !activeRect.current) return;

      const pointer = canvas.getPointer(e.e);
      const width = pointer.x - startPoint.current.x;
      const height = pointer.y - startPoint.current.y;

      activeRect.current.set({
        width: Math.abs(width),
        height: Math.abs(height),
        left: width > 0 ? startPoint.current.x : pointer.x,
        top: height > 0 ? startPoint.current.y : pointer.y
      });

      canvas.renderAll();
    });

    canvas.on('mouse:up', () => {
      isDrawing.current = false;
      activeRect.current = null;
    });

    return () => {
      canvas.dispose();
    };
  }, [image]);

  useEffect(() => {
    if (!fabricRef.current) return;
    
    fabricRef.current.getObjects('image').forEach((img) => {
      const fabricImg = img as FabricImageWithFilters;
      
      if (fabricImg.filters) {
        fabricImg.filters = [];
      }
      
      // Create filter objects with the proper Fabric namespace
      const brightnessFilter = new FabricImage.filters.Brightness({ brightness: (filters.brightness - 100) / 100 });
      const contrastFilter = new FabricImage.filters.Contrast({ contrast: (filters.contrast - 100) / 100 });
      const saturationFilter = new FabricImage.filters.Saturation({ saturation: filters.saturation / 100 });
      
      // Add filters to the image
      fabricImg.filters = [brightnessFilter, contrastFilter, saturationFilter];
      fabricImg.applyFilters();
    });
    
    fabricRef.current.renderAll();
  }, [filters]);

  return (
    <div className="relative w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
