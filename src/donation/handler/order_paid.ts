export const order_paid=async(req:Request, res:Response):Promise<Response> => {
    try {
        // Store data in donation_order table
        const body:any = await req.json();
        let id:any=req
        id=id.params.id
        console.log(id)
        return new Response(JSON.stringify({
            body
        }),{
            headers: { 'content-type': 'application/json' }
        })
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 'failed',
                handler: 'donation/handler/update_order_status',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
        
    }
    
}