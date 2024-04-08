import { authOptions } from "@/configurations/auth"
import { getServerSession } from "next-auth/next"
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';


export default async function Playground() {
    const session = await getServerSession(authOptions)
    var id: any;

    let copy: any = session?.user.id;

    let new_session_arr: any = copy.split("-");

    let new_session_id: String = "";

    for (var i = 0; i < new_session_arr.length; i++) {
      new_session_id += new_session_arr[i];
    }
    
    if (new_session_id) {
       id = parseInt(String(new_session_id), 16);
    } else {
      id = null
    }

    
    
  //   return <FormControl>
  //   <InputLabel htmlFor="user_message">Message</InputLabel>
  //   <Input id="my-input" aria-describedby="my-helper-text" />
  //   <FormHelperText id="my-helper-text">parseInt(String(session?.user.id))Remember the art of the deal!</FormHelperText>
  // </FormControl>
    return <p>{id}    {new_session_id}</p>

}