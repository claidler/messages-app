import { Request, Response, NextFunction } from 'express';

export const sessionCheck = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if (req.session.userId) {
		next();
	} else {
		res.sendStatus(401);
	}
};
