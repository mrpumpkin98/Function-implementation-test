import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  CancelButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error,
  AddressModal,
  AddressSearchInput,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./Boardwrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      {props.isOpen && (
        <AddressModal visible={true} onOk={props.Ok} onCancel={props.Cancel}>
          <AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </AddressModal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "게시물 수정" : "새 글 작성 "} </Title>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>이미지</Label>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              onChange={props.onChangeWriter}
              value={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer}
              ref={props.inputRef}
            />
            {/* <Error>{props.writerError}</Error> */}
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" onChange={props.onChangePassword} />
          </InputWrapper>
        </WriterWrapper>
        <ButtonWrapper>
          <SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            Active={props.isEdit ? true : props.Active}
          >
            {props.isEdit ? "수정" : "등록"}
          </SubmitButton>
          <CancelButton onClick={props.onClickCancel}>취소</CancelButton>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}
