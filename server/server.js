// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/cors"));

fastify.addContentTypeParser(
  ["application/x-www-form-urlencoded", "multipart/form-data"],
  { parseAs: "string" },
  fastify.defaultTextParser
);

fastify.removeContentTypeParser([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
]);

fastify.register(require("@fastify/multipart"));

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.post("/upload", async (request, reply) => {
  console.log(request);
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
