import { Component } from "react";
import TweetsFrame from "./TweetsFrame";
import { tweetsData } from "../../constants/tweets-data";
export default class TweetsPage extends Component {
  render() {
    return (
      <div className="tweets-container">
        {tweetsData.map((tweet) => (
          <TweetsFrame key={tweet.id} data={tweet} />
        ))}
      </div>
    );
  }
}
