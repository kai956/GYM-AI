import axios from 'axios';
import fs from 'fs';
import path from 'path';

interface GitHubFile {
  name: string;
  download_url: string;
  type: string;
}

// Updated repository URL
const REPO_URL = 'https://api.github.com/repos/danshumway/Huberman-Lab-Podcast-Transcripts/contents';
const OUTPUT_DIR = path.join(process.cwd(), 'public/transcripts');

async function downloadTranscripts() {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Fetch repository contents
    const response = await axios.get<GitHubFile[]>(REPO_URL);
    const files = response.data;

    // Filter for .docx files
    const transcriptFiles = files.filter((file: GitHubFile) => 
      file.name.endsWith('.docx') || file.name.endsWith('.md')
    );

    console.log(`Found ${transcriptFiles.length} transcript files`);

    // Download each file
    for (const file of transcriptFiles) {
      const fileName = file.name;
      const downloadUrl = file.download_url;
      
      console.log(`Downloading ${fileName}...`);
      
      const fileResponse = await axios({
        url: downloadUrl,
        method: 'GET',
        responseType: 'arraybuffer'
      });

      fs.writeFileSync(
        path.join(OUTPUT_DIR, fileName),
        fileResponse.data
      );

      console.log(`Successfully downloaded ${fileName}`);
    }

    console.log('All transcripts downloaded successfully!');
    
  } catch (error) {
    console.error('Error downloading transcripts:', error);
  }
}

// Run the download
downloadTranscripts(); 