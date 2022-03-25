import { Box, List, ListItem } from "@mui/material";
import { useState } from "react";

export default function MenuLink ({text}) {
    let [width , setWidth] =useState("0");

    return <ListItem onMouseOver={()=> setWidth("100%")} onMouseLeave={()=> setWidth("0")} component="li" sx={{textAlign : "center",px : 2 , py : 1, display : "flex" , flexDirection : "column" ,  cursor : "pointer"  }}>
            {text}
            <Box sx={{ transition : "0.3s", backgroundColor : "#DCB95D"  , width : width , height : "2px" , mt :1  ,}}>

            </Box>
    </ListItem>
}