import { useState, ChangeEvent } from 'react';

type ProjectSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type CollabStatus = 0 | 1;

interface ProjectFormData {
  projectName: string;
  description: string;
  tags: string[];
  collabStatus: CollabStatus;
  projectSize: ProjectSize;
  completion: number;
}

export default function ProjectForm() {
  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: '',
    description: '',
    tags: [],
    collabStatus: 0,
    projectSize: 'xs',
    completion: 0
  });
  
  const [currentTag, setCurrentTag] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const addTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">New Project</h2>
      
      <div className="space-y-4">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Name *
          </label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description * (max 150 chars)
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            maxLength={150}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="text-xs text-gray-500 mt-1">
            {formData.description.length}/150
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              placeholder="Add a tag"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTag}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Collaboration Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Collaboration Status
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="collabStatus"
                value={1}
                checked={formData.collabStatus === 1}
                onChange={handleInputChange}
                className="mr-2"
              />
              Open to collaboration
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="collabStatus"
                value={0}
                checked={formData.collabStatus === 0}
                onChange={handleInputChange}
                className="mr-2"
              />
              Not looking for collaboration
            </label>
          </div>
        </div>

        {/* Project Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Size
          </label>
          <select
            name="projectSize"
            value={formData.projectSize}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="xs">Extra Small (XS)</option>
            <option value="s">Small (S)</option>
            <option value="m">Medium (M)</option>
            <option value="l">Large (L)</option>
            <option value="xl">Extra Large (XL)</option>
          </select>
        </div>

        {/* Project Completion */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Completion ({formData.completion}%)
          </label>
          <input
            type="range"
            name="completion"
            min="0"
            max="100"
            value={formData.completion}
            onChange={handleInputChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>New (0%)</span>
            <span>In Progress</span>
            <span>Complete (100%)</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
        >
          Create Project
        </button>
        </div>
    </div>
  );
}