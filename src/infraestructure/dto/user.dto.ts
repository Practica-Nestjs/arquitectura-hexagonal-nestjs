import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserDoman } from 'src/domain/models/user.model';

export class UserDTO extends UserDoman {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
