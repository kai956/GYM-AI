import axios from 'axios';

const BASE_URL = 'https://raw.githubusercontent.com/wrkout/exercises.json/master/exercises';

export interface Exercise {
  name: string;
  force: string;
  level: string;
  mechanic: string;
  equipment: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
}

export async function fetchExercise(name: string): Promise<Exercise> {
  const response = await axios.get(`${BASE_URL}/${name}/exercise.json`);
  return response.data;
}

export async function fetchAllExercises(): Promise<Exercise[]> {
  // This is a placeholder - we'll need to first fetch the list of all exercises
  // For now, let's fetch a few example exercises
  const exerciseNames = [
    'Barbell_Curl',
    'Bench_Press',
    'Squat'
  ];
  
  const exercises = await Promise.all(
    exerciseNames.map(name => fetchExercise(name))
  );
  
  return exercises;
}

// Cache exercises in memory
let exerciseCache: Exercise[] | null = null;

export async function getExercises(): Promise<Exercise[]> {
  if (!exerciseCache) {
    exerciseCache = await fetchAllExercises();
  }
  return exerciseCache;
} 