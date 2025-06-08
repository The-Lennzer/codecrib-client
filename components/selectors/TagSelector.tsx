"use client";

import Select, {MultiValue} from "react-select";

export interface TagOptions {
    value: string;
    label: string;
}

interface TagSelectValues {
    value: MultiValue<TagOptions>;
    onChange: (value: MultiValue<TagOptions>) => void;  
}

const tagOptions: TagOptions[] = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'ai', label: 'AI' },
  { value: 'mobile', label: 'Mobile' },
];


export default function TagSelector({ value, onChange }: TagSelectValues) {

    return (
        <Select 
            isMulti
            options={tagOptions} 
            value={value} 
            onChange={onChange} 
            placeholder="Select relevant tags"
        />
    );
}