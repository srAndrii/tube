import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthDto {
    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'No less than 6 char!'
    })
    @IsString()
    password: string

}