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
