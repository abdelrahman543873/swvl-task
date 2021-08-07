import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from '../helpers/env';
@Module({
  imports: [
    MongooseModule.forRoot(
      // done this way to be able to connect in case of testing
      // docker and real runtime without docker
      process.env.MONGO_DB || global['__MONGO_URI__'] || env.LOCAL_MONGO_DB,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        connectionFactory: connection => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          connection.plugin(require('mongoose-aggregate-paginate-v2'));
          return connection;
        },
      },
    ),
  ],
})
export class DataBaseModule {}
