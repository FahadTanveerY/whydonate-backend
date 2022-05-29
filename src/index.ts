import {Router} from 'itty-router';
import {wise_route} from './routes/wise'
const router = Router();


wise_route(router);

addEventListener('fetch', (event:any) => {
  event.respondWith(router.handle(event.request))
})
