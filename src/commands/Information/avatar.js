const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Avatar extends Command {
    constructor() {
        super('avatar', {
            aliases: ['avatar', 'av'],
            channel: 'guild',
            category: 'Information',
            description: {
                content: 'Displays avatar of provided user or the command executor.',
                usage: '[command]',
                examples: ['Xynox#0117']
            },
            args: [
                {
                    id: 'member',
                    type: 'member',
                    default: message => message.member
                }
            ],
            typing: true
        })
    }

    async exec(message, args) {

        let msg = await message.channel.send('<a:setting:754636981459353701> Generating avatar...');

        const member = args.member;

        const embed = new MessageEmbed()
            .setImage(member.user.displayAvatarURL({ size: 4096, dynamic: true }))
            .setColor("#00ff9e")
            .setTitle(`**Avatar of ${member.user.tag} **`)
            .setFooter(`Thanks for using ${this.client.user.username}`)
            .setDescription("[**Avatar URL link**](" + member.user.displayAvatarURL({ dynamic: true }) + ")");

        message.channel.send(embed);

        msg.delete();

    }
}

module.exports = Avatar;