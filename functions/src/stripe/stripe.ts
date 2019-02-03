import * as functions from 'firebase-functions';
import { attachSource, getUID, getVal, catchErrors } from './helpers';



export const stripeSetSource = functions.https.onCall( async (data, context) => {
    console.log(data)
    console.log(context)
    const uid = getUID(context);
    const source = getVal(data, 'source');

    return await catchErrors(attachSource(uid, source.id));
});

export const stripeCreateCharge = functions.https.onCall( async (data, context) => {
    // const uid = getUID(context);
    // const source = getVal(data, 'source');
    // return await attachSource(uid, source.id);
});
  
  

export const stripeTester = functions.https.onRequest( async (req, res) => {
    console.log(0, req.body.id);
    console.log(1, req.body);
    const data = JSON.parse(req.body);
    // const uid = getUID(context);
    const id = getVal(data, 'id');
    console.log(2, id)
    const foo = await attachSource('J0i4om7xSgULlXYVoQqP121Fnhv2', id);
    console.log(3, foo)
    res.send(foo);

});
  