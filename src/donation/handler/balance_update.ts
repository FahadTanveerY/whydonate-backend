export const balance_update=async(req:Request, res:Response):Promise<Response> => {
    try {
        // Store data in donation_order table
        const body:any = await req.json();
        let id:any=req
        id=id.params.id
        console.log(id)
        //update the balance the balance in dataabase
        return new Response(JSON.stringify({
            body
        }),{
            headers: { 'content-type': 'application/json' }
        })
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 'failed',
                handler: 'donation/handler/balance_update',
                time: new Date(),
                error: error
            }), {
            headers: { 'content-type': 'application/json' }
            }
        )
        
    }
    
}