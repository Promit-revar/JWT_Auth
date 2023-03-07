const redis = require('redis');
exports.insertIntoRedis = async(token) => {
  const config = {
    socket: {
      host: "redis",
      port: 6379,
    },
  };
  const client = redis.createClient(config);
  await client.connect()
  await client.set('token', token);
  const value = await client.get('token');
  await client.disconnect()
  return value;
}