import {user_registeration_validator} from '../../middleware/accounts/user_registeration_validator';
import {Router} from 'itty-router';
import { registeration } from '../account/handler/registeration';
import { bank_account_details } from '../account/handler/bank_account_details';
import { create_order } from '../donation/handler/create_order';
import { order_paid } from '../donation/handler/order_paid';
import { generate_transaction } from '../donation/handler/generate_transaction';
import { balance_update } from '../donation/handler/balance_update';
import { order_approved } from '../donation/handler/order_approved';
import { transaction_approved } from '../donation/handler/transaction_approved';
import { approved_balance_update } from '../donation/handler/approved_balance_update';
export function whydonate_routes(router: Router<Request,{}>){
    return(
        router
            .post('/api/whydonate/registeration',registeration)
            .post('/api/whydonate/bank_account_details',bank_account_details)
            .post('/api/whydonate/order/order_create',create_order)
            .post('/api/whydonate/order/status/:id',order_paid)
            .post('/api/whydonate/order/transaction/:id',generate_transaction)
            .post('/api/whydonate/order/balance_update/:id',balance_update)
            .post('/api/whydonate/order/order_approved/:id',order_approved)
            .post('/api/whydonate/order/transaction_approved/:id',transaction_approved)
            .post('/api/whydonate/order/approved_balance_update/:id',approved_balance_update)

    )
}
