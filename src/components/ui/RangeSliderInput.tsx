import React, { type FC, type ChangeEvent } from "react";

interface RangeSliderInputProps {
  min: number;
  max: number;
  step?: number;
  values: [number, number];
  setValues: (values: [number, number]) => void;
}

export const RangeSliderInput: FC<RangeSliderInputProps> = ({
  min,
  max,
  step = 1,
  values,
  setValues,
}) => {
  const [minVal, maxVal] = values;

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), maxVal - step);
    if (val < min) return;
    setValues([val, maxVal]);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), minVal + step);
    if (val > max) return;
    setValues([minVal, val]);
  };

  const getTrackBackground = () => {
    const percent1 = ((minVal - min) / (max - min)) * 100;
    const percent2 = ((maxVal - min) / (max - min)) * 100;
    return `linear-gradient(to right,
      #E5E7EB ${percent1}%,
      #3A5AF9 ${percent1}%,
      #3A5AF9 ${percent2}%,
      #E5E7EB ${percent2}%)`;
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <input
          type="number"
          value={minVal}
          onChange={handleMinChange}
          className="shadow-xs w-25 text-center text-sm border border-gray-300 rounded-md p-2 outline-none"
        />
        <div className="relative flex-1 h-2 flex items-center">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={handleMinChange}
            className="absolute w-full appearance-none bg-transparent z-20 pointer-events-none top-1/2 -translate-y-1/2"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={handleMaxChange}
            className="absolute w-full appearance-none bg-transparent z-20 pointer-events-none top-1/2 -translate-y-1/2"
          />
          <div
            className="absolute w-full h-2 rounded-full top-1/2 -translate-y-1/2"
            style={{ background: getTrackBackground() }}
          />
          <style>{`
            input[type="range"]::-webkit-slider-thumb {
              pointer-events: all;
              width: 18px;
              height: 18px;
              border-radius: 9999px;
              background: #3A5AF9;
              box-shadow: 0 0 2px rgba(0,0,0,0.2);
              cursor: pointer;
              -webkit-appearance: none;
            }
            input[type="range"]::-moz-range-thumb {
              pointer-events: all;
              width: 18px;
              height: 18px;
              border-radius: 9999px;
              background: #3A5AF9;
              cursor: pointer;
            }
          `}</style>
        </div>
        <input
          type="number"
          value={maxVal}
          onChange={handleMaxChange}
          className="shadow-xs w-25 text-center text-sm border border-gray-300 rounded-md p-2 outline-none"
        />
      </div>
    </div>
  );
};
