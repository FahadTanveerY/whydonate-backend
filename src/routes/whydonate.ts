import {user_registeration_validator} from '../../middleware/accounts/user_registeration_validator';
import {Router} from 'itty-router';
import { registeration } from '../handlers/whydonate/registeration';
import { bank_account_details } from '../handlers/whydonate/bank_account_details';
import { create_order } from '../handlers/whydonate/create_order';
import { update_order_status } from '../handlers/whydonate/update_order_status';
export function whydonate_routes(router: Router<Request,{}>){
    return(
        router
            .post('/api/whydonate/registeration',registeration)
            .post('/api/whydonate/bank_account_details',bank_account_details)
            .post('/api/whydonate/order/order_create',create_order)
            .post('/api/whydonate/order/status/:id',update_order_status)
    )
}
