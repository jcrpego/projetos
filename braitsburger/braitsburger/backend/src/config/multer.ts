import crypto from 'crypto';
import multer from 'multer';

import {extname, resolve} from 'path';

export defalt{
    upload(folder:string){
        return{
            storage: multer.diskStorage({
                destination: resolve(__dirname,'..','..', folder),
                filename: (request, file, calback) => {
                    const fileHash= crypto.randomBytes(16).toString("hex");
                    const filename= `${fileHeash}-${file.originalname}`

                    return calback(null,fileName);
                }
            })
        }
    }
}