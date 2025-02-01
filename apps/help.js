export class help extends plugin {
  constructor() {
    super({
      name: 'DS帮助',
      dsc: '本插件的帮助',
      event: 'message',
      priority: -250,
      rule: [
        {
          reg: "^#?DS帮助",
          fnc: 'DShelp'
        }
      ]
    })
  }

}