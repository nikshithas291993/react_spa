import { Box, Slide } from "@mui/material";
import { MessageText, PromotionContainer } from "../../public/styles/promotion";
import { useEffect, useState } from "react";

const messages = [
    "20% off on your first order",
    "Diwali sale starts now, Visit our store",
    "Please like and subscribe"
];

export default function Promotions(){
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);
    useEffect(() =>{
        setTimeout(()=>{
            setShow(false);
        },3000)
        const intervalId = setInterval(() =>{
            setMessageIndex(i => (i + 1 ) % messages.length )
            setShow(true);
            setTimeout(()=>{
                setShow(false);
            },3000)
        },4000);
        return ()=>{
            clearInterval(intervalId)
        }
    },[]);
    return(
        <PromotionContainer>
            <Slide direction={show ? "left" : "right" } in={show}
                timeout={{ enter:500, exit:100 }}
            >
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionContainer>
    )
}