import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// import { use } from "react";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found!!" });
    }

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Inavlid Credentials" });
    }

    const token = jwt.sign({id: user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: '2d'});

    return res.status(200).json({success:true, message:"Login Successfull", token, user:{id: user._id, name: user.name, email: user.email, role:user.role}})
  } catch (e) {
    return res.status(500).json({success:false, message:"Internal Server Error"});
  }
};

export {login};
