const SSMSModel = require("../database/MyModel");
import { Request, Response } from "express";
const invoiceModel = new SSMSModel();

export const createInvoice = async (req: Request, res: Response) => {
  const {
    userId,
    placeId,
    totalHour,
    startHour,  
    endHour,
    createdAt,
    totalPrice,
    paymentMethod,
    paymentStatus,
    carType,
  } = req.body;
  

  try {
    const invoice = await invoiceModel.Create({
      tableName: "Invoice",
      columns: `UserId, PlaceId, TotalHour, StartHour, EndHour, CreatedAt, TotalPrice, PaymentMethod, PaymentStatus, CarType`,
      values: `N'${userId}', ${placeId},${totalHour}, '${startHour}', '${endHour}', '${createdAt}',${totalPrice}, N'${paymentMethod}', N'${paymentStatus}', N'${carType}'`,
    });

    res.status(200).json({ invoice , message: "Create invoice successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllInvoices = async (req: Request, res: Response) => {
    // console.log("get all invoices");
    // const userId = req.params.userId;
    // console.log(userId);
  console.log("get all invoices");
  const userId = 'user_2nrVYZsusR9atLNCArUFzMzrXRR'
  try {
    const invoices = await invoiceModel.Read({
      tableName: "Invoice",
      columns: "*",
      filter: `WHERE UserId = '${userId}'`,
    });

    
    res.status(200).json({ invoices });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
