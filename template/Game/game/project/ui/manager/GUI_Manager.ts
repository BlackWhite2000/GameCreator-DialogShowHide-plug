/**
 * UI界面管理器
 * Created by 黑暗之神KDS on 2022-02-25 08:59:52.
 */
class GUI_Manager {
    //------------------------------------------------------------------------------------------------------
    //  对话框功能扩展
    //------------------------------------------------------------------------------------------------------
    /**
     * 隐藏对话框界面
     * @return [boolean] 是否成功
     */
    static hideDialogUI(): boolean {
        let gameDialog = GameDialog.lastDialog;
        if (gameDialog && gameDialog.visible) {
            let dialogBtnsUI = GameUI.get(3);
            // -- 对话功能按钮在最前方显示的话才允许隐藏，因为可能打开了其他的界面
            if (dialogBtnsUI != Game.layer.uiLayer.getChildAt(Game.layer.uiLayer.numChildren - 1)) {
                return;
            }
            gameDialog.visible = false;
            if (dialogBtnsUI) dialogBtnsUI.visible = false;
            return true;
        }
        return false;
    }
    /**
     * 重新显示隐藏的对话框界面
     * @return [boolean] 是否成功
     */
    static reShowDialogUI(): boolean {
        let gameDialog = GameDialog.lastDialog;
        if (gameDialog && !gameDialog.visible) {
            let dialogBtnsUI = GameUI.get(3);
            // -- 对话功能按钮在最前方显示的话才允许重新显示，因为可能打开了其他的界面
            if (dialogBtnsUI != Game.layer.uiLayer.getChildAt(Game.layer.uiLayer.numChildren - 1)) {
                return;
            }
            gameDialog.visible = true;
            if (dialogBtnsUI) dialogBtnsUI.visible = true;
            return true;
        }
        return false;
    }
    /**
     * 隐藏或显示对话框界面
     */
    static hideOrShowDialogUI(): void {
        let gameDialog = GameDialog.lastDialog;
        if (gameDialog) {
            if (gameDialog.visible) {
                GUI_Manager.hideDialogUI();
            }
            else {
                GUI_Manager.reShowDialogUI();
            }
        }
    }
}