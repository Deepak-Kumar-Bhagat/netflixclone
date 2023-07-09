import dbConnect from "@/app/utils/dbconnect";
import user from "@/app/models/usermodel";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        console.log(body);
        
        await dbConnect();

        await user.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}