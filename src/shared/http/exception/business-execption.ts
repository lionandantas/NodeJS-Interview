import { BadRequestException } from '@nestjs/common';

export class BusinessException extends BadRequestException {
    constructor(public message: string) {
        super();
    }
}