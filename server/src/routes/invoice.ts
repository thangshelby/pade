const Express = require("express");
const {
  createInvoice,
  getAllInvoices,
} = require("../controllers/invoiceController");

const invoiceRouter = Express.Router();

invoiceRouter.post("/create_invoice",createInvoice);
invoiceRouter.get("/get_all_invoices/",getAllInvoices);

module.exports = invoiceRouter;
