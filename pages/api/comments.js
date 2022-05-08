import comments from "../../comments.json";
export default function handler(req,res){
    return res.status(200).json(comments)
}