import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "acecursor" is now active!');

    const disposable = vscode.commands.registerCommand(
        'acecursor.leftparenthesis',
        () => {
            const { activeTextEditor } = vscode.window;
            if (activeTextEditor) {
                // const newSelections: vscode.Selection[] = [];
                // activeTextEditor.selections = newSelections;
                // create a selection now?
                console.log(activeTextEditor.document.getText());
            }
            vscode.window.showInformationMessage('Hello World from AceCursor!');
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
