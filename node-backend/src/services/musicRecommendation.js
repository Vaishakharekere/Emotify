const axios = require('axios');

// In a real application, this would likely connect to a music API like Spotify
// For now, we'll simulate with mock data based on emotions
const mockMusicDatabase = {
  happy: [
    { id: 'h1', name: 'Happy', artist: 'Pharrell Williams', genre: 'pop' },
    { id: 'h2', name: 'Walking on Sunshine', artist: 'Katrina & The Waves', genre: 'pop' },
    { id: 'h3', name: 'Good Feeling', artist: 'Flo Rida', genre: 'hip-hop' },
    { id: 'h4', name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', genre: 'funk' },
    { id: 'h5', name: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake', genre: 'pop' },
  ],
  sad: [
    { id: 's1', name: 'Someone Like You', artist: 'Adele', genre: 'pop' },
    { id: 's2', name: 'Fix You', artist: 'Coldplay', genre: 'alternative' },
    { id: 's3', name: 'Hurt', artist: 'Johnny Cash', genre: 'country' },
    { id: 's4', name: 'Skinny Love', artist: 'Bon Iver', genre: 'indie' },
    { id: 's5', name: 'Hallelujah', artist: 'Jeff Buckley', genre: 'rock' },
  ],
  angry: [
    { id: 'a1', name: 'Numb', artist: 'Linkin Park', genre: 'rock' },
    { id: 'a2', name: 'Break Stuff', artist: 'Limp Bizkit', genre: 'rock' },
    { id: 'a3', name: 'Bulls on Parade', artist: 'Rage Against the Machine', genre: 'rock' },
    { id: 'a4', name: 'Till I Collapse', artist: 'Eminem', genre: 'hip-hop' },
    { id: 'a5', name: 'Monster', artist: 'Skillet', genre: 'rock' },
  ],
  neutral: [
    { id: 'n1', name: 'Sunday Morning', artist: 'Maroon 5', genre: 'pop' },
    { id: 'n2', name: 'Waves', artist: 'Dean Lewis', genre: 'indie' },
    { id: 'n3', name: 'Yellow', artist: 'Coldplay', genre: 'alternative' },
    { id: 'n4', name: 'Orinoco Flow', artist: 'Enya', genre: 'new age' },
    { id: 'n5', name: 'Dreams', artist: 'Fleetwood Mac', genre: 'rock' },
  ],
  relaxed: [
    { id: 'r1', name: 'Weightless', artist: 'Marconi Union', genre: 'ambient' },
    { id: 'r2', name: 'Clair de Lune', artist: 'Claude Debussy', genre: 'classical' },
    { id: 'r3', name: 'Watermark', artist: 'Enya', genre: 'new age' },
    { id: 'r4', name: 'Everything in Its Right Place', artist: 'Radiohead', genre: 'electronic' },
    { id: 'r5', name: 'Gymnopedie No. 1', artist: 'Erik Satie', genre: 'classical' },
  ],
  energetic: [
    { id: 'e1', name: 'Eye of the Tiger', artist: 'Survivor', genre: 'rock' },
    { id: 'e2', name: 'Don\'t Stop Me Now', artist: 'Queen', genre: 'rock' },
    { id: 'e3', name: 'Lose Yourself', artist: 'Eminem', genre: 'hip-hop' },
    { id: 'e4', name: 'Level Up', artist: 'Ciara', genre: 'pop' },
    { id: 'e5', name: 'All I Do Is Win', artist: 'DJ Khaled', genre: 'hip-hop' },
  ],
};

/**
 * Get music recommendations based on emotion
 * @param {string} emotion - The detected emotion
 * @param {Array} userGenres - User's preferred genres
 * @returns {Array} Array of recommended songs
 */
const getRecommendationsByEmotion = async (emotion, userGenres = []) => {
  try {
    // In a real app, we would call a music API here
    // For now, we'll use our mock database
    let recommendations = mockMusicDatabase[emotion] || mockMusicDatabase.neutral;
    
    // If user has preferred genres, prioritize those songs
    if (userGenres.length > 0) {
      const prioritizedSongs = recommendations.filter(song => 
        userGenres.includes(song.genre)
      );
      
      const otherSongs = recommendations.filter(song => 
        !userGenres.includes(song.genre)
      );
      
      recommendations = [...prioritizedSongs, ...otherSongs];
    }
    
    // Add URLs for previews (in real app would come from music API)
    return recommendations.map(song => ({
      ...song,
      previewUrl: `https://example.com/preview/${song.id}`,
      coverUrl: `https://example.com/covers/${song.id}.jpg`,
    }));
  } catch (error) {
    console.error('Error getting music recommendations:', error);
    throw new Error('Failed to get music recommendations');
  }
};

/**
 * Get song details by ID
 * @param {string} songId - The song ID
 * @returns {Object} Song details
 */
const getSongDetails = async (songId) => {
  try {
    // In a real app, we would call a music API here
    // For now, we'll search our mock database
    for (const emotion in mockMusicDatabase) {
      const song = mockMusicDatabase[emotion].find(s => s.id === songId);
      if (song) {
        return {
          ...song,
          previewUrl: `https://example.com/preview/${song.id}`,
          coverUrl: `https://example.com/covers/${song.id}.jpg`,
        };
      }
    }
    throw new Error('Song not found');
  } catch (error) {
    console.error('Error getting song details:', error);
    throw new Error('Failed to get song details');
  }
};

module.exports = {
  getRecommendationsByEmotion,
  getSongDetails,
};
