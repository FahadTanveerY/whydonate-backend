import {Router} from 'itty-router';
import {create_quote} from '../services/wise/create_quote';
import {create_recipient} from '../services/wise/create_recipient';
import {create_transfer} from '../services/wise/create_transfer';
import { get_recipients } from '../services/wise/get_recipients';
import {fund_transfer} from '../services/wise/fund_transfer';
import {create_balance_account} from '../services/wise/multi_currency_account/create_balance_account';
import {multi_currency_create_quote} from '../services/wise/multi_currency_account/create_quote';
import {transfer_between_balance} from '../services/wise/multi_currency_account/transfer_between_balance';
import {get_multi_currency_accounts} from '../services/wise/multi_currency_account/get_multi_currency_accounts';
import { processing } from '../services/wise/transfer_simulation/processing';
import { bounced_back } from '../services/wise/transfer_simulation/bounced_back';
import { funds_converted } from '../services/wise/transfer_simulation/funds_converted';
import { funds_refunded } from '../services/wise/transfer_simulation/funds_refunded';
import { outgoing_payment_sent } from '../services/wise/transfer_simulation/outgoing_payment_send';
import { transfer_delivery_time } from '../services/wise/transfer_delivery_time';
import { transfer_status } from '../services/wise/transfer_status';

export function wise_route(router: Router<Request,{}>){
    return(
        router
        .post('/api/wise/create_quote',create_quote)
        .post('/api/wise/create_recipient',create_recipient)
        .post('/api/wise/create_transfer',create_transfer)
        .post('/api/wise/get_recipients',get_recipients)
        .post('/api/wise/fund_transfer',fund_transfer)
        .post('/api/wise/multi_currency_account/create_balance_account',create_balance_account)
        .post('/api/wise/multi_currency_account/create_quote',multi_currency_create_quote)
        .post('/api/wise/multi_currency_account/get_multi_currency_accounts',get_multi_currency_accounts)
        .post('/api/wise/multi_currency_account/transfer_balance',transfer_between_balance)
        .get('/api/wise/transfer_simulation/processing/:id',processing)
        .get('/api/wise/transfer_simulation/bounced_back/:id',bounced_back)
        .get('/api/wise/transfer_simulation/funds_converted/:id',funds_converted)
        .get('/api/wise/transfer_simulation/funds_refunded/:id',funds_refunded)
        .get('/api/wise/transfer_simulation/outgoing_payment_sent/:id',outgoing_payment_sent)
        .get('/api/wise/transfer_delivery_time/:id',transfer_delivery_time)
        .get('/api/wise/transfer_status/:id',transfer_status)


    )

}
 
 
function outgoing_payment_send(arg0: string, outgoing_payment_send: any) {
    throw new Error('Function not implemented.');
}

