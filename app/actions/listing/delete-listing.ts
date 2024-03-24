"use server";
import prisma from "@/prisma/prisma";
import { redirect } from "next/navigation";

export async function deleteListing(listingId: number) {
    await prisma.listing.delete({
        where: {
            id: listingId
        }, 
    })
    redirect("/")
}