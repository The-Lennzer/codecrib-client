"use client";
import TagSelector, {TagOptions} from "../selectors/TagSelector";
import { useState } from "react";
import { MultiValue } from "react-select";

export default function CreateProject() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState<MultiValue<TagOptions>>([]);

    const handleFormSubmit = async () => {
        console.log("Form is submitted");
    } 

    return (
        <div className="flex justify-center items-center h-screen text-black text-1xl">
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-2 justify-center">
                    <div className="flex gap-2">
                        <label>Project Title</label>
                        <input type="text" placeholder="Project Title" />
                    </div>

                    <div className="flex gap-2">
                        <label>Description</label>
                        <input type="textarea" placeholder="A wild project has appeared..." />
                    </div>

                    <div>
                        <label>Project Size</label>
                        <select>
                            <option value="xs">Extra Small</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">Extra Large</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <label>Relevent tags</label>
                        <TagSelector value={selectedTags} onChange={setSelectedTags} />
                    </div>

                    <div className="flex justify-center items-center bg-orange-600 text-white w-[100px] rounded-md shadow-md">
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}