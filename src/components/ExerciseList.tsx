import React, { useEffect, useState } from 'react';
import { Exercise } from '@/utils/exercises';

export default function ExerciseList() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const response = await fetch('/api/exercises');
        if (!response.ok) {
          throw new Error('Failed to fetch exercises');
        }
        const data = await response.json();
        setExercises(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load exercises');
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading exercises...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {exercises.map((exercise, index) => (
        <div 
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-2">{exercise.name.replace(/_/g, ' ')}</h3>
          <div className="text-sm text-gray-600 mb-2">
            <p>Level: {exercise.level}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Category: {exercise.category}</p>
          </div>
          <div className="mb-2">
            <h4 className="font-medium">Primary Muscles:</h4>
            <p className="text-sm text-gray-600">{exercise.primaryMuscles.join(', ')}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">Secondary Muscles:</h4>
            <p className="text-sm text-gray-600">{exercise.secondaryMuscles.join(', ')}</p>
          </div>
          <details className="text-sm">
            <summary className="font-medium cursor-pointer">Instructions</summary>
            <ol className="mt-2 list-decimal list-inside text-gray-600">
              {exercise.instructions.map((instruction, i) => (
                <li key={i} className="mb-1">{instruction}</li>
              ))}
            </ol>
          </details>
        </div>
      ))}
    </div>
  );
} 