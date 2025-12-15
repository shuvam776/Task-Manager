import { Router } from "express";
import { signInUser, signUpUser } from "../controllers/authController.js";
const router = Router()

router.route('/').post(signUpUser)
router.route('signInUser').post(signInUser)

export default router