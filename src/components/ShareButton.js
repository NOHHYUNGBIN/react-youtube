import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components";
import styles from "./ShareButton.module.css";
import ShareKakao from "../util/ShareKakao";
import { message } from "antd";
import WatchLaterButton from "./WatchLaterButton";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  margin-bottom: 16px;
`;
const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
`;

export default function ShareButton({ title, defaultUrl, description, video }) {
  const currentUrl = window.location.href;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const [messageApi, contextHolder] = message.useMessage();
  const copyIsURL = () => {
    messageApi.open({
      content: "링크를 클립보드에 복사하였습니다.",
      className: "custom-class",
      style: {
        marginTop: "60vh",
      },
    });
  };

  return (
    <div className="border-b p-5 flex flex-col items-end">
      <GridContainer>
        <button
          className={styles.toggle}
          onClick={() => ShareKakao(currentUrl, title, defaultUrl, description)}
        >
          <img src="../../img/kakao.webp" alt="Kakao Logo" />
        </button>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon
            className={styles.toggle}
            size={48}
            round={true}
            borderRadius={24}
          ></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon
            className={styles.toggle}
            size={48}
            round={true}
            borderRadius={24}
          ></TwitterIcon>
        </TwitterShareButton>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton className={styles.toggle} onClick={copyIsURL}>
            URL
          </URLShareButton>
        </CopyToClipboard>
      </GridContainer>
      <WatchLaterButton video={video} />
      {contextHolder}
    </div>
  );
}
