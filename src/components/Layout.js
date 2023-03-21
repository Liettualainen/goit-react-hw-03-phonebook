import styled from "styled-components";

export const Layout = styled.div`
        // height: 270vh;
        display: flex;
        flex-direction: column;
        gap: 10px;
        // gap: 40px;
        justify-content: center;
        align-items: left;
        font-size: 30px;
        // font-size: 40px;
        color: #010101; 
        padding-left: 20px;
`;

export const Label = styled.div`
  display: flex;
//   justify-content: center;
        // background-color: #e7e7e7;
        //  border: 1px solid black;
         border-radius: 4px;
        width: 100%;
        padding: 10px 0px;
`;

export const PhonebookFrame = styled.div`
      border: 1px solid black;
         border-radius: 4px;
         margin: 20px 0px;
         width: 40%;
         padding:0px 10px 10px ;


        `;

export const InputStyle = styled.div`

        width: 100px;
        font-size: 30px;

`;
export const AddButton = styled.button`
   font-size: 20px;
   margin-top: 30px;
          padding: 5px 10px;
        background-color: white;
          border: 1px solid black;
         border-radius: 4px;
`;

export const FilterBlock = styled.div`
 display: inline-flex;
    justify-content: space-between;
     gap: 20px;
        margin: 10px;
        background-color: white; 
`;

export const DeleteButton = styled.button`
   font-size: 20px;
        background-color: white;
          border: 1px solid black;
         border-radius: 4px;
         
       
`;
export const Headerletter = styled.div`
font-size: 40px;
font-weight: bold;
padding-bottom: 10px;
`;

export const PhonebookSectionletter = styled.div`
font-size: 30px;
// font-weight: bold;
padding-top: 20px;
padding-bottom: 10px;
`;

export const Sectionletter = styled.div`
font-size: 30px;
font-weight: bold;
padding-bottom: 10px;
`;

export const FilterStyle = styled.div`
 display: flex;
 flex-direction: column;
 flex-basis: 0;
 gap: 20px;
`;

export const FilterStyleinput = styled.input`
  width: 300px;
`;