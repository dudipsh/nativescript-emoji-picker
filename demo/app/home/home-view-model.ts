import { Frame, Observable } from "@nativescript/core";
import { EmojiLabel, EmojiPicker } from "../../../src/emoji-picker";

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }
    public onButtonTap(args): void {
        const page = Frame.topmost().currentPage;
        (page.getViewById("myEmojiPicker") as EmojiPicker).togglePopup();
    }

    public onCopyBtnTap(args): void {
        const page = Frame.topmost().currentPage;
        (page.getViewById("myEmojiLabel") as EmojiLabel).text = (page.getViewById("myEmojiPicker") as EmojiPicker).text;
        return;
    }
}
