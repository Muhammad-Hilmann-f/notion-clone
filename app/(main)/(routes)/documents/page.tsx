"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-muted">
      <Image
        src="/empty.png"
        alt="No documents found"
        width={300}
        height={300}
        className="block dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        alt="No documents found"
        width={300}
        height={300}
        className="hidden dark:block"
      />
      <h2 className="mt-4 text-1xl font-bold text-gray-800 dark:text-white">
        Welcome {user?.emailAddresses[0].emailAddress || user?.firstName}!
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md text-center mb-2">
        You have no documents yet. Start creating your first document to get
        started.
      </p>
      <Button>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create New Document
      </Button>
    </div>
  );
};

export default DocumentsPage;
