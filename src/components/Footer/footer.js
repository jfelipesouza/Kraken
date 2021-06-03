import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #333;
    bottom: 0;
    position: absolute;
    display: flex;
    


`;

export const Main = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width:100vw;
    
    
    .left{
        margin-left: 15px;
        img#logo{
            width: 8rem;
        }
    }
    
    .right{
        margin-right: 15px;
        
        span{
                
            a{
                
                text-decoration:none;
                color:#f8f8f8;
                font-size: 2rem;
            
            }
        }    
    }

    .center{
        display: flex;
        flex-direction: row;

        .text{
            margin-top: 5px;
            margin-bottom: 0px;
            color:#f8f8f8;
            font-size:1.1rem;
        }
    }
`;
