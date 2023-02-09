const redis = require('redis');
exports.insertIntoRedis = async(token) => {
  const client = redis.createClient();
  await client.connect()
  await client.set('token', token);
  const value = await client.get('token');
  await client.disconnect()
  
  return value;
}