import { Request, Response, Router } from 'express';

const usuarioRoutes = Router();

usuarioRoutes.post('/', ( req: Request, res: Response ) => {
    const post = req.body ();
    
    console.log(post);

    return res.json({
        ok: true,
        mensaje: post
    });
});

usuarioRoutes.post('/', (req: Request, res: Response) => {
    const body = req.body;

    return res.status(200).json({
        ok: true,
        body: body
    });
});

export default usuarioRoutes;