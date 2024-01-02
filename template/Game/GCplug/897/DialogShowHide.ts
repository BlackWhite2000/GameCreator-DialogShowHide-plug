module OpenAPI {
  /**
   * 对话框显示隐藏
   */
  export class DialogShowHide {
    /**
     * 当前版本号
     */
    static Version = 1.0
    /**
     * 是否安装
     */
    static Installed = true

    /**
     * 功能类型
     */
    static Type = 1
  }
}
module CommandExecute {

  export function customCommand_15001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_15001): void {
    const v = p.isVar ? Game.player.variable.getSwitch(p.dialogVar) : p.dialog
    const gameDialog = GameDialog.lastDialog
    if (gameDialog) {
      if (v === 0)
        GUI_Manager.hideDialogUI()

      else
        GUI_Manager.reShowDialogUI()
    }
  }
}
