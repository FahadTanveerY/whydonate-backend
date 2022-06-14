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

    // const res = await (await fetch(`https://api.mollie.com/v2/payments/tr_Pd6prr4ZVC`,{
    //     method: 'GET',
    //     headers:{
    //         Authorization: 'Bearer test_jtggpgvcAGTufGj96j6WBSBVPJKrw8'
    //     }
    // })).json()
    const res = await (await fetch(`https://api.mollie.com/v2/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer test_jtggpgvcAGTufGj96j6WBSBVPJKrw8'
        },
        body: JSON.stringify({
            amount:body.amount,
            description: body.description,
            webhookUrl: "https://webshop.example.org/order/12345/",
            redirectUrl: "https://webshop.example.org/payments/webhook/",
            metadata: body.metadata,
            locale: body.locale
        })
    })).json()
    return new Response(JSON.stringify({
        res
    }),{
        headers: { 'content-type': 'application/json' }
    })
} catch (error) {
    return new Response(
        JSON.stringify({
            status: 'failed 45',
            handler: 'donation/handler/create_order',
            time: new Date(),
            error: error
        }), {
        headers: { 'content-type': 'application/json' }
        }
    )
    
}


}  