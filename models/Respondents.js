import mongoose from "mongoose";

const RespondentSchema = new mongoose.Schema({
  name: String,
  company: String,
  department: String,
  jobTitle: String,
  taxID: String,
  email: String,
  address: String,
  phone: String,
});

export default mongoose.model("Respondents", RespondentSchema);
