import React from 'react';
import Chat from '@/components/Chat';

export default function Home() {
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