var amqp = require("amqplib/callback_api");
const getMicroWord = require("../MicroWord/MicroWord.js");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = "rpc_queue";

    channel.assertQueue(queue, {
      durable: false,
    });
    channel.prefetch(1);
    console.log(" Awaiting a request");
    channel.consume(queue, async function reply(msg) {
      var n = parseInt(msg.content.toString());

      if (n == 1) {
        console.log(" Grabbing a word...");
        const data = await getMicroWord.getMicroWord();
        channel.sendToQueue(
          msg.properties.replyTo,
          Buffer.from(data.toString()),
          {
            correlationId: msg.properties.correlationId,
          }
        );
        channel.ack(msg);
        console.log(" Word sent.")
      }
    });
  });
});
