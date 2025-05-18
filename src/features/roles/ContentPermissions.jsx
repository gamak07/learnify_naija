import React from "react";

const contents = [
  {
    title: "Create Content",
    description: "Ability to create new educational content",
  },
  {
    title: "Edit Content",
    description: "Ability to modify existing content",
  },
  {
    title: "Delete Content",
    description: "Ability to remove content from the platform",
  },
  {
    title: "Publish Content",
    description: "Ability to make content visible to users",
  },
  {
    title: "Review Content",
    description: "Ability to review and approve content",
  },
];

const ContentPermissions = () => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium pb-2 mb-3 border-b border-gray-200">
        Content Management
      </h3>
      <div className="space-y-3">
        {contents.map((content, i) => (
          <div className="flex items-start">
            <input type="checkbox" className="h-4 w-4 " />
            <div className="ml-3 text-sm">
                <label className="font-medium cursor-pointer">{content.title}</label>
                <p className="text-gray-500 text-xs mt-1">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPermissions;
