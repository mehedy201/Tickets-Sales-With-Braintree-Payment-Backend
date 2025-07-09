const express = require('express');
const ICGHC = require('../../../controlar/v1/ICGHC/makePayment.controlar');
const router = express.Router();

// Get Braintree Client Token____________________________________
router.get('/client-token', ICGHC.getBraintreeToken);
router.post('/checkout', ICGHC.getICGHCpaymentsFromEventTickets);

// Purcher API Route____________________________________
router.get('/purcher-data', ICGHC.getPurcherData);
router.get('/purcher/:id', ICGHC.getSinglePurcherDetails);
router.get('/download-single-purcher-details/:id', ICGHC.downloadPurcherDetails);
router.get('/download-Full-purcher-Excel', ICGHC.downloadFullPurcherExcel);

// Attendees API Route__________________________________
router.get('/attendees-data', ICGHC.getAttendeesData);
router.get('/download-attendees-tickets/:id', ICGHC.downloadAttendeesTickets);
router.get('/download-Full-Attendees-Excel', ICGHC.downloadFullAttendeesExcel);


module.exports = router;