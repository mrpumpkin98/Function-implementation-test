import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./Boardwrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.div`
  width: 764px;
  height: 648px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 40px;
  padding-left: 40px;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Writer = styled.input`
  width: 210px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  background: #ffffff;
  /* #E5E5E5_border */

  border: 1px solid #e5e5e5;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 1px solid #6400ff;
  }
`;

export const Password = styled.input`
  width: 210px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  margin-right: 50px;
  background: #ffffff;
  /* #E5E5E5_border */

  border: 1px solid #e5e5e5;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 1px solid #6400ff;
  }
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 40px;
  margin-left: 40px;
`;

export const InputWrapper = styled.div`
  padding-top: 20px;
  display: flex;
`;

export const Subject = styled.input`
  width: 604px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  background: #ffffff;
  /* #E5E5E5_border */

  border: 1px solid #e5e5e5;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 1px solid #6400ff;
  }
`;

export const Contents = styled.textarea`
  width: 604px;
  height: 240px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  background: #ffffff;
  /* #E5E5E5_border */

  border: 1px solid #e5e5e5;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 1px solid #6400ff;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  :focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-family: "SCDream4";
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  :focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-family: "SCDream4";
  :focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 20px;
  display: flex;
`;

export const UploadButton = styled.button`
  width: 80px;
  height: 80px;
  background: #fafafa;
  border: 1px dashed #e5e5e5;
  border-radius: 5px;
  margin-right: 24px;
  outline: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
  font-family: "SCDream4";
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 120px;
`;

export const CancelButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #999999;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  font-family: "SCDream4";
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid #dbdbdb;
  font-size: 12px;
  margin-left: 12px;
  margin-right: 12px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${(props: ISubmitButtonProps) =>
    props.Active ? "#6400FF;" : ""};
  font-family: "SCDream4";
  color: ${(props: ISubmitButtonProps) => (props.Active ? "#f7f8fa;" : " ")};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
