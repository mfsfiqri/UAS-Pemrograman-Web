import express from "express";
import {
  getPurchase,
  getPurchaseById,
  createPurchase,
  updatePurchase,
  deletePurchase,
} from "../controllers/PurchaseController.js";

const router = express.Router();

router.get("/purchase", getPurchase);
router.get("/purchase/:id", getPurchaseById);
router.post("/purchase", createPurchase);
router.patch("/purchase/:id", updatePurchase);
router.delete("/purchase/:id", deletePurchase);

export default router;
