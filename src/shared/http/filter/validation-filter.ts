import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BusinessException } from "../exception/business-execption";


@Catch(BusinessException)
export class ValidationFilter implements ExceptionFilter {
    catch(exception: BusinessException, host: ArgumentsHost): any {
        const context = host.switchToHttp();
        const response = context.getResponse();
        return response.status(400).json({
            statusCode: 400,
            error: exception.message
        })
    }
}