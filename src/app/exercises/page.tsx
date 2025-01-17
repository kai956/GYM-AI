import React from 'react';
import ExerciseList from '@/components/ExerciseList';

export default function ExercisesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Exercise Database</h1>
        <ExerciseList />
      </div>
    </main>
  );
} 