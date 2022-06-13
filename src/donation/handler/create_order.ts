export const create_order=async(req:Request, res:Response):Promise<Response> => {
try {
    const body:any = await req.json();
    // Call the mollie api for payment
    // const res:any=await(await fetch(`https://whydonate_backend.whydonate.workers.dev/mollie/createpayment`,{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body:JSON.stringify({
    //         amount: {
    //             currency:body.currency_code,
    //             value:body.amount,
    //       },
    //       description:body.description,
    //       webhookUrl:"https://webshop.example.org/order/12345/",
    //       redirectUrl:"https://webshop.example.org/payments/webhook/",
    //       metadata: {
    //         order_id: "12345"
    //   },
    //   locale: "nl_NL"

    //     })

    // })).json();
    // Store data in donation_order table

    const res=await fetch(`https://whydonate_backend.whydonate.workers.dev/mollie/getpayment/tr_Pd6prr4ZVC`,{
        headers: {
                     'Content-Type': 'application/json',
               },
    })
    return new Response(JSON.stringify({
        res
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