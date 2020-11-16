const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UncleCommand extends BaseCommand {
  constructor() {
    super('uncle', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('https://cdn.discordapp.com/attachments/755437062337069166/777839199462096926/tweet.png');
  }
}