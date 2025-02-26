import React from 'react';
import axios from 'axios'; // Import axios at the top
import { ListGroup } from 'react-bootstrap'; // Import Bootstrap components

const HistoryPage = () => {
  const [tracks, setTracks] = React.useState([]);
  const accessToken = 'your_access_token_here'; // Replace with actual access token

  const getRecentlyPlayedTracks = async (accessToken) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: 50, // Maximum number of tracks to return
        },
      });

      return response.data.items;
    } catch (error) {
      console.error('Error fetching recently played tracks:', error);
      return []; // Return an empty array in case of error
    }
  };

  React.useEffect(() => {
    const fetchTracks = async () => {
      const recentlyPlayedTracks = await getRecentlyPlayedTracks(accessToken);
      setTracks(recentlyPlayedTracks);
    };

    fetchTracks();
  }, [accessToken]);

  return (
    <div className="container mt-5">
      <h1>Recently Played Tracks</h1>
      <ListGroup>
        {tracks.map((item) => (
          <ListGroup.Item key={item.played_at} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.track.name}</strong>
              <br />
              {item.track.artists.map((artist) => artist.name).join(', ')}
            </div>
            <small>Played at: {new Date(item.played_at).toLocaleString()}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default HistoryPage;
