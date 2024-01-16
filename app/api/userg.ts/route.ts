import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"


export async function GET (request :NextRequest){
   const body = await request.json()
   console.log(body)
   const  userid = parseInt(body)
    const user = await prisma.user.findUnique({where:{
       id:userid,
    }})
   
   return NextResponse.json(user?.gmail)
}