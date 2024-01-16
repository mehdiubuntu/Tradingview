import { NextRequest, NextResponse } from "next/server"
import Prisma from "@/prisma/client";

interface props {
    id :number ;
}

export  function GET (request :NextRequest , {id}:props){
    
    // const userInfo = await  Prisma.user.findUnique({
    //     where : { id:3 }
    // })
    return NextResponse.json({id:1} , {status:201})
}