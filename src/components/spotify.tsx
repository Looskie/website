import { useLanyard } from "use-lanyard";
import { Consts } from "../misc/consts";

export const Spotify = () => {
  const { data: lanyard } = useLanyard(Consts.discordID);

  if (!lanyard) return null;

  return (
    <div className='spotify'>
      <img
        src={lanyard.spotify?.album_art_url}
        alt={lanyard.spotify?.song}
        className='spotifyAlbumArt'
      />
      <div className='spotifyDetails'>
        <span className='listeningNow'>listening now...</span>
        <h1 className='spotifySong'>{lanyard.spotify?.song}</h1>
        <span className='spotifyArtist'>{lanyard.spotify?.artist}</span>
      </div>
    </div>
  );
};
