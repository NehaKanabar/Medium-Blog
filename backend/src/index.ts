import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import {cors} from 'hono/cors';
const app = new Hono<{
  Bindings : {
    DATABASE_URL :string;
    JWT_SECRET : string;
  }
}>()
app.use('/*',cors());
app.route("api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);




export default app

//postgres://avnadmin:AVNS_tSyE9-L72Xzlp3SWvKR@pg-fb31a01-nehakanabar99-4316.g.aivencloud.com:28896/defaultdb?sslmode=require

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTFiYWEwMjAtNzE2Ny00ZWZlLWEzY2UtODUzM2RiYWRhMTBlIiwidGVuYW50X2lkIjoiNzU2MTE4Y2UzN2FlZWJjMzU2ODRjOWVmMDQzMTJlZjY1MGRiNzdjZmI4ODFhNmNiOWZlOWU5MjZjMjA4ZjYxOCIsImludGVybmFsX3NlY3JldCI6IjBiMzM3MTRlLTgzOWUtNDI5Yi1iODI5LTM4ZGQyM2Q3ZDA0ZSJ9.mpS2Wip8Fv7R9bFsACQ3QHyFx0nSifZLHZ8YMsZiPnA"