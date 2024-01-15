import express from "express";
import {
  getSupplier,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "../controllers/SupplierController.js";

const router = express.Router();

router.get("/supplier", getSupplier);
router.get("/supplier/:id", getSupplierById);
router.post("/supplier", createSupplier);
router.patch("/supplier/:id", updateSupplier);
router.delete("/supplier/:id", deleteSupplier);

export default router;
