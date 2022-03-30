import styled from "styled-components";


export const Container = styled.section`
    header{
        max-width: 1280px;
        display: flex;
        justify-content: space-between;
        margin: 30px auto 0px auto;
        height: 100px;
        h4{
            font-size: 1.375rem;
            font-weight: bold;
            text-align: center;
            display: flex;
            align-self: center;
            line-height: 30px;
        }

        img{
            max-width: 193px;
            width: 100%;
        }
    }

   

    .h4planoTrabalho{
        margin-top: 60px;
        text-align: center;
        font-size: 1.25rem;
    }

    @media (max-width: 900px) {
        header h4{
            font-size: 1.125rem;
        }

        img{
            max-width: 150px;
            width: 100%;
        }
        .h4planoTrabalho{
            font-size: 1.125rem;
        }
    }

    @media (max-width: 690px) {
        h4{
            text-align: center;
            margin: 0 auto;
        }
        img{
            display: none;
        }
    }

    @media (max-width: 450px) {
       header{
            h4{
                font-size: 1rem;
            }
       }
        img{
            display: none;
        }

        .h4planoTrabalho{
            font-size: 1rem;
        }
    }
`

