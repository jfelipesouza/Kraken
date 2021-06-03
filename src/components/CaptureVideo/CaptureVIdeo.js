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
        border-radius: 15px 0px 0px 15px;
        height: 3rem ;
        width:30rem;
        border-color: #464646;
        border-width: 2px;
        border-right-color:#ee750d;
        font-size:16px;
        padding-left:9px;
        padding-right:9px;
    }

    .Search{
        border-radius: 0px 105px 105px 0px;
        color: white;
        background-color:#ee750d;
        border-width: 0px;
        padding-left: 35px;
        padding-right: 35px;
        cursor: pointer;
        font-size:16pt;
        left:-2px;
        position:relative;
    }
    .Search:hover{
        color:black;
    }


`;

export const Info = styled.div`
    display:flex;
    flex-direction: column;
    .Kraken{
        height: 200px;
    }

`;

