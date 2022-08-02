import "./TweetsFrame.css";
import verificationIcon from "../../icons/verification.svg";
import messageIcon from "../../icons/message.svg";
import repostIcon from "../../icons/repost.svg";
import likeIcon from "../../icons/like.svg";
import saveIcon from "../../icons/save.svg";

const TweetsFrame = ({
  author,
  content,
  image,
  date,
  comments = 482,
  reposts = 146,
  likes = 887,
}) => {
  const { name, photo, nickname } = author;

  return (
    <div className="tweet">
      <div class="avatar-header">
        <div className="avatar">
          <img src={photo} alt={name} className="avatar-pic" />
        </div>
        <div className="contact-info">
          <h3 className="avatar-name">{name}</h3>
          <img src={verificationIcon} className="verification-icon" />
          <span className="avatar-nickname">{nickname}</span>
          <span className="date">{date}</span>
        </div>
      </div>
      <div>
        <p className="text">{content}</p>
        <img src={image} alt="Ray" className="post-pic" />
      </div>
      <div class="avatar-footer">
        <div class="avatar-icon">
          <img src={messageIcon} alt="#" className="message-icon" />
          <span className="message-num">{comments}</span>
        </div>

        <div class="avatar-icon">
          <img src={repostIcon} alt="#" className="repost-icon" />
          <span className="message-num">{reposts}</span>
        </div>

        <div class="avatar-icon">
          <img src={likeIcon} alt="#" className="like-icon" />
          <span className="message-num">{likes}</span>
        </div>

        <img src={saveIcon} alt="#" className="save-icon" />
      </div>
    </div>
  );
};

export default TweetsFrame;
