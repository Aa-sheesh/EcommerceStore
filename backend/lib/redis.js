import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config();

const redis = new Redis(process.env.UPSTASH_REDIS_URI);
await redis.set('foo', 'bar');