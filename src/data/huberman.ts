export interface PodcastEpisode {
  id: string;
  title: string;
  topics: string[];
  keyTakeaways: string[];
  fitnessRelated: boolean;
  transcript?: string;
  summary?: string;
}

// This is a placeholder. We'll need to process and add the actual transcripts
export const hubermanEpisodes: PodcastEpisode[] = [
  {
    id: 'ep1',
    title: 'How Your Nervous System Works & Changes',
    topics: ['nervous system', 'neuroplasticity', 'brain function'],
    keyTakeaways: [
      'Understanding neuroplasticity and brain adaptation',
      'How stress affects nervous system function',
      'Tools for nervous system regulation'
    ],
    fitnessRelated: true,
    summary: 'Covers the fundamentals of nervous system function and its impact on physical performance'
  },
  {
    id: 'ep2',
    title: 'Master Your Sleep & Be More Alert When Awake',
    topics: ['sleep', 'circadian rhythm', 'alertness', 'recovery'],
    keyTakeaways: [
      'Morning sunlight exposure helps regulate sleep-wake cycles',
      'Temperature affects sleep quality and duration',
      'Sleep is crucial for muscle recovery and growth',
      'Consistent sleep schedule improves athletic performance'
    ],
    fitnessRelated: true,
    summary: 'Deep dive into sleep optimization and its effects on physical recovery'
  },
  {
    id: 'ep19',
    title: 'The Science of Muscle Growth, Increasing Strength & Muscular Recovery',
    topics: ['muscle growth', 'strength training', 'recovery', 'nutrition'],
    keyTakeaways: [
      'Mechanical tension is key for muscle growth',
      'Protein timing affects muscle recovery',
      'Sleep quality impacts muscle repair',
      'Recovery methods between workouts'
    ],
    fitnessRelated: true,
    summary: 'Comprehensive overview of muscle biology and practical training applications'
  },
  {
    id: 'ep21',
    title: 'How to Lose Fat with Science-Based Tools',
    topics: ['fat loss', 'metabolism', 'nutrition', 'exercise'],
    keyTakeaways: [
      'Understanding metabolic rate and fat burning',
      'Role of exercise in fat loss',
      'Nutrition timing and fat loss',
      'Sustainable approaches to weight management'
    ],
    fitnessRelated: true,
    summary: 'Scientific approach to fat loss and body composition'
  },
  {
    id: 'ep22',
    title: 'Science of Muscle Growth, Increasing Strength & Muscular Recovery',
    topics: ['muscle growth', 'strength', 'recovery', 'training'],
    keyTakeaways: [
      'Mechanisms of muscle hypertrophy',
      'Optimal training frequency',
      'Recovery strategies',
      'Nutrition for muscle growth'
    ],
    fitnessRelated: true,
    summary: 'Detailed exploration of muscle science and practical training protocols'
  }
];

// Function to process and add transcripts
export async function addTranscript(episodeId: string, transcript: string) {
  const episode = hubermanEpisodes.find(ep => ep.id === episodeId);
  if (episode) {
    episode.transcript = transcript;
  }
}

// Function to search transcripts for relevant information
export function searchTranscripts(query: string): Array<{episodeId: string, relevantText: string}> {
  return hubermanEpisodes
    .filter(episode => episode.transcript?.toLowerCase().includes(query.toLowerCase()))
    .map(episode => ({
      episodeId: episode.id,
      relevantText: extractRelevantSection(episode.transcript!, query)
    }));
}

function extractRelevantSection(transcript: string, query: string): string {
  // Find the position of the query in the transcript
  const position = transcript.toLowerCase().indexOf(query.toLowerCase());
  if (position === -1) return '';
  
  // Extract a section around the query (500 characters before and after)
  const start = Math.max(0, position - 500);
  const end = Math.min(transcript.length, position + query.length + 500);
  
  return transcript.slice(start, end) + '...';
} 