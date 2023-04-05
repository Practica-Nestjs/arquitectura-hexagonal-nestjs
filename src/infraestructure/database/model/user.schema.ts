import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserDoman } from 'src/domain/models/user.model';
import { v4 as uuid } from 'uuid';

@Schema({ collection: 'Users', versionKey: false })
export class User extends UserDoman {
  @Prop({ type: String, unique: true, index: true, default: uuid })
  uid: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  email: string;
  @Prop({ type: String, required: true })
  password: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
