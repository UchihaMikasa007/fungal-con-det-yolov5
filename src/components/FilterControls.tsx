
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface FilterControlsProps {
  filters: {
    brightness: number;
    contrast: number;
    saturation: number;
  };
  onChange: (type: string, value: number) => void;
  onDownload: () => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  filters,
  onChange,
  onDownload
}) => {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Brightness</Label>
          <Slider
            min={0}
            max={200}
            step={1}
            value={[filters.brightness]}
            onValueChange={(value) => onChange('brightness', value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label>Contrast</Label>
          <Slider
            min={0}
            max={200}
            step={1}
            value={[filters.contrast]}
            onValueChange={(value) => onChange('contrast', value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label>Saturation</Label>
          <Slider
            min={0}
            max={200}
            step={1}
            value={[filters.saturation]}
            onValueChange={(value) => onChange('saturation', value[0])}
          />
        </div>
      </div>
      <Button className="w-full" onClick={onDownload}>
        <Download className="w-4 h-4 mr-2" />
        Download Image
      </Button>
    </div>
  );
};
