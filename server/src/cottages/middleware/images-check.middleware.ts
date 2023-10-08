import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ImagesCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const images = req.body.images;
    console.log('Я мидлвеар', images);

    if (!images || images.length === 0) {
      throw new BadRequestException('Отсутствует изображение. Middleware');
    }

    next();
  }
}

// import {
//     Injectable,
//     NestMiddleware,
//     BadRequestException,
//   } from '@nestjs/common';
//   import { Request, Response, NextFunction } from 'express';

//   interface MulterRequest extends Request {
//     file: any;
//     files: any[];
//   }

//   @Injectable()
//   export class ImagesCheckMiddleware implements NestMiddleware {
//     use(req: MulterRequest, res: Response, next: NextFunction) {
//       console.log('Uploaded File:', req.file);

//       if (!req.file) {
//         throw new BadRequestException('Отсутствует изображение. Middleware');
//       }

//       next();
//     }
//   }
