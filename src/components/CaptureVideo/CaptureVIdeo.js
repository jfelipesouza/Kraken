import styled from 'styled-components';


export const Container = styled.div`
    width:100vw;
    height: 100vh;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`;

export const SelectItem = styled.div`
    display: flex;
    flex-direction: row;
    padding:0px;

    .url{
        border-radius: 5px 0px 0px 5px;
        height: 3rem ;
        width:30rem;
        border-color: #ee750d;
        border-width: 2px;
        border-right-color:#333;
        font-size:16px;
        padding-left:9px;
    }

    .Search{
        border-radius: 0px 105px 105px 0px;
        color: white;
        background-color:#333;
        border-width: 0px;
        padding-left: 35px;
        padding-right: 35px;
        cursor: pointer;
        font-size:16pt;

    }
    .Search:hover{
        color:orange;
    }


`;
