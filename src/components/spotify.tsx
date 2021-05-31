import { useLanyard } from "use-lanyard";
import { Tooltip } from "react-tippy";
import { Consts } from "../misc/consts";

export const Spotify = (): JSX.Element | null => {
  const { data: lanyard } = useLanyard(Consts.discordID);

  if (!lanyard || !lanyard.spotify) return null;

  return (
    <div className='spotify'>
      <Tooltip
        animateFill={false}
        position='top-start'
        duration={250}
        title={lanyard.spotify.artist + " - " + lanyard.spotify.song}
      >
        <img
          src={lanyard.spotify.album_art_url}
          alt={lanyard.spotify.song}
          className='spotifyAlbumArt'
          draggable='false'
        />
      </Tooltip>
      <div className='spotifyDetails'>
        <span className='listeningNow'>listening now...</span>
        <h1 className='spotifySong'>{lanyard.spotify.song}</h1>
        <span className='spotifyArtist'>{lanyard.spotify.artist}</span>
      </div>
    </div>
  );
};
