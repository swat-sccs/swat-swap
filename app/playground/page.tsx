import { authOptions } from "@/configurations/auth"
import { getServerSession } from "next-auth/next"

export default async function Playground() {
    const session = await getServerSession(authOptions)
    return <p>{JSON.stringify(session, null, 2)}</p>
}