import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  EnvironmentOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div``;

export const CardWrapper = styled.div`
  width: 764px;
  height: 388px;
  margin-top: 100px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const Header = styled.div`
  margin: 20px 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 830px;
  margin-right: 30px;
`;

export const Environment = styled(EnvironmentOutlined)`
  font-size: 20px;
  color: gold;
  cursor: pointer;
  margin-right: 10px;
`;

export const PaperClip = styled(PaperClipOutlined)`
  font-size: 20px;
  color: gold;
  cursor: pointer;
`;

export const Writer = styled.div`
  font-weight: 600;
  font-family: "SCDream4";
`;

export const CreatedAt = styled.div`
  margin-left: 2px;
  color: #bdbdbd;
  font-family: "SCDream4";
`;

export const Body = styled.div`
  display: flex;
  margin: 10px 30px;
`;

export const TitleIconWriterTie = styled.div`
  display: flex;
  margin: 30px;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
  margin-top: 50px;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const LikeTie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`;

export const Like = styled(LikeOutlined)`
  font-size: 25px;
  color: gold;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const DisLike = styled(DislikeOutlined)`
  font-size: 25px;
  color: #bdbdbd;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const LikeNumber = styled.div`
  color: gold;
  font-family: "SCDream4";
`;

export const DisLikeNumber = styled.div`
  color: #bdbdbd;
  font-family: "SCDream4";
`;

export const DisLikeTie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

export const TitleIcon = styled.img`
  font-weight: 700;
  font-size: 18px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const Contents = styled.div``;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
  background: #999999;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  margin: 0px 8px;
  cursor: pointer;
  font-family: "SCDream4";
  :hover {
    background: #6400ff;
    color: #f7f8fa;
  }
`;
