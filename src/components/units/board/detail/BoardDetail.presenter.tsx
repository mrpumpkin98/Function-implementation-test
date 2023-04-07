import * as B from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Button, Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <div>
      <B.Wrapper>
        <B.CardWrapper>
          <B.Header>
            <B.Title>{props.data?.fetchBoard?.title}</B.Title>
          </B.Header>
          <B.TitleIconWriterTie>
            <B.TitleIcon src="/images/Vector (2).png"></B.TitleIcon>
            <B.Writer>{props.data?.fetchBoard?.writer}</B.Writer>
          </B.TitleIconWriterTie>
          <B.Body style={{ width: "700px", height: "150px", overflow: "auto" }}>
            <B.Contents>{props.data?.fetchBoard?.contents}</B.Contents>
          </B.Body>
        </B.CardWrapper>
        <B.BottomWrapper>
          <B.Button onClick={props.onClickBoard}>글목록</B.Button>
          <B.Button onClick={props.onClickUpdate}>수정</B.Button>
          <B.Button onClick={props.onClickDelete}>삭제</B.Button>
        </B.BottomWrapper>
      </B.Wrapper>
    </div>
  );
}
