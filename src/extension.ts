import * as vscode from 'vscode';

const CLOSING_PAIR_MAP = (char: string) => {
    if (char == '(') return ')';
    else if (char == '{') return '}';
    else if (char == ')') return ')';
    else if (char == '}') return '{';
    else return char;
};

function goto(
    text: string,
    src: number,
    dest: string,
    direction: number
): number {
    if (direction == -1) {
        while (--src >= 0) {
            if (text.charAt(src) == dest) {
                return src;
            }
        }
    } else if (direction == 1) {
        while (++src < text.length) {
            if (text.charAt(src) == dest) {
                return src;
            }
        }
    } else if (direction == 0) {
        let [src1, src2] = [src, src];
        while (--src1 >= 0) {
            if (text.charAt(src1) == dest) {
                break;
            }
        }
        while (++src2 < text.length) {
            if (text.charAt(src2) == dest) {
                break;
            }
        }
        if (Math.abs(src - src1) > Math.abs(src - src2)) {
            return src2;
        } else {
            return src1;
        }
    }
    return src;
}

function moveToBracket(
    editor: vscode.TextEditor,
    dest: string,
    direction: number
) {
    const text = editor.document.getText();
    const currPos = editor.selection.active;

    const src = editor.document.offsetAt(currPos);
    const curr = text.charAt(src);
    const corresponding_pair = CLOSING_PAIR_MAP(dest);

    switch (curr) {
        case corresponding_pair:
            // jump to the corresponding pair
            vscode.commands.executeCommand('editor.action.jumpToBracket');
            break;
        default:
            const newOffset = goto(text, src, dest, direction);
            const newPos = editor.document.positionAt(newOffset);
            const newActive = new vscode.Selection(newPos, newPos);
            editor.selection = newActive;
    }
}

export function activate(context: vscode.ExtensionContext) {
    const disposable1 = vscode.commands.registerCommand(
        'acecursor.JumpToOpeningBraceUp',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '{', -1);
            }
        }
    );

    const disposable2 = vscode.commands.registerCommand(
        'acecursor.JumpToOpeningBraceDown',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '{', 1);
            }
        }
    );

    const disposable3 = vscode.commands.registerCommand(
        'acecursor.JumpToOpeningBrace',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '{', 0);
            }
        }
    );

    const disposable4 = vscode.commands.registerCommand(
        'acecursor.JumpToOpeningParenthesisUp',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '(', -1);
            }
        }
    );

    const disposable5 = vscode.commands.registerCommand(
        'acecursor.JumpToOpeningParenthesisDown',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '(', 1);
            }
        }
    );

    const disposable6 = vscode.commands.registerCommand(
        'acecursor.JumpToOpeningParenthesis',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '(', 0);
            }
        }
    );

    const disposable7 = vscode.commands.registerCommand(
        'acecursor.JumpToClosingBraceUp',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '}', -1);
            }
        }
    );

    const disposable8 = vscode.commands.registerCommand(
        'acecursor.JumpToClosingBraceDown',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '}', 1);
            }
        }
    );

    const disposable9 = vscode.commands.registerCommand(
        'acecursor.JumpToClosingBrace',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, '}', 0);
            }
        }
    );

    const disposable10 = vscode.commands.registerCommand(
        'acecursor.JumpToClosingParenthesisUp',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, ')', -1);
            }
        }
    );

    const disposable11 = vscode.commands.registerCommand(
        'acecursor.JumpToClosingParenthesisDown',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, ')', 1);
            }
        }
    );

    const disposable12 = vscode.commands.registerCommand(
        'acecursor.JumpToClosingParenthesis',
        () => {
            const { activeTextEditor: editor } = vscode.window;
            if (editor) {
                moveToBracket(editor, ')', 0);
            }
        }
    );

    context.subscriptions.push(
        disposable1,
        disposable2,
        disposable3,
        disposable4,
        disposable5,
        disposable6,
        disposable7,
        disposable8,
        disposable9,
        disposable10,
        disposable11,
        disposable12
    );
}

export function deactivate() {}
