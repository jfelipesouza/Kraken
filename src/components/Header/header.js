import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    top:5px;
    
`;

export const Info = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    border-bottom: 1.8px solid #ace;
    width: 99vw;



    .Logo{
        width:70px;
        margin-left: 25px;
    }
`;

export const Item = styled.li`
    height:30px;
    background-color: #ace;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    margin-right: 25px;
    border-radius: 10px 10px 10px 10px;
    color: #ee7711;

    :hover{
        background-color: #000;
    
    }

`;