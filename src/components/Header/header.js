import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top:5px;
    background-color: #333;
    top:0;
    position: fixed;
    top:0;
`;

export const Info = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width: 99vw;

    .Logo{
        width:70px;
        margin-left: 15px;
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
    padding: 0px 10px 0px 0px;
    color: #ee7711;
    

    button{
        background-color:#3E3D39;
        border: none;
        color: #fff;
        padding: 15px 32px 15px  32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        transform: scale(0.9);
        transition: all 0.5s ease;
        border-radius:10px;
        cursor: pointer;
    }
    
    button:hover{
        transform: scale(1);
    }
    
`;