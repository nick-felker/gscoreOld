import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, selectAuthFlag, HamburgerAdditionalMenu } from '../../';
import UserHamburgerMenu from "../userHamburgerMenu";
import Link from "next/link";

function Header(){
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    }, [window.innerWidth])

    const userBlockFlag = useAppSelector(selectAuthFlag);

    return(
        <>
            <ExternalWrapper>
                <Link href={'./'}>
                    <Logo src="./images/logo.svg"/>
                </Link>
                
                {userBlockFlag === true ? <UserHamburgerMenu/> : null}
                
            </ExternalWrapper>  
        </>
    )
}

const Tekst = styled.p`
    color: white;
`


const Logo = styled.img`
    cursor: pointer;
    @media(max-width: 720px){
        width: 140px;
    }
    @media(max-width: 500px){
        width: 100px;
    }
`

const ExternalWrapper = styled.div`
    padding: 40px 91px 40px 86px;
    background-color: #181818;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 720px){
        padding: 40px 50px 40px 50px;
    }
    @media(max-width: 500px){
        padding: 30px 40px 40px 35px;
    }
`




export default Header;