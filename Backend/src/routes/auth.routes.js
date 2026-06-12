const express = require("express")
const authController = require("../controllers/auth.controller")
const router = express.Router()
const authMiddleware = require("../middleware/auth.middleware")


router.post("/register",authController.registercontroller)
router.post("/login",authController.logincontroller)

router.get("/get-me", authMiddleware.authUser, authController.getme)
router.get("/logout" , authController.logoutcontroller)

module.exports = router