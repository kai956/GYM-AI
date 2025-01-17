import fs from 'fs';
import path from 'path';
import { addTranscript } from '../data/huberman';

interface TranscriptFile {
  episodeNumber: number;
  content: string;
}

export async function processTranscripts(transcriptsDir: string) {
  try {
    // Read all files in the transcripts directory
    const files = fs.readdirSync(transcriptsDir);
    
    // Process each file
    for (const file of files) {
      if (file.endsWith('.docx') || file.endsWith('.md')) {
        const episodeNumber = extractEpisodeNumber(file);
        if (episodeNumber) {
          const content = fs.readFileSync(path.join(transcriptsDir, file), 'utf-8');
          await addTranscript(`ep${episodeNumber}`, content);
          console.log(`Processed transcript for episode ${episodeNumber}`);
        }
      }
    }
    
    console.log('All transcripts processed successfully');
  } catch (error) {
    console.error('Error processing transcripts:', error);
  }
}

function extractEpisodeNumber(filename: string): number | null {
  // Extract episode number from filenames like "01. How Your Nervous System Works.docx"
  const match = filename.match(/^(\d+)\./);
  if (match) {
    return parseInt(match[1], 10);
  }
  return null;
} 