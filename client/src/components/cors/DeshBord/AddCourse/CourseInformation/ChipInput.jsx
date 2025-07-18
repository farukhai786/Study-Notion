import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useWatch } from "react-hook-form";

const ChipInput = ({
  label,
  name,
  placeholder = "Choose a Tag",
  register,
  errors,
  setValue,
  control,
}) => {
  const [text, setText] = useState("");
  const chips = useWatch({ control, name, defaultValue: [] });

  useEffect(() => {
    register(name, {
      required: true,
      validate: (v) => v && v.length > 0,
    });
  }, [register, name]);

  const addChip = () => {
    const val = text.trim();
    if (!val) return;
    setValue(name, [...chips, val]);
    setText("");
  };

  const removeChip = (idx) => {
    const updated = chips.filter((_, i) => i !== idx);
    setValue(name, updated);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addChip();
    }
  };

  return (
    <div className="space-y-3">
   
      <label className="text-[#E5E7EB] font-medium">
        {label} <sup className="text-red-500">*</sup>
      </label>

      <div className="flex flex-wrap gap-2">
        {chips.map((chip, idx) => (
          <span
            key={idx}
            className="flex items-center gap-2 rounded-full bg-[#E7C009] px-3 py-1 text-xs text-[#2C333F] font-semibold"
          >
            {chip}
            <AiOutlineClose
              onClick={() => removeChip(idx)}
              className="cursor-pointer hover:text-red-500 text-sm"
            />
          </span>
        ))}
      </div>

    
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
        className="w-full rounded-md bg-[#2C333F] px-4 py-2 text-[#F1F2FF] placeholder:text-[#999DAA] border border-[#424854] focus:outline-none"
      />

      
      {errors?.[name] && (
        <span className="text-sm text-[#FF6B6B]">{label} is required</span>
      )}
    </div>
  );
};

export default ChipInput;
