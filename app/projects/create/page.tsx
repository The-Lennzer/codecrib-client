"use client";

import withAuth from "@/lib/wrappers/auth";

function CreateProject() {
    return (
        <div className="text-black text-2xl font-bold">
            <span>
                Create Project
            </span>
        </div>
    );
}

export default withAuth(CreateProject);