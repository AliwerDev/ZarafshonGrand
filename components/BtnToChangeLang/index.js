import { Link } from "@mui/material";

export default function ToChangeLang ({text , active}) {
    return <Link sx={{textAlign : "center" ,transition : "0.2s" , "&:hover" : {color : !active && "#aa8876"}  , px : 2 , py : 1, textDecoration : "none" , cursor : "pointer", color : active ? "#fff" : "#201D1D" ,borderRadius : 4, backgroundColor :  active ? "#aa8876" : "none" , }}>
            {text}
    </Link>
}