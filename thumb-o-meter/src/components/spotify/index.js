import React, { useEffect, useState } from "react";
import request from "request";
import { config } from "../../config";
import style from "./spotify.module.css";

function Spotify() {
  const id = config.spotifyID;
  const secret = config.spotifySecret;
  const [url, setUrl] = useState("");
  const [playlistIndex, setPlaylistIndex] = useState(
    Math.floor(Math.random() * 50)
  );
  const [genre, setGenre] = useState("workout");

  useEffect(() => {
    async function getTunes() {
      const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization:
            "Basic " + Buffer.from(id + ":" + secret).toString("base64"),
        },
        form: {
          grant_type: "client_credentials",
        },
        json: true,
      };

      request.post(authOptions, async function(error, response, body) {
        if (!error && response.statusCode === 200) {
          const token = body.access_token;
          const options = {
            url: `https://api.spotify.com/v1/browse/categories/${genre}/playlists?country=US&limit=50`,
            headers: {
              Authorization: "Bearer " + token,
            },
            json: true,
          };
          request.get(options, async function(error, response, body) {
            setUrl(
              `https://open.spotify.com/embed/playlist/0UwAkxtttibftN6SFpJ5L5`
            );
          });
        }
      });
    }
    getTunes();
  }, [playlistIndex, genre, id, secret]);

  return (
    <main className={style.container}>
      <div className={style.players}>
        {url ? (
          <iframe
            title="playlist"
            src={url}
            width="300"
            height="700"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </main>
  );
}

export default Spotify;
