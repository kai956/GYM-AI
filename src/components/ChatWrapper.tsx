"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('./Chat'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[600px]">
      Loading chat...
    </div>
  ),
});

export default function ChatWrapper() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Fitness AI Assistant
        </h1>
        <Chat />
      </div>
    </main>
  );
} 