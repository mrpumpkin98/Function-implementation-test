import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 200px;
  height: 708px;
  margin-left: 20px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const TitleTie = styled.div`
  font-weight: 800;
  display: flex;
  margin-top: 30px;
  margin-left: 20px;
`;

export const TitleIcon = styled.img`
  margin-right: 6px;
`;

export const Title = styled.div``;

export const Line = styled.div`
  width: 160px;
  height: 1px;
  background: #e5e5e5;
  margin-top: 30px;
  margin-left: 20px;
`;

export const Fragment = styled.div`
  margin-top: 30px;
  display: flex;
  margin-left: 20px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: #999999;

  :hover {
    color: black;
    font-weight: 700;
  }
`;

export const MenuIcon = styled.img`
  margin-right: 10px;
`;
