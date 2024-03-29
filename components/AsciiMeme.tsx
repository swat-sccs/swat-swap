'use client'

import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";

export default function AsciiMeme() {
    const { data: session, status } = useSession();

    if(status === "authenticated") {
        let name: string = "";
        if (session.user.email) {
            name = session.user.email.split("@")[0];
        }

        const len = name.length; //? handles if name is undefined
        let ascii_total: number = 0; //total of ascii
        for (let i: number = 0; i < len; i++) {
            const curr_ascii: number = name.charCodeAt(i);
            ascii_total += curr_ascii;
        }
        return(
            <>
                <Typography variant='h3'>Your special number: {ascii_total}</Typography>
            </>
        )
    }
    return(<></>)
}