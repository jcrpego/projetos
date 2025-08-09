import {Router, Request, Response} from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.status(202).json({ok:true});

});

export{router}

