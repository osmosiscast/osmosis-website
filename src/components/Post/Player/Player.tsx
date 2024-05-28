import AudioPlayer from "react-h5-audio-player";
import React from "react";
import "react-h5-audio-player/lib/styles.css";

interface Props {
  url: string;
}

const Player: React.FC<Props> = ({ url }: Props) => <AudioPlayer src={url} />;

export default Player;
