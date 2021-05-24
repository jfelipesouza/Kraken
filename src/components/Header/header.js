import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    padding-top:5px;
    background-color: #333;
`;

export const Info = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width: 99vw;

    .Logo{
        width:70px;
        
    }
`;

export const List = styled.ul`
    display:flex;
    flex-direction: row;

`;

export const Item = styled.li`
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    border-radius: 10px 10px 10px 10px;
    color: #ee7711;
    background-color:#222;
    transform: scale(0.9);
    transition: all 0.5s ease;
    
    :hover{
        transform: scale(1);
    }

`;