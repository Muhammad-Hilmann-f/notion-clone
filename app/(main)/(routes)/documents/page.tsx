"use client";

import { File, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Example document structure matching the screenshot exactly
  const documents = [
    {
      id: "doc1",
      title: "Getting Started with BlocNote",
      updatedAt: "2025-04-28T10:00:00Z",
    },
    {
      id: "doc2",
      title: "How to Create Blocks",
      updatedAt: "2025-04-29T14:30:00Z",
    },
    {
      id: "doc3",
      title: "Advanced Features",
      updatedAt: "2025-04-30T09:15:00Z",
    },
  ];

  // Format date to match the screenshot format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `Apr ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Filter documents based on search query
  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold">Documentation</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Everything you need to know about using BlocNote
          </p>
        </div>

        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus size={16} />
          New Document
        </Button>
      </div>

      {/* Search bar */}
      <div className="relative px-4 mb-6">
        <div className="absolute inset-y-0 left-0 pl-7 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search documentation..."
          className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1f1f1f] rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* "Last modified" header */}
      <div className="flex justify-end px-4 mb-1">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last modified
        </div>
      </div>

      {/* Document list */}
      <div className="flex-1">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between items-center px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition cursor-pointer border-t border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center">
                <File size={18} className="text-gray-500 mr-2" />
                <span>{doc.title}</span>
              </div>
              <div className="text-gray-500 text-sm">
                {formatDate(doc.updatedAt)}
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-8 text-center text-gray-500">
            No documents found matching your search.
          </div>
        )}
      </div>

      {documents.length === 0 && searchQuery === "" && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg mb-4">
            You haven't created any documentation yet
          </p>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            Create your first document
          </Button>
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;
