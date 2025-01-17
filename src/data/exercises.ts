export interface Exercise {
  id: string;
  name: string;
  description: string;
  muscleGroups: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
  instructions: string[];
}

export const exercises: Exercise[] = [
  {
    id: 'push-up',
    name: 'Push-up',
    description: 'A classic bodyweight exercise that primarily targets the chest, shoulders, and triceps.',
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 'beginner',
    equipment: ['none'],
    instructions: [
      'Start in a plank position with hands slightly wider than shoulders',
      'Keep your body in a straight line from head to heels',
      'Lower your body until your chest nearly touches the ground',
      'Push back up to the starting position',
      'Repeat while maintaining proper form'
    ]
  },
  {
    id: 'squat',
    name: 'Bodyweight Squat',
    description: 'A fundamental lower body exercise that builds strength in the legs and core.',
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes', 'core'],
    difficulty: 'beginner',
    equipment: ['none'],
    instructions: [
      'Stand with feet shoulder-width apart',
      'Keep your chest up and core engaged',
      'Lower your body as if sitting back into a chair',
      'Keep knees aligned with toes',
      'Return to standing position',
      'Repeat while maintaining proper form'
    ]
  }
]; 