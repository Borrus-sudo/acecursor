import * as vscode from 'vscode';

function goto(
    text: string,
    src: number,
    dest: string[],
    direction: number
): number {
    let start = src;
    if (direction == -1) {
        while (--start >= 0) {
            if (dest.includes(text.charAt(start))) {
                return start;
            }
        }
    } else if (direction == 1) {
        while (++start < text.length) {
            if (dest.includes(text.charAt(start))) {
                return start;
            }
        }
    }
    return src;
}

function moveToBracket(
    editor: vscode.TextEditor,
    dest: string[],
    direction: number
) {
    const text = editor.document.getText();
    const currPos = editor.selection.active;
    const src = editor.document.offsetAt(currPos);
    const newOffset = goto(text, src, dest, direction);
    const newPos = editor.document.positionAt(newOffset);
    const newActive = new vscode.Selection(newPos, newPos);
    editor.selection = newActive;
    editor.revealRange(newActive, vscode.TextEditorRevealType.Default);
}

export function activate(context: vscode.ExtensionContext) {
    const disposable1 = vscode.commands.registerCommand(
        'acecursor.JumpToBraceUp',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                console.log('Action Called');
                moveToBracket(editor, ['{', '}'], -1);
            }
        }
    );

    const disposable2 = vscode.commands.registerCommand(
        'acecursor.JumpToBraceDown',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                console.log('Action Called');
                moveToBracket(editor, ['{', '}'], 1);
            }
        }
    );

    context.subscriptions.push(disposable1);
}

export function deactivate() {}
