import { Component } from "react";
import TweetsFrame from "./TweetsFrame";
import {
  ANAKIN_IMAGE,
  CHEWBACCA_AVATAR,
  CHEWBACCA_IMAGE,
  LEIA_AVATAR,
  LEIA_IMAGE,
  RAY_IMAGE,
} from "../../constants/const-img";

export default class TweetsPage extends Component {
  render() {
    return (
      <div>
        <TweetsFrame
          author={{
            name: "Chewbacca",
            photo: CHEWBACCA_AVATAR,
            nickname: "@WookieeSpeaks",
          }}
          content="How I currently feel in lockdown"
          image={CHEWBACCA_IMAGE}
          date={"22 лют."}
        />

        <TweetsFrame
          author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 лют."}
        />

        <TweetsFrame
          author={{
            name: "Princess Leia Organa",
            photo: LEIA_AVATAR,
            nickname: "@Leia_Organa",
          }}
          content="Rey is such a nice girl. #EpisodeIX #StarWarsCelebration #TheRiseOfSkywalker"
          image={LEIA_IMAGE}
          date={"12 кв."}
        />
      </div>
    );
  }
}
