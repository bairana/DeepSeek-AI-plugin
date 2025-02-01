import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-81e45384d6e54c50920ae494dbf47ae7'
});
export class test extends plugin {
  constructor() {
    super({
      name: 'test',
      dsc: 'test',
      event: 'message',
      priority: -250,
      rule: [
        {
          reg: "^#?testai",
          fnc: 'test'
        }
      ]
    })
  }

  async test(e) {
    let mesg = this.raw_message
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: 'mesg' }],
      model: "deepseek-chat",
    });
    e.reply(completion.data.choices[0].message.content)
  }
}