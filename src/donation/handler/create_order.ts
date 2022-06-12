export const create_order=async(req:Request, res:Response):Promise<Response> => {
try {
    // Call the mollie api for payment
    // Store data in donation_order table
    const body:Request = await req.json();
    return new Response(JSON.stringify({
        body
    }),{
        headers: { 'content-type': 'application/json' }
    })
} catch (error) {
    return new Response(
        JSON.stringify({
            status: 'failed',
            handler: 'donation/handler/create_order',
            time: new Date(),
            error: error
        }), {
        headers: { 'content-type': 'application/json' }
        }
    )
    
}


}