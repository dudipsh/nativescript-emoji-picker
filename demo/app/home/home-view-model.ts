import { Observable } from "@nativescript/core";

const  frame = require("ui/frame");

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }
    public onButtonTap(args): void {
        const page = frame.Frame.topmost().currentPage;
        page.getViewById("myEmojiPicker").togglePopup();
    }

    public onCopyBtnTap(args): void {
        const page = frame.Frame.topmost().currentPage;
        page.getViewById("myEmojiLabel").text = page.getViewById("myEmojiPicker").text;
        return;
    }
}
