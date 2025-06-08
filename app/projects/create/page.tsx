"use client";

import withAuth from "@/lib/wrappers/auth";
import CreateProject from "@/components/project/Create";

function Create() {

    return (
        <div className="flex justify-center items-center">
            <CreateProject />
        </div>
    );
}

export default withAuth(CreateProject);