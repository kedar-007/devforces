import { Router } from "express";

const router = Router();

router.get("/active",(req,res) => {
    const {offset,page} = req.query;

})
router.get("/active",(req,res) => {
    const {offset,page} = req.query;

})

//return all the subchallenges and their time
router.get("/:contestId",(req,res) => {
    const contestId = req.params.contestId;
});


router.get("/:contestId/:challengeId",(req,res) => {
    const contestId = req.params.contestId;
    const challengeId = req.params.contestId;
});


router.get("/leaderboard/:contestId",(req,res) => {
    const contestId = req.params.contestId;
});


router.post("/submit/:challengeId",(req,res) => {
    //have rate limiting
    //max 20 submission per problem
    //forward request to gpt
    // store the response sorted in the db
    const challengeId = req.params.challengeId;
});
export default router;